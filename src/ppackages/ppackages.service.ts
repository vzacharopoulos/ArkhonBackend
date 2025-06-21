import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';
import { PpackagesSummary } from './dto/ppackages-summary.type';


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
   
     async groupByAttributes(): Promise<PpackagesSummary[]> {
    return this.ppackagesRepository
      .createQueryBuilder('pkg')
      .leftJoin('pkg.panelSpeed', 'panelSpeed')
      .select('pkg.itename', 'itename')
      .addSelect('pkg.tradecode', 'tradecode')
      .addSelect('pkg.cin', 'cin')
      .addSelect('pkg.cout', 'cout')
      .addSelect('pkg.thickin', 'thickin')
      .addSelect('pkg.thickout', 'thickout')
      .addSelect('pkg.moldin', 'moldin')
      .addSelect('pkg.moldout', 'moldout')
      .addSelect('SUM(pkg.quantity * panelSpeed.speed)', 'totalProductionTime')
      .groupBy('pkg.itename')
      .addGroupBy('pkg.tradecode')
      .addGroupBy('pkg.cin')
      .addGroupBy('pkg.cout')
      .addGroupBy('pkg.thickin')
      .addGroupBy('pkg.thickout')
      .addGroupBy('pkg.moldin')
      .addGroupBy('pkg.moldout')
      .getRawMany();
  }




}