import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkingHours } from '../entities/entities/panelworkinghours';
import { PanelworkinghoursService } from './panelworkinghours.service';
import { PanelworkinghoursResolver } from './panelworkinghours.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([WorkingHours])],
  providers: [PanelworkinghoursService, PanelworkinghoursResolver],
  exports: [PanelworkinghoursService],
})
export class PanelworkinghoursModule {}