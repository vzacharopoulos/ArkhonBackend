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

registerEnumType(SortOrder, {
  name: 'SortOrder',
});

@InputType()
export class FintradeSyncSortInput {
  @Field(() => FintradeSyncSortField)
  field: FintradeSyncSortField;

  @Field(() => SortOrder)
  direction: SortOrder;
}