import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductionPlanningService } from './production-planning.service';
import { OrderLineCompletion } from './dto/order-line-completion.type';
import { SchedulingUtils } from './scheduling-utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';
import { Repository } from 'typeorm';
import { Pporders } from 'src/entities/entities/Pporders.entity';

@Resolver()
export class ProductionPlanningResolver {
  constructor(private readonly planningService: ProductionPlanningService,
          @InjectRepository(Pporderlines2)
          private readonly linesRepo: Repository<Pporderlines2>,
          
  ) {}

  @Query(() => [OrderLineCompletion])
  async orderLinesCompletionSnapshot(
    @Args('pporderno') pporderno: string,
  ): Promise<OrderLineCompletion[]> {
    return this.planningService.getOrderLinesCompletionSnapshot(pporderno);
  }

@Mutation(() => Pporders, { nullable: true })
  async startOrder(
    @Args('pporderno') pporderno: string,
  ): Promise<Pporders | null> {
    return this.planningService.startOrder(pporderno);
  }
}

