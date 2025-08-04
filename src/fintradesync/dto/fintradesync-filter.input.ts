import { Field, InputType, Int } from '@nestjs/graphql';
import { IntFilter } from 'src/common/filtering helpers/filter.input';



@InputType()
export class FintradeSyncFilterInput {
  @Field({ nullable: true })
  tradecode?: string;

  @Field({ nullable: true })
  dsrnumber?: string;

  @Field({ nullable: true })
  iscanceled?: boolean;

  @Field(() => IntFilter, { nullable: true })
  comid?: IntFilter;
}