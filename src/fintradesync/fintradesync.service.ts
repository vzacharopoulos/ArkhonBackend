import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';
import { FintradeSyncResponse } from './dto/fintradesync-response.type';
import { FintradeSyncFilterInput } from './dto/fintradesync-filter.input';
import { FintradeSyncSortInput } from './dto/fintradesync-sort.input';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';


@Injectable()
export class FintradeSyncService {
  constructor(
    @InjectRepository(FintradeSync, 'atlantisdb')
    private readonly fintradeSyncRepo: Repository<FintradeSync>,
  ) {}

  async findAll(
    filter?: FintradeSyncFilterInput,
    sorting?: FintradeSyncSortInput[],
    paging?: OffsetPaging,
  ): Promise<FintradeSyncResponse> {
    const queryBuilder = this.fintradeSyncRepo.createQueryBuilder('fintradeSync');
console.log("MSSQL options:", this.fintradeSyncRepo.manager.connection.options);

    if (filter?.tradecode) {
      queryBuilder.andWhere('fintradeSync.tradecode = :tradecode', {
        tradecode: filter.tradecode,
      });
    }

    if (filter?.dsrnumber) {
      queryBuilder.andWhere('fintradeSync.dsrnumber = :dsrnumber', {
        dsrnumber: filter.dsrnumber,
      });
    }

    if (filter?.iscanceled !== undefined) {
      queryBuilder.andWhere('fintradeSync.iscanceled = :iscanceled', {
        iscanceled: filter.iscanceled ? 1 : 0,
      });
    }

    if (filter?.comid !== undefined) {
      const { eq, in: inValues, isNull } = filter.comid;
      if (eq !== undefined) {
        queryBuilder.andWhere('fintradeSync.comid = :comidEq', {
          comidEq: eq,
        });
      }
      if (inValues && inValues.length > 0) {
        queryBuilder.andWhere('fintradeSync.comid IN (:...comidIn)', {
          comidIn: inValues,
        });
      }
      if (isNull !== undefined) {
        if (isNull) {
          queryBuilder.andWhere('fintradeSync.comid IS NULL');
        } else {
          queryBuilder.andWhere('fintradeSync.comid IS NOT NULL');
        }
      }
    }

    sorting?.forEach(({ field, direction }, index) => {
      if (index === 0) {
        queryBuilder.orderBy(`fintradeSync.${field}`, direction);
      } else {
        queryBuilder.addOrderBy(`fintradeSync.${field}`, direction);
      }
    });

    if (paging?.offset) {
      queryBuilder.skip(paging.offset);
    }
    if (paging?.limit) {
      queryBuilder.take(paging.limit);
    }

    queryBuilder.leftJoinAndSelect('fintradeSync.cus', 'cus')
    .leftJoinAndSelect('cus.geo', 'geo')
        .leftJoinAndSelect(
  'fintradeSync.salesman',
  'salesman',
  `fintradeSync.colidsalesman = salesman.id AND fintradeSync.colidsalesman != -1`
);


const [nodes, totalCount] = await queryBuilder.getManyAndCount();
    return { nodes, totalCount };
  }

async findOne(id: number): Promise<FintradeSync | null> {
  return this.fintradeSyncRepo
    .createQueryBuilder('fintradeSync')
    .leftJoinAndSelect('fintradeSync.cus', 'cus')
    .leftJoinAndSelect('cus.geo', 'geo')
    .leftJoinAndSelect(
      'fintradeSync.salesman',
      'salesman',
      'fintradeSync.colidsalesman = salesman.id AND fintradeSync.colidsalesman != -1'
    )
    .where('fintradeSync.id = :id', { id })
    .getOne();
    
}}