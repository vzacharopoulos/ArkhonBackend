import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Index('PK_PPORDERLINES2', ['id'], { unique: true })
@Entity('PPORDERLINES2', { schema: 'dbo' })
export class Pporderlines2 {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'PPORDERNO', nullable: true, length: 30 })
  pporderno: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'CUSTPORDERNO', nullable: true, length: 30 })
  custporderno: string | null;

  @Field({ nullable: true })
  @Column('smalldatetime', { name: 'prodDate', nullable: true })
  prodDate: Date | null;

  @Field({ nullable: true })
  @Column('smalldatetime', { name: 'up_date', nullable: true })
  upDate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'status', nullable: true })
  status: number | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'isCanceled', nullable: true, default: () => '(0)' })
  isCanceled: number | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'PANELCODE', nullable: true, length: 150 })
  panelcode: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'tradecode', nullable: true, length: 30 })
  tradecode: string | null;

  @Field(() => Float, { nullable: true })
  packagesTotal?: number | null;
}