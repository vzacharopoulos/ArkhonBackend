import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';

@Injectable()
export class PanelspeedsService {
  constructor(
    @InjectRepository(PanelSpeeds)
    private readonly panelspeedsRepository: Repository<PanelSpeeds>,
  ) {}

  findAll(): Promise<PanelSpeeds[]> {
    return this.panelspeedsRepository.find();
  }

  findOne(code: string): Promise<PanelSpeeds | null> {
    return this.panelspeedsRepository.findOne({ where: { code } });
  }
}
