import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateCompletePauseInput {
  @Field(() => Int)
  pporderid: number;

  @Field(() => Date)
  pausestartdate: Date;

  @Field(() => Date)
  pauseenddate: Date;

  @Field(() => Int)
  pauseduration: number;

  @Field(() => String, { nullable: true })
  pausecomment?: string;
}
