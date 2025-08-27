import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pporderlines2Service } from './pporderlines2.service';
import { Pporderlines2Resolver } from './pporderlines2.resolver';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Pporderlines2WatcherService } from './pporderlines2-watcher-service';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { TradecodeCustomer } from 'src/entities/views/TradecodeCustomer.view';

@Module({
  imports: [TypeOrmModule.forFeature([Pporderlines2, PPackages, PanelSpeeds,ProdOrdersView, Pporders,TradecodeCustomer])],
  providers: [Pporderlines2Service, Pporderlines2Resolver,Pporderlines2WatcherService],
})
export class Pporderlines2Module {}