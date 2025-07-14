import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePporderlineStatusInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  status: number;
}