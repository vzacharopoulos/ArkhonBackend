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
  estStartDate: Date | null;

  @Field(() => Date, { nullable: true })
  estFinishDate: Date | null;

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


  @Field(() => Int, { nullable: true })
  previd: number | null;

  @Field({ nullable: true })
  prevpanelcode: string | null;

  @Field(() => Int, { nullable: true })
  offtimeduration: number | null;

  @Field(() => Date, { nullable: true })
  offtimestartdate: Date | null;

  @Field(() => Date, { nullable: true })
  offtimeenddate: Date | null;

}