import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PanelMachinePauses } from 'src/entities/entities/PanelMachinePauses.entity';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PanelMachinePausesService {
  constructor(
    @InjectRepository(PanelMachinePauses)
    private readonly pausesRepository: Repository<PanelMachinePauses>,
    @InjectRepository(Pporders)
    private readonly ordersRepository: Repository<Pporders>,
  ) {}

  async findAll(): Promise<PanelMachinePauses[]> {
    return this.pausesRepository.find({ relations: ['order'] });
  }

  async findById(id: number): Promise<PanelMachinePauses> {
    return this.pausesRepository.findOne({ 
      where: { id },
      relations: ['order'] 
    });
  }

  async findByOrderId(orderId: number): Promise<PanelMachinePauses[]> {
    return this.pausesRepository.find({ 
      where: { pporderid: orderId },
      order: { pausestartdate: 'ASC' },
      relations: ['order'] 
    });
  }

   async createCompletePause(input: {
    pporderid: number;
    pausestartdate: Date;
    pauseenddate: Date;
    pauseduration: number;
    pausecomment?: string;
  }): Promise<PanelMachinePauses> {
    const order = await this.ordersRepository.findOneBy({ id: input.pporderid });
    if (!order) {
      throw new Error('Order not found');
    }

    const pause = this.pausesRepository.create({
      pporderid: input.pporderid,
      pausestartdate: input.pausestartdate,
      pauseenddate: input.pauseenddate,
      pauseduration: input.pauseduration,
      pausecomment: input.pausecomment,
      order
    });

    return this.pausesRepository.save(pause);
  }

  async updatePauseDetails(input: {
    id: number;
    pausestartdate?: Date;
    pauseenddate?: Date;
    pauseduration?: number;
    pausecomment?: string;
  }): Promise<PanelMachinePauses> {
    const pause = await this.pausesRepository.findOneBy({ id: input.id });
    if (!pause) {
      throw new Error('Pause record not found');
    }
    if (input.pausestartdate) {
      pause.pausestartdate = input.pausestartdate;
    }

    if (input.pauseenddate) {
      pause.pauseenddate = input.pauseenddate;
    }

    if (input.pauseduration !== undefined) {
      pause.pauseduration = input.pauseduration;
    }

    if (input.pausecomment !== undefined) {
      pause.pausecomment = input.pausecomment;
    }

    return this.pausesRepository.save(pause);
  }


  async deletePause(id: number): Promise<boolean> {
    const result = await this.pausesRepository.delete(id);
    return result.affected > 0;
  }
}