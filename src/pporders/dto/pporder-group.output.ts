import { ObjectType, Field } from '@nestjs/graphql';
import { Pporders } from '../../entities/entities/Pporders.entity';
import { Pporderlines2 } from 'src/entities/entities/Pporderlines2.entity';

@ObjectType()
export class PporderGroupIn {
  @Field(() => [Pporderlines2], { nullable: true })
  orders?: Pporderlines2[] | null;

  @Field({ nullable: true })
  cin?: string | null;

  @Field({ nullable: true })
  thickin?: string | null;
  
  @Field({nullable: true })
  moldin?: string | null;

    @Field({ nullable: true })
  cout?: string | null;

  @Field({ nullable: true })
  thickout?: string | null;

    @Field({nullable: true })
  moldout?: string | null;


  @Field(() => Number, { nullable: true })
  totalTtm?: number | null;

  @Field(() => Number, { nullable: true })
  tTime?: number | null;

  @Field(() => Number, { nullable: true })
  count?: number | null;
}
