import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Customer } from 'src/entities/atlantisEntities/Customer.entity';
import { CustomerService } from './customer.service';
import { CustomerResponse } from './dto/customer-response.type';
import { CustomerFilterInput } from './dto/customer-filter.input';
import { CustomerSortInput } from './dto/customer-sort.input';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';


@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => CustomerResponse, { name: 'customers' })
  async getCustomers(
    @Args('filter', { type: () => CustomerFilterInput, nullable: true })
    filter?: CustomerFilterInput,
    @Args('sorting', { type: () => [CustomerSortInput], nullable: true })
    sorting?: CustomerSortInput[],
    @Args('paging', { type: () => OffsetPaging, nullable: true })
    paging?: OffsetPaging,
  ): Promise<CustomerResponse> {
    return this.customerService.findAll(filter, sorting, paging);
  }

  @Query(() => Customer, { name: 'customer', nullable: true })
  async getCustomer(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Customer | null> {
    return this.customerService.findOne(id);
  }
}