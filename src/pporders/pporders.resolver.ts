import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { PpordersService } from './pporders.service';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';
import { PpordersFilterInput } from './dto/pporders-filter-input';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';



@Resolver(() => Pporders)
export class PpordersResolver {
  constructor(private readonly ppordersService: PpordersService) {}

  // Get single order by ID
  @Query(() => Pporders, { name: 'pporder', description: 'Get a single production order by ID' })
  async getPporder(
    @Args('id', { type: () => Int, description: 'The ID of the production order' }) id: number
  ): Promise<Pporders> {
    return this.ppordersService.findOne(id);
  }

  // Get all orders with optional filtering
  @Query(() => [Pporders], { name: 'pporders', description: 'Get all production orders' })
  async getAllPporders(
    @Args('filter', { type: () => PpordersFilterInput, nullable: true })
    filter?: PpordersFilterInput,
  ): Promise<Pporders[]> {
    return this.ppordersService.findAll(filter);
  }

  @ResolveField('pporderlines', () => [Pporderlines2])
  async getPporderlines(@Parent() order: Pporders): Promise<Pporderlines2[]> {
    if (!order.pporderno) return [];
    return this.ppordersService.getPporderlines(order.pporderno);
  }

   @ResolveField('totalTime', () => Number, { nullable: true })
  async getTotalTime(@Parent() order: Pporders): Promise<number | null> {
    if (!order.pporderno) return null;
    return this.ppordersService.getTotalTime(order.pporderno);
  }

  // Create new order
  @Mutation(() => Pporders, { description: 'Create a new production order' })
  async createPporder(
    @Args('input', { type: () => CreatePpordersInput }) input: CreatePpordersInput
  ): Promise<Pporders> {
    return this.ppordersService.create(input);
  }

  // Update existing order
  @Mutation(() => Pporders, { description: 'Update an existing production order' })
  async updatePporder(
    @Args('id', { type: () => Int }) id: number,
    @Args('input', { type: () => UpdatePpordersInput }) input: UpdatePpordersInput
  ): Promise<Pporders> {
    return this.ppordersService.update(id, input);
  }

  // Delete order
  @Mutation(() => Boolean, { description: 'Delete a production order' })
  async deletePporder(
    @Args('id', { type: () => Int }) id: number
  ): Promise<boolean> {
    return this.ppordersService.delete(id);
  }}