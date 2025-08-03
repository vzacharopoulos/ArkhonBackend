import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Material } from "./Material.entity";
import { Company } from "./Company.entity";
import { Varcomtrades } from "./Varcomtrades.entity";

@Index("UNI_4916", ["comid"], { unique: true })
@ObjectType()
@Entity("SALESPARAMS", { schema: "dbo" })
export class Salesparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", {
    name: "CUSTDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  custdiscount: number | null;

  @Column("smallint", { name: "CUSTMODE", nullable: true, default: () => "0" })
  custmode: number | null;

  @Column("smallint", {
    name: "CUSTPOSITION",
    nullable: true,
    default: () => "0",
  })
  custposition: number | null;

  @Column("smallint", {
    name: "ITEMDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  itemdiscount: number | null;

  @Column("smallint", {
    name: "ITEMPOSITION",
    nullable: true,
    default: () => "0",
  })
  itemposition: number | null;

  @Column("smallint", {
    name: "PRPOLICYDISCOUNT",
    nullable: true,
    default: () => "1",
  })
  prpolicydiscount: number | null;

  @Column("smallint", { name: "CALCMODE", default: () => "0" })
  calcmode: number;

  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "1" })
  transcomp: number | null;

  @Column("varchar", { name: "SALESCFOMASK", nullable: true, length: 25 })
  salescfomask: string | null;

  @Column("varchar", { name: "PURCHCFOMASK", nullable: true, length: 25 })
  purchcfomask: string | null;

  @Column("int", { name: "SALESDSRID", nullable: true })
  salesdsrid: number | null;

  @Column("int", { name: "PURCHDSRID", nullable: true })
  purchdsrid: number | null;

  @Column("varchar", { name: "TIED1", nullable: true, length: 25 })
  tied1: string | null;

  @Column("varchar", { name: "TIED2", nullable: true, length: 25 })
  tied2: string | null;

  @Column("varchar", { name: "TIED3", nullable: true, length: 25 })
  tied3: string | null;

  @Column("varchar", { name: "TIED4", nullable: true, length: 25 })
  tied4: string | null;

  @Column("varchar", { name: "PROSP1", nullable: true, length: 25 })
  prosp1: string | null;

  @Column("varchar", { name: "PROSP2", nullable: true, length: 25 })
  prosp2: string | null;

  @Column("varchar", { name: "PROSP3", nullable: true, length: 25 })
  prosp3: string | null;

  @Column("varchar", { name: "PROSP4", nullable: true, length: 25 })
  prosp4: string | null;

  @Column("smallint", { name: "BUSSELECTMODE", default: () => "0" })
  busselectmode: number;

  @Column("int", { name: "DEFAULTBUSID", nullable: true })
  defaultbusid: number | null;

  @Column("smallint", { name: "REQUIREDBUS", default: () => "0" })
  requiredbus: number;

  @Column("smallint", {
    name: "SALESBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  salesbarcodemode: number | null;

  @Column("smallint", {
    name: "PURCHBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  purchbarcodemode: number | null;

  @Column("smallint", {
    name: "SYNCORDQTYS",
    nullable: true,
    default: () => "0",
  })
  syncordqtys: number | null;

  @Column("smallint", {
    name: "SALESTOTSEDIT",
    nullable: true,
    default: () => "0",
  })
  salestotsedit: number | null;

  @Column("smallint", {
    name: "PURCHASESTOTSEDIT",
    nullable: true,
    default: () => "0",
  })
  purchasestotsedit: number | null;

  @Column("int", { name: "PCREDITDSRID", nullable: true })
  pcreditdsrid: number | null;

  @Column("int", { name: "SCREDITDSRID", nullable: true })
  screditdsrid: number | null;

  @Column("int", { name: "PSTOCKCREDITDSRID", nullable: true })
  pstockcreditdsrid: number | null;

  @Column("int", { name: "SSTOCKCREDITDSRID", nullable: true })
  sstockcreditdsrid: number | null;

  @Column("int", { name: "PEXTRADIM", nullable: true })
  pextradim: number | null;

  @Column("int", { name: "SEXTRADIM", nullable: true })
  sextradim: number | null;

  @Column("smallint", {
    name: "CHECKOFFER",
    nullable: true,
    default: () => "0",
  })
  checkoffer: number | null;

  @Column("smallint", {
    name: "SRCDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  srcdiscount: number | null;

  @Column("smallint", {
    name: "SRCPOSITION",
    nullable: true,
    default: () => "0",
  })
  srcposition: number | null;

  @Column("smallint", {
    name: "ITEMMAXDISCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  itemmaxdisccheckmode: number | null;

  @Column("smallint", {
    name: "DOCWITHCLOSEFOLDERCHANGE",
    nullable: true,
    default: () => "0",
  })
  docwithclosefolderchange: number | null;

  @Column("smallint", {
    name: "DOCAMOUNTINCLUDESWARRANTY",
    nullable: true,
    default: () => "0",
  })
  docamountincludeswarranty: number | null;

  @Column("smallint", {
    name: "AUTODELETEGURITEM",
    nullable: true,
    default: () => "0",
  })
  autodeleteguritem: number | null;

  @Column("smallint", {
    name: "CUSTMAXDISCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  custmaxdisccheckmode: number | null;

  @Column("varchar", { name: "DIMSTR1", nullable: true, length: 25 })
  dimstr1: string | null;

  @Column("varchar", { name: "DIMSTR2", nullable: true, length: 25 })
  dimstr2: string | null;

  @Column("varchar", { name: "DIMSTR3", nullable: true, length: 25 })
  dimstr3: string | null;

  @Column("varchar", { name: "DIMSTR4", nullable: true, length: 25 })
  dimstr4: string | null;

  @Column("varchar", { name: "DIMSTR5", nullable: true, length: 25 })
  dimstr5: string | null;

  @Column("int", { name: "DIMLENGTH1", nullable: true })
  dimlength1: number | null;

  @Column("int", { name: "DIMLENGTH2", nullable: true })
  dimlength2: number | null;

  @Column("int", { name: "DIMLENGTH3", nullable: true })
  dimlength3: number | null;

  @Column("int", { name: "DIMLENGTH4", nullable: true })
  dimlength4: number | null;

  @Column("int", { name: "DIMLENGTH5", nullable: true })
  dimlength5: number | null;

  @Column("smallint", {
    name: "BUSCOSTINGMODE",
    nullable: true,
    default: () => "0",
  })
  buscostingmode: number | null;

  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Column("smallint", {
    name: "NOWEIGHTCALC",
    nullable: true,
    default: () => "0",
  })
  noweightcalc: number | null;

  @Column("smallint", {
    name: "SUPDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  supdiscount: number | null;

  @Column("smallint", {
    name: "SUPPOSITION",
    nullable: true,
    default: () => "0",
  })
  supposition: number | null;

  @Column("smallint", { name: "THIRDSTORECHECKMODE", default: () => "0" })
  thirdstorecheckmode: number;

  @Column("varchar", { name: "CUSTSEARCHFIELDS", nullable: true, length: 255 })
  custsearchfields: string | null;

  @Column("smallint", {
    name: "TRANSFORMSTOCKCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  transformstockcheckmode: number | null;

  @Column("smallint", {
    name: "QTYCHANGEAUTOSNMODE",
    nullable: true,
    default: () => "0",
  })
  qtychangeautosnmode: number | null;

  @Column("smallint", {
    name: "AUTODELPRODUCTIONS",
    nullable: true,
    default: () => "(0)",
  })
  autodelproductions: number | null;

  @Column("smallint", {
    name: "KEEPOUTZEROPARTITIONS",
    nullable: true,
    default: () => "(0)",
  })
  keepoutzeropartitions: number | null;

  @Column("smallint", {
    name: "SHOWPERWARNINGONCHANGE",
    nullable: true,
    default: () => "(0)",
  })
  showperwarningonchange: number | null;

  @Column("smallint", {
    name: "SHOWWARNINGONDIFFSTOIDS",
    nullable: true,
    default: () => "(2)",
  })
  showwarningondiffstoids: number | null;

  @Column("int", { name: "PDA_PRPID", nullable: true })
  pdaPrpid: number | null;

  @Column("smallint", { name: "INTRNEGMODE", default: () => "(0)" })
  intrnegmode: number;

  @Column("varchar", { name: "EINV_ROOTDIR", nullable: true, length: 255 })
  einvRootdir: string | null;

  @Column("smallint", {
    name: "SUMCOLORSIZE",
    nullable: true,
    default: () => "(0)",
  })
  sumcolorsize: number | null;

  @Column("smallint", { name: "PURCHTRADEDUPL", default: () => "(1)" })
  purchtradedupl: number;

  @Column("smallint", { name: "SALESTRADEDUPL", default: () => "(1)" })
  salestradedupl: number;



  @Column("smallint", {
    name: "INSERTNEWCUSTOMERAFTERSEARCH",
    default: () => "(1)",
  })
  insertnewcustomeraftersearch: number;

  @Column("smallint", { name: "WARRANTYVATCATEGORY", default: () => "(0)" })
  warrantyvatcategory: number;

  @Column("smallint", {
    name: "CHECKNEGATIVEDOCTOTVALUE",
    default: () => "(0)",
  })
  checknegativedoctotvalue: number;

  @Column("smallint", { name: "SALESAUTOAPPLYGIFTSMODE", default: () => "(0)" })
  salesautoapplygiftsmode: number;

  @Column("smallint", {
    name: "PURCHASESAUTOAPPLYGIFTSMODE",
    default: () => "(0)",
  })
  purchasesautoapplygiftsmode: number;

  @Column("smallint", {
    name: "ITEMMAXDISCOUNTLINECHECK",
    default: () => "(0)",
  })
  itemmaxdiscountlinecheck: number;

  @Column("smallint", { name: "CALCPERSONTRASPORTATION", default: () => "(0)" })
  calcpersontrasportation: number;

  @Column("smallint", { name: "SETORDERSTRANSFORMED", default: () => "(1)" })
  setorderstransformed: number;

  @Column("smallint", { name: "AUTOPDFSAVEMODE", default: () => "(0)" })
  autopdfsavemode: number;

  @Column("varchar", { name: "AUTOPDFSAVEFOLDER", nullable: true, length: 255 })
  autopdfsavefolder: string | null;

  @Column("smallint", { name: "AUTOPDFSAVEPERPOST", default: () => "(0)" })
  autopdfsaveperpost: number;

  @Column("smallint", { name: "PRPOLICYOVERRIDE", default: () => "(0)" })
  prpolicyoverride: number;

  @Column("smallint", { name: "INTRASTATDATEMODE", default: () => "(0)" })
  intrastatdatemode: number;

  @Column("smallint", { name: "CNTIDORIGINSALESLINES", default: () => "(0)" })
  cntidoriginsaleslines: number;

  @Column("smallint", {
    name: "CNTIDORIGINPURCHASESLINES",
    default: () => "(0)",
  })
  cntidoriginpurchaseslines: number;

  @Column("int", { name: "SLSDSRID", nullable: true })
  slsdsrid: number | null;

  @Column("int", { name: "SRVDSRID", nullable: true })
  srvdsrid: number | null;

  @Column("int", { name: "VCTDSRID", nullable: true })
  vctdsrid: number | null;

  @Column("int", { name: "WSDSRID", nullable: true })
  wsdsrid: number | null;

  @Column("int", { name: "RTDSRID", nullable: true })
  rtdsrid: number | null;

  @Column("smallint", { name: "SPECPERCUST", nullable: true })
  specpercust: number | null;


  @ManyToOne(() => Material, (material) => material.salesparams)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @OneToOne(() => Company, (company) => company.salesparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "VCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades: Varcomtrades;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RTPURCHCOSTVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades2: Varcomtrades;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "WSPURCHCOSTVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades3: Varcomtrades;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RTPROFITVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades4: Varcomtrades;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "WSPROFITVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades5: Varcomtrades;
}
