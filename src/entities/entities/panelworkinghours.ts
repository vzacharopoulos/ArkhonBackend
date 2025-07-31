import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'WorkingHours' })
export class WorkingHours {
  @Field()
  @PrimaryColumn({ type: 'date' })
  date: string; // e.g., "2025-07-25"

  @Field(() => Int)
  @Column({ type: 'int' })
  startHour: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  startMinute: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  endHour: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  endMinute: number;

  @Field()
  @Column({ type: 'bit', default: 1 })
  isWorkingDay: boolean;
}