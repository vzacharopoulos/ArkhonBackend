import { InputType, Field, Int } from '@nestjs/graphql';
import { DateFilter, IntFilter, StringFilter } from 'src/common/filtering helpers/filter.input';
@InputType()
export class Pporderlines2FilterInput {
 @Field(() => StringFilter, { nullable: true })
ppordernos?: StringFilter;
  @Field(() => StringFilter, { nullable: true })
  custporderno?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  tradecode?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  status?: IntFilter;

  @Field(() => DateFilter, { nullable: true })
  prodDate?: DateFilter;

  @Field({ nullable: true })
  isCanceled?: boolean;
}