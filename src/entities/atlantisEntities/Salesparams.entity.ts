import { Field } from "@nestjs/graphql";
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
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CUSTDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  custdiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CUSTMODE", nullable: true, default: () => "0" })
  custmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CUSTPOSITION",
    nullable: true,
    default: () => "0",
  })
  custposition: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEMDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  itemdiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEMPOSITION",
    nullable: true,
    default: () => "0",
  })
  itemposition: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PRPOLICYDISCOUNT",
    nullable: true,
    default: () => "1",
  })
  prpolicydiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCMODE", default: () => "0" })
  calcmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "1" })
  transcomp: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SALESCFOMASK", nullable: true, length: 25 })
  salescfomask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PURCHCFOMASK", nullable: true, length: 25 })
  purchcfomask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SALESDSRID", nullable: true })
  salesdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PURCHDSRID", nullable: true })
  purchdsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TIED1", nullable: true, length: 25 })
  tied1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TIED2", nullable: true, length: 25 })
  tied2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TIED3", nullable: true, length: 25 })
  tied3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TIED4", nullable: true, length: 25 })
  tied4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROSP1", nullable: true, length: 25 })
  prosp1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROSP2", nullable: true, length: 25 })
  prosp2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROSP3", nullable: true, length: 25 })
  prosp3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROSP4", nullable: true, length: 25 })
  prosp4: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUSSELECTMODE", default: () => "0" })
  busselectmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "DEFAULTBUSID", nullable: true })
  defaultbusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "REQUIREDBUS", default: () => "0" })
  requiredbus: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SALESBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  salesbarcodemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PURCHBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  purchbarcodemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SYNCORDQTYS",
    nullable: true,
    default: () => "0",
  })
  syncordqtys: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SALESTOTSEDIT",
    nullable: true,
    default: () => "0",
  })
  salestotsedit: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PURCHASESTOTSEDIT",
    nullable: true,
    default: () => "0",
  })
  purchasestotsedit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PCREDITDSRID", nullable: true })
  pcreditdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SCREDITDSRID", nullable: true })
  screditdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PSTOCKCREDITDSRID", nullable: true })
  pstockcreditdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SSTOCKCREDITDSRID", nullable: true })
  sstockcreditdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PEXTRADIM", nullable: true })
  pextradim: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SEXTRADIM", nullable: true })
  sextradim: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKOFFER",
    nullable: true,
    default: () => "0",
  })
  checkoffer: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SRCDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  srcdiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SRCPOSITION",
    nullable: true,
    default: () => "0",
  })
  srcposition: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEMMAXDISCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  itemmaxdisccheckmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DOCWITHCLOSEFOLDERCHANGE",
    nullable: true,
    default: () => "0",
  })
  docwithclosefolderchange: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DOCAMOUNTINCLUDESWARRANTY",
    nullable: true,
    default: () => "0",
  })
  docamountincludeswarranty: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AUTODELETEGURITEM",
    nullable: true,
    default: () => "0",
  })
  autodeleteguritem: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CUSTMAXDISCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  custmaxdisccheckmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIMSTR1", nullable: true, length: 25 })
  dimstr1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIMSTR2", nullable: true, length: 25 })
  dimstr2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIMSTR3", nullable: true, length: 25 })
  dimstr3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIMSTR4", nullable: true, length: 25 })
  dimstr4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIMSTR5", nullable: true, length: 25 })
  dimstr5: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMLENGTH1", nullable: true })
  dimlength1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMLENGTH2", nullable: true })
  dimlength2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMLENGTH3", nullable: true })
  dimlength3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMLENGTH4", nullable: true })
  dimlength4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMLENGTH5", nullable: true })
  dimlength5: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BUSCOSTINGMODE",
    nullable: true,
    default: () => "0",
  })
  buscostingmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "NOWEIGHTCALC",
    nullable: true,
    default: () => "0",
  })
  noweightcalc: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SUPDISCOUNT",
    nullable: true,
    default: () => "0",
  })
  supdiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SUPPOSITION",
    nullable: true,
    default: () => "0",
  })
  supposition: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "THIRDSTORECHECKMODE", default: () => "0" })
  thirdstorecheckmode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTSEARCHFIELDS", nullable: true, length: 255 })
  custsearchfields: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TRANSFORMSTOCKCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  transformstockcheckmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "QTYCHANGEAUTOSNMODE",
    nullable: true,
    default: () => "0",
  })
  qtychangeautosnmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AUTODELPRODUCTIONS",
    nullable: true,
    default: () => "(0)",
  })
  autodelproductions: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEEPOUTZEROPARTITIONS",
    nullable: true,
    default: () => "(0)",
  })
  keepoutzeropartitions: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SHOWPERWARNINGONCHANGE",
    nullable: true,
    default: () => "(0)",
  })
  showperwarningonchange: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SHOWWARNINGONDIFFSTOIDS",
    nullable: true,
    default: () => "(2)",
  })
  showwarningondiffstoids: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDA_PRPID", nullable: true })
  pdaPrpid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INTRNEGMODE", default: () => "(0)" })
  intrnegmode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINV_ROOTDIR", nullable: true, length: 255 })
  einvRootdir: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SUMCOLORSIZE",
    nullable: true,
    default: () => "(0)",
  })
  sumcolorsize: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PURCHTRADEDUPL", default: () => "(1)" })
  purchtradedupl: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SALESTRADEDUPL", default: () => "(1)" })
  salestradedupl: number;



  @Field({ nullable: true })
  @Column("smallint", {
    name: "INSERTNEWCUSTOMERAFTERSEARCH",
    default: () => "(1)",
  })
  insertnewcustomeraftersearch: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "WARRANTYVATCATEGORY", default: () => "(0)" })
  warrantyvatcategory: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKNEGATIVEDOCTOTVALUE",
    default: () => "(0)",
  })
  checknegativedoctotvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SALESAUTOAPPLYGIFTSMODE", default: () => "(0)" })
  salesautoapplygiftsmode: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PURCHASESAUTOAPPLYGIFTSMODE",
    default: () => "(0)",
  })
  purchasesautoapplygiftsmode: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEMMAXDISCOUNTLINECHECK",
    default: () => "(0)",
  })
  itemmaxdiscountlinecheck: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCPERSONTRASPORTATION", default: () => "(0)" })
  calcpersontrasportation: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SETORDERSTRANSFORMED", default: () => "(1)" })
  setorderstransformed: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOPDFSAVEMODE", default: () => "(0)" })
  autopdfsavemode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AUTOPDFSAVEFOLDER", nullable: true, length: 255 })
  autopdfsavefolder: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOPDFSAVEPERPOST", default: () => "(0)" })
  autopdfsaveperpost: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRPOLICYOVERRIDE", default: () => "(0)" })
  prpolicyoverride: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INTRASTATDATEMODE", default: () => "(0)" })
  intrastatdatemode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CNTIDORIGINSALESLINES", default: () => "(0)" })
  cntidoriginsaleslines: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CNTIDORIGINPURCHASESLINES",
    default: () => "(0)",
  })
  cntidoriginpurchaseslines: number;

  @Field({ nullable: true })
  @Column("int", { name: "SLSDSRID", nullable: true })
  slsdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRVDSRID", nullable: true })
  srvdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VCTDSRID", nullable: true })
  vctdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "WSDSRID", nullable: true })
  wsdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RTDSRID", nullable: true })
  rtdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECPERCUST", nullable: true })
  specpercust: number | null;


  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.salesparams)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.salesparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "VCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades: Varcomtrades;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RTPURCHCOSTVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades2: Varcomtrades;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "WSPURCHCOSTVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades3: Varcomtrades;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RTPROFITVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades4: Varcomtrades;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.salesparams5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "WSPROFITVCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades5: Varcomtrades;
}
