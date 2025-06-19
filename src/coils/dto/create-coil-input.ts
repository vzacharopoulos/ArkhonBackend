// src/modules/coils/dto/create-coil.input.ts

import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { openstatus } from './coils-enum-types';

@InputType()
export class CreateCoilInput {
  @Field()
  coilno: string;

  @Field({ nullable: true })
  comments?: string;

  @Field({ nullable: true })
  color?: string;

  @Field(() => Int, { nullable: true })
  loc?: number;

  @Field(() => Date, { nullable: true })
  upDate?: Date;

  @Field(() => Float, { nullable: true })
  thickness?: number;

  @Field(() => Float, { nullable: true })
  widthCoil?: number;

 
  @Field({ nullable: true })
  openstatus?: openstatus;

  @Field({ nullable: true })
  supplier?: string;

  @Field({ nullable: true })
  company?: string;

  @Field(() => Int, { nullable: true })
  statusId?: number;

@Field(() => Date, { nullable: true })
createDate: Date | null;

@Field(() => Date, { nullable: true })
delDate: Date | null;


  @Field(() => Float, { nullable: true })
  currWeight: number | null;

  @Field(() => Float, { nullable: true })
  
  initWeight: number | null;

   @Field({ nullable: true })
    commentsPanel: string | null;
  
     @Field({ nullable: true })
      cutComment: string | null;

        @Field({ nullable: true })
      prodComment: string | null;
    
}