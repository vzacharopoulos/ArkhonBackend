import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdordersviewService } from './paneproductionordersview-with-iscanceled.service';
import { ProdordersviewResolver } from './paneproductionordersview-with-iscanceled.resolver';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';



@Module({
  imports: [TypeOrmModule.forFeature([ProdOrdersView])],
  providers: [ProdordersviewService, ProdordersviewResolver],
})
export class ProdordersviewModule {}
