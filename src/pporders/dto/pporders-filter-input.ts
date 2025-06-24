import { InputType, Field, Int } from '@nestjs/graphql';




@InputType()
export class PpordersFilterInput {
  @Field(() => String, { nullable: true })
  pporderno?: string;

  @Field(() => Int, { nullable: true })
  status?: number;

  @Field(() => Int, { nullable: true })
  lastDays?: number;
}