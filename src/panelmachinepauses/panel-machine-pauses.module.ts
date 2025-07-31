import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanelMachinePausesService } from './panel-machine-pauses.service';
import { PanelMachinePausesResolver } from './panel-machine-pauses.resolver';
import { PanelMachinePauses } from 'src/entities/entities/PanelMachinePauses.entity';
import { Pporders } from 'src/entities/entities/Pporders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PanelMachinePauses, Pporders])],
  providers: [PanelMachinePausesService, PanelMachinePausesResolver],
  exports: [PanelMachinePausesService]
})
export class PanelMachinePausesModule {}