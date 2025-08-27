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



registerEnumType(SortOrder, {
  name: 'SortOrder',
});

@InputType()
export class ProdOrdersViewSortInput {
  @Field(() => ProdOrdersViewSortField)
  field: ProdOrdersViewSortField;

  @Field(() => SortOrder)
  direction: SortOrder;
}