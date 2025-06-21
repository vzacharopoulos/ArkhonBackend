import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { ProdordersviewService } from './paneproductionordersview-with-iscanceled.service';


@Resolver(() => ProdOrdersView)
export class ProdordersviewResolver {
  constructor(private readonly ProdordersviewService: ProdordersviewService) {}

  @Query(() => [ProdOrdersView])
  async prodOrdersViews(): Promise<ProdOrdersView[]> {
    return this.ProdordersviewService.findAll();
  }

  @Query(() => ProdOrdersView, { nullable: true })
  async prodOrdersView(
    @Args('prodOrder', { type: () => String }) prodOrder: string,
  ): Promise<ProdOrdersView | null> {
    return this.ProdordersviewService.findOne(prodOrder);
  }
}