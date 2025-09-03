import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum ProdOrdersViewSortField {
  prodOrder = 'prodOrder',
  productionNo = 'productionNo',
  tradecode = 'tradecode',
  ftrdate = 'ftrdate',
  
}
registerEnumType(ProdOrdersViewSortField, {
  name: 'PanelProductionOrdersExt2SortField',
});



// Do not re-register SortOrder here to avoid conflicts; it's registered in coils-sort-input

@InputType()
export class ProdOrdersViewSortInput {
  @Field(() => ProdOrdersViewSortField)
  field: ProdOrdersViewSortField;

  @Field(() => SortOrder, { nullable: true })
  direction?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;

  @Field({ nullable: true })
  directionStr?: string;

  @Field({ nullable: true })
  orderStr?: string;
}
