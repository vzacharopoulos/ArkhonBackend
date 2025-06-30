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
    const where: any = {};

    if (filter?.pporderno) {
      where.pporderno = filter.pporderno;
    }

    if (Array.isArray(filter?.status)) {
      if (filter.status.length > 0) {
        where.status = In(filter.status);
      } 
    }

    if (filter?.lastDays) {
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - filter.lastDays);
      where.createDate = MoreThanOrEqual(fromDate);
    }

    return this.masterlengthRepository.find({
      where,
      order: { createDate: 'DESC' },
    });
  }

  findOne(pporderno: string): Promise<Masterlength | null> {
    return this.masterlengthRepository.findOne({ where: { pporderno } });
  }
}