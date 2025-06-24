import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';


import { Pporders } from 'src/entities/entities/Pporders.entity';
import { PpordersFilterInput } from './dto/pporders-filter-input';

@Injectable()
export class PpordersService {
  constructor(
    @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
  ) {}

  async findAll(filter?: PpordersFilterInput): Promise<Pporders[]> {
    try {
      const where: any = {};
      if (filter?.pporderno) {
        where.pporderno = filter.pporderno;
      }
      if (typeof filter?.status === 'number') {
        where.status = filter.status;
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

  async update(id: number, input: UpdatePpordersInput): Promise<Pporders> {
    const order = await this.ppordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
    Object.assign(order, input);
    return this.ppordersRepository.save(order);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.ppordersRepository.delete(id);
    return result.affected !== undefined && result.affected > 0;
  }
}