import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FintradeSync } from 'src/entities/atlantisEntities/FintradeSync.entity';

@ObjectType()
export class FintradeSyncResponse {
  @Field(() => [FintradeSync])
  nodes: FintradeSync[];

  @Field(() => Int)
  totalCount: number;
}