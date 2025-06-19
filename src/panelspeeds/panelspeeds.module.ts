import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';
import { PanelspeedsService } from './panelspeeds.service';
import { PanelspeedsResolver } from './panelspeeds.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PanelSpeeds])],
  providers: [PanelspeedsService, PanelspeedsResolver],
})
export class PanelspeedsModule {}
