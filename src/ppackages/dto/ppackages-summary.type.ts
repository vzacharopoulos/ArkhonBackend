import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class PpackagesSummary {
  @Field({ nullable: true })
  itename: string | null;

  @Field({ nullable: true })
  tradecode: string | null;

  @Field({ nullable: true })
  cin: string | null;

  @Field({ nullable: true })
  cout: string | null;

  @Field({ nullable: true })
  thickin: string | null;

  @Field({ nullable: true })
  thickout: string | null;

  @Field({ nullable: true })
  moldin: string | null;

  @Field({ nullable: true })
  moldout: string | null;

  @Field(() => Float)
  totalProductionTime: number;
}