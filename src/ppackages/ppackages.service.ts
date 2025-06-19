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
    const packages = await this.ppackagesRepository.find();
    const speeds = await this.panelSpeedsRepository.find();
    const speedMap = new Map(
      speeds.map((s) => [s.code.trim(), s.speed ?? 0]),
    );
    return packages.map((p) => {
      const speed = speedMap.get(p.description?.trim() ?? '');
      if (speed != null && p.quantity != null) {
        p.total = Number(p.quantity) * Number(speed);
      }
      return p;
    });
  }

  async findOne(id: number): Promise<PPackages | null> {
    const pkg = await this.ppackagesRepository.findOne({ where: { id } });
    if (!pkg) return null;
    if (pkg.description) {
      const speed = await this.panelSpeedsRepository.findOne({
        where: { code: pkg.description.trim() },
      });
      if (speed && pkg.quantity != null) {
        pkg.total = Number(pkg.quantity) * Number(speed.speed ?? 0);
      }
    }
    return pkg;
  }

  async calculateQuantitySpeed(): Promise<{ description: string; code: string; total: number }[]> {
    return this.ppackagesRepository
      .createQueryBuilder('p')
      .innerJoin(PanelSpeeds, 'ps', 'RTRIM(p.description) = RTRIM(ps.code)')
      .select('p.description', 'description')
      .addSelect('ps.code', 'code')
      .addSelect('SUM(p.quantity * ps.speed)', 'total')
      .groupBy('p.description')
      .addGroupBy('ps.code')
      .getRawMany();
  }
}