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
    const lines = await this.pporderlines2Repository.find();
    for (const line of lines) {
      line.packagesTotal = await this.getPPorderlines2Total(line.tradecode);
    }
    return lines;
  }

  async findOne(id: number): Promise<Pporderlines2 | null> {
    const line = await this.pporderlines2Repository.findOne({ where: { id } });
    if (!line) return null;
    line.packagesTotal = await this.getPPorderlines2Total(line.tradecode);
    return line;
  }

  private async getPPorderlines2Total(tradecode: string | null): Promise<number | null> {
    if (!tradecode) return null;
    const result = await this.ppackagesRepository
      .createQueryBuilder('p')
      .innerJoin(PanelSpeeds, 'ps', 'RTRIM(p.itename) = RTRIM(ps.code)')
      .where('p.tradecode = :tradecode', { tradecode })
      .select('SUM(p.quantity * ps.speed)', 'total')
      .getRawOne<{ total: string }>();
    return result?.total != null ? Number(result.total) : null;
  }
}