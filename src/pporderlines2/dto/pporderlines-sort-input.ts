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

registerEnumType(SortOrder, {
  name: 'SortOrder',
  
});

@InputType()
export class Pporderlines2SortInput {
  @Field(() => Pporderlines2SortField)
  field: Pporderlines2SortField;

  @Field(() => SortOrder)
  direction: SortOrder;
}