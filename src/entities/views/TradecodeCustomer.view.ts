import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('TRADECODE_CUSTOMER', { schema: 'dbo' })
export class TradecodeCustomer {
  @Field({ nullable: true })
  @Column('nvarchar', { name: 'TRADECODE', primary: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'NAME', nullable: true, length: 70 })
  name: string | null;

  @Field({ nullable: true })
  @Column('datetime', { name: 'FTRDATE', nullable: true })
  ftrdate: Date | null;
}