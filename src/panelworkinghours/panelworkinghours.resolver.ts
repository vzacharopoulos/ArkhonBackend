import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PanelworkinghoursService } from './panelworkinghours.service';
import { WorkingHours } from '../entities/entities/panelworkinghours';
import { UpdateWorkingHourInput, UpdateWorkingHoursInput } from './dto/update-workinghours.input';

@Resolver(() => WorkingHours)
export class PanelworkinghoursResolver {
  constructor(private readonly service: PanelworkinghoursService) {}

  @Query(() => [WorkingHours])
  workingHoursAll(): Promise<WorkingHours[]> {
    return this.service.findAll();
  }

@Query(() => WorkingHours, { nullable: true })
workingHours(@Args('date', { type: () => String }) date: string): Promise<WorkingHours | null> {
  // Ensure the date is a valid ISO string like "2025-07-23"
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD.");
  }

  return this.service.findOne(date);
}

@Mutation(() => WorkingHours)
updateWorkingHours(
  @Args('date', { type: () => String }) date: string,
  @Args('update', { type: () => UpdateWorkingHoursInput }) update: UpdateWorkingHoursInput,
): Promise<WorkingHours> {
  return this.service.update(date, update);
}}