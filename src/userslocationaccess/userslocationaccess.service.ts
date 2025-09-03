import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import * as DataLoader from 'dataloader';
import { UsersLocationAccess } from '../entities/entities/UserLocationAccess.entity';
import { Location } from '../entities/entities/Location.entity';

@Injectable()
export class UsersLocationAccessService {
  private locationAccessLoader: DataLoader<number, UsersLocationAccess[]>;

  constructor(
    @InjectRepository(UsersLocationAccess)
    private readonly usersLocationAccessRepository: Repository<UsersLocationAccess>,
  ) {
    // Initialize DataLoader
    this.locationAccessLoader = new DataLoader<number, UsersLocationAccess[]>(
      this.batchLocationAccess.bind(this),
      { cache: false } // Disable caching if you need fresh data each time
    );
  }

  //get allowelocationfor every user
  
  // Existing method - keep as is
  async getAllowedLocationsForUser(userId: string): Promise<Location[]> {
    const accesses = await this.usersLocationAccessRepository.find({
      where: {
        userId,
        isActive: true,
      },
      relations: ['location'],
    });

    return accesses.map((access) => access.location);
  }

  // New method for single location access
  async findByLocationId(locationId: number): Promise<UsersLocationAccess[]> {
    return this.usersLocationAccessRepository.find({
      where: { locationId },
      relations: ['user', 'location'],
    });
  }

  // New method using DataLoader for batch loading
  async findByLocationIdBatch(locationId: number): Promise<UsersLocationAccess[]> {
    return this.locationAccessLoader.load(locationId);
  }

  // DataLoader batch function
  private async batchLocationAccess(
    locationIds: readonly number[]
  ): Promise<UsersLocationAccess[][]> {
    const accesses = await this.usersLocationAccessRepository.find({
      where: {
        locationId: In([...locationIds]),
      },
      relations: ['user', 'location'],
    });

    const accessMap = new Map<number, UsersLocationAccess[]>();
    accesses.forEach((access) => {
      if (!accessMap.has(access.locationId)) {
        accessMap.set(access.locationId, []);
      }
      accessMap.get(access.locationId)!.push(access);
    });

    return locationIds.map((id) => accessMap.get(id) || []);
  }
}