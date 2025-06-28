import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreatePpordersInput {
  @Field({ nullable: true })
  pporderno?: string;

  @Field(() => Int, { nullable: true })
  id?: number;
  
  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  finishDate?: Date;

    @Field(() => Date, { nullable: true })
  finishDateDatetime?: Date;

  @Field(() => Date, { nullable: true })
  startDateDatetime?: Date;

   @Field(() => Date, { nullable: true })
  estDateOfProdDatetime?: Date;


  @Field(() => Int, { nullable: true })
  status?: number;

  @Field({ nullable: true })
  panelcode?: string;

  @Field(() => Date, { nullable: true })
  estDateOfProd?: Date;

  @Field(() => Date, { nullable: true })
  createDate?: Date;

  @Field(() => Float, { nullable: true })
  quantity?: number;
}