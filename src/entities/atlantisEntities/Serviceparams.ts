import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_4920", ["comid"], { unique: true })
@Entity("SERVICEPARAMS", { schema: "dbo" })
export class Serviceparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { name: "MLFPERITE", default: () => "0" })
  mlfperite: number;

  @Column("smallint", { name: "SRCPERITE", default: () => "0" })
  srcperite: number;

  @Column("int", { name: "SRCSRDID", nullable: true })
  srcsrdid: number | null;

  @Column("int", { name: "MLSSRDID", nullable: true })
  mlssrdid: number | null;

  @Column("float", { name: "SPAREDISCOUNT", nullable: true, precision: 53 })
  sparediscount: number | null;

  @Column("smallint", { name: "LOADFRMLF", default: () => "0" })
  loadfrmlf: number;

  @Column("float", { name: "MAXVALUE", nullable: true, precision: 53 })
  maxvalue: number | null;

  @Column("int", { name: "SERVICESTOID", nullable: true })
  servicestoid: number | null;

  @Column("int", { name: "SPARESTOID", nullable: true })
  sparestoid: number | null;

  @Column("int", { name: "WHSMLSSRDID", nullable: true })
  whsmlssrdid: number | null;

  @Column("int", { name: "WHSSRCSRDID", nullable: true })
  whssrcsrdid: number | null;

  @Column("varchar", { name: "RECSRDID", nullable: true, length: 255 })
  recsrdid: string | null;

  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Column("smallint", { name: "STOCKCHECKACTION", nullable: true })
  stockcheckaction: number | null;

  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Column("smallint", { name: "CCARDPRICE", nullable: true })
  ccardprice: number | null;

  @Column("float", { name: "CCARDPRICEPC", nullable: true, precision: 53 })
  ccardpricepc: number | null;

  @Column("smallint", { name: "USEREMSN", default: () => "1" })
  useremsn: number;

  @Column("int", { name: "CRSID", nullable: true })
  crsid: number | null;

  @Column("int", { name: "MU1", nullable: true })
  mu1: number | null;

  @Column("smallint", {
    name: "PRICEFROMMASTER",
    nullable: true,
    default: () => "0",
  })
  pricefrommaster: number | null;

  @Column("varchar", { name: "CARCODEMASK", nullable: true, length: 25 })
  carcodemask: string | null;

  @Column("varchar", { name: "MODELCODEMASK", nullable: true, length: 25 })
  modelcodemask: string | null;

  @Column("varchar", { name: "SERNUMCODEMASK", nullable: true, length: 25 })
  sernumcodemask: string | null;

  @Column("smallint", {
    name: "USECOSTPERHOUR",
    nullable: true,
    default: () => "0",
  })
  usecostperhour: number | null;

  @Column("float", { name: "COSTPERHOUR", nullable: true, precision: 53 })
  costperhour: number | null;

  @Column("smallint", { name: "TIEDSPARE", nullable: true, default: () => "0" })
  tiedspare: number | null;

  @Column("float", { name: "WORKPCENT", nullable: true, precision: 53 })
  workpcent: number | null;

  @Column("int", { name: "MLFSUBSRCS", nullable: true, default: () => "0" })
  mlfsubsrcs: number | null;

  @Column("int", { name: "PRICEORDER", nullable: true })
  priceorder: number | null;

  @Column("int", { name: "MLFID", nullable: true })
  mlfid: number | null;

  @Column("int", { name: "PDISTATUS", nullable: true })
  pdistatus: number | null;

  @Column("int", { name: "READYSTATUS", nullable: true })
  readystatus: number | null;

  @Column("int", { name: "GUATIME", nullable: true, default: () => "0" })
  guatime: number | null;

  @Column("smallint", {
    name: "VIRTUALINV",
    nullable: true,
    default: () => "0",
  })
  virtualinv: number | null;

  @Column("int", { name: "SRCVIRTUALINV", nullable: true })
  srcvirtualinv: number | null;

  @Column("smallint", {
    name: "RTLFPAMODE",
    nullable: true,
    default: () => "(1)",
  })
  rtlfpamode: number | null;

  @Column("smallint", { name: "EXPVALUE", nullable: true, default: () => "0" })
  expvalue: number | null;

  @Column("int", { name: "INVINTPERID", nullable: true })
  invintperid: number | null;

  @Column("smallint", {
    name: "USECAMPAIGNS",
    nullable: true,
    default: () => "0",
  })
  usecampaigns: number | null;

  @Column("int", { name: "SRCPRCTYPE", nullable: true, default: () => "0" })
  srcprctype: number | null;

  @Column("int", { name: "SURID", nullable: true })
  surid: number | null;

  @Column("int", { name: "DLRID", nullable: true })
  dlrid: number | null;

  @Column("varbinary", { name: "CLAIMCRITERION", nullable: true })
  claimcriterion: Buffer | null;

  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Column("varchar", { name: "PRECODE", nullable: true, length: 25 })
  precode: string | null;

  @Column("int", { name: "ORDERDSRID", nullable: true })
  orderdsrid: number | null;

  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Column("int", { name: "MLCDSRID", nullable: true })
  mlcdsrid: number | null;

  @Column("smallint", { name: "CUSAUTOLENGTH", nullable: true })
  cusautolength: number | null;

  @Column("varchar", { name: "CUSPRECODE", nullable: true, length: 25 })
  cusprecode: string | null;

  @Column("varchar", { name: "CUSPADDCHAR", nullable: true, length: 1 })
  cuspaddchar: string | null;

  @Column("smallint", {
    name: "SPAREBARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  sparebarcodemode: number | null;

  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Column("smallint", {
    name: "NUMPERGUAR",
    nullable: true,
    default: () => "0",
  })
  numperguar: number | null;

  @Column("float", { name: "DEPRCOEF", nullable: true, precision: 53 })
  deprcoef: number | null;

  @Column("varchar", { name: "SHIPSRDID", nullable: true, length: 255 })
  shipsrdid: string | null;

  @Column("smallint", { name: "TECHSCHEDULE", nullable: true })
  techschedule: number | null;

  @Column("float", { name: "PERCMAXVALUE", nullable: true, precision: 53 })
  percmaxvalue: number | null;

  @Column("smallint", { name: "MFCDELBEHAV", nullable: true })
  mfcdelbehav: number | null;

  @Column("int", { name: "SRCGIFT", nullable: true })
  srcgift: number | null;

  @Column("smallint", {
    name: "CALCCARPRICE",
    nullable: true,
    default: () => "1",
  })
  calccarprice: number | null;

  @Column("int", { name: "MFCDSRID", nullable: true })
  mfcdsrid: number | null;

  @Column("smallint", { name: "MFCDELINVBEHAV", nullable: true })
  mfcdelinvbehav: number | null;

  @Column("smallint", { name: "MANUALCARPRICE", nullable: true })
  manualcarprice: number | null;

  @Column("float", { name: "STDCOST", nullable: true, precision: 53 })
  stdcost: number | null;

  @Column("int", { name: "STDCOSTTYPE", nullable: true, default: () => "1" })
  stdcosttype: number | null;

  @Column("smallint", { name: "SRVAUTOLENGTH", nullable: true })
  srvautolength: number | null;

  @Column("smallint", { name: "SRVCODEMODE", nullable: true })
  srvcodemode: number | null;

  @Column("varchar", { name: "DELIMITER", nullable: true, length: 1 })
  delimiter: string | null;

  @Column("varchar", { name: "SRVCODEMASK", nullable: true, length: 25 })
  srvcodemask: string | null;

  @Column("varchar", { name: "SRVPADDCHAR", nullable: true, length: 1 })
  srvpaddchar: string | null;

  @Column("int", { name: "SRVCODENUM", nullable: true })
  srvcodenum: number | null;

  @Column("varchar", { name: "SRVCODEMEMO", nullable: true, length: 25 })
  srvcodememo: string | null;

  @Column("smallint", {
    name: "MASSCARDINVOICING",
    nullable: true,
    default: () => "0",
  })
  masscardinvoicing: number | null;

  @Column("smallint", {
    name: "CHECKMFCEXPDATE",
    nullable: true,
    default: () => "(0)",
  })
  checkmfcexpdate: number | null;

  @Column("smallint", {
    name: "KEEPPLAISIOATEVALUATION",
    nullable: true,
    default: () => "(0)",
  })
  keepplaisioatevaluation: number | null;

  @Column("smallint", {
    name: "USEMAINTENANCECONTRACTS",
    nullable: true,
    default: () => "(0)",
  })
  usemaintenancecontracts: number | null;

  @Column("smallint", {
    name: "CAMPAIGNSLIVEUPDATE",
    nullable: true,
    default: () => "(0)",
  })
  campaignsliveupdate: number | null;

  @Column("smallint", {
    name: "TECREMARKSSTLFIELD",
    nullable: true,
    default: () => "(1)",
  })
  tecremarksstlfield: number | null;

  @Column("float", {
    name: "RECSPAREQTY",
    nullable: true,
    precision: 53,
    default: () => "(1)",
  })
  recspareqty: number | null;

  @Column("smallint", { name: "SRVCONCODEMODE", nullable: true })
  srvconcodemode: number | null;

  @Column("varchar", { name: "SRVCONCODEMASK", nullable: true, length: 25 })
  srvconcodemask: string | null;

  @Column("smallint", { name: "SRVCONAUTOLENGTH", nullable: true })
  srvconautolength: number | null;

  @Column("varchar", { name: "SRVCONDELIMITER", nullable: true, length: 1 })
  srvcondelimiter: string | null;

  @Column("varchar", { name: "SRVCONPADDCHAR", nullable: true, length: 1 })
  srvconpaddchar: string | null;

  @Column("varchar", { name: "SRVCONCODEMEMO", nullable: true, length: 25 })
  srvconcodememo: string | null;

  @Column("int", { name: "SRVCONDSRID", nullable: true })
  srvcondsrid: number | null;

  @Column("int", { name: "SRVCONSERVICE", nullable: true })
  srvconservice: number | null;

  @Column("smallint", {
    name: "SRVCONVALIDATESUM",
    nullable: true,
    default: () => "(0)",
  })
  srvconvalidatesum: number | null;

  @Column("smallint", {
    name: "ITEMFROMSNNOGUAR",
    nullable: true,
    default: () => "(0)",
  })
  itemfromsnnoguar: number | null;

  @Column("smallint", { name: "CNTIDRECEIPTSERVICES", default: () => "(0)" })
  cntidreceiptservices: number;

  @Column("smallint", { name: "CNTIDPROVIDESERVICES", default: () => "(0)" })
  cntidprovideservices: number;

  @OneToOne(() => Company, (company) => company.serviceparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
