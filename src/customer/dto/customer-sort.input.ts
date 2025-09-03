import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum CustomerSortField {
  id = 'id',
  name = 'name',
}

registerEnumType(CustomerSortField, {
  name: 'CustomerSortField',
});

// SortOrder is registered in coils-sort-input; avoid duplicate registration here

@InputType()
export class CustomerSortInput {
  @Field(() => CustomerSortField)
  field: CustomerSortField;

  @Field(() => SortOrder, { nullable: true })
  direction?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;

  @Field({ nullable: true })
  directionStr?: string;

  @Field({ nullable: true })
  orderStr?: string;
}
