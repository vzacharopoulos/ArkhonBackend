import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateWorkingHoursInput {
  @Field()
  date: string;

  @Field(() => Int)
  startHour: number;

  @Field(() => Int)
  startMinute: number;

  @Field(() => Int)
  endHour: number;

  @Field(() => Int)
  endMinute: number;

  @Field()
  isWorkingDay: boolean;
}