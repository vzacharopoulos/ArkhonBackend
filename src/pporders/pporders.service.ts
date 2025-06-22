import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';

import { Pporders } from 'src/entities/entities/Pporders.entity';

@Injectable()
export class PpordersService {
  constructor(
    @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(PanelSpeeds)
    private readonly panelSpeedsRepository: Repository<PanelSpeeds>,
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepository: Repository<ProdOrdersView>,
  ) {}

  private async gettimeSums(ppordernos: string[]): Promise<Record<string, number>> {
    if (ppordernos.length === 0) {
      return {};
    }

    const rows = await this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoin(ProdOrdersView, 'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder')
      .leftJoin(PanelSpeeds, 'panelSpeed',
        'panelSpeed.code COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.code')
      .select('line.pporderno', 'pporderno')
      .addSelect('SUM(panelspeed.speed)', 'timeSum')
      .where('line.pporderno IN (:...ppordernos)', { ppordernos })
      .groupBy('line.pporderno')
      .getRawMany<{ pporderno: string; timeSum: string }>();

    const result: Record<string, number> = {};
    for (const row of rows) {
      const value = parseFloat(row.timeSum);
      result[row.pporderno] = isNaN(value) ? 0 : value;
    }
    return result;
  }

  async findAll(): Promise<Pporders[]> {
    try {
      const orders = await this.ppordersRepository.find();
      const ppordernos = orders
        .map((o) => o.pporderno)
        .filter((v): v is string => v != null);
      const sums = await this.gettimeSums(ppordernos);
      for (const order of orders) {
        order.timeSum = order.pporderno ? sums[order.pporderno] ?? null : null;
      }
      return orders;
    } catch (error) {
      throw new Error(`Failed to fetch orders: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Pporders> {
    try {
      const order = await this.ppordersRepository.findOne({ where: { id } });

      if (!order) {
        throw new Error(`Order with ID ${id} not found`);
      }
      if (order.pporderno) {
        const sums = await this.gettimeSums([order.pporderno]);
        order.timeSum = sums[order.pporderno] ?? null;
      }
      return order;
    } catch (error) {
      throw new Error(`Failed to fetch order: ${error.message}`);
    }
  }

  async findByPporderno(pporderno: string): Promise<Pporders[]> {
    try {
      const orders = await this.ppordersRepository.find({
        where: { pporderno },
        order: { createDate: 'ASC' } // Optional: order by production date
      });
      const sums = await this.gettimeSums([pporderno]);
      for (const order of orders) {
        order.timeSum = sums[pporderno] ?? null;
      }
      return orders;
    } catch (error) {
      throw new Error(`Failed to fetch orders by pporderno: ${error.message}`);
    }
  }

  async create(input: CreatePpordersInput): Promise<Pporders> {
    const newOrder = this.ppordersRepository.create(input);
    return this.ppordersRepository.save(newOrder);
  }

  async update(id: number, input: UpdatePpordersInput): Promise<Pporders> {
    const order = await this.ppordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
    Object.assign(order, input);
    return this.ppordersRepository.save(order);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.ppordersRepository.delete(id);
    return result.affected !== undefined && result.affected > 0;
  }
}