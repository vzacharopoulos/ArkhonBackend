import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_5916", ["comid"], { unique: true })
@Entity("RETAILPARAMS", { schema: "dbo" })
export class Retailparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "CUSID" })
  cusid: number;

  @Column("int", { name: "BILLDSRID", nullable: true })
  billdsrid: number | null;

  @Column("int", { name: "PRPID", nullable: true })
  prpid: number | null;

  @Column("smallint", { name: "COLORSIZEMODE", default: () => "0" })
  colorsizemode: number;

  @Column("smallint", { name: "BARCODEMODE", default: () => "0" })
  barcodemode: number;

  @Column("int", { name: "DPSTRTTID", nullable: true })
  dpstrttid: number | null;

  @Column("int", { name: "CLOSRTTID", nullable: true })
  closrttid: number | null;

  @Column("int", { name: "OPENRTTID", nullable: true })
  openrttid: number | null;

  @Column("int", { name: "BLNCRTTID", nullable: true })
  blncrttid: number | null;

  @Column("varchar", { name: "BRAGROUPATITLE", nullable: true, length: 20 })
  bragroupatitle: string | null;

  @Column("varchar", { name: "BRAGROUPBTITLE", nullable: true, length: 20 })
  bragroupbtitle: string | null;

  @Column("varchar", { name: "CUSTSEARCHFIELDS", nullable: true, length: 255 })
  custsearchfields: string | null;

  @Column("smallint", { name: "ALLOWRETURNCASH", default: () => "0" })
  allowreturncash: number;

  @Column("varbinary", { name: "FIELDSLAYOUT", nullable: true })
  fieldslayout: Buffer | null;

  @Column("smallint", { name: "SHOWPICTURE", default: () => "0" })
  showpicture: number;

  @Column("smallint", {
    name: "SHOWBANKDEPOSITSASEXPENSES",
    default: () => "(0)",
  })
  showbankdepositsasexpenses: number;

  @Column("smallint", {
    name: "USERETAILSERVICEFORONOFF",
    default: () => "(0)",
  })
  useretailserviceforonoff: number;

  @Column("smallint", { name: "LOADBRANCHSALESMEN", default: () => "(1)" })
  loadbranchsalesmen: number;

  @Column("smallint", {
    name: "RECALCLINEVALUESONCUSCHANGE",
    default: () => "(1)",
  })
  recalclinevaluesoncuschange: number;

  @Column("smallint", { name: "REPEATEDNEWRECORD", default: () => "(0)" })
  repeatednewrecord: number;

  @Column("smallint", { name: "FINDFIRSTDATEPAYMENT", default: () => "(0)" })
  findfirstdatepayment: number;

  @OneToOne(() => Company, (company) => company.retailparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
