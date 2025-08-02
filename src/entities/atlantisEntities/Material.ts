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

import { Composition } from "./Composition";
import { Detailitemqtys } from "./Detailitemqtys";
import { Itecolor } from "./Itecolor";
import { ItecolorInactivelines } from "./ItecolorInactivelines";
import { Itecolsizeprice } from "./Itecolsizeprice";
import { Itembalancesheet } from "./Itembalancesheet";
import { Itemfindata } from "./Itemfindata";
import { Itemhist } from "./Itemhist";

import { Itemsup } from "./Itemsup";
import { Itemtrans } from "./Itemtrans";
import { Itemtransest } from "./Itemtransest";

import { Sizelist } from "./Sizelist";
import { Vatcategory } from "./Vatcategory";
import { Spsurcharges } from "./Spsurcharges";
import { Company } from "./Company";
import { Glitem } from "./Glitem";
import { Itemqtycommision } from "./Itemqtycommision";
import { Itemgroup } from "./Itemgroup";
import { Currency } from "./Currency";

import { Itemcategory } from "./Itemcategory";
import { Mesunit } from "./Mesunit";
import { Matpricecategory } from "./Matpricecategory";
import { Partition } from "./Partition";

import { Salesparams } from "./Salesparams";

import { Speccolorsize } from "./Speccolorsize";
import { Specification } from "./Specification";
import { Specificationlines } from "./Specificationlines";
import { Storebalancesheet } from "./Storebalancesheet";
import { Storefindata } from "./Storefindata";
import { Storetradelines } from "./Storetradelines";
import { Substitute } from "./Substitute";


@Index("UNI_2800", ["id"], { unique: true })
@Index("UNI_2854", ["comid", "code"], { unique: true })
@Entity("MATERIAL", { schema: "dbo" })
export class Material {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("varchar", { name: "SUBCODE1", nullable: true, length: 25 })
  subcode1: string | null;

  @Column("varchar", { name: "SUBCODE2", nullable: true, length: 25 })
  subcode2: string | null;

  @Column("float", {
    name: "REPLACEVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  replacevalue: number | null;

  @Column("smallint", { name: "MTRMODE", nullable: true, default: () => "0" })
  mtrmode: number | null;

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

  @Column("float", {
    name: "DIM1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim1: number | null;

  @Column("float", {
    name: "DIM2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim2: number | null;

  @Column("float", {
    name: "DIM3",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  dim3: number | null;

  @Column("smallint", { name: "DIMMODE", nullable: true, default: () => "0" })
  dimmode: number | null;

  @Column("int", { name: "DIMMULTMODE", nullable: true, default: () => "3" })
  dimmultmode: number | null;

  @Column("smallint", { name: "MUMODE", nullable: true, default: () => "1" })
  mumode: number | null;

  @Column("float", {
    name: "CMPQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  cmpqty: number | null;

  @Column("float", { name: "RECOMQTY", nullable: true, precision: 53 })
  recomqty: number | null;

  @Column("smallint", {
    name: "QTYFROMVALUE",
    nullable: true,
    default: () => "0",
  })
  qtyfromvalue: number | null;

  @Column("float", {
    name: "REORDERLIMIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  reorderlimit: number | null;

  @Column("int", { name: "ORDERDAYS", nullable: true, default: () => "(0)" })
  orderdays: number | null;

  @Column("varchar", { name: "GLSALESCODE", nullable: true, length: 25 })
  glsalescode: string | null;

  @Column("varchar", { name: "GLPURCHASECODE", nullable: true, length: 25 })
  glpurchasecode: string | null;

  @Column("varchar", { name: "ANALSALESCODE", nullable: true, length: 25 })
  analsalescode: string | null;

  @Column("varchar", { name: "ANALPURCHASECODE", nullable: true, length: 25 })
  analpurchasecode: string | null;

  @Column("varchar", { name: "PRODCODE", nullable: true, length: 25 })
  prodcode: string | null;

  @Column("float", {
    name: "WHSPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  whsprice: number | null;

  @Column("float", {
    name: "RTLPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  rtlprice: number | null;

  @Column("float", {
    name: "WHSMARKUP",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  whsmarkup: number | null;

  @Column("float", {
    name: "RTLMARKUP",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  rtlmarkup: number | null;

  @Column("float", {
    name: "STDCOST",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  stdcost: number | null;

  @Column("float", {
    name: "FWHSPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  fwhsprice: number | null;

  @Column("float", {
    name: "FRTLPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  frtlprice: number | null;

  @Column("float", {
    name: "WEIGHT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  weight: number | null;

  @Column("float", {
    name: "VOLUME",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  volume: number | null;

  @Column("varchar", { name: "COMPOSITION", nullable: true, length: 50 })
  composition: string | null;

  @Column("smallint", { name: "KEPYO", nullable: true, default: () => "0" })
  kepyo: number | null;

  @Column("smallint", { name: "ISGIFT", nullable: true, default: () => "0" })
  isgift: number | null;

  @Column("smallint", { name: "THIRDPART", nullable: true, default: () => "0" })
  thirdpart: number | null;

  @Column("smallint", { name: "ONORDER", nullable: true, default: () => "0" })
  onorder: number | null;

  @Column("float", {
    name: "ADDONPRC",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  addonprc: number | null;

  @Column("smallint", { name: "EXCLUSIV", nullable: true, default: () => "0" })
  exclusiv: number | null;

  @Column("smallint", {
    name: "SETSAUTOSELL",
    nullable: true,
    default: () => "1",
  })
  setsautosell: number | null;

  @Column("smallint", {
    name: "SETSAUTOBUY",
    nullable: true,
    default: () => "1",
  })
  setsautobuy: number | null;

  @Column("smallint", {
    name: "SETSSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setssellmode: number | null;

  @Column("smallint", {
    name: "SETSBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsbuymode: number | null;

  @Column("smallint", {
    name: "SETSPRSELLMODE",
    nullable: true,
    default: () => "0",
  })
  setsprsellmode: number | null;

  @Column("smallint", {
    name: "SETSPRBUYMODE",
    nullable: true,
    default: () => "0",
  })
  setsprbuymode: number | null;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Column("varchar", { name: "DESCR2", nullable: true, length: 100 })
  descr2: string | null;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @Column("varchar", { name: "FACTORYCODE", nullable: true, length: 50 })
  factorycode: string | null;

  @Column("smallint", { name: "NOTACTIVE", nullable: true, default: () => "0" })
  notactive: number | null;

  @Column("smallint", { name: "ITEMTYPE", nullable: true, default: () => "0" })
  itemtype: number | null;

  @Column("float", {
    name: "MAXDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  maxdiscount: number | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Column("float", { name: "EXPVALUE3", nullable: true, precision: 53 })
  expvalue3: number | null;

  @Column("float", { name: "EXPVALUE4", nullable: true, precision: 53 })
  expvalue4: number | null;

  @Column("float", { name: "EXPVALUE5", nullable: true, precision: 53 })
  expvalue5: number | null;

  @Column("float", { name: "SECLIMITMIN", nullable: true, precision: 53 })
  seclimitmin: number | null;

  @Column("float", { name: "SECLIMITMAX", nullable: true, precision: 53 })
  seclimitmax: number | null;

  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Column("smallint", { name: "HASSPEC", nullable: true, default: () => "0" })
  hasspec: number | null;

  @Column("int", { name: "GURITEID", nullable: true })
  guriteid: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("int", { name: "MNFID", nullable: true })
  mnfid: number | null;

  @Column("int", { name: "IGSID", nullable: true })
  igsid: number | null;

  @Column("int", { name: "IGTID", nullable: true })
  igtid: number | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Column("float", {
    name: "PURPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  purprice: number | null;

  @Column("int", { name: "PURCURID", nullable: true })
  purcurid: number | null;

  @Column("float", { name: "MUINT_1", nullable: true, precision: 53 })
  muint_1: number | null;

  @Column("varchar", { name: "ORDERDATES", nullable: true, length: 50 })
  orderdates: string | null;

  @Column("float", { name: "MINLOTQTY", nullable: true, precision: 53 })
  minlotqty: number | null;

  @Column("float", { name: "STEPLOTQTY", nullable: true, precision: 53 })
  steplotqty: number | null;

  @Column("int", { name: "LOTPERIOD", nullable: true })
  lotperiod: number | null;

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

  @Column("float", {
    name: "LASTBUYPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lastbuyprice: number | null;

  @Column("smallint", { name: "MRPFLAG", default: () => "0" })
  mrpflag: number;

  @Column("float", { name: "STARTSTOCK", nullable: true, precision: 53 })
  startstock: number | null;

  @Column("float", { name: "ENDSTOCK", nullable: true, precision: 53 })
  endstock: number | null;

  @Column("varchar", { name: "FLDSTRING1", nullable: true, length: 50 })
  fldstring1: string | null;

  @Column("varchar", { name: "FLDSTRING2", nullable: true, length: 50 })
  fldstring2: string | null;

  @Column("varchar", { name: "FLDSTRING3", nullable: true, length: 50 })
  fldstring3: string | null;

  @Column("varchar", { name: "FLDSTRING4", nullable: true, length: 50 })
  fldstring4: string | null;

  @Column("varchar", { name: "FLDSTRING5", nullable: true, length: 50 })
  fldstring5: string | null;

  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Column("smallint", { name: "ECOMAVAILABLE", nullable: true })
  ecomavailable: number | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "ABCDDID", nullable: true })
  abcddid: number | null;

  @Column("datetime", { name: "LASTBUYPRICEUPDATE", nullable: true })
  lastbuypriceupdate: Date | null;

  @Column("varchar", { name: "SNCODEMASK", nullable: true, length: 25 })
  sncodemask: string | null;

  @Column("smallint", { name: "NOTNATIVE", default: () => "0" })
  notnative: number;

  @Column("smallint", { name: "STOCKREMAINMODE", default: () => "1" })
  stockremainmode: number;

  @Column("smallint", { name: "REPLACED", nullable: true, default: () => "0" })
  replaced: number | null;

  @Column("smallint", { name: "REPLACECHAIN", default: () => "0" })
  replacechain: number;

  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Column("datetime", { name: "LASTCHANGEPRICEUPDATE", nullable: true })
  lastchangepriceupdate: Date | null;

  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Column("smallint", { name: "MRPPARTITIONTYPE", nullable: true })
  mrppartitiontype: number | null;

  @Column("int", { name: "MRPPLANCODE", nullable: true })
  mrpplancode: number | null;

  @Column("smallint", { name: "COSTINGMODE", nullable: true })
  costingmode: number | null;

  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Column("smallint", { name: "AUTOSYN", default: () => "0" })
  autosyn: number;

  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Column("int", { name: "MU5", nullable: true })
  mu5: number | null;

  @Column("float", {
    name: "MU5_1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  mu5_1: number | null;

  @Column("smallint", { name: "MU1_5MODE", nullable: true, default: () => "0" })
  mu1_5Mode: number | null;

  @Column("smallint", { name: "BUSTYPE", nullable: true, default: () => "0" })
  bustype: number | null;

  @Column("smallint", { name: "HAS_EAN13", nullable: true, default: () => "0" })
  hasEan13: number | null;

  @Column("varchar", { name: "PRQTYFORMULA", nullable: true, length: 100 })
  prqtyformula: string | null;

  @Column("smallint", {
    name: "MU1_FORMULAMODE",
    nullable: true,
    default: () => "0",
  })
  mu1Formulamode: number | null;

  @Column("float", { name: "BUYCOMQTY", nullable: true, precision: 53 })
  buycomqty: number | null;

  @Column("smallint", { name: "AUTOPROD", nullable: true, default: () => "0" })
  autoprod: number | null;

  @Column("smallint", {
    name: "BACKORDERQTYMODE",
    nullable: true,
    default: () => "0",
  })
  backorderqtymode: number | null;

  @Column("smallint", { name: "USEINRETAIL", default: () => "(1)" })
  useinretail: number;

  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;

  @Column("int", { name: "CRMCATID", nullable: true })
  crmcatid: number | null;

  @Column("smallint", { name: "ISACTIVECRM", default: () => "(0)" })
  isactivecrm: number;

  @Column("smallint", {
    name: "ALLOWTRADE",
    nullable: true,
    default: () => "(0)",
  })
  allowtrade: number | null;

  @Column("datetime", { name: "LASTUPDDATETIME", nullable: true })
  lastupddatetime: Date | null;

  @Column("int", { name: "PESTDRUGID", nullable: true })
  pestdrugid: number | null;

  @Column("int", { name: "PESTCROPID", nullable: true })
  pestcropid: number | null;

  @Column("int", { name: "PESTCAUSEID", nullable: true })
  pestcauseid: number | null;

  @Column("int", { name: "PESTUNITID", nullable: true })
  pestunitid: number | null;

  @Column("smallint", {
    name: "ISPESTICIDE",
    nullable: true,
    default: () => "(0)",
  })
  ispesticide: number | null;

  @Column("int", { name: "TECDOCID", nullable: true })
  tecdocid: number | null;

  @Column("float", { name: "PESTPACKCONTENT", nullable: true, precision: 53 })
  pestpackcontent: number | null;

  @Column("smallint", { name: "SPECIALVATSTATUS", default: () => "(0)" })
  specialvatstatus: number;

  @Column("int", { name: "PESTDRASTIKIID", nullable: true })
  pestdrastikiid: number | null;

  @Column("int", { name: "FUEL", nullable: true })
  fuel: number | null;

  @Column("int", { name: "PURDAYSBEFOREPAREXPIREDDATE", nullable: true })
  purdaysbeforeparexpireddate: number | null;

  @Column("int", { name: "SALESDAYSBEFOREPAREXPIREDDATE", nullable: true })
  salesdaysbeforeparexpireddate: number | null;

  @Column("int", { name: "PRODDAYESBEFOREPAREXPIREDDATE", nullable: true })
  proddayesbeforeparexpireddate: number | null;

  @Column("smallint", { name: "PURTYPECHECK", nullable: true })
  purtypecheck: number | null;

  @Column("smallint", { name: "SALTYPECHECK", nullable: true })
  saltypecheck: number | null;

  @Column("smallint", { name: "PRODTYPECHECK", nullable: true })
  prodtypecheck: number | null;

  @Column("int", { name: "KADID", nullable: true })
  kadid: number | null;

  @Column("smallint", { name: "FUELQTYMODE", default: () => "(0)" })
  fuelqtymode: number;

  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Column("smallint", {
    name: "MYDATACLASSIFICATIONOTHER",
    default: () => "(0)",
  })
  mydataclassificationother: number;

  @Column("int", { name: "COUNTRYOFORIGIN", nullable: true })
  countryoforigin: number | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Column("varchar", { name: "CPVCATEGORY", nullable: true, length: 15 })
  cpvcategory: string | null;

  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @Column("varchar", { name: "LEGALDESCRIPTION", nullable: true, length: 100 })
  legaldescription: string | null;

  @Column("smallint", { name: "ISALCHOL", nullable: true })
  isalchol: number | null;

  @Column("smallint", { name: "USERDEFINELOT", nullable: true })
  userdefinelot: number | null;


  @OneToMany(() => Composition, (composition) => composition.ite)
  compositions: Composition[];

  @OneToMany(() => Composition, (composition) => composition.iteidcomponent)
  compositions2: Composition[];



  @OneToMany(() => Detailitemqtys, (detailitemqtys) => detailitemqtys.ite)
  detailitemqtys: Detailitemqtys[];


  @OneToMany(() => Itecolor, (itecolor) => itecolor.ite)
  itecolors: Itecolor[];

  @OneToMany(
    () => ItecolorInactivelines,
    (itecolorInactivelines) => itecolorInactivelines.ite
  )
  itecolorInactivelines: ItecolorInactivelines[];

  @OneToMany(() => Itecolsizeprice, (itecolsizeprice) => itecolsizeprice.ite)
  itecolsizeprices: Itecolsizeprice[];


  @OneToMany(
    () => Itembalancesheet,
    (itembalancesheet) => itembalancesheet.master
  )
  itembalancesheets: Itembalancesheet[];

  @OneToMany(() => Itemfindata, (itemfindata) => itemfindata.master)
  itemfindata: Itemfindata[];

  @OneToMany(() => Itemhist, (itemhist) => itemhist.ite)
  itemhists: Itemhist[];




  @OneToMany(() => Itemsup, (itemsup) => itemsup.ite)
  itemsups: Itemsup[];

  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.ite)
  itemtrans: Itemtrans[];

  @OneToMany(() => Itemtransest, (itemtransest) => itemtransest.ite)
  itemtransests: Itemtransest[];

  

  @ManyToOne(() => Material, (material) => material.materials)
  @JoinColumn([{ name: "RELITEID", referencedColumnName: "id" }])
  relite: Material;

  @OneToMany(() => Material, (material) => material.relite)
  materials: Material[];


  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ALT1SZLID", referencedColumnName: "codeid" },
  ])
  sizelist: Sizelist;

  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "MAINSZLID", referencedColumnName: "codeid" },
  ])
  sizelist2: Sizelist;

  @ManyToOne(() => Sizelist, (sizelist) => sizelist.materials3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ALT2SZLID", referencedColumnName: "codeid" },
  ])
  sizelist3: Sizelist;

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.materials)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @ManyToOne(() => Material, (material) => material.materials2)
  @JoinColumn([{ name: "TAXFREEITEID", referencedColumnName: "id" }])
  taxfreeite: Material;

  @OneToMany(() => Material, (material) => material.taxfreeite)
  materials2: Material[];

  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID3", referencedColumnName: "codeid" },
  ])
  spsurcharges: Spsurcharges;

  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID2", referencedColumnName: "codeid" },
  ])
  spsurcharges2: Spsurcharges;

  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID1", referencedColumnName: "codeid" },
  ])
  spsurcharges3: Spsurcharges;

  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID5", referencedColumnName: "codeid" },
  ])
  spsurcharges4: Spsurcharges;

  @ManyToOne(() => Spsurcharges, (spsurcharges) => spsurcharges.materials5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID4", referencedColumnName: "codeid" },
  ])
  spsurcharges5: Spsurcharges;



  @ManyToOne(() => Company, (company) => company.materials)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @ManyToOne(() => Glitem, (glitem) => glitem.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "GLMID", referencedColumnName: "codeid" },
  ])
  glitem: Glitem;

  @ManyToOne(
    () => Itemqtycommision,
    (itemqtycommision) => itemqtycommision.materials
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "IQCID", referencedColumnName: "codeid" },
  ])
  itemqtycommision: Itemqtycommision;

  @ManyToOne(() => Itemgroup, (itemgroup) => itemgroup.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "IGPID", referencedColumnName: "codeid" },
  ])
  itemgroup: Itemgroup;

  @ManyToOne(() => Currency, (currency) => currency.materials)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;



  @ManyToOne(() => Itemcategory, (itemcategory) => itemcategory.materials)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ICTID", referencedColumnName: "codeid" },
  ])
  itemcategory: Itemcategory;

  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials)
  @JoinColumn([{ name: "MU2", referencedColumnName: "codeid" }])
  mu: Mesunit;

  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials2)
  @JoinColumn([{ name: "MU4", referencedColumnName: "codeid" }])
  mu2: Mesunit;

  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials3)
  @JoinColumn([{ name: "MU1", referencedColumnName: "codeid" }])
  mu3: Mesunit;

  @ManyToOne(() => Mesunit, (mesunit) => mesunit.materials4)
  @JoinColumn([{ name: "MU3", referencedColumnName: "codeid" }])
  mu4: Mesunit;

  @ManyToOne(
    () => Matpricecategory,
    (matpricecategory) => matpricecategory.materials
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "MPCID", referencedColumnName: "codeid" },
  ])
  matpricecategory: Matpricecategory;


  @OneToMany(() => Partition, (partition) => partition.ite)
  partitions: Partition[];


  @OneToMany(() => Salesparams, (salesparams) => salesparams.ite)
  salesparams: Salesparams[];



  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.alterite)
  speccolorsizes: Speccolorsize[];

  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.cite)
  speccolorsizes2: Speccolorsize[];

  @OneToMany(() => Speccolorsize, (speccolorsize) => speccolorsize.pite)
  speccolorsizes3: Speccolorsize[];

  @OneToMany(() => Specification, (specification) => specification.ite)
  specifications: Specification[];

  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.ite
  )
  specificationlines: Specificationlines[];



  @OneToMany(
    () => Storebalancesheet,
    (storebalancesheet) => storebalancesheet.master
  )
  storebalancesheets: Storebalancesheet[];

  @OneToMany(() => Storefindata, (storefindata) => storefindata.master)
  storefindata: Storefindata[];

  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.ite)
  storetradelines: Storetradelines[];

  @OneToMany(() => Substitute, (substitute) => substitute.ite)
  substitutes: Substitute[];



}
