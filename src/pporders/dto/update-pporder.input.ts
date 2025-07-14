import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePpordersInput } from './create-pporder.input';

@InputType()
export class UpdatePpordersInput extends PartialType(CreatePpordersInput) {}

@InputType()
export class UpdatePporderInput {
  @Field(() => Int)
  id: number;

  @Field(() => UpdatePpordersInput)
  update: UpdatePpordersInput;
}
