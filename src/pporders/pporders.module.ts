import { PpordersService } from './pporders.service';
import { PpordersResolver } from './pporders.resolver';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';

@Module({
  imports: [TypeOrmModule.forFeature([Pporders, Pporderlines2, PanelSpeeds, ProdOrdersView])],
  providers: [
    PpordersService,
    PpordersResolver,
    
  ],
  exports: [PpordersService],
})
export class PpordersModule {}