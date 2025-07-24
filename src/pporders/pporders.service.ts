import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, In } from 'typeorm';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';


import { Pporders } from 'src/entities/entities/Pporders.entity';
import { PpordersFilterInput } from './dto/pporders-filter-input';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { getLocalTime } from 'src/common/utils/fixtimezone';

@Injectable()
export class PpordersService {
  constructor(
    @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
  ) {}

  async findAll(filter?: PpordersFilterInput): Promise<Pporders[]> {
    try {
      const where: any = {};
      if (filter?.pporderno) {
        where.pporderno = filter.pporderno;
      }
      if (Array.isArray(filter?.status)) {
      if (filter.status.length > 0) {
        where.status = In(filter.status);
      } 
    }
  
      if (filter?.lastDays )
         {
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - (filter.lastDays as number));
        where.createDate = MoreThanOrEqual(fromDate);
      }
      return await this.ppordersRepository.find({
        where,
        order: { createDate: 'DESC' },
      });
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
      
      return order;
    } catch (error) {
      throw new Error(`Failed to fetch order: ${error.message}`);
    }
  }


  async create(input: CreatePpordersInput): Promise<Pporders> {
    const newOrder = this.ppordersRepository.create(input);
    return this.ppordersRepository.save(newOrder);
  }

  async update(id: number, update: UpdatePpordersInput): Promise<Pporders> {
    const order = await this.ppordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
    Object.assign(order, update);
    const saved = await this.ppordersRepository.save(order);

    if (update.status ===14 && order.pporderno) {
      await this.pporderlines2Repository.update(
        { pporderno: order.pporderno },
        { status: 14, upDate: getLocalTime() },
      );
    }

     if (update.status ===1 && order.pporderno) {
      await this.pporderlines2Repository.update(
        { pporderno: order.pporderno },
        { status: 1, upDate: new Date() },
      );
    }
     
    return saved;
  }
  async delete(id: number): Promise<boolean> {
    const result = await this.ppordersRepository.delete(id);
    return result.affected !== undefined && result.affected > 0;
  }

  async getPporderlines(pporderno: string): Promise<Pporderlines2[]> {
    return this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
      )
      .where('line.pporderno = :pporderno', { pporderno })
      .getMany();
  }

   async getTotalTime(pporderno: string): Promise<number> {
    const lines = await this.getPporderlines(pporderno);
    return lines.reduce((sum, l) => sum + (l.prodOrdersView?.time ?? 0), 0);
  }
 async getTotalTtm(pporderno: string): Promise<number> {
    const lines = await this.getPporderlines(pporderno);
    return lines.reduce((sum, l) => sum + (l.prodOrdersView?.ttm ?? 0), 0);
  }

}