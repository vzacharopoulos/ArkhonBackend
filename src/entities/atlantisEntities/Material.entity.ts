import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Composition } from "./Composition.entity";
import { Detailitemqtys } from "./Detailitemqtys.entity";
import { Itecolor } from "./Itecolor.entity";
import { ItecolorInactivelines } from "./ItecolorInactivelines.entity";
import { Itecolsizeprice } from "./Itecolsizeprice.entity";
import { Itembalancesheet } from "./Itembalancesheet.entity";
import { Itemfindata } from "./Itemfindata.entity";
import { Itemhist } from "./Itemhist.entity";

import { Itemsup } from "./Itemsup.entity";
import { Itemtrans } from "./Itemtrans.entity";
import { Itemtransest } from "./Itemtransest.entity";

import { Sizelist } from "./Sizelist.entity";
import { Vatcategory } from "./Vatcategory.entity";
import { Spsurcharges } from "./Spsurcharges.entity";
import { Company } from "./Company.entity";
import { Glitem } from "./Glitem.entity";
import { Itemqtycommision } from "./Itemqtycommision.entity";
import { Itemgroup } from "./Itemgroup.entity";
import { Currency } from "./Currency.entity";

import { Itemcategory } from "./Itemcategory.entity";
import { Mesunit } from "./Mesunit.entity";
import { Matpricecategory } from "./Matpricecategory.entity";
import { Partition } from "./Partition.entity";

import { Salesparams } from "./Salesparams.entity";

import { Speccolorsize } from "./Speccolorsize.entity";
import { Specification } from "./Specification.entity";
import { Specificationlines } from "./Specificationlines.entity";
import { Storebalancesheet } from "./Storebalancesheet.entity";
import { Storefindata } from "./Storefindata.entity";
import { Storetradelines } from "./Storetradelines.entity";
import { Substitute } from "./Substitute.entity";


@Index("UNI_2800", ["id"], { unique: true })
@Index("UNI_2854", ["comid", "code"], { unique: true })
@ObjectType()
@Entity("MATERIAL", { schema: "dbo" })
export class Material {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBCODE1", nullable: true, length: 25 })
  subcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBCODE2", nullable: true, length: 25 })
  subcode2: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "REPLACEVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  replacevalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MTRMODE", nullable: true, default: () => "0" })
  mtrmode: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MU2_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu2_1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MU3_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu3_1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MU4_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu4_1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MU1_2MODE", nullable: true, default: () => "0" })
  mu1_2Mode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MU1_3MODE", nullable: true, default: () => "0" })
  mu1_3Mode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MU1_4MODE", nullable: true })
  mu1_4Mode: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DIM1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DIM2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim2: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DIM3",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim3: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DIMMODE", nullable: true, default: () => "0" })
  dimmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIMMULTMODE", nullable: true, default: () => "3" })
  dimmultmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MUMODE", nullable: true, default: () => "1" })
  mumode: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "CMPQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  cmpqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RECOMQTY", nullable: true, precision: 53 })
  recomqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "QTYFROMVALUE",
    nullable: true,
    default: () => "0",
  })
  qtyfromvalue: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "REORDERLIMIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  reorderlimit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERDAYS", nullable: true, default: () => "(0)" })
  orderdays: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLSALESCODE", nullable: true, length: 25 })
  glsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLPURCHASECODE", nullable: true, length: 25 })
  glpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALSALESCODE", nullable: true, length: 25 })
  analsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALPURCHASECODE", nullable: true, length: 25 })
  analpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRODCODE", nullable: true, length: 25 })
  prodcode: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "WHSPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  whsprice: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "RTLPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  rtlprice: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "WHSMARKUP",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  whsmarkup: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "RTLMARKUP",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  rtlmarkup: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "STDCOST",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  stdcost: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "FWHSPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  fwhsprice: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "FRTLPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  frtlprice: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "WEIGHT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  weight: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VOLUME",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  volume: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMPOSITION", nullable: true, length: 50 })
  composition: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYO", nullable: true, default: () => "0" })
  kepyo: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISGIFT", nullable: true, default: () => "0" })
  isgift: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "THIRDPART", nullable: true, default: () => "0" })
  thirdpart: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ONORDER", nullable: true, default: () => "0" })
  onorder: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "ADDONPRC",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  addonprc: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXCLUSIV", nullable: true, default: () => "0" })
  exclusiv: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSAUTOSELL",
    nullable: true,
    default: () => "1",
  })
  setsautosell: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSAUTOBUY",
    nullable: true,
    default: () => "1",
  })
  setsautobuy: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setssellmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsbuymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSPRSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setsprsellmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSPRBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsprbuymode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR2", nullable: true, length: 100 })
  descr2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FACTORYCODE", nullable: true, length: 50 })
  factorycode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOTACTIVE", nullable: true, default: () => "0" })
  notactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ITEMTYPE", nullable: true, default: () => "0" })
  itemtype: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MAXDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  maxdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE3", nullable: true, precision: 53 })
  expvalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE4", nullable: true, precision: 53 })
  expvalue4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE5", nullable: true, precision: 53 })
  expvalue5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECLIMITMIN", nullable: true, precision: 53 })
  seclimitmin: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECLIMITMAX", nullable: true, precision: 53 })
  seclimitmax: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HASSPEC", nullable: true, default: () => "0" })
  hasspec: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GURITEID", nullable: true })
  guriteid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MNFID", nullable: true })
  mnfid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IGSID", nullable: true })
  igsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IGTID", nullable: true })
  igtid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "PURPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  purprice: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PURCURID", nullable: true })
  purcurid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MUINT_1", nullable: true, precision: 53 })
  muint_1: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ORDERDATES", nullable: true, length: 50 })
  orderdates: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "MINLOTQTY", nullable: true, precision: 53 })
  minlotqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "STEPLOTQTY", nullable: true, precision: 53 })
  steplotqty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LOTPERIOD", nullable: true })
  lotperiod: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSSTOREMODE",
    nullable: true,
    default: () => "0",
  })
  setsstoremode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSAUTOSTORE",
    nullable: true,
    default: () => "0",
  })
  setsautostore: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETSPRSTOREMODE",
    nullable: true,
    default: () => "0",
  })
  setsprstoremode: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LASTBUYPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lastbuyprice: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MRPFLAG", default: () => "0" })
  mrpflag: number;

  @Field({ nullable: true })
  @Column("float", { name: "STARTSTOCK", nullable: true, precision: 53 })
  startstock: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ENDSTOCK", nullable: true, precision: 53 })
  endstock: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING1", nullable: true, length: 50 })
  fldstring1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING2", nullable: true, length: 50 })
  fldstring2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING3", nullable: true, length: 50 })
  fldstring3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING4", nullable: true, length: 50 })
  fldstring4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING5", nullable: true, length: 50 })
  fldstring5: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ECOMAVAILABLE", nullable: true })
  ecomavailable: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCDDID", nullable: true })
  abcddid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTBUYPRICEUPDATE", nullable: true })
  lastbuypriceupdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SNCODEMASK", nullable: true, length: 25 })
  sncodemask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOTNATIVE", default: () => "0" })
  notnative: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "STOCKREMAINMODE", default: () => "1" })
  stockremainmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "REPLACED", nullable: true, default: () => "0" })
  replaced: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "REPLACECHAIN", default: () => "0" })
  replacechain: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTCHANGEPRICEUPDATE", nullable: true })
  lastchangepriceupdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MRPPARTITIONTYPE", nullable: true })
  mrppartitiontype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MRPPLANCODE", nullable: true })
  mrpplancode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COSTINGMODE", nullable: true })
  costingmode: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOSYN", default: () => "0" })
  autosyn: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MU5", nullable: true })
  mu5: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MU5_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu5_1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MU1_5MODE", nullable: true, default: () => "0" })
  mu1_5Mode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUSTYPE", nullable: true, default: () => "0" })
  bustype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HAS_EAN13", nullable: true, default: () => "0" })
  hasEan13: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRQTYFORMULA", nullable: true, length: 100 })
  prqtyformula: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MU1_FORMULAMODE",
    nullable: true,
    default: () => "0",
  })
  mu1Formulamode: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BUYCOMQTY", nullable: true, precision: 53 })
  buycomqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOPROD", nullable: true, default: () => "0" })
  autoprod: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BACKORDERQTYMODE",
    nullable: true,
    default: () => "0",
  })
  backorderqtymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USEINRETAIL", default: () => "(1)" })
  useinretail: number;

  @Field({ nullable: true })
  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMCATID", nullable: true })
  crmcatid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVECRM", default: () => "(0)" })
  isactivecrm: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ALLOWTRADE",
    nullable: true,
    default: () => "(0)",
  })
  allowtrade: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATETIME", nullable: true })
  lastupddatetime: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "PESTDRUGID", nullable: true })
  pestdrugid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PESTCROPID", nullable: true })
  pestcropid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PESTCAUSEID", nullable: true })
  pestcauseid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PESTUNITID", nullable: true })
  pestunitid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISPESTICIDE",
    nullable: true,
    default: () => "(0)",
  })
  ispesticide: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TECDOCID", nullable: true })
  tecdocid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PESTPACKCONTENT", nullable: true, precision: 53 })
  pestpackcontent: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECIALVATSTATUS", default: () => "(0)" })
  specialvatstatus: number;

  @Field({ nullable: true })
  @Column("int", { name: "PESTDRASTIKIID", nullable: true })
  pestdrastikiid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FUEL", nullable: true })
  fuel: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PURDAYSBEFOREPAREXPIREDDATE", nullable: true })
  purdaysbeforeparexpireddate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SALESDAYSBEFOREPAREXPIREDDATE", nullable: true })
  salesdaysbeforeparexpireddate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODDAYESBEFOREPAREXPIREDDATE", nullable: true })
  proddayesbeforeparexpireddate: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PURTYPECHECK", nullable: true })
  purtypecheck: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SALTYPECHECK", nullable: true })
  saltypecheck: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRODTYPECHECK", nullable: true })
  prodtypecheck: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "KADID", nullable: true })
  kadid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FUELQTYMODE", default: () => "(0)" })
  fuelqtymode: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MYDATACLASSIFICATIONOTHER",
    default: () => "(0)",
  })
  mydataclassificationother: number;

  @Field({ nullable: true })
  @Column("int", { name: "COUNTRYOFORIGIN", nullable: true })
  countryoforigin: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CPVCATEGORY", nullable: true, length: 15 })
  cpvcategory: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LEGALDESCRIPTION", nullable: true, length: 100 })
  legaldescription: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISALCHOL", nullable: true })
  isalchol: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USERDEFINELOT", nullable: true })
  userdefinelot: number | null;


  @Field(() => [Composition], { nullable: true })
  @OneToMany(() => Composition, (composition) => composition.ite)
  compositions: Composition[];

  @Field(() => [Composition], { nullable: true })
  @OneToMany(() => Composition, (composition) => composition.iteidcomponent)
  compositions2: Composition[];



  @Field(() => [Detailitemqtys], { nullable: true })
  @OneToMany(() => Detailitemqtys, (detailitemqtys) => detailitemqtys.ite)
  detailitemqtys: Detailitemqtys[];


  @Field(() => [Itecolor], { nullable: true })
  @OneToMany(() => Itecolor, (itecolor) => itecolor.ite)
  itecolors: Itecolor[];

  @Field(() => [ItecolorInactivelines], { nullable: true })
  @OneToMany(
    () => ItecolorInactivelines,
    (itecolorInactivelines) => itecolorInactivelines.ite
  )
  itecolorInactivelines: ItecolorInactivelines[];

  @Field(() => [Itecolsizeprice], { nullable: true })
  @OneToMany(() => Itecolsizeprice, (itecolsizeprice) => itecolsizeprice.ite)
  itecolsizeprices: Itecolsizeprice[];


  @Field(() => [Itembalancesheet], { nullable: true })
  @OneToMany(
    () => Itembalancesheet,
    (itembalancesheet) => itembalancesheet.master
  )
  itembalancesheets: Itembalancesheet[];

  @Field(() => [Itemfindata], { nullable: true })
  @OneToMany(() => Itemfindata, (itemfindata) => itemfindata.master)
  itemfindata: Itemfindata[];

  @Field(() => [Itemhist], { nullable: true })
  @OneToMany(() => Itemhist, (itemhist) => itemhist.ite)
  itemhists: Itemhist[];




  @Field(() => [Itemsup], { nullable: true })
  @OneToMany(() => Itemsup, (itemsup) => itemsup.ite)
  itemsups: Itemsup[];

  @Field(() => [Itemtrans], { nullable: true })
  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.ite)
  itemtrans: Itemtrans[];

  @Field(() => [Itemtransest], { nullable: true })
  @OneToMany(() => Itemtransest, (itemtransest) => itemtransest.ite)
  itemtransests: Itemtransest[];

  

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.materials)
  @JoinColumn([{ name: "RELITEID", referencedColumnName: "id" }])
  relite: Material;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.relite)
  materials: Material[];


  @Field({ nullable: true })
  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ALT1SZLID", referencedColumnName: "codeid" },
  ])
  sizelist: Sizelist;

  @Field({ nullable: true })
  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "MAINSZLID", referencedColumnName: "codeid" },
  ])
  sizelist2: Sizelist;

  @Field({ nullable: true })
  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ALT2SZLID", referencedColumnName: "codeid" },
  ])
  sizelist3: Sizelist;

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.materials)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.materials2)
  @JoinColumn([{ name: "TAXFREEITEID", referencedColumnName: "id" }])
  taxfreeite: Material;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.taxfreeite)
  materials2: Material[];

  @Field({ nullable: true })
  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID3", referencedColumnName: "codeid" },
  ])
  spsurcharges: Spsurcharges;

  @Field({ nullable: true })
  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID2", referencedColumnName: "codeid" },
  ])
  spsurcharges2: Spsurcharges;

  @Field({ nullable: true })
  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID1", referencedColumnName: "codeid" },
  ])
  spsurcharges3: Spsurcharges;

  @Field({ nullable: true })
  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID5", referencedColumnName: "codeid" },
  ])
  spsurcharges4: Spsurcharges;

  @Field({ nullable: true })
  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID4", referencedColumnName: "codeid" },
  ])
  spsurcharges5: Spsurcharges;



  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.materials)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @ManyToOne(() => Glitem, (glitem) => glitem.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "GLMID", referencedColumnName: "codeid" },
  ])
  glitem: Glitem;

  @Field({ nullable: true })
  @ManyToOne(
    () => Itemqtycommision,
    (itemqtycommision) => itemqtycommision.materials
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "IQCID", referencedColumnName: "codeid" },
  ])
  itemqtycommision: Itemqtycommision;

  @Field({ nullable: true })
  @ManyToOne(() => Itemgroup, (itemgroup) => itemgroup.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "IGPID", referencedColumnName: "codeid" },
  ])
  itemgroup: Itemgroup;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.materials)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;



  @Field({ nullable: true })
  @ManyToOne(() => Itemcategory, (itemcategory) => itemcategory.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ICTID", referencedColumnName: "codeid" },
  ])
  itemcategory: Itemcategory;

  @Field({ nullable: true })
  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials)
  @JoinColumn([{ name: "MU2", referencedColumnName: "codeid" }])
  mu: Mesunit;

  @Field({ nullable: true })
  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials2)
  @JoinColumn([{ name: "MU4", referencedColumnName: "codeid" }])
  mu2: Mesunit;

  @Field({ nullable: true })
  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials3)
  @JoinColumn([{ name: "MU1", referencedColumnName: "codeid" }])
  mu3: Mesunit;

  @Field({ nullable: true })
  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials4)
  @JoinColumn([{ name: "MU3", referencedColumnName: "codeid" }])
  mu4: Mesunit;

  @Field({ nullable: true })
  @ManyToOne(
    () => Matpricecategory,
    (matpricecategory) => matpricecategory.materials
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "MPCID", referencedColumnName: "codeid" },
  ])
  matpricecategory: Matpricecategory;


  @Field(() => [Partition], { nullable: true })
  @OneToMany(() => Partition, (partition) => partition.ite)
  partitions: Partition[];


  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.ite)
  salesparams: Salesparams[];



  @Field(() => [Speccolorsize], { nullable: true })
  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.alterite)
  speccolorsizes: Speccolorsize[];

  @Field(() => [Speccolorsize], { nullable: true })
  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.cite)
  speccolorsizes2: Speccolorsize[];

  @Field(() => [Speccolorsize], { nullable: true })
  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.pite)
  speccolorsizes3: Speccolorsize[];

  @Field(() => [Specification], { nullable: true })
  @OneToMany(() => Specification, (specification) => specification.ite)
  specifications: Specification[];

  @Field(() => [Specificationlines], { nullable: true })
  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.ite
  )
  specificationlines: Specificationlines[];



  @Field(() => [Storebalancesheet], { nullable: true })
  @OneToMany(
    () => Storebalancesheet,
    (storebalancesheet) => storebalancesheet.master
  )
  storebalancesheets: Storebalancesheet[];

  @Field(() => [Storefindata], { nullable: true })
  @OneToMany(() => Storefindata, (storefindata) => storefindata.master)
  storefindata: Storefindata[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.ite)
  storetradelines: Storetradelines[];

  @Field(() => [Substitute], { nullable: true })
  @OneToMany(() => Substitute, (substitute) => substitute.ite)
  substitutes: Substitute[];



}
