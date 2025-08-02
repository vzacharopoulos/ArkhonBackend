import { Column, Entity, Index, OneToMany } from "typeorm";
import { Prdata } from "./Prdata";

@Index("UNI_5874", ["comid", "domaintype", "codeid"], { unique: true })
@Entity("PRDEF", { schema: "dbo" })
export class Prdef {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 250 })
  descr: string;

  @Column("smallint", { name: "DOMAIN1", nullable: true })
  domain1: number | null;

  @Column("smallint", { name: "DOMAIN2", nullable: true })
  domain2: number | null;

  @Column("varchar", { name: "FORMULA", nullable: true, length: 250 })
  formula: string | null;

  @Column("varchar", { name: "COLTITLES", nullable: true, length: 250 })
  coltitles: string | null;

  @Column("smallint", { name: "QTYSCALE", nullable: true })
  qtyscale: number | null;

  @Column("smallint", { name: "ACACHE", nullable: true })
  acache: number | null;

  @Column("datetime", { name: "FDATE", nullable: true })
  fdate: Date | null;

  @Column("datetime", { name: "LDATE", nullable: true })
  ldate: Date | null;

  @Column("smallint", { name: "PRDEFINITION", nullable: true })
  prdefinition: number | null;

  @Column("varchar", { name: "SCALEFLD", nullable: true, length: 30 })
  scalefld: string | null;

  @Column("smallint", { name: "DISCMODE", default: () => "0" })
  discmode: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Column("int", { name: "CDSID", nullable: true })
  cdsid: number | null;

  @Column("smallint", { name: "COMPMODULUS", default: () => "0" })
  compmodulus: number;

  @Column("smallint", { name: "CSPRICEMODE", default: () => "0" })
  cspricemode: number;

  @Column("smallint", { name: "USEALTERPRICES", default: () => "0" })
  usealterprices: number;

  @Column("smallint", { name: "ISPROGRESSIVESCALE", default: () => "0" })
  isprogressivescale: number;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("smallint", { name: "JOINED", default: () => "(0)" })
  joined: number;

  @Column("smallint", { name: "ZEROBALANCE", default: () => "(0)" })
  zerobalance: number;

  @Column("smallint", { name: "STOREDSERNUM", default: () => "(0)" })
  storedsernum: number;

  @Column("smallint", { name: "DOMAIN1DBVIEWID", nullable: true })
  domain1Dbviewid: number | null;

  @Column("smallint", { name: "DOMAIN2DBVIEWID", nullable: true })
  domain2Dbviewid: number | null;

  @Column("varchar", {
    name: "DOMAIN1DBVIEWFIELD",
    nullable: true,
    length: 100,
  })
  domain1Dbviewfield: string | null;

  @Column("varchar", {
    name: "DOMAIN2DBVIEWFIELD",
    nullable: true,
    length: 100,
  })
  domain2Dbviewfield: string | null;

  @Column("smallint", { name: "USESCRIPT", default: () => "(0)" })
  usescript: number;

  @Column("int", { name: "SCRIPTCODE", nullable: true })
  scriptcode: number | null;

  @Column("varchar", { name: "SCRIPTFUNCTION", nullable: true, length: 255 })
  scriptfunction: string | null;

  @Column("varchar", { name: "SCRIPTPARAMS", nullable: true })
  scriptparams: string | null;

  @OneToMany(() => Prdata, (prdata) => prdata.prdef)
  prdata: Prdata[];
}
