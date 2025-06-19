import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../entities/entities/Location.entity'; // adjust path
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationService, LocationResolver],
  exports: [LocationService], // so other modules can use LocationService if needed
})
export class LocationModule {}