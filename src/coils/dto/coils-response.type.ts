import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { CoilType } from '../coils.resolver';

@ObjectType()
export class CoilsResponse {
  @Field(() => [CoilType])
  nodes: CoilType[];

  @Field(() => Int)
  totalCount: number;

  @Field(() => Float)
  totalWeight: number;
}
