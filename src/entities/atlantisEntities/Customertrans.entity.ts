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
import { Customer } from "./Customer.entity";
import { Fintrade } from "./Fintrade.entity";
import { Custtrntype } from "./Custtrntype.entity";

@Index("UNI_3200", ["id"], { unique: true })
@Index("UNIX_1019", ["comid", "trndate", "id"], {})
@Index("UNIX_1044", ["ftrid"], {})
@Index("UNIX_1045", ["perid", "trndate", "id"], {})
@ObjectType()
@Entity("CUSTOMERTRANS", { schema: "dbo" })
export class Customertrans {
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
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID" })
  perid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

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
  @Column("float", {
    name: "TTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ttrnvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOPENING", default: () => "0" })
  isopening: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERUPD", nullable: true })
  turnoverupd: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

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
  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

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
  @Column("smallint", { name: "FLAG17", nullable: true })
  flag17: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG18", nullable: true })
  flag18: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG19", nullable: true })
  flag19: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG20", nullable: true })
  flag20: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TURNOVER",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  turnover: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lturnover: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tturnover: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CJOID", nullable: true })
  cjoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OPENAMOUNT", nullable: true, precision: 53 })
  openamount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTDID", nullable: true })
  ftdid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE1", nullable: true, precision: 53 })
  extravalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE2", nullable: true, precision: 53 })
  extravalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE3", nullable: true, precision: 53 })
  extravalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE4", nullable: true, precision: 53 })
  extravalue4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "OLDLTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  oldltrnvalue: number | null;


  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.customertrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Custtrntype, (custtrntype) => custtrntype.customertrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  custtrntype: Custtrntype;
}
