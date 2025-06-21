import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';
import { Panelproductionordersext2Service } from './panelproductionordersext2.service';
import { Panelproductionordersext2Resolver } from './panelproductionordersext2.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PanelProductionOrdersExt2])],
  providers: [Panelproductionordersext2Service, Panelproductionordersext2Resolver],
})
export class Panelproductionordersext2Module {}