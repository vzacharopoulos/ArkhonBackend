import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coils } from '../entities/entities/Coils.entity';
import { CoilsService } from './coils.service';
import { CoilsResolver } from './coils.resolver';
import { UsersLocationAccessService } from 'src/userslocationaccess/userslocationaccess.service';
import { UsersLocationAccess } from 'src/entities/entities/UserLocationAccess.entity';
import { Location } from 'src/entities/entities/Location.entity';

@Module({
  imports: [
TypeOrmModule.forFeature([UsersLocationAccess,Coils,
      
      Location,]) ,// Add this],
],
  providers: [CoilsService, CoilsResolver,UsersLocationAccessService],
})
export class CoilsModule {}