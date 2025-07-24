import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'WorkingHours' })
export class WorkingHours {
  @PrimaryColumn({ type: 'date' })
  date: string; // e.g., "2025-07-25"

  @Column({ type: 'int' })
  startHour: number;

  @Column({ type: 'int' })
  startMinute: number;

  @Column({ type: 'int' })
  endHour: number;

  @Column({ type: 'int' })
  endMinute: number;

  @Column({ type: 'bit', default: 1 })
  isWorkingDay: boolean;
}