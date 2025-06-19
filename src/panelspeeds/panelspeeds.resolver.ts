import { Resolver, Query, Args } from '@nestjs/graphql';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { PanelspeedsService } from './panelspeeds.service';

@Resolver(() => PanelSpeeds)
export class PanelspeedsResolver {
  constructor(private readonly panelspeedsService: PanelspeedsService) {}

  @Query(() => [PanelSpeeds])
  async panelSpeeds(): Promise<PanelSpeeds[]> {
    return this.panelspeedsService.findAll();
  }

  @Query(() => PanelSpeeds, { nullable: true })
  async panelSpeed(
    @Args('code', { type: () => String }) code: string,
  ): Promise<PanelSpeeds | null> {
    return this.panelspeedsService.findOne(code);
  }
}