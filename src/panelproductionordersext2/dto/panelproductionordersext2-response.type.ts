import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';

@ObjectType()
export class PanelProductionOrdersExt2Response {
  @Field(() => [PanelProductionOrdersExt2])
  nodes: PanelProductionOrdersExt2[];

  @Field(() => Int)
  totalCount: number;
}