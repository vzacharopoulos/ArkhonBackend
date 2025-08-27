import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createHash } from 'crypto';
import { pubSub } from '../common/pubsub';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { PubSub } from 'graphql-subscriptions';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersExt2.view';
import { TradecodeCustomer } from 'src/entities/views/TradecodeCustomer.view';

@Injectable()
export class Pporderlines2WatcherService {
  private previousHash = '';
  private readonly logger = new Logger(Pporderlines2WatcherService.name);
      private previousLineHashes: Record<number, string> = {};


  constructor(
    @InjectRepository(Pporderlines2)
    private readonly linesRepository: Repository<Pporderlines2>,
  ) {}

async checkForUpdates(): Promise<void> {
  this.logger.log('Running checkForUpdates()...');

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
    .leftJoinAndMapOne(
      'line.tradecodeCustomer',
      TradecodeCustomer,
      'tradecodeCustomer',
      'line.tradecode COLLATE SQL_Latin1_General_CP1_CI_AS = tradecodeCustomer.tradecode',
    )
    .where('line.isCanceled = :isCanceled', { isCanceled: 0 })
    .getMany();

  this.logger.debug(`Fetched ${lines.length} lines from database.`);

  const changedLines: Pporderlines2[] = [];

  for (const line of lines) {
    const cleanLine = {
      id: line.id,
      status: line.status,
      panelcode: line.panelcode,
      tradecode: line.tradecode,
      pporderno: line.pporderno,
      custporderno: line.custporderno,
      prodOrdersView: { moldout: line.prodOrdersView?.moldout },
      prodDate: line.prodDate?.toISOString() ?? null,
      upDate: line.upDate?.toISOString() ?? null,
    };

    const hash = createHash('md5').update(JSON.stringify(cleanLine)).digest('hex');
    const prevHash = this.previousLineHashes[line.id];

    if (hash !== prevHash) {
      changedLines.push(line);
      this.previousLineHashes[line.id] = hash;
    }
  }

  if (changedLines.length > 0) {
    for (const updatedLine of changedLines) {
      await pubSub.publish('pporderlineStatusChanged', {
        pporderlineStatusChanged: updatedLine,
      });
      this.logger.log(`Published update for line ID: ${updatedLine.id}`);
    }
  } else {
    this.logger.log('No changes detected.');
  }
}

  getPubSub(): PubSub {
    return pubSub;
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron(): Promise<void> {
    this.logger.log('Running scheduled cron job...');
    return this.checkForUpdates();
  }
}
