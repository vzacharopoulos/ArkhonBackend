

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdOrdersViewFilterInput } from './dto/panelproductionordersext2-filter.input';
import { OffsetPaging } from './dto/paging.input';
import { ProdOrdersViewSortInput } from './dto/panelproductionordersext2-sort.input.ts';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { ProdOrdersViewResponse } from './dto/panelproductionordersext2-response.type';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';
import { applyDateFilter, applyIntFilter, applyStringFilter, StringFilter } from 'src/common/filtering helpers/filter.input';

@Injectable()
export class ProdOrdersViewService {
  constructor(
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepo: Repository<ProdOrdersView>,
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(FintradeSync, 'atlantisdb') // 👈 this line!
    private readonly fintradeSyncRepo: Repository<FintradeSync>,
  ) { }

  async findFintradeSync(tradecode: string) {
    if (!tradecode) return null;
    return this.fintradeSyncRepo.createQueryBuilder('fintradeSync')
      .leftJoinAndSelect('fintradeSync.cus', 'cus')
      // .leftJoinAndSelect('cus.pricecategory', 'pricecategory')
      .leftJoinAndSelect('cus.com', 'com')
      .leftJoinAndSelect('cus.geo', 'geo')
      // .leftJoinAndSelect('cus.paymentterms', 'paymentterms')
      // .leftJoinAndSelect('cus.cur', 'cur')
      .leftJoinAndSelect('cus.colidsalesman', 'colidsalesman')
      // .leftJoinAndSelect('cus.colidcollector', 'colidcollector')
      // .leftJoinAndSelect('cus.dlvtype', 'dlvtype')
      // .leftJoinAndSelect('cus.shv', 'shv')
      // .leftJoinAndSelect('cus.custaddresses', 'custaddresses')
      // .leftJoinAndSelect('cus.custfindata', 'custfindata')
      .leftJoinAndSelect('fintradeSync.salesman', 'salesman')
      .where('fintradeSync.tradecode = :tradecode', { tradecode })


      .getOne();
  }

  async findByCount(count: number): Promise<ProdOrdersView[]> {
    return this.prodOrdersRepo.find({ where: { count } });
  }
async findAll(
  filter?: ProdOrdersViewFilterInput,
  sorting?: ProdOrdersViewSortInput[],
  paging?: OffsetPaging,
): Promise<ProdOrdersViewResponse> {

  console.log(FintradeSync)
  
  // Build FintradeSync query with filters
  const fintradeSyncQueryBuilder = this.fintradeSyncRepo
    .createQueryBuilder('fintradeSync')
    .select('fintradeSync.tradecode');

  // Apply status filter (default to [0, 1] if not specified)
  const statusFilter = filter?.fintradeSyncStatus ?? [0, 1];
  fintradeSyncQueryBuilder.where('fintradeSync.status IN (:...statuses)', { 
    statuses: statusFilter 
  });

  // Apply date filters
  
    applyDateFilter(fintradeSyncQueryBuilder, 'fintradeSync.ftrdate', filter.fintradeSyncDate, 'ftrdate');


  

  const validFintradeSyncRecords = await fintradeSyncQueryBuilder.getMany();
  const validTradecodesArray = validFintradeSyncRecords.map(record => record.tradecode);
  
  // If no valid tradecodes found, return empty result
  if (validTradecodesArray.length === 0) {
    return { nodes: [], totalCount: 0 };
  }

  // Handle large number of tradecodes by batching
  const BATCH_SIZE = 2000;
  let allFilteredNodes: ProdOrdersView[] = [];
  let totalFilteredCount = 0;

  const offset = paging?.offset ?? 0;
  const limit = paging?.limit ?? 100;

  // Process tradecodes in batches
  for (let i = 0; i < validTradecodesArray.length; i += BATCH_SIZE) {
    const batch = validTradecodesArray.slice(i, i + BATCH_SIZE);
    
    const batchQueryBuilder = this.prodOrdersRepo
      .createQueryBuilder('prodOrdersView')
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
          )
      .leftJoinAndMapOne(
        'prodOrdersView.pporderline',
        Pporderlines2,
        'pporderline',
        'pporderline.CUSTPORDERNO COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
      )
      .where('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })
      .andWhere('prodOrdersView.count = :count', { count: 0 })
      .andWhere('prodOrdersView.tradecode IN (:...batch)', { batch });

    // Apply ProdOrdersView filters
    applyStringFilter(batchQueryBuilder, 'prodOrdersView.prodOrder', filter?.prodOrder, 'prodOrder');
    applyStringFilter(batchQueryBuilder, 'prodOrdersView.tradecode', filter?.tradecode, 'tradecode');
    applyStringFilter(batchQueryBuilder, 'prodOrdersView.code', filter?.code, 'code');
    applyIntFilter(batchQueryBuilder, 'prodOrdersView.ttm', filter?.ttm, 'ttm');

    // Apply sorting
    sorting?.forEach(({ field, direction }, index) => {
      if (index === 0) {
        batchQueryBuilder.orderBy(`prodOrdersView.${field}`, direction);
      } else {
        batchQueryBuilder.addOrderBy(`prodOrdersView.${field}`, direction);
      }
    });

    const [batchNodes, batchCount] = await batchQueryBuilder.getManyAndCount();
    allFilteredNodes.push(...batchNodes);
    totalFilteredCount += batchCount;
  }

  // Apply pagination to the combined results
  const startIndex = offset;
  const endIndex = startIndex + limit;
  const paginatedNodes = allFilteredNodes.slice(startIndex, endIndex);

  return { 
    nodes: paginatedNodes, 
    totalCount: totalFilteredCount 
  };
}
  async findOne(prodOrder: string): Promise<ProdOrdersView | null> {
    return this.prodOrdersRepo
      .createQueryBuilder('prodOrdersView')
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
      )

      .leftJoinAndMapOne(
        'prodOrdersView.pporderline', // Add this field to your ProdOrdersView entity
        Pporderlines2,
        'pporderline',
        'pporderline.CUSTPORDERNO COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
      )
      .where('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })
      .andWhere('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })
      .getOne();
  }


}
