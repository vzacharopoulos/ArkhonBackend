import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account.entity";
import { Asset } from "./Asset.entity";
import { Comtradelines } from "./Comtradelines.entity";
import { Depricedasset } from "./Depricedasset.entity";
import { Material } from "./Material.entity";
import { Spsurcharges } from "./Spsurcharges.entity";

import { Varcomtrades } from "./Varcomtrades.entity";
import { Vatgl } from "./Vatgl.entity";
import { Vatstatus } from "./Vatstatus.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_718", ["codeid"], { unique: true })
@Index("UNI_729", ["id"], { unique: true })
@Entity("VATCATEGORY", { schema: "dbo" })
export class Vatcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "VATDESCR", nullable: true, length: 30 })
  vatdescr: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATKIND", default: () => "1" })
  vatkind: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PWIDTH", nullable: true })
  pwidth: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CATID", default: () => "(0)" })
  catid: number;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFORABROADSALES", default: () => "(0)" })
  isforabroadsales: number;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.vtc)
  accounts: Account[];

  @Field(() => [Asset], { nullable: true })
  @OneToMany(() => Asset, (asset) => asset.vtc)
  assets: Asset[];

  @Field(() => [Comtradelines], { nullable: true })
  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.vtc)
  comtradelines: Comtradelines[];

  @Field(() => [Depricedasset], { nullable: true })
  @OneToMany(() => Depricedasset, (depricedasset) => depricedasset.vtc)
  depricedassets: Depricedasset[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.vtc)
  materials: Material[];

  @Field(() => [Spsurcharges], { nullable: true })
  @OneToMany(() => Spsurcharges, (spsurcharges) => spsurcharges.vtc)
  spsurcharges: Spsurcharges[];

  
  @Field(() => [Varcomtrades], { nullable: true })
  @OneToMany(() => Varcomtrades, (varcomtrades) => varcomtrades.vtc)
  varcomtrades: Varcomtrades[];

  @Field(() => [Vatgl], { nullable: true })
  @OneToMany(() => Vatgl, (vatgl) => vatgl.link)
  vatgls: Vatgl[];

  @Field(() => [Vatstatus], { nullable: true })
  @OneToMany(() => Vatstatus, (vatstatus) => vatstatus.vts)
  vatstatuses: Vatstatus[];

  @Field({ nullable: true })
  @OneToOne(() => Vatstatus, (vatstatus) => vatstatus.vtn)
  vatstatus: Vatstatus;
}
