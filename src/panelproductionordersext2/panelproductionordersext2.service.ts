

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdOrdersViewFilterInput } from './dto/panelproductionordersext2-filter.input';
import { OffsetPaging } from './dto/paging.input';
import {ProdOrdersViewSortInput } from './dto/panelproductionordersext2-sort.input.ts';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2';
import { ProdOrdersViewResponse } from './dto/panelproductionordersext2-response.type';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';

@Injectable()
export class ProdOrdersViewService {
  constructor(
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepo: Repository<ProdOrdersView>,
        @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
  ) {}

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

      .where('prodOrdersView.isCanceled = :isCanceled', { isCanceled: 0 });

    // Apply filters
    if (filter?.prodOrder) {
      queryBuilder.andWhere('prodOrdersView.prodOrder = :prodOrder', { 
        prodOrder: filter.prodOrder 
      });
    }

    if (filter?.tradecode) {
      queryBuilder.andWhere('prodOrdersView.tradecode = :tradecode', { 
        tradecode: filter.tradecode 
      });
    }

    if (filter?.code) {
      queryBuilder.andWhere('prodOrdersView.code = :code', { 
        code: filter.code 
      });
    }

    if (filter?.isCanceled !== undefined) {
      queryBuilder.setParameter('isCanceled', filter.isCanceled ? 1 : 0);
    }

    // Apply count filter
    if (filter?.count !== undefined) {
      if (filter.count.eq !== undefined) {
        queryBuilder.andWhere('prodOrdersView.count = :countEq', { 
          countEq: filter.count.eq 
        });
      }
     
      if (filter.count.in && filter.count.in.length > 0) {
        queryBuilder.andWhere('prodOrdersView.count IN (:...countIn)', { 
          countIn: filter.count.in 
        });
      }
      if (filter.count.isNull !== undefined) {
        if (filter.count.isNull) {
          queryBuilder.andWhere('prodOrdersView.count IS NULL');
        } else {
          queryBuilder.andWhere('prodOrdersView.count IS NOT NULL');
        }
      }
    }

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

    const [nodes, totalCount] = await queryBuilder.getManyAndCount();
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
