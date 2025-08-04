import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Assettradelines } from "./Assettradelines.entity";
import { Assettrans } from "./Assettrans.entity";
import { Vatcategory } from "./Vatcategory.entity";
import { Asset } from "./Asset.entity";
import { Deprtrans } from "./Deprtrans.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5700", ["id"], { unique: true })
@Index("UNIX_1078", ["astid"], {})
@Entity("DEPRICEDASSET", { schema: "dbo" })
export class Depricedasset {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ASTID" })
  astid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY", precision: 53 })
  initqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "INITVALUE", precision: 53 })
  initvalue: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "INITDATE", nullable: true })
  initdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INITTRADE", nullable: true, length: 30 })
  inittrade: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DEPRDATETO", nullable: true })
  deprdateto: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRICABLEVALUE", precision: 53 })
  depricablevalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "UNDEPRVALUE1", nullable: true, precision: 53 })
  undeprvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "UNDEPRVALUE2", nullable: true, precision: 53 })
  undeprvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "UNDEPRVALUE3", nullable: true, precision: 53 })
  undeprvalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "UNDEPRVALUE4", nullable: true, precision: 53 })
  undeprvalue4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "UNDEPRVALUE5", nullable: true, precision: 53 })
  undeprvalue5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CURVALUE", nullable: true, precision: 53 })
  curvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISDEPRED", default: () => "1" })
  isdepred: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTKIND", default: () => "0" })
  inputkind: number;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OBJVALUE", nullable: true, precision: 53 })
  objvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REMAINVALUE", nullable: true, precision: 53 })
  remainvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RATABLEVALUE", nullable: true, precision: 53 })
  ratablevalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEPRINUSE", default: () => "0" })
  deprinuse: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDDEPRVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tddeprvalue: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDUNDEPRVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdundeprvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDCURVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdcurvalue: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TDDEPRDATEFROM", nullable: true })
  tddeprdatefrom: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TDDEPRDATETO", nullable: true })
  tddeprdateto: Date | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDUNDEPRVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdundeprvalue2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFISCAL", default: () => "1" })
  isfiscal: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISIAS", default: () => "0" })
  isias: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "IASREMAINVALUE",
    precision: 53,
    default: () => "0",
  })
  iasremainvalue: number;

  @Field({ nullable: true })
  @Column("int", { name: "AADID", nullable: true })
  aadid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UNDERPRODUCTION", default: () => "(0)" })
  underproduction: number;

  @Field({ nullable: true })
  @Column("int", { name: "PRODUCTIONDPAID", nullable: true })
  productiondpaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "IASDEPRINUSE", default: () => "(0)" })
  iasdeprinuse: number;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DIFFDEPRCOEF", default: () => "(0)" })
  diffdeprcoef: number;

  @Field({ nullable: true })
  @Column("int", { name: "COSTFID", nullable: true })
  costfid: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LEXVALUE",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  lexvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACHARCAT", nullable: true })
  mydatacharcat: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "GLOBALINDIVIDUALASSETID",
    nullable: true,
    length: 30,
  })
  globalindividualassetid: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "GLOBALRETURNABLEASSETID",
    nullable: true,
    length: 29,
  })
  globalreturnableassetid: string | null;

  
  @Field(() => [Assettradelines], { nullable: true })
  @OneToMany(() => Assettradelines, (assettradelines) => assettradelines.dpa)
  assettradelines: Assettradelines[];

  @Field(() => [Assettrans], { nullable: true })
  @OneToMany(() => Assettrans, (assettrans) => assettrans.dpa)
  assettrans: Assettrans[];



  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.depricedassets)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @Field({ nullable: true })
  @ManyToOne(() => Asset, (asset) => asset.depricedassets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @Field(() => [Deprtrans], { nullable: true })
  @OneToMany(() => Deprtrans, (deprtrans) => deprtrans.dpa)
  deprtrans: Deprtrans[];
}
