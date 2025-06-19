import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class PackageSpeedResult {
  @Field()
  description: string;

  @Field()
  code: string;

  @Field(() => Float)
  total: number;
}