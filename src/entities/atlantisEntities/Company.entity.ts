import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Abcparams } from "./Abcparams.entity";
import { Accclosetemplate } from "./Accclosetemplate.entity";
import { Acceventtype } from "./Acceventtype.entity";
import { Accevtemplate } from "./Accevtemplate.entity";
import { Account } from "./Account.entity";
import { Analdist } from "./Analdist.entity";
import { Assetparams } from "./Assetparams.entity";
import { Bill } from "./Bill.entity";
import { Billtrntype } from "./Billtrntype.entity";
import { Bnktrntype } from "./Bnktrntype.entity";
import { Branch } from "./Branch.entity";


import { Doy } from "./Doy.entity";
import { Country } from "./Country.entity";
import { Emailaccount } from "./Emailaccount.entity";

import { Cost } from "./Cost.entity";
import { Costfolder } from "./Costfolder.entity";
import { Customer } from "./Customer.entity";
import { Custparams } from "./Custparams.entity";
import { Custtrntype } from "./Custtrntype.entity";
import { Docseries } from "./Docseries.entity";
import { Eurosystemhd } from "./Eurosystemhd.entity";
import { Finbankdoctype } from "./Finbankdoctype.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Finparams } from "./Finparams.entity";
import { Finstoredoctype } from "./Finstoredoctype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { Fiscyear } from "./Fiscyear.entity";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Glitem } from "./Glitem.entity";
import { Glparams } from "./Glparams.entity";
import { Glupdatestruct } from "./Glupdatestruct.entity";
import { Itemcategory } from "./Itemcategory.entity";
import { Itemgroup } from "./Itemgroup.entity";
import { Itemqtycommision } from "./Itemqtycommision.entity";
import { Journal } from "./Journal.entity";
import { Material } from "./Material.entity";
import { Matparams } from "./Matparams.entity";
import { Matpricecategory } from "./Matpricecategory.entity";
import { Mattrntype } from "./Mattrntype.entity";

import { Paymentterms } from "./Paymentterms.entity";
import { Pricecategory } from "./Pricecategory.entity";
import { Productionparams } from "./Productionparams.entity";
import { Puser } from "./Puser.entity";

import { Reliability } from "./Reliability.entity";
import { Retailparams } from "./Retailparams.entity";
import { Retailparamsext } from "./Retailparamsext.entity";
import { Route } from "./Route.entity";
import { Salesman } from "./Salesman.entity";
import { Salesparams } from "./Salesparams.entity";
import { Serviceparams } from "./Serviceparams.entity";
import { Shipcause } from "./Shipcause.entity";
import { Specification } from "./Specification.entity";
import { Spsurcharges } from "./Spsurcharges.entity";

import { Store } from "./Store.entity";
import { Supparams } from "./Supparams.entity";
import { Supplier } from "./Supplier.entity";
import { Suptrntype } from "./Suptrntype.entity";

import { Sxcompanyext } from "./Sxcompanyext.entity";

import { Userjournal } from "./Userjournal.entity";
import { Varcomtemplate } from "./Varcomtemplate.entity";
import { Varcomtrades } from "./Varcomtrades.entity";
import { ObjectType } from "@nestjs/graphql";


@Index("UNI_0", ["codeid"], { unique: true })
@Entity("COMPANY", { schema: "dbo" })
@ObjectType()

export class Company {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRESIDENTNAME", nullable: true, length: 255 })
  presidentname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 255 })
  fathername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADT", nullable: true, length: 15 })
  adt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AEFOLDERNUMBER", nullable: true, length: 255 })
  aefoldernumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATSTATUS", nullable: true, default: () => "0" })
  vatstatus: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACTIVITY", nullable: true, length: 255 })
  activity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IKA", nullable: true, length: 255 })
  ika: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IKAAM", nullable: true, length: 25 })
  ikaam: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CATEGORY", nullable: true, default: () => "(105)" })
  category: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEPTSTATS", nullable: true, length: 255 })
  deptstats: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SANUMBER", nullable: true, length: 25 })
  sanumber: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BOOKCATEGORY", nullable: true, default: () => "0" })
  bookcategory: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "INITIALIZATIONDATE", nullable: true })
  initializationdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHECKAFM", default: () => "2" })
  checkafm: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KBS", default: () => "1" })
  kbs: number;

  @Field({ nullable: true })
  @Column("int", { name: "LOCALCURID" })
  localcurid: number;

  @Field({ nullable: true })
  @Column("int", { name: "SECONDARYCURID", nullable: true })
  secondarycurid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERCENTDECIMALS", default: () => "2" })
  percentdecimals: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRICEDECIMALS", default: () => "0" })
  pricedecimals: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "QTYDECIMALS", default: () => "0" })
  qtydecimals: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALIDATESTORE", default: () => "0" })
  validatestore: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALUEDECIMALS", default: () => "0" })
  valuedecimals: number;

  @Field({ nullable: true })
  @Column("int", { name: "TRADECODELENGTH", default: () => "15" })
  tradecodelength: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AUTOCREATE",
    nullable: true,
    default: () => "0",
  })
  autocreate: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHDBLAFM", nullable: true, default: () => "0" })
  chdblafm: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ENABLEDOCRIGHTS", default: () => "0" })
  enabledocrights: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRADELIMITDATE", nullable: true })
  tradelimitdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "GLLIMITDATE", nullable: true })
  gllimitdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ALLIMITDATE", nullable: true })
  allimitdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PRINTERTYPE",
    nullable: true,
    default: () => "0",
  })
  printertype: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "COSTDECIMALS",
    nullable: true,
    default: () => "0",
  })
  costdecimals: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOLIMIT", nullable: true, precision: 53 })
  kepyolimit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EQUIVMODE", default: () => "0" })
  equivmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRINTLOGINDATE", default: () => "0" })
  printlogindate: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCOUNTANTID", nullable: true })
  accountantid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MODULETAGS",
    nullable: true,
    length: 255,
    default: () => "'214'",
  })
  moduletags: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISACCOUNTOFFICE",
    nullable: true,
    default: () => "0",
  })
  isaccountoffice: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX", nullable: true, length: 25 })
  ean13Comprefix: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX2", nullable: true, length: 25 })
  ean13Comprefix2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX3", nullable: true, length: 25 })
  ean13Comprefix3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX4", nullable: true, length: 25 })
  ean13Comprefix4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX5", nullable: true, length: 25 })
  ean13Comprefix5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EAN13COMPREFIX6", nullable: true, length: 25 })
  ean13Comprefix6: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXISUSERNAME", nullable: true, length: 50 })
  taxisusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXISPWD", nullable: true, length: 50 })
  taxispwd: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAINBUILDINGID", nullable: true })
  mainbuildingid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELCUSID", nullable: true })
  relcusid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PANDEKTISUSERNAME", nullable: true, length: 50 })
  pandektisusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PANDEKTISPWD", nullable: true, length: 50 })
  pandektispwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPORTVATDATA", nullable: true, length: 255 })
  reportvatdata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHE", nullable: true, length: 15 })
  dipethe: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHEPWD", nullable: true, length: 25 })
  dipethepwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WEBPAGE", nullable: true, length: 50 })
  webpage: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "WEBSHOP", default: () => "(0)" })
  webshop: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FINTRADEDATESSYNCHRONIZATION", nullable: true })
  fintradedatessynchronization: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMPTITLE", nullable: true, length: 50 })
  comptitle: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BILLCODELENGTH", default: () => "(15)" })
  billcodelength: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATUSERNAME", nullable: true, length: 50 })
  intrastatusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATPWD", nullable: true, length: 50 })
  intrastatpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MAILSERVER", nullable: true, length: 100 })
  mailserver: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAILSERVERPORT", default: () => "(25)" })
  mailserverport: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MAILSERVERUSER", nullable: true, length: 50 })
  mailserveruser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MAILSERVERPWD", nullable: true, length: 30 })
  mailserverpwd: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAILENCODING", default: () => "(0)" })
  mailencoding: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAILAUTHENTICATE", default: () => "(0)" })
  mailauthenticate: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAILAUTHWITHSSL", default: () => "(0)" })
  mailauthwithssl: number;

  @Field({ nullable: true })
  @Column("int", { name: "SMSPROVIDER", default: () => "(0)" })
  smsprovider: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMSUSER", nullable: true, length: 50 })
  smsuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMSPWD", nullable: true, length: 100 })
  smspwd: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRINTAFTERINVDISPATCH", default: () => "(0)" })
  printafterinvdispatch: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "SMSCOUNTRYCALLINGCODE",
    nullable: true,
    length: 10,
    default: () => "'+30'",
  })
  smscountrycallingcode: string | null;

  @Field({ nullable: true })
  @Column("int", {
    name: "SMSLOCALPHONEPREFIX",
    nullable: true,
    default: () => "(69)",
  })
  smslocalphoneprefix: number | null;

  @Field({ nullable: true })
  @Column("int", {
    name: "SMSLOCALPHONELENGTH",
    nullable: true,
    default: () => "(10)",
  })
  smslocalphonelength: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GEMH", nullable: true, length: 50 })
  gemh: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ONLINEOFFLINETIMERINTERVAL", default: () => "(9)" })
  onlineofflinetimerinterval: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROXYSERVER", nullable: true, length: 100 })
  proxyserver: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PROXYSERVERPORT", default: () => "(0)" })
  proxyserverport: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROXYSERVERUSER", nullable: true, length: 50 })
  proxyserveruser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROXYSERVERPWD", nullable: true, length: 30 })
  proxyserverpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROXYSERVERBYPASS", nullable: true, length: 150 })
  proxyserverbypass: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "AFMSTATUSINERTDAYS", nullable: true })
  afmstatusinertdays: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "HFEFOLDER", nullable: true, length: 255 })
  hfefolder: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TWITTERTOKENKEY", nullable: true, length: 255 })
  twittertokenkey: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "TWITTERTOKENSECRET",
    nullable: true,
    length: 255,
  })
  twittertokensecret: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "FACEBOOKUSERACCESSTOKEN",
    nullable: true,
    length: 255,
  })
  facebookuseraccesstoken: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TWITTERNAME", nullable: true, length: 255 })
  twittername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FACEBOOKNAME", nullable: true, length: 255 })
  facebookname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EARCHIVEDIRECTORY", nullable: true, length: 255 })
  earchivedirectory: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYFUSERNAME", nullable: true, length: 50 })
  myfusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYFPWD", nullable: true, length: 50 })
  myfpwd: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TAXOTHERPERIODKIND", default: () => "(1)" })
  taxotherperiodkind: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFMCHECKUSERNAME", nullable: true, length: 100 })
  afmcheckusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFMCHECKPWD", nullable: true, length: 100 })
  afmcheckpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OAEDUSER", nullable: true, length: 100 })
  oaeduser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OAEDPWD", nullable: true, length: 100 })
  oaedpwd: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRINUSR", nullable: true, length: 30 })
  minagrinusr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRINSHOPCODE", nullable: true, length: 30 })
  minagrinshopcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TDOCODBC", nullable: true, length: 30 })
  tdocodbc: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TDOCDB", nullable: true, length: 30 })
  tdocdb: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TDOCDBUSER", nullable: true, length: 30 })
  tdocdbuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TDOCDBPASS", nullable: true, length: 30 })
  tdocdbpass: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COMPANYSIZE", nullable: true })
  companysize: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALURL", nullable: true, length: 255 })
  phonedialurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "INCOMINGMAILSERVER",
    nullable: true,
    length: 100,
  })
  incomingmailserver: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "INCOMINGMAILSERVERPORT", default: () => "(143)" })
  incomingmailserverport: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INCOMINGMAILAUTHWITHSSL", default: () => "(0)" })
  incomingmailauthwithssl: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYURL", nullable: true, length: 255 })
  onlinepayurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYUSER", nullable: true, length: 50 })
  onlinepayuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYPWD", nullable: true, length: 50 })
  onlinepaypwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYKEY", nullable: true, length: 50 })
  onlinepaykey: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEURL", nullable: true, length: 255 })
  einvoiceurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEKEY", nullable: true, length: 255 })
  einvoicekey: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GDPR_ENABLED", default: () => "(0)" })
  gdprEnabled: number;

  @Field({ nullable: true })
  @Column("int", { name: "MINAGRPRESCRIBERID", nullable: true })
  minagrprescriberid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EINVOICEDAYS", nullable: true })
  einvoicedays: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOCHECKAFM", default: () => "(0)" })
  autocheckafm: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "URL_39A", nullable: true, length: 255 })
  url_39A: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USERNAME_39A", nullable: true, length: 50 })
  username_39A: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PASSWORD_39A", nullable: true, length: 50 })
  password_39A: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "URL", nullable: true, length: 255 })
  url: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USERNAME_MYDATA", nullable: true, length: 50 })
  usernameMydata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PASSWORD_MYDATA", nullable: true, length: 50 })
  passwordMydata: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DATEFROM_MYDATA", nullable: true })
  datefromMydata: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REQUEST_MYDATA", nullable: true, length: 50 })
  requestMydata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SEND_MYDATA", nullable: true, length: 50 })
  sendMydata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MODULES_MYDATA", nullable: true, length: 50 })
  modulesMydata: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INCLUDEINSTATISTICS", nullable: true })
  includeinstatistics: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWMODIFICATIONS", default: () => "(0)" })
  allowmodifications: number;

  @Field({ nullable: true })
  @Column("int", { name: "RFWEBACCOUNTID", nullable: true })
  rfwebaccountid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "RETAILONLINEDATE_MYDATA", nullable: true })
  retailonlinedateMydata: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEFAULTMAILSERVER", nullable: true })
  defaultmailserver: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROVIDERTRANSMISSIONMODE", nullable: true })
  providertransmissionmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROVIDERERPTRANSMISSIONMODE", nullable: true })
  providererptransmissionmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INCLUDEINFTS", nullable: true })
  includeinfts: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FULLTEXTSEARCHURL", nullable: true, length: 255 })
  fulltextsearchurl: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "LOGEMAIL",
    nullable: true,
    default: () => "(1)",
  })
  logemail: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFTERSALESUUID", nullable: true, length: 255 })
  aftersalesuuid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFTERSALESTOKEN", nullable: true, length: 255 })
  aftersalestoken: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "AFTERSALESPAYMENTCODEID",
    nullable: true,
    length: 255,
  })
  aftersalespaymentcodeid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOTIFYURL", nullable: true, length: 255 })
  lotifyurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOTIFYUSER", nullable: true, length: 50 })
  lotifyuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOTIFYPWD", nullable: true, length: 50 })
  lotifypwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIGNINGAUTHOR", nullable: true, length: 20 })
  signingauthor: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DISPATCHDATE_MYDATA", nullable: true })
  dispatchdateMydata: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEURLID", nullable: true })
  einvoiceurlid: number | null;

  @Field({ nullable: true })
  @OneToOne(() => Abcparams, (abcparams) => abcparams.com)
  abcparams: Abcparams;

  @Field(() => [Accclosetemplate], { nullable: true })
  @OneToMany(() => Accclosetemplate, (accclosetemplate) => accclosetemplate.com)
  accclosetemplates: Accclosetemplate[];

  @Field(() => [Acceventtype], { nullable: true })
  @OneToMany(() => Acceventtype, (acceventtype) => acceventtype.com)
  acceventtypes: Acceventtype[];

  @Field(() => [Accevtemplate], { nullable: true })
  @OneToMany(() => Accevtemplate, (accevtemplate) => accevtemplate.com)
  accevtemplates: Accevtemplate[];

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.com)
  accounts: Account[];

  @Field(() => [Analdist], { nullable: true })
  @OneToMany(() => Analdist, (analdist) => analdist.com)
  analdists: Analdist[];


  @Field({ nullable: true })
  @OneToOne(() => Assetparams, (assetparams) => assetparams.com)
  assetparams: Assetparams;

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.com)
  bills: Bill[];

  @Field(() => [Billtrntype], { nullable: true })
  @OneToMany(() => Billtrntype, (billtrntype) => billtrntype.com)
  billtrntypes: Billtrntype[];

  @Field(() => [Bnktrntype], { nullable: true })
  @OneToMany(() => Bnktrntype, (bnktrntype) => bnktrntype.com)
  bnktrntypes: Bnktrntype[];



  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.com)
  branches: Branch[];




  @Field({ nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.companies)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.companies)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Emailaccount, (emailaccount) => emailaccount.companies)
  @JoinColumn([{ name: "EMAILACCOUNTID", referencedColumnName: "id" }])
  emailaccount: Emailaccount;


  @Field(() => [Cost], { nullable: true })
  @OneToMany(() => Cost, (cost) => cost.com)
  costs: Cost[];

  @Field(() => [Costfolder], { nullable: true })
  @OneToMany(() => Costfolder, (costfolder) => costfolder.com)
  costfolders: Costfolder[];


  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.com)
  customers: Customer[];



  @Field({ nullable: true })
  @OneToOne(() => Custparams, (custparams) => custparams.com)
  custparams: Custparams;

  @Field(() => [Custtrntype], { nullable: true })
  @OneToMany(() => Custtrntype, (custtrntype) => custtrntype.com)
  custtrntypes: Custtrntype[];

  @Field(() => [Docseries], { nullable: true })
  @OneToMany(() => Docseries, (docseries) => docseries.com)
  docseries: Docseries[];


  @Field(() => [Eurosystemhd], { nullable: true })
  @OneToMany(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.com)
  eurosystemhds: Eurosystemhd[];


  @Field(() => [Finbankdoctype], { nullable: true })
  @OneToMany(() => Finbankdoctype, (finbankdoctype) => finbankdoctype.com)
  finbankdoctypes: Finbankdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(() => Fincustdoctype, (fincustdoctype) => fincustdoctype.com)
  fincustdoctypes: Fincustdoctype[];

  @Field({ nullable: true })
  @OneToOne(() => Finparams, (finparams) => finparams.com)
  finparams: Finparams;

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(() => Finstoredoctype, (finstoredoctype) => finstoredoctype.com)
  finstoredoctypes: Finstoredoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.com)
  finsupdoctypes: Finsupdoctype[];

  @Field(() => [Fiscyear], { nullable: true })
  @OneToMany(() => Fiscyear, (fiscyear) => fiscyear.com)
  fiscyears: Fiscyear[];

  @Field(() => [Fundstrntype], { nullable: true })
  @OneToMany(() => Fundstrntype, (fundstrntype) => fundstrntype.com)
  fundstrntypes: Fundstrntype[];

  @Field(() => [Glitem], { nullable: true })
  @OneToMany(() => Glitem, (glitem) => glitem.com)
  glitems: Glitem[];

  @Field({ nullable: true })
  @OneToOne(() => Glparams, (glparams) => glparams.com)
  glparams: Glparams;

  @Field(() => [Glupdatestruct], { nullable: true })
  @OneToMany(() => Glupdatestruct, (glupdatestruct) => glupdatestruct.com)
  glupdatestructs: Glupdatestruct[];

  @Field(() => [Itemcategory], { nullable: true })
  @OneToMany(() => Itemcategory, (itemcategory) => itemcategory.com)
  itemcategories: Itemcategory[];

  @Field(() => [Itemgroup], { nullable: true })
  @OneToMany(() => Itemgroup, (itemgroup) => itemgroup.com)
  itemgroups: Itemgroup[];

  @Field(() => [Itemqtycommision], { nullable: true })
  @OneToMany(() => Itemqtycommision, (itemqtycommision) => itemqtycommision.com)
  itemqtycommisions: Itemqtycommision[];

  @Field(() => [Journal], { nullable: true })
  @OneToMany(() => Journal, (journal) => journal.com)
  journals: Journal[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.com)
  materials: Material[];

  @Field({ nullable: true })
  @OneToOne(() => Matparams, (matparams) => matparams.com)
  matparams: Matparams;

  @Field(() => [Matpricecategory], { nullable: true })
  @OneToMany(() => Matpricecategory, (matpricecategory) => matpricecategory.com)
  matpricecategories: Matpricecategory[];

  @Field(() => [Mattrntype], { nullable: true })
  @OneToMany(() => Mattrntype, (mattrntype) => mattrntype.com)
  mattrntypes: Mattrntype[];


  @Field(() => [Paymentterms], { nullable: true })
  @OneToMany(() => Paymentterms, (paymentterms) => paymentterms.com)
  paymentterms: Paymentterms[];

  @Field(() => [Pricecategory], { nullable: true })
  @OneToMany(() => Pricecategory, (pricecategory) => pricecategory.com)
  pricecategories: Pricecategory[];

  
  @Field({ nullable: true })
  @OneToOne(() => Productionparams, (productionparams) => productionparams.com)
  productionparams: Productionparams;

  @Field(() => [Puser], { nullable: true })
  @OneToMany(() => Puser, (puser) => puser.com)
  pusers: Puser[];

  

  @Field(() => [Reliability], { nullable: true })
  @OneToMany(() => Reliability, (reliability) => reliability.com)
  reliabilities: Reliability[];

  @Field({ nullable: true })
  @OneToOne(() => Retailparams, (retailparams) => retailparams.com)
  retailparams: Retailparams;

  @Field({ nullable: true })
  @OneToOne(() => Retailparamsext, (retailparamsext) => retailparamsext.com)
  retailparamsext: Retailparamsext;

  @Field(() => [Route], { nullable: true })
  @OneToMany(() => Route, (route) => route.com)
  routes: Route[];

  @Field(() => [Salesman], { nullable: true })
  @OneToMany(() => Salesman, (salesman) => salesman.com)
  salesmen: Salesman[];

  @Field({ nullable: true })
  @OneToOne(() => Salesparams, (salesparams) => salesparams.com)
  salesparams: Salesparams;

  @Field({ nullable: true })
  @OneToOne(() => Serviceparams, (serviceparams) => serviceparams.com)
  serviceparams: Serviceparams;

  @Field(() => [Shipcause], { nullable: true })
  @OneToMany(() => Shipcause, (shipcause) => shipcause.com)
  shipcauses: Shipcause[];

  @Field(() => [Specification], { nullable: true })
  @OneToMany(() => Specification, (specification) => specification.com)
  specifications: Specification[];

  @Field(() => [Spsurcharges], { nullable: true })
  @OneToMany(() => Spsurcharges, (spsurcharges) => spsurcharges.com)
  spsurcharges: Spsurcharges[];

  @Field(() => [Store], { nullable: true })
  @OneToMany(() => Store, (store) => store.com)
  stores: Store[];

  @Field({ nullable: true })
  @OneToOne(() => Supparams, (supparams) => supparams.com)
  supparams: Supparams;

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.com)
  suppliers: Supplier[];

  @Field(() => [Suptrntype], { nullable: true })
  @OneToMany(() => Suptrntype, (suptrntype) => suptrntype.com)
  suptrntypes: Suptrntype[];

  @Field({ nullable: true })
  @OneToOne(() => Sxcompanyext, (sxcompanyext) => sxcompanyext.com)
  sxcompanyext: Sxcompanyext;

  @Field(() => [Userjournal], { nullable: true })
  @OneToMany(() => Userjournal, (userjournal) => userjournal.com)
  userjournals: Userjournal[];

  @Field(() => [Varcomtemplate], { nullable: true })
  @OneToMany(() => Varcomtemplate, (varcomtemplate) => varcomtemplate.com)
  varcomtemplates: Varcomtemplate[];

  @Field(() => [Varcomtrades], { nullable: true })
  @OneToMany(() => Varcomtrades, (varcomtrades) => varcomtrades.com)
  varcomtrades: Varcomtrades[];

}