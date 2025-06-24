import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class IntEqInput {
  @Field(() => Int, { nullable: true })
  eq?: number;
}

@InputType()
export class Pporderlines2FilterInput {
  @Field(() => [String], { nullable: true })
  ppordernos?: string[];
}