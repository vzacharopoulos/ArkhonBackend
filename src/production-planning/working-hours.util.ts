import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkingHours } from '../entities/entities/panelworkinghours';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';dayjs.extend(utc);
dayjs.extend(timezone);
const tz = process.env.TIME_ZONE || 'Europe/Athens';
(dayjs.tz ? dayjs.tz.setDefault(tz) : void 0);
export interface WorkingHoursConfig {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  isWorkingDay: boolean;
}

export function toDateKey(d: Date): string {
  return dayjs(d).tz(tz).format('YYYY-MM-DD');
}

@Injectable()
export class WorkingHoursUtil {
  constructor(
    @InjectRepository(WorkingHours)
    private readonly workingHoursRepo: Repository<WorkingHours>,
  ) {}

  // Defaults provided by the user
  private readonly defaults: Record<number, WorkingHoursConfig> = {
    1: { startHour: 6, startMinute: 0, endHour: 22, endMinute: 0, isWorkingDay: true },
    2: { startHour: 6, startMinute: 0, endHour: 22, endMinute: 0, isWorkingDay: true },
    3: { startHour: 6, startMinute: 0, endHour: 22, endMinute: 0, isWorkingDay: true },
    4: { startHour: 6, startMinute: 0, endHour: 22, endMinute: 0, isWorkingDay: true },
    5: { startHour: 6, startMinute: 0, endHour: 23, endMinute: 59, isWorkingDay: true },
    6: { startHour: 0, startMinute: 1, endHour: 15, endMinute: 0, isWorkingDay: true },
    0: { startHour: 0, startMinute: 0, endHour: 23, endMinute: 59, isWorkingDay: false },
  };

  async getConfigFor(date: Date): Promise<WorkingHoursConfig> {
    const key = toDateKey(date);
    const override = await this.workingHoursRepo.findOne({ where: { date: key } });
    if (override) {
      return {
        startHour: override.startHour,
        startMinute: override.startMinute,
        endHour: override.endHour,
        endMinute: override.endMinute,
        isWorkingDay: !!override.isWorkingDay,
      };
    }
    const weekday = dayjs(date).tz(tz).day(); // 0 (Sun) - 6 (Sat)
    return this.defaults[weekday] ?? this.defaults[1];
  }

  async ensureStartWithinWorkingHours(now: Date): Promise<Date> {
  const nowDj = dayjs(now).tz(tz);
  const cfg = await this.getConfigFor(nowDj.toDate());

  const minutes = nowDj.hour() * 60 + nowDj.minute();
  const startMinutes = cfg.startHour * 60 + cfg.startMinute;
  const endMinutes = cfg.endHour * 60 + cfg.endMinute;

  const dateKey = toDateKey(nowDj.toDate());

  // 1) Non-working day → mark working, set start to "now", keep end from base
  if (!cfg.isWorkingDay) {
    const existing = await this.workingHoursRepo.findOne({ where: { date: dateKey } });
    const base = existing ? cfg : await this.getConfigFor(nowDj.toDate());

    const newCfg = existing
      ? ({ ...existing } as WorkingHours)
      : (this.workingHoursRepo.create({ date: dateKey } as any) as unknown as WorkingHours);

    newCfg.startHour = nowDj.hour();
    newCfg.startMinute = nowDj.minute();
    newCfg.endHour = base.endHour;
    newCfg.endMinute = base.endMinute;
    newCfg.isWorkingDay = true;

    await this.workingHoursRepo.save(newCfg);
    return nowDj.second(0).millisecond(0).toDate();
  }

  // 2) Before working-hours start → set start to "now", keep end
  if (minutes < startMinutes) {
    const existing = await this.workingHoursRepo.findOne({ where: { date: dateKey } });
    const base = existing ? cfg : await this.getConfigFor(nowDj.toDate());

    const newCfg = existing
      ? ({ ...existing } as WorkingHours)
      : (this.workingHoursRepo.create({ date: dateKey } as any) as unknown as WorkingHours);

    newCfg.startHour = nowDj.hour();
    newCfg.startMinute = nowDj.minute();
    newCfg.endHour = base.endHour;
    newCfg.endMinute = base.endMinute;
    newCfg.isWorkingDay = true;

    await this.workingHoursRepo.save(newCfg);
    return nowDj.second(0).millisecond(0).toDate();
  }

  // 3) After working-hours end → extend the day's end to "now"
  if (minutes >= endMinutes) {
    const existing = await this.workingHoursRepo.findOne({ where: { date: dateKey } });

    const newCfg = existing
      ? ({ ...existing } as WorkingHours)
      : (this.workingHoursRepo.create({ date: dateKey } as any) as unknown as WorkingHours);

    // Keep start from current cfg/override; only extend end to now
    newCfg.endHour = nowDj.hour();
    newCfg.endMinute = nowDj.minute();
    newCfg.isWorkingDay = true;

    await this.workingHoursRepo.save(newCfg);
    return nowDj.second(0).millisecond(0).toDate();
  }

  // Already within working hours → no override needed
  return nowDj.toDate();
}
  async addWorkingMinutesDynamic(start: Date, minutesToAdd: number): Promise<Date> {
    let current = dayjs(start).tz(tz);
    let remaining = Math.max(0, minutesToAdd);

    while (remaining > 0) {
      const cfg = await this.getConfigFor(current.toDate());
      if (!cfg.isWorkingDay) {
        current = this.startOfNextDay(current);
        continue;
      }

      const dayStart = this.setTime(current, cfg.startHour, cfg.startMinute, 0);
      const dayEnd = this.setTime(current, cfg.endHour, cfg.endMinute, 0);

      if (current.isBefore(dayStart)) {
        current = dayStart;
      }
      if (!current.isBefore(dayEnd)) {
        current = this.startOfNextDay(current);
        continue;
      }

      const availableMinutes = Math.floor(dayEnd.diff(current, 'minute'));
      const chunk = Math.min(availableMinutes, remaining);
      current = current.add(chunk, 'minute');
      remaining -= chunk;

      if (remaining > 0) {
        current = this.startOfNextDay(current);
      }
    }

    return current.toDate();
  }

  // Compute working minutes between two timestamps based on current working-hours rules
  async workingMinutesBetween(start: Date, end: Date): Promise<number> {
    let from = dayjs(start).tz(tz);
    const to = dayjs(end).tz(tz);
    if (!to.isAfter(from)) return 0;

    let total = 0;

    while (from.isBefore(to)) {
      const cfg = await this.getConfigFor(from.toDate());
      if (!cfg.isWorkingDay) {
        from = this.startOfNextDay(from);
        continue;
      }

      const dayStart = this.setTime(from, cfg.startHour, cfg.startMinute, 0);
      const dayEnd = this.setTime(from, cfg.endHour, cfg.endMinute, 0);

      // Move inside today's working window
      if (from.isBefore(dayStart)) from = dayStart;
      if (!from.isBefore(dayEnd)) {
        from = this.startOfNextDay(from);
        continue;
      }

      const segmentEnd = to.isBefore(dayEnd) ? to : dayEnd;
      total += Math.max(0, Math.floor(segmentEnd.diff(from, 'minute')));
      from = segmentEnd;

      if (!from.isBefore(to)) break;
      if (!from.isBefore(dayEnd)) {
        from = this.startOfNextDay(from);
      }
    }

    return total;
  }

  private startOfNextDay(d: dayjs.Dayjs): dayjs.Dayjs {
    return d.tz(tz).add(1, 'day').startOf('day');
  }

  private setTime(d: dayjs.Dayjs, h: number, m: number, s: number): dayjs.Dayjs {
    return d.tz(tz).hour(h).minute(m).second(s).millisecond(0);
  }
}





