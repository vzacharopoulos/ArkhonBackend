import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bankaccount } from "./Bankaccount";
import { Bnktrntype } from "./Bnktrntype";
import { Fintrade } from "./Fintrade";

@Index("UNI_3222", ["id"], { unique: true })
@Index("UNIX_1010", ["ftrid"], {})
@Index("UNIX_1011", ["perid", "trndate", "id"], {})
@Index("UNIX_1012", ["comid", "trndate", "id"], {})
@Entity("BANKACCTRANS", { schema: "dbo" })
export class Bankacctrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "BRAID" })
  braid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("int", { name: "FIPID" })
  fipid: number;

  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("varchar", { name: "TNACODE", nullable: true, length: 30 })
  tnacode: string | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Column("int", { name: "CURID" })
  curid: number;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Column("float", {
    name: "TRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  trnvalue: number | null;

  @Column("float", {
    name: "LTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ltrnvalue: number | null;

  @Column("float", {
    name: "TTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ttrnvalue: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "PERID" })
  perid: number;

  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Column("smallint", { name: "ISOPENING", default: () => "0" })
  isopening: number;

  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Column("smallint", { name: "FLAG6", nullable: true, default: () => "0" })
  flag6: number | null;

  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Column("smallint", { name: "FLAG11", nullable: true })
  flag11: number | null;

  @Column("smallint", { name: "FLAG12", nullable: true })
  flag12: number | null;

  @Column("smallint", { name: "FLAG13", nullable: true })
  flag13: number | null;

  @Column("smallint", { name: "FLAG14", nullable: true })
  flag14: number | null;

  @Column("smallint", { name: "FLAG15", nullable: true })
  flag15: number | null;

  @Column("smallint", { name: "FLAG16", nullable: true })
  flag16: number | null;

  @Column("smallint", { name: "FLAG17", nullable: true })
  flag17: number | null;

  @Column("smallint", { name: "FLAG18", nullable: true })
  flag18: number | null;

  @Column("smallint", { name: "FLAG19", nullable: true })
  flag19: number | null;

  @Column("smallint", { name: "FLAG20", nullable: true })
  flag20: number | null;

  @Column("int", { name: "BNKID" })
  bnkid: number;

  @Column("int", { name: "FTDID", nullable: true })
  ftdid: number | null;

  @Column("float", {
    name: "OLDLTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  oldltrnvalue: number | null;

  @Column("float", { name: "OPENAMOUNT", nullable: true, precision: 53 })
  openamount: number | null;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Column("smallint", { name: "TURNOVERUPD", nullable: true })
  turnoverupd: number | null;

  @Column("float", {
    name: "TURNOVER",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  turnover: number | null;

  @Column("float", {
    name: "LTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  lturnover: number | null;

  @Column("float", {
    name: "TTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  tturnover: number | null;

  @Column("float", { name: "EXTRAVALUE1", nullable: true, precision: 53 })
  extravalue1: number | null;

  @Column("float", { name: "EXTRAVALUE2", nullable: true, precision: 53 })
  extravalue2: number | null;

  @Column("float", { name: "EXTRAVALUE3", nullable: true, precision: 53 })
  extravalue3: number | null;

  @Column("float", { name: "EXTRAVALUE4", nullable: true, precision: 53 })
  extravalue4: number | null;

  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.bankacctrans)
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Bankaccount;

  @ManyToOne(() => Bnktrntype, (bnktrntype) => bnktrntype.bankacctrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  bnktrntype: Bnktrntype;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.bankacctrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

}
