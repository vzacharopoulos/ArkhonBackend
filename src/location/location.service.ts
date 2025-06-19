import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../entities/entities/Location.entity'; // adjust path





@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async findOne(locationId: number): Promise<Location | undefined> {
    return this.locationRepository.findOne({
      where: { locationId },
    });
  }
}