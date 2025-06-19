import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanelspeedsResolver } from './panelspeeds.resolver';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { PanelspeedsService } from './panelspeeds.service';


@Module({
  imports: [TypeOrmModule.forFeature([PanelSpeeds])],
  providers: [PanelspeedsService, PanelspeedsResolver],
})
export class PanelspeedsModule {}