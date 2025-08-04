import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';

@ObjectType()
export class ProdOrdersViewResponse {
  @Field(() => [ProdOrdersView])
  nodes: ProdOrdersView[];

  @Field(() => Int)
  totalCount: number;
}