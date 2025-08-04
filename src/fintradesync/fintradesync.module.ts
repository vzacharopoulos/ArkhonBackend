import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FintradeSyncService } from './fintradesync.service';
import { FintradeSyncResolver } from './fintradesync.resolver';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FintradeSync], 'atlantisdb')],
  providers: [FintradeSyncService, FintradeSyncResolver],
})
export class FintradeSyncModule {}