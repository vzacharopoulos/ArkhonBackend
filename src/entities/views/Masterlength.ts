import { Field, ObjectType, Float, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PanelSpeeds } from './PanelSpeeds';

@ObjectType()
@Entity('Masterlength', { schema: 'dbo' })
export class Masterlength {
 @Field(() => Int)
  @PrimaryColumn()
  id: number;


  @Field()
  @Column('nvarchar', { name: 'PPORDERNO',  length: 30 })
  pporderno: string;

  @Field()
  @Column('nvarchar', { name: 'code', nullable: true, length: 50 })
  code: string | null;

@Field(() => Int, { nullable: true })
  @Column('int', { name: 'status', nullable: true })
  status: string | null;
  

  @Field(() => Float, { nullable: true })
  @Column('decimal', { name: 'totalMeter', nullable: true, precision: 18, scale: 2 })
  totalMeter: number | null;

  @Field(() => Date, { nullable: true })
  @Column('datetime', { name: 'start_date_datetime', nullable: true })
  startDateDatetime: Date | null;

  @Field(() => Date, { nullable: true })
  @Column('datetime', { name: 'finish_date_datetime', nullable: true })
  finishDateDatetime: Date | null;

  @Field(() => Date, { nullable: true })
  @Column('datetime', { name: 'create_date', nullable: true })
  createDate: Date | null;
 @Field(() => PanelSpeeds, { nullable: true }) // <- This is now just for GraphQL
  panelSpeed?: PanelSpeeds | null;

  @Field(() => Float, { nullable: true })
  get time(): number | null {
    const speed = this.panelSpeed?.speed;
    return speed != null && this.totalMeter != null
      ? this.totalMeter / speed
      : null;
  }
  

 
}