import { PpordersService } from './pporders.service';
import { PpordersResolver } from './pporders.resolver';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pporders])],
  providers: [
    PpordersService,
    PpordersResolver,
  ],
  exports: [PpordersService],
})
export class PpordersModule {}