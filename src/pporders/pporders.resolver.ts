import { Args, Context, Float, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';

import { PpordersService } from './pporders.service';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePporderInput, UpdatePpordersInput } from './dto/update-pporder.input';
import { PpordersFilterInput } from './dto/pporders-filter-input';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { pubSub } from '../common/pubsub';
import { PanelMachinePauses } from 'src/entities/entities/PanelMachinePauses.entity';
import { PporderGroupIn } from './dto/pporder-group.output';
type Totals = { totalTime: number; totalTtm: number };

@Resolver(() => Pporders)
export class PpordersResolver {
  constructor(private readonly ppordersService: PpordersService) {}
// --- helpers --------------------------------------------------------------

  /**
   * Per-request cache helper. Stores totals on the GraphQL context so that
   * totalTime and totalTtm are computed with a single fetch per pporderno.
   */
  private async getTotalsCached(pporderno: string, ctx: any): Promise<Totals> {
    // ensure a per-request cache map exists on the context
    if (!ctx.__totalsCache) ctx.__totalsCache = new Map<string, Totals>();

    const cache: Map<string, Totals> = ctx.__totalsCache;

    if (cache.has(pporderno)) {
      return cache.get(pporderno)!;
    }

    const totals = await this.ppordersService.getTotals(pporderno);
    cache.set(pporderno, totals);
    return totals;
  }
  // Get single order by ID
  @Query(() => Pporders, { name: 'pporder', description: 'Get a single production order by ID' })
  async getPporder(
    @Args('id', { type: () => Int, description: 'The ID of the production order' }) id: number
  ): Promise<Pporders> {
    return this.ppordersService.findOne(id);
  }

  // Get all orders with optional filtering
  @Query(() => [Pporders], { name: 'pporders', description: 'Get all production orders' })
  async getAllPporders(
    @Args('filter', { type: () => PpordersFilterInput, nullable: true })
    filter?: PpordersFilterInput,
  ): Promise<Pporders[]> {
    return this.ppordersService.findAll(filter);
  }

  @ResolveField('pporderlines', () => [Pporderlines2])
  async getPporderlines(@Parent() order: Pporders): Promise<Pporderlines2[]> {
    if (!order.pporderno) return [];
    return this.ppordersService.getPporderlines(order.pporderno);
  }

 // Use Float (or Int) instead of Number for GraphQL type safety
  @ResolveField('totalOrderTime', () => Float, { nullable: true })
  async getTotalTime(@Parent() order: Pporders, @Context() ctx: any): Promise<number | null> {
    if (!order.pporderno) return null;
    const { totalTime } = await this.getTotalsCached(order.pporderno, ctx);
    return totalTime;
  }

  @ResolveField('totalTtm', () => Float, { nullable: true })
  async getTotalTtm(@Parent() order: Pporders, @Context() ctx: any): Promise<number | null> {
    if (!order.pporderno) return null;
    const { totalTtm } = await this.getTotalsCached(order.pporderno, ctx);
    return totalTtm;
  }
  @ResolveField('groupIn', () => [PporderGroupIn])
  async groupIn(@Parent() order: Pporders): Promise<PporderGroupIn[]> {
    if (!order.pporderno) return [];
    return this.ppordersService.getGroupIn(order.pporderno);
  }



  // Create new order
  @Mutation(() => Pporders, { description: 'Create a new production order' })
  async createPporder(
    @Args('input', { type: () => CreatePpordersInput }) input: CreatePpordersInput
  ): Promise<Pporders> {
    return this.ppordersService.create(input);
  }

  @Mutation(() => Pporders, { description: 'Update an existing production order' })
  async updatePporder(
    @Args('input', { type: () => UpdatePporderInput }) input: UpdatePporderInput,
  ): Promise<Pporders> {
    const updated = await this.ppordersService.update(input.id, input.update);
    await pubSub.publish('pporderUpdated', { pporderUpdated: updated });
    return updated;
  }

  // Delete order
  @Mutation(() => Boolean, { description: 'Delete a production order' })
  async deletePporder(
    @Args('id', { type: () => Int }) id: number
  ): Promise<boolean> {
    return this.ppordersService.delete(id);
  }
 @Subscription(() => Pporders)
  pporderUpdated() {
    return pubSub.asyncIterableIterator('pporderUpdated');
  }
}
