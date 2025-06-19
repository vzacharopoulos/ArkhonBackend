import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity('PPackages', { schema: 'dbo' })
export class PPackages {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'packno', nullable: true, length: 50 })
  packno: string | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'iteid', nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'itename', nullable: true, length: 50 })
  itename: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'description', nullable: true, length: 250 })
  description: string | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'pcs', nullable: true })
  pcs: number | null;

  @Field(() => Float, { nullable: true })
  @Column('decimal', {
    name: "quantity",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  quantity: number | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'tradecode', nullable: true, length: 50 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column('date', { name: 'create_dt', nullable: true })
  createDt: Date | null;

  @Field({ nullable: true })
  @Column('date', { name: 'despatch_dt', nullable: true })
  despatchDt: Date | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'status', nullable: true })
  status: number | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'loc', nullable: true })
  loc: number | null;

  @Field({ nullable: true })
  @Column('datetime', { name: 'up_date', nullable: true })
  upDate: Date | null;

  @Field({ nullable: true })
  @Column('nvarchar', {
    name: "Classification",
    nullable: true,
    length: 5,
    default: () => "N'A'",
  })
  classification: string | null;

  @Field({ nullable: true })
  @Column('nchar', { name: 'comment', nullable: true, length: 250 })
  comment: string | null;

  @Field(() => Int, { nullable: true })
  @Column('int', { name: 'importNo', nullable: true })
  importNo: number | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'panelThickness', nullable: true, length: 10 })
  panelThickness: string | null;

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

  @Field(() => Float, { nullable: true })
  @Column('decimal', {
    name: "panelWeightPerMeter",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeter: number | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'widthin', nullable: true, length: 50 })
  widthin: string | null;

  @Field({ nullable: true })
  @Column('nvarchar', { name: 'widthout', nullable: true, length: 50 })
  widthout: string | null;

  @Field(() => Float, { nullable: true })
  total?: number;
}
