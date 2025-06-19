import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';


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