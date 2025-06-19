import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PpackagesService } from './ppackages.service';
import { PPackages } from '../entities/entities/PPackages';
import { PackageSpeedResult } from './dto/package-speed-result.type';

@Resolver(() => PPackages)
export class PpackagesResolver {
  constructor(private readonly ppackagesService: PpackagesService) {}

  @Query(() => [PPackages])
  async ppackages(): Promise<PPackages[]> {
    return this.ppackagesService.findAll();
  }

  @Query(() => PPackages, { nullable: true })
  async ppackage(@Args('id', { type: () => Int }) id: number): Promise<PPackages | null> {
    return this.ppackagesService.findOne(id);
  }

  @Query(() => [PackageSpeedResult])
  async packageProductionTimes(): Promise<PackageSpeedResult[]> {
    return this.ppackagesService.calculateQuantitySpeed();
  }
}
