import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, IsNull } from 'typeorm';
import { Pporders } from '../entities/entities/Pporders.entity';
import { Pporderlines2 } from '../entities/entities/Pporderlines2.entity';
import { WorkingHoursUtil } from './working-hours.util';
import { PpordersService } from 'src/pporders/pporders.service';
import { ProdOrdersView } from '../entities/views/PanelProductionOrdersExt2.view';
import dayjs from 'dayjs';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { OrderLineCompletion } from './dto/order-line-completion.type';
import { offTimeMap } from './helpers/offtime-map';
dayjs.extend(utc);
dayjs.extend(timezone);

// Respect configured timezone (fallback to Europe/Athens)
const tz = process.env.TIME_ZONE || 'Europe/Athens';
(dayjs.tz ? dayjs.tz.setDefault(tz) : void 0);

enum OrderStatus {
  InProgress = 2,
  Scheduled = 14,
  Finished = 4,
}

@Injectable()
export class ProductionPlanningService {
  private readonly logger = new Logger(ProductionPlanningService.name);

  // Derive "last line change" timestamps from DB snapshots (no in-memory state).

  constructor(
    @InjectRepository(Pporders)
    private readonly ordersRepo: Repository<Pporders>,
    @InjectRepository(Pporderlines2)
    private readonly linesRepo: Repository<Pporderlines2>,
    private readonly whUtil: WorkingHoursUtil,
    private readonly ppordersService: PpordersService,
  ) {}

  // Sum minutes of all order lines for an order, using ProdOrdersView.time
  private async getOrderDurationMinutes(pporderno: string): Promise<number> {
    const lines = await this.linesRepo
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder',
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code',
      )
      .where('line.pporderno = :pporderno', { pporderno })
      .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .getMany();

    return lines.reduce((sum, l) => sum + (l.prodOrdersView?.time ?? 0), 0);
  }

  // Called when a line status changes:
  // - If switching orders, stop the previous active order(s) at their last-line-change timestamp.
  // - If first started line of its order, start the order at this line's change time and estimate finish.
  // - If all non-canceled lines are finished, finish the order at the last-line-change time.
  async handleLineStatusChange(line: Pporderlines2): Promise<void> {
    try {
      this.logger.log(`handleLineStatusChange for line ${line.id}`);
      if (!line.pporderno) return;
      if (line.status !== OrderStatus.Finished) return;

      // 1) Derive the "line change" time using latest finished line update from DB
      const currentLastChange = await this.getLastFinishedLineChangeAt(line.pporderno);
      const rawChangeAt = currentLastChange ? dayjs(currentLastChange).tz(tz) : dayjs().tz(tz);
      const changeAt = dayjs(
        await this.whUtil.ensureStartWithinWorkingHours(rawChangeAt.toDate()),
      );

      // 2) Load this order
      const order = await this.ordersRepo.findOne({ where: { pporderno: line.pporderno } });
      if (!order) return;

      // 3) End any OTHER active order(s) at THEIR last recorded line-change time
      // (Context switch: we started a line for a different order)
      const otherActiveOrders = await this.ordersRepo.find({
        where: { status: OrderStatus.InProgress as any, pporderno: Not(line.pporderno) as any },
      });

      for (const active of otherActiveOrders) {
        const snapshot = await this.getOrderLinesCompletionSnapshot(active.pporderno!);
        const isSingleLine = snapshot.length === 1;
        const lastTouch = await this.getLastFinishedLineChangeAt(active.pporderno!);
        const effectiveFinish = isSingleLine ? changeAt.toDate() : (lastTouch ?? changeAt.toDate());
        this.logger.log(
          `Auto-finishing active order ${active.pporderno} at its last line change: ${dayjs(effectiveFinish).toISOString()}`,
        );

        active.finishDateDatetime = effectiveFinish;
        active.estFinishDate = effectiveFinish;
        active.status = OrderStatus.Finished as any;
        await this.ordersRepo.save(active);

        // Reschedule scheduled orders from that finish time
        await this.rescheduleScheduledOrdersFrom(effectiveFinish, active.panelcode);
      }

      // 4) Check all non-canceled lines of THIS order
      const lines = await this.getPporderlines(line.pporderno);
      const hasLines = lines.length > 0;
      const allFinished = hasLines && lines.every(l => (l.status as any) === OrderStatus.Finished);

      // Special case: an order with exactly one line that just became status 4.
      // Start the order (if not already started), but do NOT finish it even though allFinished is true.
      if (lines.length === 1) {
        if (order.status !== OrderStatus.InProgress) {
          const start = changeAt;
          const durationMin = await this.getOrderDurationMinutes(order.pporderno!);
          const end = dayjs(
            await this.whUtil.addWorkingMinutesDynamic(start.toDate(), durationMin),
          );

          this.logger.log(
            `Single-line order ${order.pporderno}: starting at ${start.toISOString()} (dur ${durationMin}m -> ${end.toISOString()})`,
          );

          order.startDateDatetime = start.toDate();
          order.estStartDate = start.toDate();
          order.estFinishDate = end.toDate();
          order.status = OrderStatus.InProgress as any;
          await this.ordersRepo.save(order);

          await this.rescheduleScheduledOrdersFrom(end.toDate(), order.panelcode);
          this.logger.log(`Rescheduled after starting single-line order ${order.pporderno}`);
        }
        // Explicitly skip finishing for single-line orders at this point
        return;
      }

      if (allFinished) {
        // Finish THIS order at its own last line-change time
        const lastTouch = (await this.getLastFinishedLineChangeAt(line.pporderno)) ?? changeAt.toDate();
        this.logger.log(`Finishing order ${order.pporderno} at ${dayjs(lastTouch).toISOString()}`);

        order.finishDateDatetime = lastTouch;
        order.estFinishDate = lastTouch;
        order.status = OrderStatus.Finished as any;
        await this.ordersRepo.save(order);

        await this.rescheduleScheduledOrdersFrom(lastTouch, order.panelcode);
        this.logger.log(`Rescheduled after finishing ${order.pporderno}`);
        return;
      }

      // 5) If THIS order not started yet, start it at this line's change time and estimate finish
      if (order.status !== OrderStatus.InProgress) {
        const start = changeAt;
        const durationMin = await this.getOrderDurationMinutes(order.pporderno!);
        const end = dayjs(
          await this.whUtil.addWorkingMinutesDynamic(start.toDate(), durationMin),
        );

        // Off-time: from last finished order end -> current order start
        const latestFinished = await this.ordersRepo.findOne({
          where: { finishDateDatetime: Not(IsNull()), pporderno: Not(order.pporderno) as any },
          order: { finishDateDatetime: 'DESC' },
        });
        if (latestFinished?.finishDateDatetime) {
          const offStart = dayjs(latestFinished.finishDateDatetime);
          const offEnd = start;
          if (offEnd.isAfter(offStart)) {
            const offMinutes = await this.whUtil.workingMinutesBetween(
              offStart.toDate(),
              offEnd.toDate(),
            );
            order.previd = latestFinished.id as any;
            order.prevpanelcode = latestFinished.panelcode ?? null as any;
            order.offtimestartdate = offStart.toDate();
            order.offtimeenddate = offEnd.toDate();
            order.offtimeduration = offMinutes as any;
          }
        }

        this.logger.log(
          `Starting order ${order.pporderno} at ${start.tz().toDate()} (dur ${durationMin}m -> ${end.tz().toDate()} last finished order: ${latestFinished?.pporderno ?? 'N/A'})`,
        );

        order.startDateDatetime = start.toDate();
        order.estStartDate = start.toDate();
        order.estFinishDate = end.toDate();
        order.status = OrderStatus.InProgress as any;
        await this.ordersRepo.save(order);

        await this.rescheduleScheduledOrdersFrom(end.toDate(), order.panelcode);
        this.logger.log(`Rescheduled after starting ${order.pporderno}`);
      }
    } catch (err: any) {
      this.logger.error(`handleLineStatusChange failed: ${err?.message || err}`);
    }
  }

  private async rescheduleScheduledOrdersFrom(
  startFrom: Date,
  prevPanelCode?: string | null,
): Promise<void> {
  this.logger.log(
    `Rescheduling scheduled orders starting from ${dayjs(startFrom).toISOString()} (prevPanelCode=${prevPanelCode ?? 'N/A'})`,
  );

  const scheduled = await this.ordersRepo.find({
    where: { status: OrderStatus.Scheduled as any },
    order: { estStartDate: 'ASC' },
  });

  this.logger.log(`Found ${scheduled.length} scheduled orders to reschedule`);

  let currentStart = dayjs(startFrom);
  for (const o of scheduled) {
    if (!o.pporderno) {
      this.logger.warn(`Skipping scheduled order with missing pporderno (id=${o.id})`);
      continue;
    }

    // Derive spacer from map using previous panel code -> current panel code
    const currPanelCode = o.panelcode ?? undefined;
    let spacerMin = 0;
    if (prevPanelCode && currPanelCode) {
      spacerMin = offTimeMap[prevPanelCode.replace(/-\d+$/, '')]?.[currPanelCode.replace(/-\d+$/, '')] ?? 0;
    }
    this.logger.log(
      `Order ${o.pporderno}: prevPanel=${prevPanelCode.replace(/-\d+$/, '') ?? 'N/A'}, currPanel=${currPanelCode.replace(/-\d+$/, '') ?? 'N/A'}, spacerMin=${spacerMin}`,
    );

    // Persist offtime fields for this order using calculated spacer
    if (spacerMin > 0) {
      o.prevpanelcode = prevPanelCode as any;
      o.offtimestartdate = currentStart.tz(tz).toDate();
      const afterOff = await this.whUtil.addWorkingMinutesDynamic(
        currentStart.tz(tz).toDate(),
        spacerMin,
      );
      o.offtimeenddate = afterOff;
      o.offtimeduration = spacerMin as any;

      this.logger.log(
        `Order ${o.pporderno}: adding offtime ${spacerMin}min from ${o.offtimestartdate.toISOString()} to ${dayjs(
          o.offtimeenddate,
        ).toISOString()}`,
      );

      await this.ordersRepo.save(o);
      currentStart = dayjs(afterOff);
    }

    // Compute new start/finish
    const minutes = await this.getOrderDurationMinutes(o.pporderno);
    const actualStart = dayjs(currentStart);
    const finish = dayjs(
      await this.whUtil.addWorkingMinutesDynamic(actualStart.toDate(), minutes),
    );

    o.estStartDate = actualStart.toDate();
    o.estFinishDate = finish.toDate();

    this.logger.log(
      `Order ${o.pporderno}: estStartDate=${o.estStartDate.toISOString()}, estFinishDate=${o.estFinishDate.toISOString()}, duration=${minutes}min`,
    );

    await this.ordersRepo.save(o);

    // Update prev panel code for next iteration
    prevPanelCode = currPanelCode ?? prevPanelCode;
    currentStart = finish;
  }

  this.logger.log(`Finished rescheduling ${scheduled.length} scheduled orders`);
}


  // Start an order now: set start/end estimates, compute and store offtime from last finished order, and reschedule
  async startOrder(pporderno: string): Promise<Pporders | null> {
    const order = await this.ordersRepo.findOne({ where: { pporderno } });
    if (!order) return null;

    // Compute production duration from lines
    const totalMinutes = await this.getOrderDurationMinutes(pporderno);

    // Start time adjusted to working hours
    const now = dayjs('2025-09-16T08:00:00').tz(tz); // Testing fixed date
    const jobStart = dayjs(
      await this.whUtil.ensureStartWithinWorkingHours(now.toDate()),
    );

    // Find last finished order (excluding this order)
    const finished = await this.ordersRepo.find({
      where: { status: OrderStatus.Finished as any },
      order: { finishDateDatetime: 'ASC' },
    });
    const lastFinished = finished
      .filter((o) => o.pporderno !== pporderno && !!o.finishDateDatetime)
      .slice(-1)[0];

    if (lastFinished?.finishDateDatetime) {
      const offStart = dayjs(lastFinished.finishDateDatetime);
      if (offStart.isBefore(jobStart)) {
        const offtimeMinutes = await this.whUtil.workingMinutesBetween(
          offStart.toDate(),
          jobStart.toDate(),
        );
        order.offtimestartdate = offStart.toDate();
        order.offtimeenddate = jobStart.toDate();
        order.offtimeduration = offtimeMinutes as any;
        order.previd = lastFinished.id as any;
        order.prevpanelcode = lastFinished.panelcode ?? null as any;
      }
    }

    // Compute estimated finish
    const jobEnd = dayjs(
      await this.whUtil.addWorkingMinutesDynamic(jobStart.toDate(), totalMinutes),
    );

    // Update order status and dates
    order.startDateDatetime = jobStart.toDate();
    order.estStartDate = jobStart.toDate();
    order.finishDateDatetime = jobEnd.toDate();
    order.estFinishDate = jobEnd.toDate();
    order.status = OrderStatus.InProgress as any;
    const saved = await this.ordersRepo.save(order);

    // Reschedule subsequent orders from the end of this one
    await this.rescheduleScheduledOrdersFrom(jobEnd.toDate(), order.panelcode);

    return saved;
  }

  // Delegate to PpordersService
  async getPporderlines(pporderno: string): Promise<Pporderlines2[]> {
    return this.ppordersService.getPporderlines(pporderno);
  }

  // Snapshot of all order lines for a pporderno with completion info
  async getOrderLinesCompletionSnapshot(pporderno: string): Promise<OrderLineCompletion[]> {
    const lines = await this.linesRepo
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder',
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code',
      )
      .where('line.pporderno = :pporderno', { pporderno })
      .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .orderBy('line.upDate', 'ASC')
      .getMany();

    return lines.map((l) => ({
      id: l.id,
      pporderno: l.pporderno ?? undefined,
      custporderno: l.custporderno ?? undefined,
      status: l.status ?? undefined,
      updatedAt: l.upDate ?? null,
      time: l.prodOrdersView?.time ?? null,
      ttm: l.prodOrdersView?.ttm ?? null,
      isFinished: (l.status as any) === 4,
    }));
  }
  
  // Helper: latest finished line update timestamp for an order
  private async getLastFinishedLineChangeAt(pporderno: string): Promise<Date | null> {
    const snapshot = await this.getOrderLinesCompletionSnapshot(pporderno);
    const finished = snapshot
      .filter((s) => s.isFinished && !!s.updatedAt)
      .sort((a, b) => new Date(b.updatedAt as Date).getTime() - new Date(a.updatedAt as Date).getTime());
    return finished.length > 0 ? (finished[0].updatedAt as Date) : null;
  }
}
