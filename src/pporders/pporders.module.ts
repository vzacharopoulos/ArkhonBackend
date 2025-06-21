import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PpordersService } from './pporders.service';
import { PpordersResolver } from './pporders.resolver';
import { Pporders } from 'src/entities/entities/Pporders.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pporders]), // Register entity with TypeORM
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Generates schema.gql file automatically
      include: [PpordersModule], // Include this module's resolvers
    }),
  ],
  providers: [
    PpordersService,
    PpordersResolver,
  ],
  exports: [
    PpordersService, // Export service if needed by other modules
    TypeOrmModule.forFeature([Pporders]), // Export repository if needed
  ],
})
export class PpordersModule {}
