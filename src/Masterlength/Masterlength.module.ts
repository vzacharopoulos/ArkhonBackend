import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Masterlength } from 'src/entities/views/Masterlength';
import { MasterlengthService } from './Mastelength.service';
import { MasterlengthResolver } from './Masterlength.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Masterlength])],
  providers: [MasterlengthService, MasterlengthResolver],
})
export class MasterlengthModule {}