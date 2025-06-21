import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePpordersInput } from './create-pporder.input';

@InputType()
export class UpdatePpordersInput extends PartialType(CreatePpordersInput) {}