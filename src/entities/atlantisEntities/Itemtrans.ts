import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material";
import { Fintrade } from "./Fintrade";
import { Mattrntype } from "./Mattrntype";

@Index("UNI_3800", ["id"], { unique: true })
@Index("UNIX_1030", ["ftrid"], {})
@Index("UNIX_1031", ["iteid", "trndate", "id"], {})
@Index("UNIX_1032", ["comid", "trndate", "id"], {})
@Index("UNIX_1086", ["stlid"], {})
@Entity("ITEMTRANS", { schema: "dbo" })
export class Itemtrans {
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

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("smallint", { name: "PERDOMAIN", nullable: true })
  perdomain: number | null;

  @Column("smallint", { name: "UPDMODE", nullable: true })
  updmode: number | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("int", { name: "STOID" })
  stoid: number;

  @Column("float", { name: "QTY", precision: 53 })
  qty: number;

  @Column("int", { name: "MUID" })
  muid: number;

  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Column("float", { name: "SECONDARYQTY", precision: 53 })
  secondaryqty: number;

  @Column("smallint", { name: "BUYMODE", nullable: true })
  buymode: number | null;

  @Column("smallint", { name: "FLAG1", nullable: true })
  flag1: number | null;

  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Column("smallint", { name: "FLAG2", nullable: true })
  flag2: number | null;

  @Column("smallint", { name: "FLAG3", nullable: true })
  flag3: number | null;

  @Column("smallint", { name: "FLAG4", nullable: true })
  flag4: number | null;

  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Column("smallint", { name: "FLAG6", nullable: true })
  flag6: number | null;

  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Column("smallint", { name: "INPUTQUANTMODE", nullable: true })
  inputquantmode: number | null;

  @Column("smallint", { name: "INPUTVALMODE", nullable: true })
  inputvalmode: number | null;

  @Column("smallint", { name: "BILLEDINPUT", nullable: true })
  billedinput: number | null;

  @Column("smallint", { name: "BILLEDOUTPUT", nullable: true })
  billedoutput: number | null;

  @Column("smallint", { name: "OPENING", nullable: true })
  opening: number | null;

  @Column("smallint", { name: "OUTPUTQUANTMODE", nullable: true })
  outputquantmode: number | null;

  @Column("smallint", { name: "OUTPUTVALMODE", nullable: true })
  outputvalmode: number | null;

  @Column("smallint", { name: "SELLMODE", nullable: true })
  sellmode: number | null;

  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Column("int", { name: "PARID", nullable: true })
  parid: number | null;

  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Column("float", { name: "LEXVALUE", nullable: true, precision: 53 })
  lexvalue: number | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

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

  @Column("smallint", {
    name: "SALESCOSTMODE",
    nullable: true,
    default: () => "0",
  })
  salescostmode: number | null;

  @Column("smallint", { name: "PRODCOSTMODE", default: () => "0" })
  prodcostmode: number;

  @Column("smallint", { name: "BUYSUPMODE", nullable: true })
  buysupmode: number | null;

  @Column("smallint", { name: "UPDTHIRD", nullable: true })
  updthird: number | null;

  @Column("smallint", { name: "UPDTAXFREE", nullable: true })
  updtaxfree: number | null;

  @Column("smallint", {
    name: "OUTPUTTHIRDMODE",
    nullable: true,
    default: () => "0",
  })
  outputthirdmode: number | null;

  @Column("smallint", {
    name: "OTHERAPOG",
    nullable: true,
    default: () => "(0)",
  })
  otherapog: number | null;

  @Column("datetime", { name: "LOTIFYUPDDATE", nullable: true })
  lotifyupddate: Date | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @ManyToOne(() => Material, (material) => material.itemtrans)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.itemtrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.itemtrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;
}
