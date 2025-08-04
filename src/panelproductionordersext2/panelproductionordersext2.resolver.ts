
import { Resolver, Query, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { ProdOrdersViewService } from './panelproductionordersext2.service';
import { ProdOrdersViewFilterInput } from './dto/panelproductionordersext2-filter.input';
import { ProdOrdersViewSortInput } from './dto/panelproductionordersext2-sort.input.ts';
import { OffsetPaging } from './dto/paging.input';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { ProdOrdersViewResponse } from './dto/panelproductionordersext2-response.type';
import { InjectRepository } from '@nestjs/typeorm';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';
import { Repository } from 'typeorm';

@Resolver(() => ProdOrdersView)
export class ProdOrdersViewResolver {
  constructor(private readonly prodOrdersService: ProdOrdersViewService,
    @InjectRepository(FintradeSync, 'atlantisdb') // 👈 this line!
    private readonly fintradeSyncRepo: Repository<FintradeSync>,


   ) { }

@ResolveField(() => FintradeSync, { nullable: true })
  async fintradeSync(@Parent() prodOrdersView: ProdOrdersView) {
    return this.prodOrdersService.findFintradeSync(prodOrdersView.tradecode);
  }

@Query(() => [ProdOrdersView])
async panelProductionByCount(
  @Args('count', { type: () => Int }) count: number,
): Promise<ProdOrdersView[]> {
  return this.prodOrdersService.findByCount(count);
}

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