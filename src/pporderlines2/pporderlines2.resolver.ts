import { Resolver, Query, Args, Int, ResolveField, Parent, Subscription, Mutation } from '@nestjs/graphql';
import { Pporderlines2Service } from './pporderlines2.service';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { Pporderlines2FilterInput } from './dto/pporderlines-filter-input';
import { fileURLToPath } from 'url';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { pubSub } from '../common/pubsub';
import { UpdatePporderlineStatusInput } from './dto/update-pporderline-status-input';
import { Pporderlines2Response } from './dto/pporderlines2-response.type';
import { Pporderlines2SortInput } from './dto/pporderlines-sort-input';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';

@Resolver(() => Pporderlines2)
export class Pporderlines2Resolver {
  constructor(private readonly pporderlines2Service: Pporderlines2Service) {}

  @Query(() => Pporderlines2Response)
  async pporderlines2(
    @Args('filter', { type: () => Pporderlines2FilterInput, nullable: true })
    filter?: Pporderlines2FilterInput,
    @Args('sorting', { type: () => [Pporderlines2SortInput], nullable: true })
    sorting?: Pporderlines2SortInput[],
    @Args('paging', { type: () => OffsetPaging, nullable: true })
    paging?: OffsetPaging,
  ): Promise<Pporderlines2Response> {
    return this.pporderlines2Service.findAll(filter, sorting, paging);
  }
  @Query(() => Pporderlines2, { nullable: true })
  async pporderline2(@Args('id', { type: () => Int }) id: number): Promise<Pporderlines2 | null> {
    return this.pporderlines2Service.findOne(id);
  }

   @ResolveField('pporders', () => Pporders, { nullable: true })
  async getPporder(@Parent() line: Pporderlines2): Promise<Pporders | null> {
    if (!line.pporderno) return null;
    return this.pporderlines2Service.getPporder(line.pporderno);
  }

    @Mutation(() => Pporderlines2)
  async updatePporderlineStatus(
    @Args('input') input: UpdatePporderlineStatusInput,
  ): Promise<Pporderlines2> {
    const line = await this.pporderlines2Service.updateStatus(input);
   
    return line;
  }

  @Subscription(() => Pporderlines2)
  pporderlineStatusChanged() {
    return pubSub.asyncIterableIterator('pporderlineStatusChanged');
  }

  @Subscription(() => Pporderlines2)
  pporderlineCreated() {
    return pubSub.asyncIterableIterator('pporderlineCreated');
  }

  @Subscription(() => Pporderlines2)
  pporderlineDeleted() {
    return pubSub.asyncIterableIterator('pporderlineDeleted');
  }
}


