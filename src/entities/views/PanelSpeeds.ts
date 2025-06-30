import { Column, Entity, OneToMany } from 'typeorm';
import { ObjectType, Field, Float } from '@nestjs/graphql';
import { PPackages } from '../entities/PPackages.entity';
import { ProdOrdersView } from './PanelProductionOrdersview-with-iscanceled';
import { Masterlength } from './Masterlength';

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

    @Field(() => [PPackages])
  @OneToMany(() => PPackages, (pkg) => pkg.panelSpeed)
  packages: PPackages[];

    @Field(() => [ProdOrdersView])
  @OneToMany(() => ProdOrdersView, (ppordv) => ppordv.panelSpeed)
  prodorderview: ProdOrdersView[];

}