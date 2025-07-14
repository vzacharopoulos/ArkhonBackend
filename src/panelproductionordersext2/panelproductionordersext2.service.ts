import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PanelProductionOrdersExt2 } from 'src/entities/views/PanelProductionOrdersExt2';
import { PanelProductionOrdersExt2FilterInput } from './dto/panelproductionordersext2-filter.input';
import { PanelProductionOrdersExt2SortInput } from './dto/panelproductionordersext2-sort.input.ts';

@Injectable()
export class Panelproductionordersext2Service {
  constructor(
    @InjectRepository(PanelProductionOrdersExt2)
    private readonly prodOrdersRepo: Repository<PanelProductionOrdersExt2>,
  ) {}

  
  async findAll(
    filter?: PanelProductionOrdersExt2FilterInput,
    sorting?: PanelProductionOrdersExt2SortInput[],
    limit?: number,
    offset?: number,
  ): Promise<{ nodes: PanelProductionOrdersExt2[]; totalCount: number }> {
    const qb = this.prodOrdersRepo.createQueryBuilder('order');

    if (filter?.prodOrder) {
      qb.andWhere('order.prodOrder = :prodOrder', { prodOrder: filter.prodOrder });
    }
    if (filter?.tradecode) {
      qb.andWhere('order.tradecode = :tradecode', { tradecode: filter.tradecode });
    }
    if (filter?.materialCode) {
      qb.andWhere('order.materialCode = :materialCode', {
        materialCode: filter.materialCode,
      });
    }

    if (sorting && sorting.length > 0) {
      sorting.forEach(({ field, direction }) => {
        qb.addOrderBy(`order.${field}`, direction);
      });
    }

    const totalCount = await qb.getCount();

    if (limit !== undefined) {
      qb.take(limit);
    }
    if (offset !== undefined) {
      qb.skip(offset);
    }

    const nodes = await qb.getMany();
    return { nodes, totalCount };
  }

  findOne(prodOrder: string): Promise<PanelProductionOrdersExt2 | null> {
    return this.prodOrdersRepo.findOne({ where: { prodOrder } });
  }
}


