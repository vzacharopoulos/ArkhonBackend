
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';

import { Pporders } from 'src/entities/entities/Pporders.entity';

@Injectable()
export class PpordersService {
  constructor(
    @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
  ) {}

  async findAll(): Promise<Pporders[]> {
    try {
      return await this.ppordersRepository.find();
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

  async findByPporderno(pporderno: string): Promise<Pporders[]> {
    try {
      return await this.ppordersRepository.find({ 
        where: { pporderno },
        order: { createDate: 'ASC' } // Optional: order by production date
      });
    } catch (error) {
      throw new Error(`Failed to fetch orders by pporderno: ${error.message}`);
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