import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createHash } from 'crypto';
import { pubSub } from '../common/pubsub';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class Pporderlines2WatcherService {
  private previousHash = '';

  constructor(
    @InjectRepository(Pporderlines2)
    private readonly linesRepository: Repository<Pporderlines2>,
  ) {}

  async checkForUpdates(): Promise<void> {
    const lines = await this.linesRepository
      .createQueryBuilder('line')
      .leftJoinAndMapOne(
        'line.prodOrdersView',
        ProdOrdersView,
        'prodOrdersView',
        'line.custporderno COLLATE SQL_Latin1_General_CP1_CI_AS = prodOrdersView.prodOrder',
      )
      .leftJoinAndMapOne(
        'prodOrdersView.panelSpeed',
        PanelSpeeds,
        'panelSpeed',
        'prodOrdersView.code COLLATE SQL_Latin1_General_CP1_CI_AS = panelSpeed.code',
      )
      .where('line.isCanceled = :isCanceled', { isCanceled: 0 })
      .getMany();

    const hash = createHash('md5').update(JSON.stringify(lines)).digest('hex');
    if (hash !== this.previousHash) {
      this.previousHash = hash;
      await pubSub.publish('pporderlinesUpdated', {
        pporderlinesUpdated: lines,
      });
    }
  }

  getPubSub(): PubSub {
    return pubSub;
  }
}