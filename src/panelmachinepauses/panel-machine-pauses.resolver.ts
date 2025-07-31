import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PanelMachinePausesService } from './panel-machine-pauses.service';
import { CreateCompletePauseInput } from './dto/create-panel-machine-pause-input';
import { UpdatePauseDetailsInput } from './dto/update-panel-machine-pause-input';
import { PanelMachinePauses } from 'src/entities/entities/PanelMachinePauses.entity';

@Resolver(() => PanelMachinePauses)
export class PanelMachinePausesResolver {
  constructor(private readonly pausesService: PanelMachinePausesService) {}

  @Query(() => [PanelMachinePauses], { name: 'allMachinePauses' })
  async getAllMachinePauses(): Promise<PanelMachinePauses[]> {
    return this.pausesService.findAll();
  }

  @Query(() => PanelMachinePauses, { name: 'machinePause' })
  async getMachinePause(
    @Args('id', { type: () => Int }) id: number
  ): Promise<PanelMachinePauses> {
    return this.pausesService.findById(id);
  }

  @Query(() => [PanelMachinePauses], { name: 'machinePausesByOrder' })
  async getMachinePausesByOrder(
    @Args('orderId', { type: () => Int }) orderId: number
  ): Promise<PanelMachinePauses[]> {
    return this.pausesService.findByOrderId(orderId);
  }

 @Mutation(() => PanelMachinePauses, { name: 'createCompletePause' })
  async createCompletePause(
    @Args('input') input: CreateCompletePauseInput
  ): Promise<PanelMachinePauses> {
    return this.pausesService.createCompletePause(input);
  }

  @Mutation(() => PanelMachinePauses, { name: 'updatePauseDetails' })
  async updatePauseDetails(
    @Args('input') input: UpdatePauseDetailsInput
  ): Promise<PanelMachinePauses> {
    return this.pausesService.updatePauseDetails(input);
  }





  @Mutation(() => Boolean, { name: 'deleteMachinePause' })
  async deleteMachinePause(
    @Args('id', { type: () => Int }) id: number
  ): Promise<boolean> {
    return this.pausesService.deletePause(id);
  }
}