
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Panelproductionordersext2Service } from './panelproductionordersext2.service';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';

@Resolver(() => PanelProductionOrdersExt2)
export class Panelproductionordersext2Resolver {
  constructor(private readonly prodOrdersService: Panelproductionordersext2Service) {}

  @Query(() => [PanelProductionOrdersExt2])
  async panelProductionOrdersExt2s(): Promise<PanelProductionOrdersExt2[]> {
    return this.prodOrdersService.findAll();
  }

  @Query(() => PanelProductionOrdersExt2, { nullable: true })
  async panelProductionOrdersExt2(
    @Args('prodOrder', { type: () => String }) prodOrder: string,
  ): Promise<PanelProductionOrdersExt2 | null> {
    return this.prodOrdersService.findOne(prodOrder);
  }
}
