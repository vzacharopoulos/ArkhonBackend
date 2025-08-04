import { Field, InputType, Int } from '@nestjs/graphql';
import {  IntFilter, StringFilter } from 'src/common/filtering helpers/filter.input';


@InputType()
export class ProdOrdersViewFilterInput {
   @Field(() => StringFilter, { nullable: true })
  prodOrder?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  pporderno?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  tradecode?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  salesmanName?: StringFilter;


  @Field({ nullable: true })
  isCanceled?: boolean;

    @Field(() => IntFilter, { nullable: true })
  ttm?: IntFilter;
  
    @Field(() => StringFilter, { nullable: true })
  cin?: StringFilter;



  @Field( { nullable: true })
  count?: number;
}