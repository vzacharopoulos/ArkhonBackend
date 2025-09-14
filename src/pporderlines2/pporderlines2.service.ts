import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository, Not, IsNull } from 'typeorm';
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

    sorting?.forEach((s: any, index: number) => {
      const normalize = (v: any): 'ASC' | 'DESC' | undefined => {
        if (v === undefined || v === null) return undefined;
        const val = String(v).toUpperCase();
        return val === 'ASC' || val === 'DESC' ? (val as 'ASC' | 'DESC') : undefined;
      };
      const dir =
        normalize(s?.direction) ??
        normalize(s?.order) ??
        normalize(s?.directionStr) ??
        normalize(s?.orderStr);
      const field = s?.field;
      if (!field || !dir) return;
      if (index === 0) {
        qb.orderBy(`line.${field}`, dir);
      } else {
        qb.addOrderBy(`line.${field}`, dir);
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

  // Simple repository-based query using relations (no query builder)
  async findAllWithOrderRelation(): Promise<Pporderlines2[]> {
    return this.pporderlines2Repository.find({
      where: { pporderno: Not(IsNull()) },
      relations: { pporders: true },
      order: { id: 'ASC' },
    });
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

    // Order start/finish and rescheduling are handled by the planning service (watcher)

    return line;
  }
}
