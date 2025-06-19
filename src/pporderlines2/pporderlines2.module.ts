import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pporderlines2 } from '../entities/entities/Pporderlines2';
import { PPackages } from '../entities/entities/PPackages';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';
import { Pporderlines2Service } from './pporderlines2.service';
import { Pporderlines2Resolver } from './pporderlines2.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pporderlines2, PPackages, PanelSpeeds])],
  providers: [Pporderlines2Service, Pporderlines2Resolver],
})
export class Pporderlines2Module {}
