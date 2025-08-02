
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProdOrdersViewService } from './panelproductionordersext2.service';
import { ProdOrdersViewFilterInput } from './dto/panelproductionordersext2-filter.input';
import { ProdOrdersViewSortInput } from './dto/panelproductionordersext2-sort.input.ts';
import { OffsetPaging } from './dto/paging.input';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2';
import { ProdOrdersViewResponse } from './dto/panelproductionordersext2-response.type';

@Resolver(() => ProdOrdersView)
export class ProdOrdersViewResolver {
  constructor(private readonly prodOrdersService: ProdOrdersViewService) {}

  
  @Query(() => ProdOrdersViewResponse)
  async panelProduction(
    @Args('filter', { type: () => ProdOrdersViewFilterInput, nullable: true })
    filter?: ProdOrdersViewFilterInput,
    @Args('sorting', { type: () => [ProdOrdersViewSortInput], nullable: true })
    sorting?: ProdOrdersViewSortInput[],
    @Args('paging', { type: () => OffsetPaging, nullable: true }) paging?: OffsetPaging,
  ): Promise<ProdOrdersViewResponse> {
    return this.prodOrdersService.findAll(filter, sorting, paging);
  }


  @Query(() => ProdOrdersView, { nullable: true })
  async panelProductionOrdersExt2(
    @Args('prodOrder', { type: () => String }) prodOrder: string,
  ): Promise<ProdOrdersView | null> {
    return this.prodOrdersService.findOne(prodOrder);
  }
}