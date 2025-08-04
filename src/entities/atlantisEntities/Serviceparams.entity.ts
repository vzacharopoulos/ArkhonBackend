import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4920", ["comid"], { unique: true })
@ObjectType()
@Entity("SERVICEPARAMS", { schema: "dbo" })
export class Serviceparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MLFPERITE", default: () => "0" })
  mlfperite: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SRCPERITE", default: () => "0" })
  srcperite: number;

  @Field({ nullable: true })
  @Column("int", { name: "SRCSRDID", nullable: true })
  srcsrdid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MLSSRDID", nullable: true })
  mlssrdid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SPAREDISCOUNT", nullable: true, precision: 53 })
  sparediscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LOADFRMLF", default: () => "0" })
  loadfrmlf: number;

  @Field({ nullable: true })
  @Column("float", { name: "MAXVALUE", nullable: true, precision: 53 })
  maxvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SERVICESTOID", nullable: true })
  servicestoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPARESTOID", nullable: true })
  sparestoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "WHSMLSSRDID", nullable: true })
  whsmlssrdid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "WHSSRCSRDID", nullable: true })
  whssrcsrdid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RECSRDID", nullable: true, length: 255 })
  recsrdid: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STOCKCHECKACTION", nullable: true })
  stockcheckaction: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CCARDPRICE", nullable: true })
  ccardprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CCARDPRICEPC", nullable: true, precision: 53 })
  ccardpricepc: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USEREMSN", default: () => "1" })
  useremsn: number;

  @Field({ nullable: true })
  @Column("int", { name: "CRSID", nullable: true })
  crsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MU1", nullable: true })
  mu1: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PRICEFROMMASTER",
    nullable: true,
    default: () => "0",
  })
  pricefrommaster: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CARCODEMASK", nullable: true, length: 25 })
  carcodemask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MODELCODEMASK", nullable: true, length: 25 })
  modelcodemask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SERNUMCODEMASK", nullable: true, length: 25 })
  sernumcodemask: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USECOSTPERHOUR",
    nullable: true,
    default: () => "0",
  })
  usecostperhour: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COSTPERHOUR", nullable: true, precision: 53 })
  costperhour: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDSPARE", nullable: true, default: () => "0" })
  tiedspare: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WORKPCENT", nullable: true, precision: 53 })
  workpcent: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MLFSUBSRCS", nullable: true, default: () => "0" })
  mlfsubsrcs: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRICEORDER", nullable: true })
  priceorder: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MLFID", nullable: true })
  mlfid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDISTATUS", nullable: true })
  pdistatus: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "READYSTATUS", nullable: true })
  readystatus: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUATIME", nullable: true, default: () => "0" })
  guatime: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "VIRTUALINV",
    nullable: true,
    default: () => "0",
  })
  virtualinv: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRCVIRTUALINV", nullable: true })
  srcvirtualinv: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "RTLFPAMODE",
    nullable: true,
    default: () => "(1)",
  })
  rtlfpamode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXPVALUE", nullable: true, default: () => "0" })
  expvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INVINTPERID", nullable: true })
  invintperid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USECAMPAIGNS",
    nullable: true,
    default: () => "0",
  })
  usecampaigns: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRCPRCTYPE", nullable: true, default: () => "0" })
  srcprctype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SURID", nullable: true })
  surid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DLRID", nullable: true })
  dlrid: number | null;


  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRECODE", nullable: true, length: 25 })
  precode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERDSRID", nullable: true })
  orderdsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MLCDSRID", nullable: true })
  mlcdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CUSAUTOLENGTH", nullable: true })
  cusautolength: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSPRECODE", nullable: true, length: 25 })
  cusprecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSPADDCHAR", nullable: true, length: 1 })
  cuspaddchar: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SPAREBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  sparebarcodemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "NUMPERGUAR",
    nullable: true,
    default: () => "0",
  })
  numperguar: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF", nullable: true, precision: 53 })
  deprcoef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPSRDID", nullable: true, length: 255 })
  shipsrdid: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TECHSCHEDULE", nullable: true })
  techschedule: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERCMAXVALUE", nullable: true, precision: 53 })
  percmaxvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MFCDELBEHAV", nullable: true })
  mfcdelbehav: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRCGIFT", nullable: true })
  srcgift: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CALCCARPRICE",
    nullable: true,
    default: () => "1",
  })
  calccarprice: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MFCDSRID", nullable: true })
  mfcdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MFCDELINVBEHAV", nullable: true })
  mfcdelinvbehav: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MANUALCARPRICE", nullable: true })
  manualcarprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "STDCOST", nullable: true, precision: 53 })
  stdcost: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STDCOSTTYPE", nullable: true, default: () => "1" })
  stdcosttype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SRVAUTOLENGTH", nullable: true })
  srvautolength: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SRVCODEMODE", nullable: true })
  srvcodemode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DELIMITER", nullable: true, length: 1 })
  delimiter: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCODEMASK", nullable: true, length: 25 })
  srvcodemask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVPADDCHAR", nullable: true, length: 1 })
  srvpaddchar: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRVCODENUM", nullable: true })
  srvcodenum: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCODEMEMO", nullable: true, length: 25 })
  srvcodememo: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MASSCARDINVOICING",
    nullable: true,
    default: () => "0",
  })
  masscardinvoicing: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKMFCEXPDATE",
    nullable: true,
    default: () => "(0)",
  })
  checkmfcexpdate: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEEPPLAISIOATEVALUATION",
    nullable: true,
    default: () => "(0)",
  })
  keepplaisioatevaluation: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USEMAINTENANCECONTRACTS",
    nullable: true,
    default: () => "(0)",
  })
  usemaintenancecontracts: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CAMPAIGNSLIVEUPDATE",
    nullable: true,
    default: () => "(0)",
  })
  campaignsliveupdate: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TECREMARKSSTLFIELD",
    nullable: true,
    default: () => "(1)",
  })
  tecremarksstlfield: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "RECSPAREQTY",
    nullable: true,
    precision: 53,
    default: () => "(1)",
  })
  recspareqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SRVCONCODEMODE", nullable: true })
  srvconcodemode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCONCODEMASK", nullable: true, length: 25 })
  srvconcodemask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SRVCONAUTOLENGTH", nullable: true })
  srvconautolength: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCONDELIMITER", nullable: true, length: 1 })
  srvcondelimiter: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCONPADDCHAR", nullable: true, length: 1 })
  srvconpaddchar: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SRVCONCODEMEMO", nullable: true, length: 25 })
  srvconcodememo: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRVCONDSRID", nullable: true })
  srvcondsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SRVCONSERVICE", nullable: true })
  srvconservice: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SRVCONVALIDATESUM",
    nullable: true,
    default: () => "(0)",
  })
  srvconvalidatesum: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEMFROMSNNOGUAR",
    nullable: true,
    default: () => "(0)",
  })
  itemfromsnnoguar: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CNTIDRECEIPTSERVICES", default: () => "(0)" })
  cntidreceiptservices: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CNTIDPROVIDESERVICES", default: () => "(0)" })
  cntidprovideservices: number;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.serviceparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
