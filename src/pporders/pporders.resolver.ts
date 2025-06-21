// src/pporders/pporders.resolver.ts
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PpordersService } from './pporders.service';
import { Pporders } from 'src/entities/entities/Pporders.entity';
import { CreatePpordersInput } from './dto/create-pporder.input';
import { UpdatePpordersInput } from './dto/update-pporder.input';


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
    @Args('pporderno', { type: () => String, nullable: true, description: 'Filter by PP order number' }) 
    pporderno?: string,
    
    @Args('status', { type: () => Int, nullable: true, description: 'Filter by status code' }) 
    status?: number
  ): Promise<Pporders[]> {
    if (pporderno) {
      return this.ppordersService.findByPporderno(pporderno);
    }
    
    
    return this.ppordersService.findAll();
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
  }
}