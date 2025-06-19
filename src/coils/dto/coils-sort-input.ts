// src/coils/dto/coils-sort.input.ts
import { InputType, Field, registerEnumType } from '@nestjs/graphql';

/**
 * Ascending / Descending enum
 */
export enum SortOrder {
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
  WIDTH      = 'widthCoil',
  widthCoil      = 'color',
  openstatus = 'openstatus',
  color = 'color',
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

  @Field(() => SortOrder)
  direction: SortOrder;
}