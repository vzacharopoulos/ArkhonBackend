import { Field } from "@nestjs/graphql";
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
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTONUMBERING", default: () => "1" })
  autonumbering: number;

  @Field({ nullable: true })
  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 5 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEFAULTDRIVERNAME", nullable: true, length: 255 })
  defaultdrivername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LASTUSEDNUMBER", default: () => "0" })
  lastusednumber: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRINTINGBEHAVIOUR", default: () => "0" })
  printingbehaviour: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRADEGENERATE", default: () => "0" })
  tradegenerate: number;

  @Field({ nullable: true })
  @Column("int", { name: "DOCTYPEID", nullable: true })
  doctypeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDMODE", nullable: true })
  glupdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HANDMODE", default: () => "0" })
  handmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCNL", nullable: true })
  dsridcnl: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDPMT", nullable: true })
  dsridpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ALDSRID", nullable: true })
  aldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GLDSRID", nullable: true })
  gldsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NUMOFCOPIES", nullable: true })
  numofcopies: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DRAFTTYPE", nullable: true, default: () => "0" })
  drafttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TASID", nullable: true })
  tasid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISRESTRICTED", default: () => "0" })
  isrestricted: number;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "LOCPRINTSTATUS",
    nullable: true,
    default: () => "0",
  })
  locprintstatus: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "STRICTPAYMENT",
    nullable: true,
    default: () => "0",
  })
  strictpayment: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SYNDSRID", nullable: true })
  syndsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONTRDSRID", nullable: true })
  contrdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USEINTRANSFORM",
    nullable: true,
    default: () => "1",
  })
  useintransform: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKTRADECODE",
    nullable: true,
    default: () => "0",
  })
  checktradecode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRDCODEID", nullable: true })
  prdcodeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODEPREFIX", nullable: true, length: 10 })
  codeprefix: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("int", { name: "PRTTYPE", nullable: true })
  prttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRTORIENTATION", nullable: true })
  prtorientation: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISREQUIREDSTORE", default: () => "1" })
  isrequiredstore: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "FRMALLCOMP",
    nullable: true,
    default: () => "0",
  })
  frmallcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCFIELDSUM", default: () => "0" })
  calcfieldsum: number;

  @Field({ nullable: true })
  @Column("int", { name: "SHCID", nullable: true })
  shcid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUSDEF", default: () => "(0)" })
  statusdef: number;

  @Field({ nullable: true })
  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DLAID", nullable: true })
  dlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LABELBEHAVIOUR", default: () => "(0)" })
  labelbehaviour: number;

  @Field({ nullable: true })
  @Column("int", { name: "LABELID", nullable: true })
  labelid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LABELTYPE", nullable: true })
  labeltype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CEDISABLED", nullable: true })
  cedisabled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RETAILSERNUM", nullable: true, length: 50 })
  retailsernum: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCESSRIGHTS", nullable: true, length: 32 })
  accessrights: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "STRICTCANCEL",
    nullable: true,
    default: () => "(0)",
  })
  strictcancel: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDBANKPMT", nullable: true })
  dsridbankpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCASHPMT", nullable: true })
  dsridcashpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TASID2", nullable: true })
  tasid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EINVOICEPRTID", nullable: true })
  einvoiceprtid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEPRINT", default: () => "(2)" })
  einvoiceprint: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEUPLOAD", default: () => "(2)" })
  einvoiceupload: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "EINVOICEUPLOADDESCR",
    nullable: true,
    length: 50,
  })
  einvoiceuploaddescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TASID3", nullable: true })
  tasid3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TASID4", nullable: true })
  tasid4: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICETAGS", nullable: true, length: 255 })
  einvoicetags: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "EINVOICEPRINTFORMID", nullable: true })
  einvoiceprintformid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "EINVOICEDRIVERNAME",
    nullable: true,
    length: 255,
  })
  einvoicedrivername: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICENUMOFCOPIES", nullable: true })
  einvoicenumofcopies: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEDRAFTTYPE", nullable: true })
  einvoicedrafttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EINVOICEPRTORIENTATION", nullable: true })
  einvoiceprtorientation: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EINVOICEPRTTYPE", nullable: true })
  einvoiceprttype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICECANSEND", default: () => "(2)" })
  einvoicecansend: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICECANSTORE", default: () => "(2)" })
  einvoicecanstore: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEATTACHTYPE", nullable: true })
  einvoiceattachtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INSERTOPERATION", nullable: true })
  insertoperation: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRINTCONFIRM", default: () => "(0)" })
  printconfirm: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICECONFIRM", default: () => "(0)" })
  einvoiceconfirm: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEFRMTYPE", nullable: true })
  einvoicefrmtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEFRMALLCOMP", nullable: true })
  einvoicefrmallcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SENDEMAIL", default: () => "(0)" })
  sendemail: number;

  @Field({ nullable: true })
  @Column("int", { name: "SCRIPTCODE", nullable: true })
  scriptcode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SCRIPTFUNCTION", nullable: true, length: 255 })
  scriptfunction: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATRADECODEMODE", nullable: true })
  mydatatradecodemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SEND_MYDATA", nullable: true })
  sendMydata: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCREDIT", nullable: true })
  dsridcredit: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "NUMBERINGMETHOD",
    nullable: true,
    default: () => "(1)",
  })
  numberingmethod: number | null;

  @Field(() => [Billkind], { nullable: true })
  @OneToMany(() => Billkind, (billkind) => billkind.docseries)
  billkinds: Billkind[];



  @Field({ nullable: true })
  @ManyToOne(() => Docseries, (docseries) => docseries.docseries)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DOMAINTYPESYNC", referencedColumnName: "domaintype" },
    { name: "DSRIDSYNC", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;



  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.docseries)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.docseries)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Docseriesnumber], { nullable: true })
  @OneToMany(
    () => Docseriesnumber,
    (docseriesnumber) => docseriesnumber.docseries
  )
  docseriesnumbers: Docseriesnumber[];


  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.docseries)
  fintrades: Fintrade[];




}
