import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class CoilColorType {
  @Field(() => Int)
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  hexcode?: string;

  @Field(() => Int, { nullable: true })
  priority?: number;

  @Field(() => Int, { nullable: true })
  groupid?: number;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field(() => Int, { nullable: true })
  isPvc?: number;
}
