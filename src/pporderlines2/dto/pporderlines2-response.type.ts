import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';

@ObjectType()
export class Pporderlines2Response {
  @Field(() => [Pporderlines2])
  nodes: Pporderlines2[];

  @Field(() => Int)
  totalCount: number;
}