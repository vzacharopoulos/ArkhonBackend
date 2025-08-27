import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProdOrdersViewService } from './panelproductionordersext2.service';
import {ProdOrdersViewResolver } from './panelproductionordersext2.resolver';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';

@Module({
  imports: [
    // Main DB
    TypeOrmModule.forFeature([
      
      ProdOrdersView,
      PanelSpeeds,
      Pporderlines2,
      
    ]),
    // Atlantis DB
    TypeOrmModule.forFeature(
      [FintradeSync],
      'atlantisdb', // <-- Name of the connection as registered in your root TypeOrmModule
    ),
  ],
  providers: [ProdOrdersViewService, ProdOrdersViewResolver],
})
export class ProdOrdersViewModule {}
