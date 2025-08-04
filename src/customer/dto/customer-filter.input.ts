import { Field, InputType, Int } from '@nestjs/graphql';
import { IntFilter } from 'src/common/filtering helpers/filter.input';



@InputType()
export class CustomerFilterInput {
  @Field({ nullable: true })
  afm?: string;

  @Field({ nullable: true })
  phone11?: string;  // Updated to match Customer entity (phone11, phone12, etc.)

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  
}