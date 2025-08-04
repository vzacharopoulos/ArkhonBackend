import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Customer } from 'src/entities/atlantisEntities/Customer.entity';

@ObjectType()
export class CustomerResponse {
  @Field(() => [Customer])
  nodes: Customer[];

  @Field(() => Int)
  totalCount: number;
}