import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';
import { openstatus } from './coils-enum-types';

import { Float } from '@nestjs/graphql';
import { BooleanFilter, DateFilter, IntFilter, StringFilter } from 'src/common/filtering helpers/filter.input';


@InputType()
export class IntInInput {
  @Field(() => [Int], { nullable: true })
  in?: number[];
}

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


    @Field(() => BooleanFilter, { nullable: true })
  isLoaded?: BooleanFilter;

     @Field(() => BooleanFilter, { nullable: true })
  isUnloaded?: BooleanFilter;


  @Field(() => DateFilter, { nullable: true })
  loadDate?: DateFilter;

  @Field(() => StringFilterInput, { nullable: true })
  coilno?: StringFilterInput;

  @Field(() => IntInInput, { nullable: true })
  loc?: IntInInput;

  @Field(() => IntInInput, { nullable: true })
  loc_in?: IntInInput;

  @Field(() => StringFilterInput, { nullable: true })
  color?: StringFilterInput;

  @Field(() => DateFilter, { nullable: true })
  upDate?: DateFilter;

    @Field(() => StringFilter, { nullable: true })
  documents?: StringFilter;

  @Field(() => DateFilter, { nullable: true })
  upDateFrom?: DateFilter;

  @Field(() => DateFilter, { nullable: true })
  upDateTo?: DateFilter;

  @Field(() => DateFilter, { nullable: true })
  loadDateFrom?: DateFilter;

  @Field(() => DateFilter, { nullable: true })
  loadDateTo?: DateFilter;

  @Field(() => StringFilterInput, { nullable: true })
  supcoilId?: StringFilterInput;

  @Field(() => IntFilter, { nullable: true })
  currWeightFrom?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  currWeight?: IntFilter;

@Field(() => IntFilter, { nullable: true })
currWeightTo?: IntFilter;

  @Field(() => openstatusFilterInput, { nullable: true })
  openstatus?: openstatusFilterInput;


  @Field(() => StringFilterInput, { nullable: true })
  thickness?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  widthCoil?: StringFilterInput;

@Field(() => IntFilter, { nullable: true })
  shipBayNo: IntFilter;
}