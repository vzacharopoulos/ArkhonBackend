import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SortOrder } from 'src/coils/dto/coils-sort-input';

export enum Pporderlines2SortField {
  id = 'id',
  pporderno = 'pporderno',
  prodDate = 'prodDate',
  
}

registerEnumType(Pporderlines2SortField, {
  name: 'Pporderlines2SortField',
  
})

// SortOrder is registered in coils-sort-input; avoid duplicate registration here

@InputType()
export class Pporderlines2SortInput {
  @Field(() => Pporderlines2SortField)
  field: Pporderlines2SortField;

  @Field(() => SortOrder, { nullable: true })
  direction?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;

  @Field({ nullable: true })
  directionStr?: string;

  @Field({ nullable: true })
  orderStr?: string;
}
