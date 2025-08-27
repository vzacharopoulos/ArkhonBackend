import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';
import { Pporderlines2FilterInput } from './dto/pporderlines-filter-input';
import { Pporderlines2Response } from './dto/pporderlines2-response.type';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { UpdatePporderlineStatusInput } from './dto/update-pporderline-status-input';
import { getLocalTime } from 'src/common/utils/fixtimezone';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { applyDateFilter, applyIntFilter, applyStringFilter } from 'src/common/filtering helpers/filter.input';
import { Pporderlines2SortInput } from './dto/pporderlines-sort-input';
import { TradecodeCustomer } from 'src/entities/views/TradecodeCustomer.view';


@Injectable()
export class Pporderlines2Service {
  constructor(
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(PPackages)
    private readonly ppackagesRepository: Repository<PPackages>,
    @InjectRepository(PanelSpeeds)
    private readonly panelSpeedsRepository: Repository<PanelSpeeds>,
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepository: Repository<ProdOrdersView>,
     @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
  ) {}

  async findAll(
    filter?: Pporderlines2FilterInput,
    sorting?: Pporderlines2SortInput[],
    paging?: OffsetPaging,
  ): Promise<Pporderlines2Response> {
    const qb = this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder',
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code',
      )
        .leftJoinAndMapOne(
        'line.tradecodeCustomer',
        TradecodeCustomer,
        'tradecodeCustomer',
        'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode '
      )
      .andWhere('line.isCanceled = :isCanceled', {
        isCanceled: filter?.isCanceled ? 1 : 0,
      });

 
    applyStringFilter(qb, 'line.pporderno', filter?.ppordernos);
    applyStringFilter(qb, 'line.custporderno', filter?.custporderno);
    applyStringFilter(qb, 'line.tradecode', filter?.tradecode);
    applyIntFilter(qb, 'line.status', filter?.status);
    applyDateFilter(qb, 'line.prodDate', filter?.prodDate);

    sorting?.forEach(({ field, direction }, index) => {
      if (index === 0) {
        qb.orderBy(`line.${field}`, direction);
      } else {
        qb.addOrderBy(`line.${field}`, direction);
      }
    });

    if (paging?.offset) {
      qb.skip(paging.offset);
    }
    if (paging?.limit) {
      qb.take(paging.limit);
    }

    const [nodes, totalCount] = await qb.getManyAndCount();
    return { nodes, totalCount };
  }

  async findOne(id: number): Promise<Pporderlines2 | null> {
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
'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'      )
  .leftJoinAndMapOne(
        'line.tradecodeCustomer',
        TradecodeCustomer,
        'tradecodeCustomer',
        'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode '
      )
      .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .where('line.id = :id', { id })
      .getOne();

  }
 async getPporder(pporderno: string): Promise<Pporders | null> {
    return this.ppordersRepository.findOne({ where: { pporderno } });
}
//this doesnt really fire ever
async updateStatus(input: UpdatePporderlineStatusInput): Promise<Pporderlines2> {
    const { id, status } = input;
   
    // Find the line with proper joins and collation handling
    const line = await this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder '
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code '
      )
        .leftJoinAndMapOne(
        'line.tradecodeCustomer',
        TradecodeCustomer,
        'tradecodeCustomer',
        'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode'
      )
      .where('line.id = :id', { id })
      .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .getOne();
   
    if (!line) {
        throw new Error(`Line with ID ${id} not found`);
    }

    // Update line properties
    line.status = status;
    line.upDate = getLocalTime()
    await this.pporderlines2Repository.save(line);

    if (line.pporderno) {
        // Fix collation issue by using query builder with explicit collation
        const order = await this.ppordersRepository
            .createQueryBuilder('order')
            .where('order.pporderno  = :pporderno', {
                pporderno: line.pporderno
            })
            .getOne();

        if (order) {
            order.startDateDatetime = getLocalTime();
            await this.ppordersRepository.save(order);
        }
    }

    return line;
  }
}
