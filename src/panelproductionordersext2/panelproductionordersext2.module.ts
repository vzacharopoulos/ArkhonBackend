import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProdOrdersViewService } from './panelproductionordersext2.service';
import {ProdOrdersViewResolver } from './panelproductionordersext2.resolver';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdOrdersView,PanelSpeeds
    ,Pporderlines2
  ])],
  providers: [ProdOrdersViewService, ProdOrdersViewResolver],
})
export class ProdOrdersViewModule {}