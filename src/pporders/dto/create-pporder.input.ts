import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreatePpordersInput {
  @Field({ nullable: true })
  pporderno?: string;


  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  finishDate?: Date;

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