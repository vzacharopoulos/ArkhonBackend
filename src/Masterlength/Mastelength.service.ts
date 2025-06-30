import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Masterlength } from 'src/entities/views/Masterlength';

@Injectable()
export class MasterlengthService {
  constructor(
    @InjectRepository(Masterlength)
    private readonly masterlengthRepository: Repository<Masterlength>,
  ) {}

  findAll(): Promise<Masterlength[]> {
    return this.masterlengthRepository.find();
  }

  findOne(pporderno: string): Promise<Masterlength | null> {
    return this.masterlengthRepository.findOne({ where: { pporderno } });
  }
}