import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { Customer } from 'src/entities/atlantisEntities/Customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer], 'atlantisdb')],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}