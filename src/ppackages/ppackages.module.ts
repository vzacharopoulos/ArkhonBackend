import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PPackages } from '../entities/entities/PPackages';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';
import { PpackagesService } from './ppackages.service';
import { PpackagesResolver } from './ppackages.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PPackages, PanelSpeeds])],
  providers: [PpackagesService, PpackagesResolver],
})
export class PpackagesModule {}
