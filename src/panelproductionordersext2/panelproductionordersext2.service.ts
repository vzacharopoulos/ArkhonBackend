import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';

@Injectable()
export class Panelproductionordersext2Service {
  constructor(
    @InjectRepository(PanelProductionOrdersExt2)
    private readonly prodOrdersRepo: Repository<PanelProductionOrdersExt2>,
  ) {}

  findAll(): Promise<PanelProductionOrdersExt2[]> {
    return this.prodOrdersRepo.find();
  }

  findOne(prodOrder: string): Promise<PanelProductionOrdersExt2 | null> {
    return this.prodOrdersRepo.findOne({ where: { prodOrder } });
  }
}
