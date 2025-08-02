// import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
// import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
// import { Pporderlines } from '../entities/Pporderlines';
// import { Pporderlines2 } from '../entities/Pporderlines2.entity';
// import { PanelSpeeds } from './PanelSpeeds';

// @ObjectType()
// @Entity('PanelProductionOrdersExt2_', { schema: 'dbo' })
// export class ProdOrdersView {
//   @Field()
//   @Column('nvarchar', { name: 'ProdOrder', primary: true, length: 100 })
//   prodOrder: string;

//   @Field(() => Int)
//   @Column('int', { name: 'productionNo' })
//   productionNo: number;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'tradecode', nullable: true, length: 50 })
//   tradecode: string| null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'code', nullable: true, length: 50 })
//   code: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'cin', nullable: true, length: 100 })
//   cin: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'cout', nullable: true, length: 100 })
//   cout: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'thickin', nullable: true, length: 50 })
//   thickin: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'thickout', nullable: true, length: 50 })
//   thickout: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'moldin', nullable: true, length: 50 })
//   moldin: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'moldout', nullable: true, length: 50 })
//   moldout: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'widthin', nullable: true, length: 50 })
//   widthin: string | null;

//   @Field({ nullable: true })
//   @Column('nvarchar', { name: 'widthout', nullable: true, length: 50 })
//   widthout: string | null;

//   @Field(() => Int, { nullable: true })
//   @Column('int', { name: 'importNo', nullable: true })
//   importNo: number | null;

//   @Field(() => Float, { nullable: true })
//   @Column('decimal', { name: 'ttm', nullable: true, precision: 18, scale: 2 })
//   ttm: number | null;

//   //   @Field(() => PanelSpeeds, { nullable: true })
//   // @ManyToOne(() => PanelSpeeds,(speed) => speed.prodorderview)
//   // @JoinColumn({ name: 'code', referencedColumnName: 'code' })
//   // panelSpeed?: PanelSpeeds | null;

  

//   // @Field(() => Float, { nullable: true })
//   // get speed(): number | null {
//   //   return this.panelSpeed ? this.panelSpeed.speed : null;
//   // }

//   //  @Field(() => Float, { nullable: true })
//   // get time(): number | null {
//   //   const speed = this.panelSpeed?.speed;
//   //   return speed != null && this.ttm != null ?  this.ttm / speed: null;
//   // }


//   // @Field({ nullable: true })
//   // @Column('bit', { name: 'isCanceled', nullable: true })
//   // isCanceled: boolean | null;

//    @Field(() => Int, { nullable: true })
//   @Column('int', { name: 'count', nullable: true })
//   count: number | null;

// }


