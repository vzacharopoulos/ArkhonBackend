import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pporderlines2 } from '../entities/entities/Pporderlines2';
import { PPackages } from '../entities/entities/PPackages';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';

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
    const lines = await this.pporderlines2Repository.find();
    for (const line of lines) {
      line.packagesTotal = await this.getPackagesTotal(line.tradecode);
    }
    return lines;
  }

  async findOne(id: number): Promise<Pporderlines2 | null> {
    const line = await this.pporderlines2Repository.findOne({ where: { id } });
    if (!line) return null;
    line.packagesTotal = await this.getPackagesTotal(line.tradecode);
    return line;
  }

  private async getPackagesTotal(tradecode: string | null): Promise<number | null> {
    if (!tradecode) return null;
    const result = await this.ppackagesRepository
      .createQueryBuilder('p')
      .innerJoin(PanelSpeeds, 'ps', 'RTRIM(p.description) = RTRIM(ps.code)')
      .where('p.tradecode = :tradecode', { tradecode })
      .select('SUM(p.quantity * ps.speed)', 'total')
      .getRawOne<{ total: string }>();
    return result?.total != null ? Number(result.total) : null;
  }
}
