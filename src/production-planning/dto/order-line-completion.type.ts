import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderLineCompletion {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  pporderno?: string | null;

  @Field({ nullable: true })
  custporderno?: string | null;

  @Field(() => Int, { nullable: true })
  status?: number | null;
  
  @Field(() => Date, { nullable: true })
  upDate?: Date | null;
  // From ProdOrdersView
  @Field(() => Number, { nullable: true })
  time?: number | null;

  @Field(() => Number, { nullable: true })
  ttm?: number | null;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field(() => Boolean)
  isFinished!: boolean;
}
