import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';


@Injectable()
export class PpackagesService {
  constructor(
    @InjectRepository(PPackages)
    private readonly ppackagesRepository: Repository<PPackages>,
    @InjectRepository(PanelSpeeds)
    private readonly panelSpeedsRepository: Repository<PanelSpeeds>,
  ) {}

  async findAll(): Promise<PPackages[]> {
 return this.ppackagesRepository.find({ relations: { panelSpeed: true } });
  }

  async findOne(id: number): Promise<PPackages | null> {
    return this.ppackagesRepository.findOne({ 
      where: { id },
      relations: {panelSpeed:true}
     });
   

    }
}