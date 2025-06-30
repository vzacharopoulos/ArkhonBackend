import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MoreThanOrEqual, Repository } from 'typeorm';
import { Masterlength } from 'src/entities/views/Masterlength';
import { MasterlengthFilterInput } from './dto/Masterlength-filter-input';

@Injectable()
export class MasterlengthService {
  constructor(
    @InjectRepository(Masterlength)
    private readonly masterlengthRepository: Repository<Masterlength>,
  ) {}

findAll(filter?: MasterlengthFilterInput): Promise<Masterlength[]> {
  const query = this.masterlengthRepository
    .createQueryBuilder('master')
    .leftJoinAndSelect(
      'PanelSpeeds', // assuming this is the table name
      'panelSpeed',
      'master.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code COLLATE SQL_Latin1_General_CP1_CI_AS'
    );

  if (filter?.pporderno) {
    query.andWhere('master.pporderno = :pporderno', { pporderno: filter.pporderno });
  }

  if (Array.isArray(filter?.status) && filter.status.length > 0) {
    query.andWhere('master.status IN (:...status)', { status: filter.status });
  }

  if (filter?.lastDays) {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - filter.lastDays);
    query.andWhere('master.createDate >= :fromDate', { fromDate });
  }

  return query.orderBy('master.createDate', 'DESC').getMany();
}

  findOne(pporderno: string): Promise<Masterlength | null> {
    return this.masterlengthRepository.findOne({ where: { pporderno }
      });
  }
}