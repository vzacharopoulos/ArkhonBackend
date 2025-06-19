import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PpackagesService } from './ppackages.service';
import { PpackagesResolver } from './ppackages.resolver';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';

@Module({
  imports: [TypeOrmModule.forFeature([PPackages, PanelSpeeds])],
  providers: [PpackagesService, PpackagesResolver],
})
export class PpackagesModule {}