

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
import { applyIntFilter, applyStringFilter, StringFilter } from 'src/common/filtering helpers/filter.input';

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
      .leftJoinAndSelect('cus.pricecategory', 'pricecategory')
      .leftJoinAndSelect('cus.com', 'com')
      .leftJoinAndSelect('cus.geo', 'geo')
      .leftJoinAndSelect('cus.paymentterms', 'paymentterms')
      .leftJoinAndSelect('cus.cur', 'cur')
      .leftJoinAndSelect('cus.colidsalesman', 'colidsalesman')
      .leftJoinAndSelect('cus.colidcollector', 'colidcollector')
      .leftJoinAndSelect('cus.dlvtype', 'dlvtype')
      .leftJoinAndSelect('cus.shv', 'shv')
      .leftJoinAndSelect('cus.custaddresses', 'custaddresses')
      .leftJoinAndSelect('cus.custfindata', 'custfindata')
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




    const queryBuilder = this.prodOrdersRepo
      .createQueryBuilder('prodOrdersView')
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
      )

      // ✅ Join Pporderlines2 (One-to-One)
      .leftJoinAndMapOne(
        'prodOrdersView.pporderline', // Add this field to your ProdOrdersView entity
        Pporderlines2,
        'pporderline',
        'pporderline.CUSTPORDERNO COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
      )
      .where('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 })
      .andWhere('prodOrdersView.count = :count', { count: 0 });

    // Apply filters
  
// function normalizeStringFilter(val: string | StringFilter): StringFilter {
//   if (typeof val === 'string') {
//     return { eq: val };
//   }
//   return val;
// }


   applyStringFilter(queryBuilder, 'prodOrdersView.prodOrder', filter?.prodOrder/*normalizeStringFilter(filter?.prodOrder)*/, 'prodOrder');

  applyStringFilter(queryBuilder, 'prodOrdersView.tradecode', filter?.tradecode, 'tradecode');

 
applyStringFilter(queryBuilder, 'prodOrdersView.code', filter?.code, 'code');
 
    if (filter?.count !== undefined) {
      queryBuilder.andWhere('prodOrdersView.count = :count', {
        count: filter.count
      });
    }
   
    applyIntFilter(queryBuilder, 'prodOrdersView.ttm', filter?.ttm, 'ttm');


    // Apply sorting
    sorting?.forEach(({ field, direction }, index) => {
      if (index === 0) {
        queryBuilder.orderBy(`prodOrdersView.${field}`, direction);
      } else {
        queryBuilder.addOrderBy(`prodOrdersView.${field}`, direction);
      }
    });

    // Apply pagination
    if (paging?.offset) {
      queryBuilder.skip(paging.offset);
    }
    if (paging?.limit) {
      queryBuilder.take(paging.limit);
    }
    queryBuilder.getQueryAndParameters()

    const [nodes, totalCount] = await queryBuilder.getManyAndCount();

    // Return the response  
    return { nodes, totalCount };
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
