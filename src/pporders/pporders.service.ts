import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, In } from 'typeorm';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';


import { Pporders } from 'src/entities/entities/Pporders.entity';
import { PpordersFilterInput } from './dto/pporders-filter-input';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { getLocalTime } from 'src/common/utils/fixtimezone';
import { PanelMachinePauses } from 'src/entities/entities/PanelMachinePauses.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { PporderGroupIn } from './dto/pporder-group.output';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';
import { Customer } from 'src/entities/atlantisEntities/Customer.entity';
import { TradecodeCustomer } from 'src/entities/views/TradecodeCustomer.view';

@Injectable()
export class PpordersService {
  constructor(
    @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(PanelMachinePauses)
    private readonly panelMachinePausesRepository: Repository<PanelMachinePauses>,
   
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
        relations: ['pauses'],
        where,
        order: { createDate: 'DESC' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch orders: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Pporders> {
    try {
      const order = await this.ppordersRepository.findOne({ where: { id }
        
      , relations: [ 'pauses'] });
      
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
    const order = await this.ppordersRepository.findOne({ where: { id } , relations: ['pauses'] });
    
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

  async getPausesForOrder(orderId: number): Promise<PanelMachinePauses[]> {
  return this.panelMachinePausesRepository.find({
    where: { pporderid: orderId },
    order: { pausestartdate: 'ASC' }
  });
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
       .leftJoinAndMapOne(
              'line.tradecodeCustomer',
              TradecodeCustomer,
              'tradecodeCustomer',
              'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode '
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

async getGroupIn(pporderno: string): Promise<PporderGroupIn[]> {
  // Get all lines for the master order in one query
  const lines = await this.pporderlines2Repository
    .createQueryBuilder('line')
    .leftJoinAndMapOne(
      'line.prodOrdersView',
      ProdOrdersView,
      'prodOrdersView',
      'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
    )
     .leftJoinAndMapOne(
              'line.tradecodeCustomer',
              TradecodeCustomer,
              'tradecodeCustomer',
              'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode '
            )
  

       .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
      )
    .leftJoinAndSelect('line.pporders', 'pporder')
    .where('pporder.pporderno = :pporderno', { pporderno })
    .getMany();

  // Group by cin/thickin pairs and calculate totalTtm for each group
  const groups = new Map<string, {orders:Pporderlines2[]; cin: string; thickin: string; moldin: string; cout: string; thickout: string; moldout: string; totalTtm: number; tTime: number; count: number }>();

  for (const line of lines) {
    const orders = line.prodOrdersView ?? [];
    const cin = line.prodOrdersView?.cin;
    const thickin = line.prodOrdersView?.thickin;
    const moldin = line.prodOrdersView?.moldin;
    const cout = line.prodOrdersView?.cout;
    const thickout = line.prodOrdersView?.thickout;
    const moldout = line.prodOrdersView?.moldout;
    const ttm = line.prodOrdersView?.ttm ?? 0;
    const tTime = line.prodOrdersView?.time ?? 0;

    if (!cin || !thickin) continue;

    const key = `${cin}__${thickin}__${moldin}__${cout}__${thickout}__${moldout}`;

    if (!groups.has(key)) {
      groups.set(key, { orders:[],cin, thickin, moldin, cout, thickout, moldout, totalTtm: 0 , tTime: 0, count: 0 });
    }
    
    groups.get(key)!.totalTtm += ttm;
    groups.get(key)!.tTime += tTime;
    groups.get(key)!.count += 1;
    groups.get(key)!.orders.push(line);
  }

  // Convert to array format
  return Array.from(groups.values());
}

  


}