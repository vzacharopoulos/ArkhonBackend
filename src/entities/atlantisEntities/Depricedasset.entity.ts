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

  @Column("int", { name: "ASTID" })
  astid: number;

  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("float", { name: "INITQTY", precision: 53 })
  initqty: number;

  @Column("float", { name: "INITVALUE", precision: 53 })
  initvalue: number;

  @Column("datetime", { name: "INITDATE", nullable: true })
  initdate: Date | null;

  @Column("varchar", { name: "INITTRADE", nullable: true, length: 30 })
  inittrade: string | null;

  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Column("datetime", { name: "DEPRDATETO", nullable: true })
  deprdateto: Date | null;

  @Column("float", { name: "DEPRICABLEVALUE", precision: 53 })
  depricablevalue: number;

  @Column("float", { name: "UNDEPRVALUE1", nullable: true, precision: 53 })
  undeprvalue1: number | null;

  @Column("float", { name: "UNDEPRVALUE2", nullable: true, precision: 53 })
  undeprvalue2: number | null;

  @Column("float", { name: "UNDEPRVALUE3", nullable: true, precision: 53 })
  undeprvalue3: number | null;

  @Column("float", { name: "UNDEPRVALUE4", nullable: true, precision: 53 })
  undeprvalue4: number | null;

  @Column("float", { name: "UNDEPRVALUE5", nullable: true, precision: 53 })
  undeprvalue5: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "CURVALUE", nullable: true, precision: 53 })
  curvalue: number | null;

  @Column("smallint", { name: "ISDEPRED", default: () => "1" })
  isdepred: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("smallint", { name: "INPUTKIND", default: () => "0" })
  inputkind: number;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("float", { name: "OBJVALUE", nullable: true, precision: 53 })
  objvalue: number | null;

  @Column("float", { name: "REMAINVALUE", nullable: true, precision: 53 })
  remainvalue: number | null;

  @Column("float", { name: "RATABLEVALUE", nullable: true, precision: 53 })
  ratablevalue: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("smallint", { name: "DEPRINUSE", default: () => "0" })
  deprinuse: number;

  @Column("float", {
    name: "TDDEPRVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tddeprvalue: number | null;

  @Column("float", {
    name: "TDUNDEPRVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdundeprvalue1: number | null;

  @Column("float", {
    name: "TDCURVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdcurvalue: number | null;

  @Column("datetime", { name: "TDDEPRDATEFROM", nullable: true })
  tddeprdatefrom: Date | null;

  @Column("datetime", { name: "TDDEPRDATETO", nullable: true })
  tddeprdateto: Date | null;

  @Column("float", {
    name: "TDUNDEPRVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdundeprvalue2: number | null;

  @Column("smallint", { name: "ISFISCAL", default: () => "1" })
  isfiscal: number;

  @Column("smallint", { name: "ISIAS", default: () => "0" })
  isias: number;

  @Column("float", {
    name: "IASREMAINVALUE",
    precision: 53,
    default: () => "0",
  })
  iasremainvalue: number;

  @Column("int", { name: "AADID", nullable: true })
  aadid: number | null;

  @Column("smallint", { name: "UNDERPRODUCTION", default: () => "(0)" })
  underproduction: number;

  @Column("int", { name: "PRODUCTIONDPAID", nullable: true })
  productiondpaid: number | null;

  @Column("smallint", { name: "IASDEPRINUSE", default: () => "(0)" })
  iasdeprinuse: number;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("smallint", { name: "DIFFDEPRCOEF", default: () => "(0)" })
  diffdeprcoef: number;

  @Column("int", { name: "COSTFID", nullable: true })
  costfid: number | null;

  @Column("float", {
    name: "LEXVALUE",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  lexvalue: number | null;

  @Column("int", { name: "MYDATACHARCAT", nullable: true })
  mydatacharcat: number | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("varchar", {
    name: "GLOBALINDIVIDUALASSETID",
    nullable: true,
    length: 30,
  })
  globalindividualassetid: string | null;

  @Column("varchar", {
    name: "GLOBALRETURNABLEASSETID",
    nullable: true,
    length: 29,
  })
  globalreturnableassetid: string | null;

  
  @OneToMany(() => Assettradelines, (assettradelines) => assettradelines.dpa)
  assettradelines: Assettradelines[];

  @OneToMany(() => Assettrans, (assettrans) => assettrans.dpa)
  assettrans: Assettrans[];



  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.depricedassets)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @ManyToOne(() => Asset, (asset) => asset.depricedassets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @OneToMany(() => Deprtrans, (deprtrans) => deprtrans.dpa)
  deprtrans: Deprtrans[];
}
