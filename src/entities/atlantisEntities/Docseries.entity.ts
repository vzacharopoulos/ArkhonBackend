import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Billkind } from "./Billkind.entity";

import { Branch } from "./Branch.entity";
import { Company } from "./Company.entity";
import { Docseriesnumber } from "./Docseriesnumber.entity";
import { Fintrade } from "./Fintrade.entity";


@Index("UNI_1404", ["comid", "domaintype", "codeid"], { unique: true })
@Index("UNI_1406", ["comid", "domaintype", "code"], { unique: true })
@ObjectType()
@Entity("DOCSERIES", { schema: "dbo" })
export class Docseries {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("smallint", { name: "AUTONUMBERING", default: () => "1" })
  autonumbering: number;

  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Column("varchar", { name: "CODE", unique: true, length: 5 })
  code: string;

  @Column("varchar", { name: "DEFAULTDRIVERNAME", nullable: true, length: 255 })
  defaultdrivername: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("int", { name: "LASTUSEDNUMBER", default: () => "0" })
  lastusednumber: number;

  @Column("smallint", { name: "PRINTINGBEHAVIOUR", default: () => "0" })
  printingbehaviour: number;

  @Column("smallint", { name: "TRADEGENERATE", default: () => "0" })
  tradegenerate: number;

  @Column("int", { name: "DOCTYPEID", nullable: true })
  doctypeid: number | null;

  @Column("smallint", { name: "GLUPDMODE", nullable: true })
  glupdmode: number | null;

  @Column("smallint", { name: "HANDMODE", default: () => "0" })
  handmode: number;

  @Column("int", { name: "DSRIDCNL", nullable: true })
  dsridcnl: number | null;

  @Column("int", { name: "DSRIDPMT", nullable: true })
  dsridpmt: number | null;

  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Column("int", { name: "ALDSRID", nullable: true })
  aldsrid: number | null;

  @Column("int", { name: "GLDSRID", nullable: true })
  gldsrid: number | null;

  @Column("smallint", { name: "NUMOFCOPIES", nullable: true })
  numofcopies: number | null;

  @Column("smallint", { name: "DRAFTTYPE", nullable: true, default: () => "0" })
  drafttype: number | null;

  @Column("int", { name: "TASID", nullable: true })
  tasid: number | null;

  @Column("int", { name: "ISRESTRICTED", default: () => "0" })
  isrestricted: number;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("smallint", {
    name: "LOCPRINTSTATUS",
    nullable: true,
    default: () => "0",
  })
  locprintstatus: number | null;

  @Column("smallint", {
    name: "STRICTPAYMENT",
    nullable: true,
    default: () => "0",
  })
  strictpayment: number | null;

  @Column("int", { name: "SYNDSRID", nullable: true })
  syndsrid: number | null;

  @Column("int", { name: "CONTRDSRID", nullable: true })
  contrdsrid: number | null;

  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Column("smallint", {
    name: "USEINTRANSFORM",
    nullable: true,
    default: () => "1",
  })
  useintransform: number | null;

  @Column("smallint", {
    name: "CHECKTRADECODE",
    nullable: true,
    default: () => "0",
  })
  checktradecode: number | null;

  @Column("int", { name: "PRDCODEID", nullable: true })
  prdcodeid: number | null;

  @Column("varchar", { name: "CODEPREFIX", nullable: true, length: 10 })
  codeprefix: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("int", { name: "PRTTYPE", nullable: true })
  prttype: number | null;

  @Column("int", { name: "PRTORIENTATION", nullable: true })
  prtorientation: number | null;

  @Column("smallint", { name: "ISREQUIREDSTORE", default: () => "1" })
  isrequiredstore: number;

  @Column("smallint", {
    name: "FRMALLCOMP",
    nullable: true,
    default: () => "0",
  })
  frmallcomp: number | null;

  @Column("smallint", { name: "CALCFIELDSUM", default: () => "0" })
  calcfieldsum: number;

  @Column("int", { name: "SHCID", nullable: true })
  shcid: number | null;

  @Column("smallint", { name: "STATUSDEF", default: () => "(0)" })
  statusdef: number;

  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Column("int", { name: "DLAID", nullable: true })
  dlaid: number | null;

  @Column("smallint", { name: "LABELBEHAVIOUR", default: () => "(0)" })
  labelbehaviour: number;

  @Column("int", { name: "LABELID", nullable: true })
  labelid: number | null;

  @Column("smallint", { name: "LABELTYPE", nullable: true })
  labeltype: number | null;

  @Column("smallint", { name: "CEDISABLED", nullable: true })
  cedisabled: number | null;

  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

  @Column("varchar", { name: "RETAILSERNUM", nullable: true, length: 50 })
  retailsernum: string | null;

  @Column("varchar", { name: "ACCESSRIGHTS", nullable: true, length: 32 })
  accessrights: string | null;

  @Column("smallint", {
    name: "STRICTCANCEL",
    nullable: true,
    default: () => "(0)",
  })
  strictcancel: number | null;

  @Column("int", { name: "DSRIDBANKPMT", nullable: true })
  dsridbankpmt: number | null;

  @Column("int", { name: "DSRIDCASHPMT", nullable: true })
  dsridcashpmt: number | null;

  @Column("int", { name: "TASID2", nullable: true })
  tasid2: number | null;

  @Column("int", { name: "EINVOICEPRTID", nullable: true })
  einvoiceprtid: number | null;

  @Column("smallint", { name: "EINVOICEPRINT", default: () => "(2)" })
  einvoiceprint: number;

  @Column("smallint", { name: "EINVOICEUPLOAD", default: () => "(2)" })
  einvoiceupload: number;

  @Column("varchar", {
    name: "EINVOICEUPLOADDESCR",
    nullable: true,
    length: 50,
  })
  einvoiceuploaddescr: string | null;

  @Column("int", { name: "TASID3", nullable: true })
  tasid3: number | null;

  @Column("int", { name: "TASID4", nullable: true })
  tasid4: number | null;

  @Column("varchar", { name: "EINVOICETAGS", nullable: true, length: 255 })
  einvoicetags: string | null;

  @Column("int", { name: "EINVOICEPRINTFORMID", nullable: true })
  einvoiceprintformid: number | null;

  @Column("varchar", {
    name: "EINVOICEDRIVERNAME",
    nullable: true,
    length: 255,
  })
  einvoicedrivername: string | null;

  @Column("smallint", { name: "EINVOICENUMOFCOPIES", nullable: true })
  einvoicenumofcopies: number | null;

  @Column("smallint", { name: "EINVOICEDRAFTTYPE", nullable: true })
  einvoicedrafttype: number | null;

  @Column("int", { name: "EINVOICEPRTORIENTATION", nullable: true })
  einvoiceprtorientation: number | null;

  @Column("int", { name: "EINVOICEPRTTYPE", nullable: true })
  einvoiceprttype: number | null;

  @Column("smallint", { name: "EINVOICECANSEND", default: () => "(2)" })
  einvoicecansend: number;

  @Column("smallint", { name: "EINVOICECANSTORE", default: () => "(2)" })
  einvoicecanstore: number;

  @Column("smallint", { name: "EINVOICEATTACHTYPE", nullable: true })
  einvoiceattachtype: number | null;

  @Column("smallint", { name: "INSERTOPERATION", nullable: true })
  insertoperation: number | null;

  @Column("smallint", { name: "PRINTCONFIRM", default: () => "(0)" })
  printconfirm: number;

  @Column("smallint", { name: "EINVOICECONFIRM", default: () => "(0)" })
  einvoiceconfirm: number;

  @Column("smallint", { name: "EINVOICEFRMTYPE", nullable: true })
  einvoicefrmtype: number | null;

  @Column("smallint", { name: "EINVOICEFRMALLCOMP", nullable: true })
  einvoicefrmallcomp: number | null;

  @Column("smallint", { name: "SENDEMAIL", default: () => "(0)" })
  sendemail: number;

  @Column("int", { name: "SCRIPTCODE", nullable: true })
  scriptcode: number | null;

  @Column("varchar", { name: "SCRIPTFUNCTION", nullable: true, length: 255 })
  scriptfunction: string | null;

  @Column("smallint", { name: "MYDATATRADECODEMODE", nullable: true })
  mydatatradecodemode: number | null;

  @Column("smallint", { name: "SEND_MYDATA", nullable: true })
  sendMydata: number | null;

  @Column("int", { name: "DSRIDCREDIT", nullable: true })
  dsridcredit: number | null;

  @Column("smallint", {
    name: "NUMBERINGMETHOD",
    nullable: true,
    default: () => "(1)",
  })
  numberingmethod: number | null;

  @OneToMany(() => Billkind, (billkind) => billkind.docseries)
  billkinds: Billkind[];



  @ManyToOne(() => Docseries, (docseries) => docseries.docseries)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DOMAINTYPESYNC", referencedColumnName: "domaintype" },
    { name: "DSRIDSYNC", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;



  @ManyToOne(() => Branch, (branch) => branch.docseries)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @ManyToOne(() => Company, (company) => company.docseries)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Docseriesnumber,
    (docseriesnumber) => docseriesnumber.docseries
  )
  docseriesnumbers: Docseriesnumber[];


  @OneToMany(() => Fintrade, (fintrade) => fintrade.docseries)
  fintrades: Fintrade[];




}
