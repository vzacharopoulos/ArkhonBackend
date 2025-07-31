
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Panelproductionordersext2Service } from './panelproductionordersext2.service';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';
import { PanelProductionOrdersExt2Response } from './dto/panelproductionordersext2-response.type';
import { PanelProductionOrdersExt2FilterInput } from './dto/panelproductionordersext2-filter.input';
import { PanelProductionOrdersExt2SortInput } from './dto/panelproductionordersext2-sort.input.ts';
import { OffsetPaging } from './dto/paging.input';

@Resolver(() => PanelProductionOrdersExt2)
export class Panelproductionordersext2Resolver {
  constructor(private readonly prodOrdersService: Panelproductionordersext2Service) {}

  
  @Query(() => PanelProductionOrdersExt2Response)
  async panelProduction(
    @Args('filter', { type: () => PanelProductionOrdersExt2FilterInput, nullable: true })
    filter?: PanelProductionOrdersExt2FilterInput,
    @Args('sorting', { type: () => [PanelProductionOrdersExt2SortInput], nullable: true })
    sorting?: PanelProductionOrdersExt2SortInput[],
    @Args('paging', { type: () => OffsetPaging, nullable: true }) paging?: OffsetPaging,
  ): Promise<PanelProductionOrdersExt2Response> {
    return this.prodOrdersService.findAll(filter, sorting, paging);
  }


  @Query(() => PanelProductionOrdersExt2, { nullable: true })
  async panelProductionOrdersExt2(
    @Args('prodOrder', { type: () => String }) prodOrder: string,
  ): Promise<PanelProductionOrdersExt2 | null> {
    return this.prodOrdersService.findOne(prodOrder);
  }
}