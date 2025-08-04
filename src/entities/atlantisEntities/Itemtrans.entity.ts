import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";
import { Fintrade } from "./Fintrade.entity";
import { Mattrntype } from "./Mattrntype.entity";

@Index("UNI_3800", ["id"], { unique: true })
@Index("UNIX_1030", ["ftrid"], {})
@Index("UNIX_1031", ["iteid", "trndate", "id"], {})
@Index("UNIX_1032", ["comid", "trndate", "id"], {})
@Index("UNIX_1086", ["stlid"], {})
@ObjectType()
@Entity("ITEMTRANS", { schema: "dbo" })
export class Itemtrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID" })
  braid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TNACODE", nullable: true, length: 30 })
  tnacode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID" })
  curid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  trnvalue: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ltrnvalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERDOMAIN", nullable: true })
  perdomain: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDMODE", nullable: true })
  updmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID" })
  stoid: number;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", precision: 53 })
  qty: number;

  @Field({ nullable: true })
  @Column("int", { name: "MUID" })
  muid: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", precision: 53 })
  secondaryqty: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUYMODE", nullable: true })
  buymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG1", nullable: true })
  flag1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG2", nullable: true })
  flag2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG3", nullable: true })
  flag3: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG4", nullable: true })
  flag4: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG6", nullable: true })
  flag6: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTQUANTMODE", nullable: true })
  inputquantmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTVALMODE", nullable: true })
  inputvalmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLEDINPUT", nullable: true })
  billedinput: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLEDOUTPUT", nullable: true })
  billedoutput: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENING", nullable: true })
  opening: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OUTPUTQUANTMODE", nullable: true })
  outputquantmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OUTPUTVALMODE", nullable: true })
  outputvalmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELLMODE", nullable: true })
  sellmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PARID", nullable: true })
  parid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LEXVALUE", nullable: true, precision: 53 })
  lexvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG11", nullable: true })
  flag11: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG12", nullable: true })
  flag12: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG13", nullable: true })
  flag13: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG14", nullable: true })
  flag14: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG15", nullable: true })
  flag15: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG16", nullable: true })
  flag16: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SALESCOSTMODE",
    nullable: true,
    default: () => "0",
  })
  salescostmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRODCOSTMODE", default: () => "0" })
  prodcostmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUYSUPMODE", nullable: true })
  buysupmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDTHIRD", nullable: true })
  updthird: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDTAXFREE", nullable: true })
  updtaxfree: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "OUTPUTTHIRDMODE",
    nullable: true,
    default: () => "0",
  })
  outputthirdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "OTHERAPOG",
    nullable: true,
    default: () => "(0)",
  })
  otherapog: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LOTIFYUPDDATE", nullable: true })
  lotifyupddate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itemtrans)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.itemtrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.itemtrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;
}
