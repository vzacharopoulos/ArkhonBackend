import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum FintradeSyncSortField {
  id = 'id',
  dsrnumber = 'dsrnumber',
  tradecode = 'tradecode',
}

registerEnumType(FintradeSyncSortField, {
  name: 'FintradeSyncSortField',
});

// SortOrder is registered in coils-sort-input; avoid duplicate registration here

@InputType()
export class FintradeSyncSortInput {
  @Field(() => FintradeSyncSortField)
  field: FintradeSyncSortField;

  @Field(() => SortOrder, { nullable: true })
  direction?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;

  @Field({ nullable: true })
  directionStr?: string;

  @Field({ nullable: true })
  orderStr?: string;
}
