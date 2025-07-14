import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum PanelProductionOrdersExt2SortField {
  prodOrder = 'prodOrder',
  productionNo = 'productionNo',
  tradecode = 'tradecode',
}
registerEnumType(PanelProductionOrdersExt2SortField, {
  name: 'PanelProductionOrdersExt2SortField',
});



registerEnumType(SortOrder, {
  name: 'SortOrder',
});

@InputType()
export class PanelProductionOrdersExt2SortInput {
  @Field(() => PanelProductionOrdersExt2SortField)
  field: PanelProductionOrdersExt2SortField;

  @Field(() => SortOrder)
  direction: SortOrder;
}