import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateWorkingHoursInput } from './create-workinghours.input';

@InputType()
export class UpdateWorkingHoursInput extends PartialType(CreateWorkingHoursInput) {}

@InputType()
export class UpdateWorkingHourInput {
  @Field()
  date: string;

  @Field(() => UpdateWorkingHoursInput)
  update: UpdateWorkingHoursInput;
}