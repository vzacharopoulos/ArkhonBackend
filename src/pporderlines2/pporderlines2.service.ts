import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';


@Injectable()
export class Pporderlines2Service {
  constructor(
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(PPackages)
    private readonly ppackagesRepository: Repository<PPackages>,
    @InjectRepository(PanelSpeeds)
    private readonly panelSpeedsRepository: Repository<PanelSpeeds>,
  ) {}

  async findAll(): Promise<Pporderlines2[]> {
    return  this.pporderlines2Repository.find();
    
  }

  async findOne(id: number): Promise<Pporderlines2 | null> {
    return this.pporderlines2Repository.findOne({ where: { id } });
    
  }

}