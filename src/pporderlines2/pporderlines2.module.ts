import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pporderlines2Service } from './pporderlines2.service';
import { Pporderlines2Resolver } from './pporderlines2.resolver';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Pporderlines2WatcherService } from './pporderlines2-watcher-service';

@Module({
  imports: [TypeOrmModule.forFeature([Pporderlines2, PPackages, PanelSpeeds,ProdOrdersView, Pporders])],
  providers: [Pporderlines2Service, Pporderlines2Resolver,Pporderlines2WatcherService],
})
export class Pporderlines2Module {}