import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset.entity";
import { Fintrade } from "./Fintrade.entity";
import { Depricedasset } from "./Depricedasset.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_3728", ["id"], { unique: true })
@Index("UNI_5754", ["ftrid", "linenum"], { unique: true })
@Entity("ASSETTRADELINES", { schema: "dbo" })
export class Assettradelines {
  @Field({ nullable: true })
  @Column("int", { name: "FTRID", unique: true })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", unique: true })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", precision: 53 })
  qty: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE", precision: 53 })
  price: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRCDISC1", nullable: true, precision: 53 })
  prcdisc1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALDISC1", nullable: true, precision: 53 })
  valdisc1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LVALDISC1", nullable: true, precision: 53 })
  lvaldisc1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRCDISC2", nullable: true, precision: 53 })
  prcdisc2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALDISC2", nullable: true, precision: 53 })
  valdisc2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LVALDISC2", nullable: true, precision: 53 })
  lvaldisc2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LVATAMOUNT", nullable: true, precision: 53 })
  lvatamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE", precision: 53 })
  linevalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "LLINEVALUE", precision: 53 })
  llinevalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "NETLINEVALUE", nullable: true, precision: 53 })
  netlinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LNETLINEVALUE", nullable: true, precision: 53 })
  lnetlinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ITEMLINEVALUE", nullable: true, precision: 53 })
  itemlinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LITEMLINEVALUE", nullable: true, precision: 53 })
  litemlinevalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SECSTOID", nullable: true })
  secstoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTVATAMOUNT", nullable: true, precision: 53 })
  intvatamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DPADESCR", nullable: true, length: 50 })
  dpadescr: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE2", nullable: true, precision: 53 })
  linevalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE3", nullable: true, precision: 53 })
  linevalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE4", nullable: true, precision: 53 })
  linevalue4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE5", nullable: true, precision: 53 })
  linevalue5: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SECJUSTIFICATION", nullable: true, length: 255 })
  secjustification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADSID", nullable: true })
  adsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORIGINCNTID", nullable: true })
  origincntid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACHARCAT", nullable: true })
  mydatacharcat: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ITEMLINEVALUEFULL", nullable: true, precision: 53 })
  itemlinevaluefull: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATAMOUNTFULL", nullable: true, precision: 53 })
  vatamountfull: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Asset, (asset) => asset.assettradelines)
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.assettradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(
    () => Depricedasset,
    (depricedasset) => depricedasset.assettradelines
  )
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;
}
