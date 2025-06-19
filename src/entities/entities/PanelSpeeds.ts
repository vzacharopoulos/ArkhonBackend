import { Column, Entity } from 'typeorm';
import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
@Entity('PANELSPEEDS', { schema: 'dbo' })
export class PanelSpeeds {
  @Field()
  @Column('nvarchar', { primary: true, name: 'code', length: 50 })
  code: string;

  @Field({ nullable: true })
  @Column('nchar', { name: 'thickness', nullable: true, length: 10 })
  thickness: string | null;

  @Field(() => Float, { nullable: true })
  @Column('decimal', { name: 'speed', nullable: true, precision: 18, scale: 1 })
  speed: number | null;
}
