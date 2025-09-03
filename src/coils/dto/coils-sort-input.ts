// src/coils/dto/coils-sort.input.ts
import { InputType, Field, registerEnumType } from '@nestjs/graphql';

/**
 * Ascending / Descending enum
 */
export enum SortOrder {
  //I WANT TO SAY IF IT IS asc make it ASC ELSE KEEP IT as is GITHUB
  
  ASC = 'ASC',
  DESC = 'DESC',
}
registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: 'Specify ascending or descending order',
});

/**
 * All the Coil fields you allow sorting by.
 * Add or remove members to match your schema.
 */
export enum CoilSortField {
  id         = 'id',
  coilno     = 'coilno',
  currWeight = 'currWeight',
  upDate    = 'upDate',
  thickness  = 'thickness',
  supcoilId  = 'supcoilId',
  widthCoil  = 'widthCoil',
  color      = 'color',
  openstatus = 'openstatus',
  // …etc
}
registerEnumType(CoilSortField, {
  name: 'CoilSortField',
  description: 'Fields by which coils can be sorted',
});

/**
 * The GraphQL input object your frontend will send
 * in its `sorting: [CoilsSortInput!]` variable.
 */
@InputType()
export class CoilsSortInput {
  @Field(() => CoilSortField)
  field: CoilSortField;

  // Preferred field: keep when provided
  @Field(() => SortOrder, { nullable: true })
  direction?: SortOrder;

  // Alias from some frontends; map to direction
  @Field(() => SortOrder, { nullable: true })
  order?: SortOrder;

 
}
