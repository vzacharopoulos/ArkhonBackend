import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  eq?: number;

  @Field(() => Int, { nullable: true })
  gt?: number;

  @Field(() => Int, { nullable: true })
  gte?: number;

  @Field(() => Int, { nullable: true })
  lt?: number;

  @Field(() => Int, { nullable: true })
  lte?: number;

  @Field(() => [Int], { nullable: true })
  in?: number[];

  @Field({ nullable: true })
  isNull?: boolean;
}

@InputType()
export class ProdOrdersViewFilterInput {
  @Field({ nullable: true })
  prodOrder?: string;

  @Field({ nullable: true })
  tradecode?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  isCanceled?: boolean;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;
}