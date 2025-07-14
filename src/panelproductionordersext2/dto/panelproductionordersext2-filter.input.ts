import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PanelProductionOrdersExt2FilterInput {
  @Field({ nullable: true })
  prodOrder?: string;

  @Field({ nullable: true })
  tradecode?: string;

  @Field({ nullable: true })
  materialCode?: string;
}