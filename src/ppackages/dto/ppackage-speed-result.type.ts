import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class PackageSpeedResult {
  @Field()
  itename: string;

  @Field()
  code: string;

  @Field(() => Float)
  total: number;
}