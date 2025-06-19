import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';
import { openstatus } from './coils-enum-types';

@InputType()
export class IntInInput {
  @Field(() => [Int], { nullable: true })
  in?: number[];
}

import { Float } from '@nestjs/graphql';

@InputType()
export class FloatEqInput {
  @Field(() => Float, { nullable: true })
  eq?: number;
}



@InputType()
export class IntEqInput {
  @Field(() => Int, { nullable: true })
  eq?: number;
}

@InputType()
export class StringFilterInput {
  @Field(() => String, { nullable: true })
  eq?: string;

  @Field(() => String, { nullable: true })
  iLike?: string;

  @Field(() => String, { nullable: true })
  contains?: string;
}

@InputType()
export class openstatusFilterInput {
  @Field(() => openstatus, { nullable: true })
  eq?: openstatus; // Exact match for a single status

  @Field(() => [openstatus], { nullable: true })
  in?: openstatusFilterInput[]; // Match any of a list of statuses
}


@InputType()
export class CoilsFilterInput {
  @Field(() => Int, { nullable: true })
  status?: number;

  @Field(() => StringFilterInput, { nullable: true })
  coilno?: StringFilterInput;

  @Field(() => IntInInput, { nullable: true })
  loc?: IntInInput;

  @Field(() => IntInInput, { nullable: true })
  loc_in?: IntInInput;

  @Field(() => StringFilterInput, { nullable: true })
  color?: StringFilterInput;


  @Field(() => GraphQLISODateTime, { nullable: true })
  upDateFrom?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  upDateTo?: Date;

  @Field(() => StringFilterInput, { nullable: true })
currWeightFrom?: StringFilterInput;

@Field(() => StringFilterInput, { nullable: true })
currWeight?: StringFilterInput;

@Field(() => StringFilterInput, { nullable: true })
currWeightTo?: StringFilterInput;

  @Field(() => openstatusFilterInput, { nullable: true })
  openstatus?: openstatusFilterInput;


  @Field(() => StringFilterInput, { nullable: true })
  thickness?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  widthCoil?: StringFilterInput;
}