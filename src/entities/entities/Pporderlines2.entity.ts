import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Pporders } from './Pporders.entity';
import { ProdOrdersView } from '../views/PanelProductionOrdersExt2.view';
import { TradecodeCustomer } from '../views/TradecodeCustomer.view';

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
@Column({
  type: 'nvarchar',
  length: 30,
  nullable: true,
  collation: 'Greek_CI_AS',
})
tradecode: string | null;

@Field(() => TradecodeCustomer, { nullable: true })
  @ManyToOne(() => TradecodeCustomer, { eager: true })
  @JoinColumn([{ name: 'tradecode', referencedColumnName: 'tradecode' }])
  tradecodeCustomer?: TradecodeCustomer | null;

  @Field(() => ProdOrdersView, { nullable: true })
  @OneToOne(() => ProdOrdersView,{ eager: true })
  @JoinColumn([
    { name: 'CUSTPORDERNO', referencedColumnName: 'prodOrder' }
    
  ]) prodOrdersView?: ProdOrdersView | null;

  
  @Field(() => Pporders, { nullable: true })
  @ManyToOne(() => Pporders, pporder => pporder.pporderlines)
  @JoinColumn([{ name: 'PPORDERNO', referencedColumnName: 'pporderno' }])
   pporders?: Pporders | null;

  

}

 
