import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CustomerResponse } from './dto/customer-response.type';
import { CustomerSortInput } from './dto/customer-sort.input';
import { CustomerFilterInput } from './dto/customer-filter.input';
import { OffsetPaging } from 'src/panelproductionordersext2/dto/paging.input';
import { Customer } from 'src/entities/atlantisEntities/Customer.entity';
import { IntFilter } from 'src/common/filtering helpers/filter.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer, 'atlantisdb')
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async findAll(
    filter?: CustomerFilterInput,
    sorting?: CustomerSortInput[],
    paging?: OffsetPaging,
  ): Promise<CustomerResponse> {
    const queryBuilder = this.customerRepository.createQueryBuilder('customer');

    if (filter?.afm) {
      queryBuilder.andWhere('customer.afm = :afm', { afm: filter.afm });
    }

    if (filter?.name) {
      queryBuilder.andWhere('customer.name = :name', { name: filter.name });
    }

    if (filter?.phone11) {
      queryBuilder.andWhere('customer.phone = :phone', { phone: filter.phone11 });
    }

    if (filter?.email) {
      queryBuilder.andWhere('customer.email = :email', { email: filter.email });
    }

    if (filter?.id) {
      this.applyIntFilter(queryBuilder, filter.id, 'customer.id');
    }


    sorting?.forEach(({ field, direction }, index) => {
      const orderField = `customer.${field}`;
      if (index === 0) {
        queryBuilder.orderBy(orderField, direction);
      } else {
        queryBuilder.addOrderBy(orderField, direction);
      }
    });

    if (paging?.offset) {
      queryBuilder.skip(paging.offset);
    }
    if (paging?.limit) {
      queryBuilder.take(paging.limit);
    }
    queryBuilder
    .leftJoinAndSelect('customer.pricecategory', 'pricecategory')
    .leftJoinAndSelect('customer.com', 'com')
    .leftJoinAndSelect('customer.geo', 'geo')
    .leftJoinAndSelect('customer.paymentterms', 'paymentterms')
    .leftJoinAndSelect('customer.cur', 'cur')
    .leftJoinAndSelect('customer.colidsalesman', 'colidsalesman')
    .leftJoinAndSelect('customer.colidcollector', 'colidcollector')
    .leftJoinAndSelect('customer.dlvtype', 'dlvtype')
    .leftJoinAndSelect('customer.shv', 'shv')
    .leftJoinAndSelect('customer.custaddresses', 'custaddresses')
    .leftJoinAndSelect('customer.custfindata', 'custfindata');
    const [nodes, totalCount] = await queryBuilder.getManyAndCount();

    return { nodes, totalCount };
  }

findOne(id: number): Promise<Customer | null> {
  return this.customerRepository.findOne({
    where: { id },
    relations: [
      'pricecategory',
      'com',
      'geo',
      'paymentterms',
      'cur',
      'colidsalesman',
      'colidcollector',
      'dlvtype',
      'shv',
      'custaddresses',
      'custfindata',
      // ...add more as needed for deep nesting
    ],
  });
}
  private applyIntFilter(
    queryBuilder: SelectQueryBuilder<Customer>,
    filter: IntFilter,
    field: string,
  ) {
    if (filter.eq !== undefined) {
      queryBuilder.andWhere(`${field} = :${field}Eq`, { [`${field}Eq`]: filter.eq });
    }
    if (filter.gt !== undefined) {
      queryBuilder.andWhere(`${field} > :${field}Gt`, { [`${field}Gt`]: filter.gt });
    }
    if (filter.gte !== undefined) {
      queryBuilder.andWhere(`${field} >= :${field}Gte`, { [`${field}Gte`]: filter.gte });
    }
    if (filter.lt !== undefined) {
      queryBuilder.andWhere(`${field} < :${field}Lt`, { [`${field}Lt`]: filter.lt });
    }
    if (filter.lte !== undefined) {
      queryBuilder.andWhere(`${field} <= :${field}Lte`, { [`${field}Lte`]: filter.lte });
    }
    if (filter.in && filter.in.length > 0) {
      queryBuilder.andWhere(`${field} IN (:...${field}In)`, {
        [`${field}In`]: filter.in,
      });
    }
    if (filter.isNull !== undefined) {
      if (filter.isNull) {
        queryBuilder.andWhere(`${field} IS NULL`);
      } else {
        queryBuilder.andWhere(`${field} IS NOT NULL`);
      }
    }
  }
}