import { Resolver, Query, Args } from '@nestjs/graphql';
import { Masterlength } from 'src/entities/views/Masterlength';
import { MasterlengthService } from './Mastelength.service';
import { MasterlengthFilterInput } from './dto/Masterlength-filter-input';


@Resolver(() => Masterlength)
export class MasterlengthResolver {
  constructor(private readonly masterlengthService: MasterlengthService) {}

  @Query(() => [Masterlength])
  async masterlengths(
     @Args('filter', { type: () => MasterlengthFilterInput, nullable: true })
        filter?: MasterlengthFilterInput,
        ): Promise<Masterlength[]> {
    return this.masterlengthService.findAll();
  }

  @Query(() => Masterlength, { nullable: true })
  async masterlength(
    @Args('pporderno', { type: () => String }) pporderno: string,
  ): Promise<Masterlength | null> {
    return this.masterlengthService.findOne(pporderno);
  }
}