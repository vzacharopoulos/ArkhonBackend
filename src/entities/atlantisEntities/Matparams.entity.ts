import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4912", ["comid"], { unique: true })
@ObjectType()
@Entity("MATPARAMS", { schema: "dbo" })
export class Matparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { name: "ITEMTYPE", nullable: true, default: () => "0" })
  itemtype: number | null;

  @Column("smallint", { name: "MTRMODE", nullable: true, default: () => "0" })
  mtrmode: number | null;

  @Column("smallint", {
    name: "MATERIALCODEMODE",
    nullable: true,
    default: () => "0",
  })
  materialcodemode: number | null;

  @Column("varchar", { name: "MATERIALCODEMASK", nullable: true, length: 25 })
  materialcodemask: string | null;

  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Column("int", { name: "MU1", nullable: true })
  mu1: number | null;

  @Column("int", { name: "MU2", nullable: true })
  mu2: number | null;

  @Column("int", { name: "MU3", nullable: true })
  mu3: number | null;

  @Column("int", { name: "MU4", nullable: true })
  mu4: number | null;

  @Column("float", {
    name: "MU2_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu2_1: number | null;

  @Column("float", {
    name: "MU3_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu3_1: number | null;

  @Column("float", {
    name: "MU4_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu4_1: number | null;

  @Column("smallint", { name: "MU1_2MODE", nullable: true, default: () => "0" })
  mu1_2Mode: number | null;

  @Column("smallint", { name: "MU1_3MODE", nullable: true, default: () => "0" })
  mu1_3Mode: number | null;

  @Column("smallint", { name: "MU1_4MODE", nullable: true })
  mu1_4Mode: number | null;

  @Column("smallint", { name: "VATGIFT", nullable: true, default: () => "1" })
  vatgift: number | null;

  @Column("int", { name: "GLMID", nullable: true })
  glmid: number | null;

  @Column("float", {
    name: "RTIMARKUPDEF",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  rtimarkupdef: number | null;

  @Column("float", {
    name: "WHSMARKUPDEF",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  whsmarkupdef: number | null;

  @Column("smallint", {
    name: "SETSAUTOBUY",
    nullable: true,
    default: () => "1",
  })
  setsautobuy: number | null;

  @Column("smallint", {
    name: "SETSAUTOSELL",
    nullable: true,
    default: () => "1",
  })
  setsautosell: number | null;

  @Column("smallint", {
    name: "SETSBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsbuymode: number | null;

  @Column("smallint", {
    name: "SETSPRBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsprbuymode: number | null;

  @Column("smallint", {
    name: "SETSPRSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setsprsellmode: number | null;

  @Column("smallint", {
    name: "SETSSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setssellmode: number | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Column("int", { name: "PRCIDDEF", nullable: true })
  prciddef: number | null;

  @Column("smallint", {
    name: "RTLFPAMODE",
    nullable: true,
    default: () => "0",
  })
  rtlfpamode: number | null;

  @Column("smallint", {
    name: "COSTINGMODE",
    nullable: true,
    default: () => "1",
  })
  costingmode: number | null;

  @Column("smallint", {
    name: "RPLVALUEMODE",
    nullable: true,
    default: () => "0",
  })
  rplvaluemode: number | null;

  @Column("smallint", {
    name: "LASTBUYMODE",
    nullable: true,
    default: () => "0",
  })
  lastbuymode: number | null;

  @Column("smallint", {
    name: "STORAGEMODE",
    nullable: true,
    default: () => "1",
  })
  storagemode: number | null;

  @Column("varchar", { name: "SNCODEMASK", nullable: true, length: 25 })
  sncodemask: string | null;

  @Column("smallint", { name: "SNMODE", nullable: true, default: () => "1" })
  snmode: number | null;

  @Column("varchar", { name: "PARCODEMASK", nullable: true, length: 25 })
  parcodemask: string | null;

  @Column("smallint", { name: "PARMODE", nullable: true, default: () => "1" })
  parmode: number | null;

  @Column("smallint", {
    name: "PARSELLMODE",
    nullable: true,
    default: () => "0",
  })
  parsellmode: number | null;

  @Column("varchar", { name: "MATERIALCODEMEMO", nullable: true })
  materialcodememo: string | null;

  @Column("smallint", {
    name: "PAREXPIREMODE",
    nullable: true,
    default: () => "0",
  })
  parexpiremode: number | null;

  @Column("varchar", { name: "LBDIM1", nullable: true, length: 25 })
  lbdim1: string | null;

  @Column("varchar", { name: "LBDIM2", nullable: true, length: 25 })
  lbdim2: string | null;

  @Column("varchar", { name: "LBDIM3", nullable: true, length: 25 })
  lbdim3: string | null;

  @Column("varchar", { name: "TITLE1", nullable: true, length: 25 })
  title1: string | null;

  @Column("varchar", { name: "TITLE2", nullable: true, length: 25 })
  title2: string | null;

  @Column("varchar", { name: "TITLE3", nullable: true, length: 25 })
  title3: string | null;

  @Column("varchar", { name: "TITLE4", nullable: true, length: 25 })
  title4: string | null;

  @Column("varchar", { name: "TITLE5", nullable: true, length: 25 })
  title5: string | null;

  @Column("varchar", { name: "TITLE6", nullable: true, length: 25 })
  title6: string | null;

  @Column("varchar", { name: "TITLE7", nullable: true, length: 25 })
  title7: string | null;

  @Column("varchar", { name: "TITLE8", nullable: true, length: 25 })
  title8: string | null;

  @Column("varchar", { name: "TITLE9", nullable: true, length: 25 })
  title9: string | null;

  @Column("varchar", { name: "TITLE10", nullable: true, length: 25 })
  title10: string | null;

  @Column("smallint", {
    name: "PARSTOMODE",
    nullable: true,
    default: () => "0",
  })
  parstomode: number | null;

  @Column("varchar", { name: "TITLE11", nullable: true, length: 25 })
  title11: string | null;

  @Column("varchar", { name: "TITLE12", nullable: true, length: 25 })
  title12: string | null;

  @Column("varchar", { name: "TITLE13", nullable: true, length: 25 })
  title13: string | null;

  @Column("varchar", { name: "TITLE14", nullable: true, length: 25 })
  title14: string | null;

  @Column("varchar", { name: "TITLE15", nullable: true, length: 25 })
  title15: string | null;

  @Column("varchar", { name: "TITLE16", nullable: true, length: 25 })
  title16: string | null;

  @Column("smallint", {
    name: "BARCODEMODE",
    nullable: true,
    default: () => "0",
  })
  barcodemode: number | null;

  @Column("int", { name: "TRANSFERVALUES", nullable: true })
  transfervalues: number | null;

  @Column("smallint", {
    name: "SETSSTOREMODE",
    nullable: true,
    default: () => "0",
  })
  setsstoremode: number | null;

  @Column("smallint", {
    name: "SETSAUTOSTORE",
    nullable: true,
    default: () => "0",
  })
  setsautostore: number | null;

  @Column("smallint", {
    name: "SETSPRSTOREMODE",
    nullable: true,
    default: () => "0",
  })
  setsprstoremode: number | null;

  @Column("smallint", {
    name: "CREDITOPENITEM",
    nullable: true,
    default: () => "0",
  })
  creditopenitem: number | null;

  @Column("int", { name: "SALESCOSTDSRID", nullable: true })
  salescostdsrid: number | null;

  @Column("smallint", {
    name: "COSTSALESMETHOD",
    nullable: true,
    default: () => "0",
  })
  costsalesmethod: number | null;

  @Column("smallint", { name: "SNACTIVE", default: () => "0" })
  snactive: number;

  @Column("int", { name: "CONSDSRID", nullable: true })
  consdsrid: number | null;

  @Column("int", { name: "NONCONSDSRID", nullable: true })
  nonconsdsrid: number | null;

  @Column("float", { name: "MAXCONSPRC", nullable: true, precision: 53 })
  maxconsprc: number | null;

  @Column("smallint", { name: "COLORSIZEQTYMODE", default: () => "0" })
  colorsizeqtymode: number;

  @Column("smallint", {
    name: "NOAUTOINSITEMSUP",
    nullable: true,
    default: () => "0",
  })
  noautoinsitemsup: number | null;

  @Column("int", { name: "RSALESCOSTDSRID", nullable: true })
  rsalescostdsrid: number | null;

  @Column("int", { name: "PARDATEMODE", nullable: true, default: () => "0" })
  pardatemode: number | null;

  @Column("smallint", { name: "CHECKSTOCKMESS", default: () => "0" })
  checkstockmess: number;

  @Column("smallint", {
    name: "ITEMPRICEWITHOUTDECS",
    nullable: true,
    default: () => "0",
  })
  itempricewithoutdecs: number | null;

  @Column("int", { name: "SALESCOSTEXTRADIM", nullable: true })
  salescostextradim: number | null;

  @Column("smallint", {
    name: "CALCCOMPPRICE",
    nullable: true,
    default: () => "0",
  })
  calccompprice: number | null;

  @Column("smallint", {
    name: "COMPVALUEMODE",
    nullable: true,
    default: () => "0",
  })
  compvaluemode: number | null;

  @Column("smallint", { name: "CALCCOSTVALUE", default: () => "0" })
  calccostvalue: number;

  @Column("float", { name: "RECOMQTY", nullable: true, precision: 53 })
  recomqty: number | null;

  @Column("smallint", {
    name: "SEARCHSHOWQUANTITY",
    nullable: true,
    default: () => "0",
  })
  searchshowquantity: number | null;

  @Column("smallint", {
    name: "SUBTRACTRESTQTYS",
    nullable: true,
    default: () => "0",
  })
  subtractrestqtys: number | null;

  @Column("smallint", {
    name: "ONLINECHECKQTY",
    nullable: true,
    default: () => "0",
  })
  onlinecheckqty: number | null;

  @Column("smallint", {
    name: "XLNONLINECHECKQTY",
    nullable: true,
    default: () => "1",
  })
  xlnonlinecheckqty: number | null;

  @Column("smallint", {
    name: "UPDMARKUPMODE",
    nullable: true,
    default: () => "0",
  })
  updmarkupmode: number | null;

  @Column("smallint", {
    name: "STRCOUNTBINCODE",
    nullable: true,
    default: () => "0",
  })
  strcountbincode: number | null;

  @Column("varchar", {
    name: "MATERIALBARCODEMEMO",
    nullable: true,
    length: 255,
  })
  materialbarcodememo: string | null;

  @Column("varchar", { name: "BARCODEPADDCHAR", nullable: true, length: 1 })
  barcodepaddchar: string | null;

  @Column("varchar", { name: "BARCODEDELIMETER", nullable: true, length: 1 })
  barcodedelimeter: string | null;

  @Column("smallint", {
    name: "SYNPRICEMODE",
    nullable: true,
    default: () => "0",
  })
  synpricemode: number | null;

  @Column("smallint", {
    name: "CALCWHSRTLPRICE",
    nullable: true,
    default: () => "1",
  })
  calcwhsrtlprice: number | null;

  @Column("smallint", {
    name: "CHECKSTOCKWITHMINLIMIT",
    nullable: true,
    default: () => "0",
  })
  checkstockwithminlimit: number | null;

  @Column("varchar", { name: "MATERIALRELMASK", nullable: true, length: 25 })
  materialrelmask: string | null;

  @Column("varchar", { name: "MATERIALRELMEMO", nullable: true, length: 255 })
  materialrelmemo: string | null;

  @Column("smallint", {
    name: "STRCOUNTPARTITION",
    nullable: true,
    default: () => "0",
  })
  strcountpartition: number | null;

  @Column("smallint", { name: "BACKORDERQTYMODE", default: () => "0" })
  backorderqtymode: number;

  @Column("smallint", {
    name: "PACKLINESMODE",
    nullable: true,
    default: () => "1",
  })
  packlinesmode: number | null;

  @Column("smallint", {
    name: "BARCODECHANGELINE",
    nullable: true,
    default: () => "0",
  })
  barcodechangeline: number | null;

  @Column("smallint", {
    name: "CSPACKLINESMODE",
    nullable: true,
    default: () => "(0)",
  })
  cspacklinesmode: number | null;

  @Column("smallint", { name: "AUTOEAN13CALC", default: () => "(0)" })
  autoean13Calc: number;

  @Column("smallint", {
    name: "PARBINCODE",
    nullable: true,
    default: () => "(0)",
  })
  parbincode: number | null;

  @Column("smallint", { name: "USEINRETAIL", default: () => "(1)" })
  useinretail: number;

  @Column("int", { name: "NUMSIZES", default: () => "(20)" })
  numsizes: number;

  @Column("smallint", {
    name: "SNSTOREMODE",
    nullable: true,
    default: () => "(0)",
  })
  snstoremode: number | null;

  @Column("smallint", { name: "BOOKSTORECODEMODE", default: () => "(0)" })
  bookstorecodemode: number;

  @Column("smallint", { name: "BOOKSTORECODELENGTH", nullable: true })
  bookstorecodelength: number | null;

  @Column("smallint", { name: "DELETEALLCOMPOSITES", default: () => "(1)" })
  deleteallcomposites: number;

  @Column("smallint", {
    name: "SUMCOLORSIZE",
    nullable: true,
    default: () => "(0)",
  })
  sumcolorsize: number | null;

  @Column("smallint", {
    name: "SHOWWARNINGONMARKUPLESSPRICE",
    default: () => "(0)",
  })
  showwarningonmarkuplessprice: number;

  @Column("varchar", { name: "SNEXTRALABEL1", nullable: true, length: 25 })
  snextralabel1: string | null;

  @Column("varchar", { name: "SNEXTRALABEL2", nullable: true, length: 25 })
  snextralabel2: string | null;

  @Column("smallint", { name: "PARCODEMODE", default: () => "(0)" })
  parcodemode: number;

  @Column("smallint", {
    name: "PARAUTOLENGHT",
    nullable: true,
    default: () => "(0)",
  })
  parautolenght: number | null;

  @Column("varchar", { name: "PARDELIMETER", nullable: true, length: 1 })
  pardelimeter: string | null;

  @Column("varchar", { name: "PARPADCHAR", nullable: true, length: 1 })
  parpadchar: string | null;

  @Column("varchar", { name: "PARTITIONCODEMEMO", nullable: true })
  partitioncodememo: string | null;

  @Column("varchar", {
    name: "QTYWEIGHTINGPREFIX",
    nullable: true,
    length: 100,
  })
  qtyweightingprefix: string | null;

  @Column("varchar", {
    name: "VALWEIGHTINGPREFIX",
    nullable: true,
    length: 100,
  })
  valweightingprefix: string | null;

  @Column("smallint", { name: "MTRTRADEDUPL", default: () => "(1)" })
  mtrtradedupl: number;

  @Column("varchar", {
    name: "PARTSPECIALDATEDESCRIPTION",
    nullable: true,
    length: 255,
  })
  partspecialdatedescription: string | null;

  @Column("smallint", { name: "DORAAFFECTFIFO", default: () => "(0)" })
  doraaffectfifo: number;

  @Column("smallint", { name: "RCNCODESEARCH", default: () => "(0)" })
  rcncodesearch: number;

  @Column("smallint", {
    name: "BARCODECHANGELINEPRICECHECK",
    nullable: true,
    default: () => "(1)",
  })
  barcodechangelinepricecheck: number | null;

  @OneToOne(() => Company, (company) => company.matparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
