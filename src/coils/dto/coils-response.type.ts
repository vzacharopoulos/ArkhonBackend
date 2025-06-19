import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CoilType } from '../coils.resolver';

@ObjectType()
export class CoilsResponse {
  @Field(() => [CoilType])
  nodes: CoilType[];

  @Field(() => Int)
  totalCount: number;
}