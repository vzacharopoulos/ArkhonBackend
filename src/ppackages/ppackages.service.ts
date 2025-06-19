import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PPackages } from '../entities/entities/PPackages';
import { PanelSpeeds } from '../entities/entities/PanelSpeeds';

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

    const trimmedDesc = pkg.description?.trim();
    if (trimmedDesc) {
      const speedRecord = await this.panelSpeedsRepository
        .createQueryBuilder('ps')
        .where('RTRIM(ps.code) = :code', { code: trimmedDesc })
        .getOne();

      if (speedRecord && pkg.quantity != null) {
        pkg.total = Number(pkg.quantity) * Number(speedRecord.speed ?? 0);
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
