import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createHash } from 'crypto';
import { pubSub } from '../common/pubsub';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { ProdOrdersView } from 'src/entities/views/PanelProductionOrdersview-with-iscanceled';
import { PanelSpeeds } from 'src/entities/views/PanelSpeeds';
import { PubSub } from 'graphql-subscriptions';
import { Cron, CronExpression } from '@nestjs/schedule';



@Injectable()
export class Pporderlines2WatcherService {
  private previousHash = '';
  private previousLines: Pporderlines2[] = []; // Store previous state
  private readonly logger = new Logger(Pporderlines2WatcherService.name);
  constructor(
    @InjectRepository(Pporderlines2)
    private readonly linesRepository: Repository<Pporderlines2>,
  ) {}

  async checkForUpdates(): Promise<void> {
    this.logger.log('Running checkForUpdates()...');

    const currentLines  = await this.linesRepository
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


 this.logger.debug(`Fetched ${currentLines.length} lines from database.`);

    const cleanLines = currentLines.map(line => ({
      id: line.id,
      status: line.status,
      panelcode: line.panelcode,
      tradecode: line.tradecode,
      pporderno: line.pporderno,
      custporderno: line.custporderno,
      prodDate: line.prodDate?.toISOString() ?? null,
      upDate: line.upDate?.toISOString() ?? null,
    }));

    // Sort to ensure deterministic order
    const sorted = cleanLines.sort((a, b) => a.id - b.id);
    const hash = createHash('md5').update(JSON.stringify(sorted)).digest('hex');
    
    this.logger.debug(`Computed hash: ${hash}`);
    this.logger.debug(`Previous hash: ${this.previousHash}`);

    if (hash !== this.previousHash) {
      this.logger.log('Change detected — analyzing differences...');
      
      // Find changed lines
      const changedLines = this.findChangedLines(this.previousLines, currentLines);
      
      if (changedLines.length > 0) {
        this.logger.log(`Changed lines (${changedLines.length}):`);
        changedLines.forEach(line => {
          this.logger.log(`- Line ID ${line.id}:`);
          this.logChanges(this.previousLines.find(pl => pl.id === line.id), line);
        });
      } else {
        this.logger.log('No individual line changes detected (hash change may be due to order change)');
      }

      this.previousHash = hash;
      this.previousLines = currentLines; // Store current state for next comparison

     const validLines = currentLines.filter(line => line.id != null);
  
  if (validLines.length !== currentLines.length) {
    this.logger.warn(`Filtered ${currentLines.length - validLines.length} lines with null IDs`);
  }

  await pubSub.publish('pporderlineStatusChanged', {
    pporderlineStatusChanged: validLines, // Only publish lines with IDs
  });


      this.logger.log('Published `pporderlineStatusChanged` subscription event.');
    } else {
      this.logger.log('No changes detected.');
    }
  }

  private findChangedLines(previousLines: Pporderlines2[], currentLines: Pporderlines2[]): Pporderlines2[] {
    if (!previousLines || previousLines.length === 0) {
      return currentLines; // First run, consider all as changed
    }

    return currentLines.filter(currentLine => {
      const previousLine = previousLines.find(pl => pl.id === currentLine.id);
      
      // If line didn't exist before or any field changed
      return !previousLine || 
        previousLine.status !== currentLine.status ||
        previousLine.panelcode !== currentLine.panelcode ||
        previousLine.tradecode !== currentLine.tradecode ||
        previousLine.pporderno !== currentLine.pporderno ||
        previousLine.custporderno !== currentLine.custporderno ||
        (previousLine.prodDate?.getTime() !== currentLine.prodDate?.getTime()) ||
        (previousLine.upDate?.getTime() !== currentLine.upDate?.getTime());
    });
  }

  private logChanges(previousLine: Pporderlines2 | undefined, currentLine: Pporderlines2): void {
    if (!previousLine) {
      this.logger.log('  - New line');
      return;
    }

    const changes: string[] = [];
    
    if (previousLine.status !== currentLine.status) {
            changes.push(`status: ${previousLine.status} →${previousLine.panelcode}${previousLine.tradecode} →${previousLine.pporderno} →
             ${previousLine.prodDate} →${previousLine.upDate} `);

      changes.push(`status: ${previousLine.status} → ${currentLine.status}`);
    }
    if (previousLine.panelcode !== currentLine.panelcode) {
      changes.push(`panelcode: ${previousLine.panelcode} → ${currentLine.panelcode}`);
    }
    if (previousLine.tradecode !== currentLine.tradecode) {
      changes.push(`tradecode: ${previousLine.tradecode} → ${currentLine.tradecode}`);
    }
    if (previousLine.pporderno !== currentLine.pporderno) {
      changes.push(`pporderno: ${previousLine.pporderno} → ${currentLine.pporderno}`);
    }
    if (previousLine.custporderno !== currentLine.custporderno) {
      changes.push(`custporderno: ${previousLine.custporderno} → ${currentLine.custporderno}`);
    }
    if (previousLine.prodDate?.getTime() !== currentLine.prodDate?.getTime()) {
      changes.push(`prodDate: ${previousLine.prodDate} → ${currentLine.prodDate}`);
    }
    if (previousLine.upDate?.getTime() !== currentLine.upDate?.getTime()) {
      changes.push(`upDate: ${previousLine.upDate} → ${currentLine.upDate}`);
    }

    if (changes.length > 0) {
      this.logger.log(`  - Changes: ${changes.join(', ')}`);
    } else {
      this.logger.log('  - No detectable field changes (may be related to joined entities)');
    }
  }
  getPubSub(): PubSub {
    return pubSub;
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron(): Promise<void> {
    this.logger.log('Running scheduled cron job...');
    return this.checkForUpdates();
  }
}
