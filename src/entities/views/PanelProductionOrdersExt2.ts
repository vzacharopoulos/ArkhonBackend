import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('PanelProductionOrdersExt2_', { schema: 'dbo' })
export class PanelProductionOrdersExt2 {
  @Field()
  @Column('nvarchar', { name: 'ProdOrder', primary: true, length: 100 })
  prodOrder: string;

  @Field(() => Int)
  @Column('int', { name: 'productionNo' })
  productionNo: number;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'tradecode', nullable: true, length: 50 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'code', nullable: true, length: 50 })
  materialCode: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'cin', nullable: true, length: 100 })
  cin: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'cout', nullable: true, length: 100 })
  cout: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'thickin', nullable: true, length: 50 })
  thickin: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'thickout', nullable: true, length: 50 })
  thickout: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'moldin', nullable: true, length: 50 })
  moldin: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'moldout', nullable: true, length: 50 })
  moldout: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'widthin', nullable: true, length: 50 })
  widthin: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'widthout', nullable: true, length: 50 })
  widthout: string | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'importNo', nullable: true })
  importNo: number | null;

  @Field(() => Float, { nullable: true })
  @Column('decimal', { name: 'ttm', nullable: true, precision: 18, scale: 2 })
  ttm: number | null;


}