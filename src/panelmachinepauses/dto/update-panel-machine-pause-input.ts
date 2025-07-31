import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdatePauseDetailsInput {
  @Field(() => Int)
  id: number;

    @Field(() => Date,{ nullable: true })
  pausestartdate?: Date;


  @Field(() => Date, { nullable: true })
  pauseenddate?: Date;

  @Field(() => Int, { nullable: true })
  pauseduration?: number;

  @Field(() => String, { nullable: true })
  pausecomment?: string;
}