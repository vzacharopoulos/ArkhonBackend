import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; import { WorkingHours } from 'src/entities/entities/panelworkinghours';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { WorkingHoursUtil } from './working-hours.util';
import { PpordersService } from 'src/pporders/pporders.service';
dayjs.extend(utc);
dayjs.extend(timezone);
const tz = process.env.TIME_ZONE || 'Europe/Athens';
(dayjs.tz ? dayjs.tz.setDefault(tz) : void 0);


@Injectable()
export class SchedulingUtils {
    constructor(
        @InjectRepository(Pporders)
        private readonly ordersRepo: Repository<Pporders>,
        @InjectRepository(Pporderlines2)
        private readonly linesRepo: Repository<Pporderlines2>,
        private readonly whUtil: WorkingHoursUtil,
        private readonly ppordersService: PpordersService,
    ) { }

    private async getOrderLineCompletionSnapshot(pporderno: string): Promise<{
        totalNonCanceled: number;          // all non-canceled lines (any status)
        finishedCount: number;             // non-canceled lines with status = 4
        lastFinishedUpdate?: Date | null;  // MAX(upDate) among finished lines
    }> {
        // total non-canceled
        const totalNonCanceledRow = await this.linesRepo
            .createQueryBuilder('line')
            .select('COUNT(*)', 'cnt')
            .where('line.pporderno = :pporderno', { pporderno })
            .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
            .getRawOne<{ cnt: string }>();

        // finished count + last finished upDate
        const finishedRow = await this.linesRepo
            .createQueryBuilder('line')
            .select('COUNT(*)', 'finishedCnt')
            .addSelect('MAX(line.upDate)', 'lastFinishedUpdate')
            .where('line.pporderno = :pporderno', { pporderno })
            .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
            .andWhere('line.status = :status', { status: 4 })
            .getRawOne<{ finishedCnt: string; lastFinishedUpdate: Date | null }>();

        const totalNonCanceled = Number(totalNonCanceledRow?.cnt ?? 0);
        const finishedCount = Number(finishedRow?.finishedCnt ?? 0);
        const lastFinishedUpdate = finishedRow?.lastFinishedUpdate ?? null;

        return { totalNonCanceled, finishedCount, lastFinishedUpdate };
    }
}