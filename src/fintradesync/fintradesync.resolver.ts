import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { FintradeSyncService } from './fintradesync.service';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';
import { FintradeSyncSortInput } from './dto/fintradesync-sort.input';
import { FintradeSyncResponse } from './dto/fintradesync-response.type';
import { FintradeSyncFilterInput } from './dto/fintradesync-filter.input';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';

@Resolver(() => FintradeSync)
export class FintradeSyncResolver {
  constructor(private readonly fintradeSyncService: FintradeSyncService) {}

  @Query(() => FintradeSyncResponse)
  async fintradeSyncs(
    @Args('filter', { type: () => FintradeSyncFilterInput, nullable: true })
    filter?: FintradeSyncFilterInput,
    @Args('sorting', { type: () => [FintradeSyncSortInput], nullable: true })
    sorting?: FintradeSyncSortInput[],
    @Args('paging', { type: () => OffsetPaging, nullable: true }) paging?: OffsetPaging,
  ): Promise<FintradeSyncResponse> {
    return this.fintradeSyncService.findAll(filter, sorting, paging);
  }

  @Query(() => FintradeSync, { nullable: true })
  async fintradeSync(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<FintradeSync | null> {
    return this.fintradeSyncService.findOne(id);
  }
}