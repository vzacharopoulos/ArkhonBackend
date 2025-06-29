import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PPackages } from 'src/entities/entities/PPackages.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { Repository } from 'typeorm';
import { Pporderlines2FilterInput } from './dto/pporderlines-filter-input';
import { Pporders } from 'src/entities/entities/Pporders.entity';


@Injectable()
export class Pporderlines2Service {
  constructor(
    @InjectRepository(Pporderlines2)
    private readonly pporderlines2Repository: Repository<Pporderlines2>,
    @InjectRepository(PPackages)
    private readonly ppackagesRepository: Repository<PPackages>,
    @InjectRepository(PanelSpeeds)
    private readonly panelSpeedsRepository: Repository<PanelSpeeds>,
    @InjectRepository(ProdOrdersView)
    private readonly prodOrdersRepository: Repository<ProdOrdersView>,
     @InjectRepository(Pporders)
    private readonly ppordersRepository: Repository<Pporders>,
  ) {}

   async findAll(filter?: Pporderlines2FilterInput): Promise<Pporderlines2[]> {
    const qb = this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
      )
       .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'
      )
        .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })

    if (filter?.ppordernos && filter.ppordernos.length > 0) {
      qb.where('line.pporderno IN (:...ppordernos)', { ppordernos: filter.ppordernos });
    }
   
    return qb.getMany();

  }

  async findOne(id: number): Promise<Pporderlines2 | null> {
    return this.pporderlines2Repository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder'
        
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code'      )
 .andWhere('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .where('line.id = :id', { id })
      .getOne();

  }
 async getPporder(pporderno: string): Promise<Pporders | null> {
    return this.ppordersRepository.findOne({ where: { pporderno } });
}}