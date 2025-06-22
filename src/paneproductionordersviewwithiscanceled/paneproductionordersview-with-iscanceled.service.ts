import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { Repository } from 'typeorm';


@Injectable()
export class ProdordersviewService {
  constructor(
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepository: Repository<ProdOrdersView>,
  ) {}

  findAll(): Promise<ProdOrdersView[]> {
     return this.prodOrdersRepository.find({ relations: { panelSpeed: true } });
  }

  findOne(prodOrder: string): Promise<ProdOrdersView | null> {
   return this.prodOrdersRepository.findOne({
      where: { prodOrder },
      relations: { panelSpeed: true },
    });
}
}