import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkingHours } from '../entities/entities/panelworkinghours';
import { UpdateWorkingHoursInput } from './dto/update-workinghours.input';

@Injectable()
export class PanelworkinghoursService {
  constructor(
    @InjectRepository(WorkingHours)
    private readonly workingHoursRepository: Repository<WorkingHours>,
  ) {}

  findAll(): Promise<WorkingHours[]> {
    return this.workingHoursRepository.find();
  }

  findOne(date: string): Promise<WorkingHours | null> {
    return this.workingHoursRepository.findOne({ where: { date } });
  }

  async update(date: string, update: UpdateWorkingHoursInput): Promise<WorkingHours> {
    let record = await this.workingHoursRepository.findOne({ where: { date } });

    if (!record) {
      record = this.workingHoursRepository.create({ date, ...update });
    } else {
      Object.assign(record, update);
    }

    return this.workingHoursRepository.save(record);
  }
}