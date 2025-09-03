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
  private readonly logger = new Logger(Pporderlines2WatcherService.name);
  private previousLineHashes: Record<number, string> = {};
  private previousLines: Record<number, Pporderlines2> = {};
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
  const createdLines: Pporderlines2[] = [];
  const currentLines: Record<number, Pporderlines2> = {};
  const oldIds = new Set<number>(Object.keys(this.previousLineHashes).map(Number));

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

    currentLines[line.id] = line;

    if (!prevHash) {
      createdLines.push(line);
    } else if (hash !== prevHash) {
      changedLines.push(line);
    }

    this.previousLineHashes[line.id] = hash;
    oldIds.delete(line.id);
  }

  const deletedLines: Pporderlines2[] = [];
  for (const id of oldIds) {
    const prevLine = this.previousLines[id];
    if (prevLine) {
      deletedLines.push(prevLine);
    }
    delete this.previousLineHashes[id];
  }

  this.previousLines = currentLines;

  for (const line of createdLines) {
    await pubSub.publish('pporderlineCreated', {
      pporderlineCreated: line,
    });
    this.logger.log(`Published create for line ID: ${line.id}`);
  }

  for (const line of changedLines) {
    await pubSub.publish('pporderlineStatusChanged', {
      pporderlineStatusChanged: line,
    });
    this.logger.log(`Published update for line ID: ${line.id}`);
  }

  for (const line of deletedLines) {
    await pubSub.publish('pporderlineDeleted', {
      pporderlineDeleted: line,
    });
    this.logger.log(`Published delete for line ID: ${line.id}`);
  }

  if (createdLines.length === 0 && changedLines.length === 0 && deletedLines.length === 0) {
    this.logger.log('No changes detected.');
  }
}

  getPubSub(): PubSub {
    return pubSub;
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron(): Promise<void> {
    this.logger.log('Running scheduled cron job...');
    return this.checkForUpdates();
  }
}
