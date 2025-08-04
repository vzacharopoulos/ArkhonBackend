import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum CustomerSortField {
  id = 'id',
  name = 'name',
}

registerEnumType(CustomerSortField, {
  name: 'CustomerSortField',
});

registerEnumType(SortOrder, {
  name: 'SortOrder',
});

@InputType()
export class CustomerSortInput {
  @Field(() => CustomerSortField)
  field: CustomerSortField;

  @Field(() => SortOrder)
  direction: SortOrder;
}