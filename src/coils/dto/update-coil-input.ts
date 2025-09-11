// src/modules/coils/dto/update-coil.input.ts

import { InputType, Field, Int, PartialType, Float, ID } from '@nestjs/graphql';
import { CreateCoilInput } from './create-coil-input';



@InputType()
export class UpdateCoilInput extends PartialType(CreateCoilInput) {
  @Field({ nullable: true })
  comments?: string;

   @Field(() => Boolean, { nullable: true })
  isLoaded?: boolean;

  @Field(() => Date, { nullable: true })
  loadDate?: Date;

  @Field({ nullable: true })
  color?: string;

  @Field(() => Int, { nullable: true })
  loc?: number;

  @Field(() => Float, { nullable: true })
  thickness?: number;

  @Field(() => Float, { nullable: true })
  widthCoil?: number;

  @Field(() => Float, { nullable: true })
  currWeight?: number;

  @Field({ nullable: true })
    commentsPanel: string | null;
  
     @Field({ nullable: true })
      cutComment: string | null;

        @Field({ nullable: true })
      prodComment: string | null;

        @Field(() => Int, { nullable: true })
  shipBayNo?: number;
    

  // Add more fields from CreateCoilInput as needed...
}

@InputType()
export class UpdateOneCoilInput {
  @Field(() => Int)
  id: number;

  @Field(() => UpdateCoilInput)
  update: UpdateCoilInput;
}

