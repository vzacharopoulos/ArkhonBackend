import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Pporderlines2Service } from './pporderlines2.service';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';


@Resolver(() => Pporderlines2)
export class Pporderlines2Resolver {
  constructor(private readonly pporderlines2Service: Pporderlines2Service) {}

  @Query(() => [Pporderlines2])
  async pporderlines2(): Promise<Pporderlines2[]> {
    return this.pporderlines2Service.findAll();
  }

  @Query(() => Pporderlines2, { nullable: true })
  async pporderline2(@Args('id', { type: () => Int }) id: number): Promise<Pporderlines2 | null> {
    return this.pporderlines2Service.findOne(id);
  }
}