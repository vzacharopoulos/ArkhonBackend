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
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Column("varchar", { name: "PRESIDENTNAME", nullable: true, length: 255 })
  presidentname: string | null;

  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 255 })
  fathername: string | null;

  @Column("varchar", { name: "ADT", nullable: true, length: 15 })
  adt: string | null;

  @Column("varchar", { name: "AEFOLDERNUMBER", nullable: true, length: 255 })
  aefoldernumber: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("int", { name: "VATSTATUS", nullable: true, default: () => "0" })
  vatstatus: number | null;

  @Column("varchar", { name: "ACTIVITY", nullable: true, length: 255 })
  activity: string | null;

  @Column("varchar", { name: "IKA", nullable: true, length: 255 })
  ika: string | null;

  @Column("varchar", { name: "IKAAM", nullable: true, length: 25 })
  ikaam: string | null;

  @Column("int", { name: "CATEGORY", nullable: true, default: () => "(105)" })
  category: number | null;

  @Column("varchar", { name: "DEPTSTATS", nullable: true, length: 255 })
  deptstats: string | null;

  @Column("varchar", { name: "SANUMBER", nullable: true, length: 25 })
  sanumber: string | null;

  @Column("int", { name: "BOOKCATEGORY", nullable: true, default: () => "0" })
  bookcategory: number | null;

  @Column("datetime", { name: "INITIALIZATIONDATE", nullable: true })
  initializationdate: Date | null;

  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Column("smallint", { name: "CHECKAFM", default: () => "2" })
  checkafm: number;

  @Column("smallint", { name: "KBS", default: () => "1" })
  kbs: number;

  @Column("int", { name: "LOCALCURID" })
  localcurid: number;

  @Column("int", { name: "SECONDARYCURID", nullable: true })
  secondarycurid: number | null;

  @Column("smallint", { name: "PERCENTDECIMALS", default: () => "2" })
  percentdecimals: number;

  @Column("smallint", { name: "PRICEDECIMALS", default: () => "0" })
  pricedecimals: number;

  @Column("smallint", { name: "QTYDECIMALS", default: () => "0" })
  qtydecimals: number;

  @Column("smallint", { name: "VALIDATESTORE", default: () => "0" })
  validatestore: number;

  @Column("smallint", { name: "VALUEDECIMALS", default: () => "0" })
  valuedecimals: number;

  @Column("int", { name: "TRADECODELENGTH", default: () => "15" })
  tradecodelength: number;

  @Column("smallint", {
    name: "AUTOCREATE",
    nullable: true,
    default: () => "0",
  })
  autocreate: number | null;

  @Column("smallint", { name: "CHDBLAFM", nullable: true, default: () => "0" })
  chdblafm: number | null;

  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Column("smallint", { name: "ENABLEDOCRIGHTS", default: () => "0" })
  enabledocrights: number;

  @Column("datetime", { name: "TRADELIMITDATE", nullable: true })
  tradelimitdate: Date | null;

  @Column("datetime", { name: "GLLIMITDATE", nullable: true })
  gllimitdate: Date | null;

  @Column("datetime", { name: "ALLIMITDATE", nullable: true })
  allimitdate: Date | null;

  @Column("smallint", {
    name: "PRINTERTYPE",
    nullable: true,
    default: () => "0",
  })
  printertype: number | null;

  @Column("smallint", {
    name: "COSTDECIMALS",
    nullable: true,
    default: () => "0",
  })
  costdecimals: number | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("float", { name: "KEPYOLIMIT", nullable: true, precision: 53 })
  kepyolimit: number | null;

  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Column("smallint", { name: "EQUIVMODE", default: () => "0" })
  equivmode: number;

  @Column("smallint", { name: "PRINTLOGINDATE", default: () => "0" })
  printlogindate: number;

  @Column("int", { name: "ACCOUNTANTID", nullable: true })
  accountantid: number | null;

  @Column("varchar", {
    name: "MODULETAGS",
    nullable: true,
    length: 255,
    default: () => "'214'",
  })
  moduletags: string | null;

  @Column("smallint", {
    name: "ISACCOUNTOFFICE",
    nullable: true,
    default: () => "0",
  })
  isaccountoffice: number | null;

  @Column("varchar", { name: "EAN13COMPREFIX", nullable: true, length: 25 })
  ean13Comprefix: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("varchar", { name: "EAN13COMPREFIX2", nullable: true, length: 25 })
  ean13Comprefix2: string | null;

  @Column("varchar", { name: "EAN13COMPREFIX3", nullable: true, length: 25 })
  ean13Comprefix3: string | null;

  @Column("varchar", { name: "EAN13COMPREFIX4", nullable: true, length: 25 })
  ean13Comprefix4: string | null;

  @Column("varchar", { name: "EAN13COMPREFIX5", nullable: true, length: 25 })
  ean13Comprefix5: string | null;

  @Column("varchar", { name: "EAN13COMPREFIX6", nullable: true, length: 25 })
  ean13Comprefix6: string | null;

  @Column("varchar", { name: "TAXISUSERNAME", nullable: true, length: 50 })
  taxisusername: string | null;

  @Column("varchar", { name: "TAXISPWD", nullable: true, length: 50 })
  taxispwd: string | null;

  @Column("int", { name: "MAINBUILDINGID", nullable: true })
  mainbuildingid: number | null;

  @Column("int", { name: "RELCUSID", nullable: true })
  relcusid: number | null;

  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Column("varchar", { name: "PANDEKTISUSERNAME", nullable: true, length: 50 })
  pandektisusername: string | null;

  @Column("varchar", { name: "PANDEKTISPWD", nullable: true, length: 50 })
  pandektispwd: string | null;

  @Column("varchar", { name: "REPORTVATDATA", nullable: true, length: 255 })
  reportvatdata: string | null;

  @Column("varchar", { name: "DIPETHE", nullable: true, length: 15 })
  dipethe: string | null;

  @Column("varchar", { name: "DIPETHEPWD", nullable: true, length: 25 })
  dipethepwd: string | null;

  @Column("varchar", { name: "WEBPAGE", nullable: true, length: 50 })
  webpage: string | null;

  @Column("smallint", { name: "WEBSHOP", default: () => "(0)" })
  webshop: number;

  @Column("smallint", { name: "FINTRADEDATESSYNCHRONIZATION", nullable: true })
  fintradedatessynchronization: number | null;

  @Column("varchar", { name: "COMPTITLE", nullable: true, length: 50 })
  comptitle: string | null;

  @Column("int", { name: "BILLCODELENGTH", default: () => "(15)" })
  billcodelength: number;

  @Column("varchar", { name: "INTRASTATUSERNAME", nullable: true, length: 50 })
  intrastatusername: string | null;

  @Column("varchar", { name: "INTRASTATPWD", nullable: true, length: 50 })
  intrastatpwd: string | null;

  @Column("varchar", { name: "MAILSERVER", nullable: true, length: 100 })
  mailserver: string | null;

  @Column("int", { name: "MAILSERVERPORT", default: () => "(25)" })
  mailserverport: number;

  @Column("varchar", { name: "MAILSERVERUSER", nullable: true, length: 50 })
  mailserveruser: string | null;

  @Column("varchar", { name: "MAILSERVERPWD", nullable: true, length: 30 })
  mailserverpwd: string | null;

  @Column("int", { name: "MAILENCODING", default: () => "(0)" })
  mailencoding: number;

  @Column("smallint", { name: "MAILAUTHENTICATE", default: () => "(0)" })
  mailauthenticate: number;

  @Column("smallint", { name: "MAILAUTHWITHSSL", default: () => "(0)" })
  mailauthwithssl: number;

  @Column("int", { name: "SMSPROVIDER", default: () => "(0)" })
  smsprovider: number;

  @Column("varchar", { name: "SMSUSER", nullable: true, length: 50 })
  smsuser: string | null;

  @Column("varchar", { name: "SMSPWD", nullable: true, length: 100 })
  smspwd: string | null;

  @Column("smallint", { name: "PRINTAFTERINVDISPATCH", default: () => "(0)" })
  printafterinvdispatch: number;

  @Column("varchar", {
    name: "SMSCOUNTRYCALLINGCODE",
    nullable: true,
    length: 10,
    default: () => "'+30'",
  })
  smscountrycallingcode: string | null;

  @Column("int", {
    name: "SMSLOCALPHONEPREFIX",
    nullable: true,
    default: () => "(69)",
  })
  smslocalphoneprefix: number | null;

  @Column("int", {
    name: "SMSLOCALPHONELENGTH",
    nullable: true,
    default: () => "(10)",
  })
  smslocalphonelength: number | null;

  @Column("varchar", { name: "GEMH", nullable: true, length: 50 })
  gemh: string | null;

  @Column("int", { name: "ONLINEOFFLINETIMERINTERVAL", default: () => "(9)" })
  onlineofflinetimerinterval: number;

  @Column("varchar", { name: "PROXYSERVER", nullable: true, length: 100 })
  proxyserver: string | null;

  @Column("int", { name: "PROXYSERVERPORT", default: () => "(0)" })
  proxyserverport: number;

  @Column("varchar", { name: "PROXYSERVERUSER", nullable: true, length: 50 })
  proxyserveruser: string | null;

  @Column("varchar", { name: "PROXYSERVERPWD", nullable: true, length: 30 })
  proxyserverpwd: string | null;

  @Column("varchar", { name: "PROXYSERVERBYPASS", nullable: true, length: 150 })
  proxyserverbypass: string | null;

  @Column("int", { name: "AFMSTATUSINERTDAYS", nullable: true })
  afmstatusinertdays: number | null;

  @Column("varchar", { name: "HFEFOLDER", nullable: true, length: 255 })
  hfefolder: string | null;

  @Column("varchar", { name: "TWITTERTOKENKEY", nullable: true, length: 255 })
  twittertokenkey: string | null;

  @Column("varchar", {
    name: "TWITTERTOKENSECRET",
    nullable: true,
    length: 255,
  })
  twittertokensecret: string | null;

  @Column("varchar", {
    name: "FACEBOOKUSERACCESSTOKEN",
    nullable: true,
    length: 255,
  })
  facebookuseraccesstoken: string | null;

  @Column("varchar", { name: "TWITTERNAME", nullable: true, length: 255 })
  twittername: string | null;

  @Column("varchar", { name: "FACEBOOKNAME", nullable: true, length: 255 })
  facebookname: string | null;

  @Column("varchar", { name: "EARCHIVEDIRECTORY", nullable: true, length: 255 })
  earchivedirectory: string | null;

  @Column("varchar", { name: "MYFUSERNAME", nullable: true, length: 50 })
  myfusername: string | null;

  @Column("varchar", { name: "MYFPWD", nullable: true, length: 50 })
  myfpwd: string | null;

  @Column("smallint", { name: "TAXOTHERPERIODKIND", default: () => "(1)" })
  taxotherperiodkind: number;

  @Column("varchar", { name: "AFMCHECKUSERNAME", nullable: true, length: 100 })
  afmcheckusername: string | null;

  @Column("varchar", { name: "AFMCHECKPWD", nullable: true, length: 100 })
  afmcheckpwd: string | null;

  @Column("varchar", { name: "OAEDUSER", nullable: true, length: 100 })
  oaeduser: string | null;

  @Column("varchar", { name: "OAEDPWD", nullable: true, length: 100 })
  oaedpwd: string | null;

  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Column("varchar", { name: "MINAGRINUSR", nullable: true, length: 30 })
  minagrinusr: string | null;

  @Column("varchar", { name: "MINAGRINSHOPCODE", nullable: true, length: 30 })
  minagrinshopcode: string | null;

  @Column("varchar", { name: "TDOCODBC", nullable: true, length: 30 })
  tdocodbc: string | null;

  @Column("varchar", { name: "TDOCDB", nullable: true, length: 30 })
  tdocdb: string | null;

  @Column("varchar", { name: "TDOCDBUSER", nullable: true, length: 30 })
  tdocdbuser: string | null;

  @Column("varchar", { name: "TDOCDBPASS", nullable: true, length: 30 })
  tdocdbpass: string | null;

  @Column("smallint", { name: "COMPANYSIZE", nullable: true })
  companysize: number | null;

  @Column("varchar", { name: "PHONEDIALURL", nullable: true, length: 255 })
  phonedialurl: string | null;

  @Column("varchar", {
    name: "INCOMINGMAILSERVER",
    nullable: true,
    length: 100,
  })
  incomingmailserver: string | null;

  @Column("int", { name: "INCOMINGMAILSERVERPORT", default: () => "(143)" })
  incomingmailserverport: number;

  @Column("smallint", { name: "INCOMINGMAILAUTHWITHSSL", default: () => "(0)" })
  incomingmailauthwithssl: number;

  @Column("varchar", { name: "ONLINEPAYURL", nullable: true, length: 255 })
  onlinepayurl: string | null;

  @Column("varchar", { name: "ONLINEPAYUSER", nullable: true, length: 50 })
  onlinepayuser: string | null;

  @Column("varchar", { name: "ONLINEPAYPWD", nullable: true, length: 50 })
  onlinepaypwd: string | null;

  @Column("varchar", { name: "ONLINEPAYKEY", nullable: true, length: 50 })
  onlinepaykey: string | null;

  @Column("varchar", { name: "EINVOICEURL", nullable: true, length: 255 })
  einvoiceurl: string | null;

  @Column("varchar", { name: "EINVOICEKEY", nullable: true, length: 255 })
  einvoicekey: string | null;

  @Column("smallint", { name: "GDPR_ENABLED", default: () => "(0)" })
  gdprEnabled: number;

  @Column("int", { name: "MINAGRPRESCRIBERID", nullable: true })
  minagrprescriberid: number | null;

  @Column("int", { name: "EINVOICEDAYS", nullable: true })
  einvoicedays: number | null;

  @Column("smallint", { name: "AUTOCHECKAFM", default: () => "(0)" })
  autocheckafm: number;

  @Column("varchar", { name: "URL_39A", nullable: true, length: 255 })
  url_39A: string | null;

  @Column("varchar", { name: "USERNAME_39A", nullable: true, length: 50 })
  username_39A: string | null;

  @Column("varchar", { name: "PASSWORD_39A", nullable: true, length: 50 })
  password_39A: string | null;

  @Column("varchar", { name: "URL", nullable: true, length: 255 })
  url: string | null;

  @Column("varchar", { name: "USERNAME_MYDATA", nullable: true, length: 50 })
  usernameMydata: string | null;

  @Column("varchar", { name: "PASSWORD_MYDATA", nullable: true, length: 50 })
  passwordMydata: string | null;

  @Column("datetime", { name: "DATEFROM_MYDATA", nullable: true })
  datefromMydata: Date | null;

  @Column("varchar", { name: "REQUEST_MYDATA", nullable: true, length: 50 })
  requestMydata: string | null;

  @Column("varchar", { name: "SEND_MYDATA", nullable: true, length: 50 })
  sendMydata: string | null;

  @Column("varchar", { name: "MODULES_MYDATA", nullable: true, length: 50 })
  modulesMydata: string | null;

  @Column("smallint", { name: "INCLUDEINSTATISTICS", nullable: true })
  includeinstatistics: number | null;

  @Column("smallint", { name: "ALLOWMODIFICATIONS", default: () => "(0)" })
  allowmodifications: number;

  @Column("int", { name: "RFWEBACCOUNTID", nullable: true })
  rfwebaccountid: number | null;

  @Column("datetime", { name: "RETAILONLINEDATE_MYDATA", nullable: true })
  retailonlinedateMydata: Date | null;

  @Column("smallint", { name: "DEFAULTMAILSERVER", nullable: true })
  defaultmailserver: number | null;

  @Column("smallint", { name: "PROVIDERTRANSMISSIONMODE", nullable: true })
  providertransmissionmode: number | null;

  @Column("smallint", { name: "PROVIDERERPTRANSMISSIONMODE", nullable: true })
  providererptransmissionmode: number | null;

  @Column("smallint", { name: "INCLUDEINFTS", nullable: true })
  includeinfts: number | null;

  @Column("varchar", { name: "FULLTEXTSEARCHURL", nullable: true, length: 255 })
  fulltextsearchurl: string | null;

  @Column("smallint", {
    name: "LOGEMAIL",
    nullable: true,
    default: () => "(1)",
  })
  logemail: number | null;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Column("varchar", { name: "AFTERSALESUUID", nullable: true, length: 255 })
  aftersalesuuid: string | null;

  @Column("varchar", { name: "AFTERSALESTOKEN", nullable: true, length: 255 })
  aftersalestoken: string | null;

  @Column("varchar", {
    name: "AFTERSALESPAYMENTCODEID",
    nullable: true,
    length: 255,
  })
  aftersalespaymentcodeid: string | null;

  @Column("varchar", { name: "LOTIFYURL", nullable: true, length: 255 })
  lotifyurl: string | null;

  @Column("varchar", { name: "LOTIFYUSER", nullable: true, length: 50 })
  lotifyuser: string | null;

  @Column("varchar", { name: "LOTIFYPWD", nullable: true, length: 50 })
  lotifypwd: string | null;

  @Column("varchar", { name: "SIGNINGAUTHOR", nullable: true, length: 20 })
  signingauthor: string | null;

  @Column("datetime", { name: "DISPATCHDATE_MYDATA", nullable: true })
  dispatchdateMydata: Date | null;

  @Column("smallint", { name: "EINVOICEURLID", nullable: true })
  einvoiceurlid: number | null;

  @OneToOne(() => Abcparams, (abcparams) => abcparams.com)
  abcparams: Abcparams;

  @OneToMany(() => Accclosetemplate, (accclosetemplate) => accclosetemplate.com)
  accclosetemplates: Accclosetemplate[];

  @OneToMany(() => Acceventtype, (acceventtype) => acceventtype.com)
  acceventtypes: Acceventtype[];

  @OneToMany(() => Accevtemplate, (accevtemplate) => accevtemplate.com)
  accevtemplates: Accevtemplate[];

  @OneToMany(() => Account, (account) => account.com)
  accounts: Account[];

  @OneToMany(() => Analdist, (analdist) => analdist.com)
  analdists: Analdist[];


  @OneToOne(() => Assetparams, (assetparams) => assetparams.com)
  assetparams: Assetparams;

  @OneToMany(() => Bill, (bill) => bill.com)
  bills: Bill[];

  @OneToMany(() => Billtrntype, (billtrntype) => billtrntype.com)
  billtrntypes: Billtrntype[];

  @OneToMany(() => Bnktrntype, (bnktrntype) => bnktrntype.com)
  bnktrntypes: Bnktrntype[];



  @OneToMany(() => Branch, (branch) => branch.com)
  branches: Branch[];




  @ManyToOne(() => Doy, (doy) => doy.companies)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @ManyToOne(() => Country, (country) => country.companies)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @ManyToOne(() => Emailaccount, (emailaccount) => emailaccount.companies)
  @JoinColumn([{ name: "EMAILACCOUNTID", referencedColumnName: "id" }])
  emailaccount: Emailaccount;


  @OneToMany(() => Cost, (cost) => cost.com)
  costs: Cost[];

  @OneToMany(() => Costfolder, (costfolder) => costfolder.com)
  costfolders: Costfolder[];


  @OneToMany(() => Customer, (customer) => customer.com)
  customers: Customer[];



  @OneToOne(() => Custparams, (custparams) => custparams.com)
  custparams: Custparams;

  @OneToMany(() => Custtrntype, (custtrntype) => custtrntype.com)
  custtrntypes: Custtrntype[];

  @OneToMany(() => Docseries, (docseries) => docseries.com)
  docseries: Docseries[];


  @OneToMany(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.com)
  eurosystemhds: Eurosystemhd[];


  @OneToMany(() => Finbankdoctype, (finbankdoctype) => finbankdoctype.com)
  finbankdoctypes: Finbankdoctype[];

  @OneToMany(() => Fincustdoctype, (fincustdoctype) => fincustdoctype.com)
  fincustdoctypes: Fincustdoctype[];

  @OneToOne(() => Finparams, (finparams) => finparams.com)
  finparams: Finparams;

  @OneToMany(() => Finstoredoctype, (finstoredoctype) => finstoredoctype.com)
  finstoredoctypes: Finstoredoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.com)
  finsupdoctypes: Finsupdoctype[];

  @OneToMany(() => Fiscyear, (fiscyear) => fiscyear.com)
  fiscyears: Fiscyear[];

  @OneToMany(() => Fundstrntype, (fundstrntype) => fundstrntype.com)
  fundstrntypes: Fundstrntype[];

  @OneToMany(() => Glitem, (glitem) => glitem.com)
  glitems: Glitem[];

  @OneToOne(() => Glparams, (glparams) => glparams.com)
  glparams: Glparams;

  @OneToMany(() => Glupdatestruct, (glupdatestruct) => glupdatestruct.com)
  glupdatestructs: Glupdatestruct[];

  @OneToMany(() => Itemcategory, (itemcategory) => itemcategory.com)
  itemcategories: Itemcategory[];

  @OneToMany(() => Itemgroup, (itemgroup) => itemgroup.com)
  itemgroups: Itemgroup[];

  @OneToMany(() => Itemqtycommision, (itemqtycommision) => itemqtycommision.com)
  itemqtycommisions: Itemqtycommision[];

  @OneToMany(() => Journal, (journal) => journal.com)
  journals: Journal[];

  @OneToMany(() => Material, (material) => material.com)
  materials: Material[];

  @OneToOne(() => Matparams, (matparams) => matparams.com)
  matparams: Matparams;

  @OneToMany(() => Matpricecategory, (matpricecategory) => matpricecategory.com)
  matpricecategories: Matpricecategory[];

  @OneToMany(() => Mattrntype, (mattrntype) => mattrntype.com)
  mattrntypes: Mattrntype[];


  @OneToMany(() => Paymentterms, (paymentterms) => paymentterms.com)
  paymentterms: Paymentterms[];

  @OneToMany(() => Pricecategory, (pricecategory) => pricecategory.com)
  pricecategories: Pricecategory[];

  
  @OneToOne(() => Productionparams, (productionparams) => productionparams.com)
  productionparams: Productionparams;

  @OneToMany(() => Puser, (puser) => puser.com)
  pusers: Puser[];

  

  @OneToMany(() => Reliability, (reliability) => reliability.com)
  reliabilities: Reliability[];

  @OneToOne(() => Retailparams, (retailparams) => retailparams.com)
  retailparams: Retailparams;

  @OneToOne(() => Retailparamsext, (retailparamsext) => retailparamsext.com)
  retailparamsext: Retailparamsext;

  @OneToMany(() => Route, (route) => route.com)
  routes: Route[];

  @OneToMany(() => Salesman, (salesman) => salesman.com)
  salesmen: Salesman[];

  @OneToOne(() => Salesparams, (salesparams) => salesparams.com)
  salesparams: Salesparams;

  @OneToOne(() => Serviceparams, (serviceparams) => serviceparams.com)
  serviceparams: Serviceparams;

  @OneToMany(() => Shipcause, (shipcause) => shipcause.com)
  shipcauses: Shipcause[];

  @OneToMany(() => Specification, (specification) => specification.com)
  specifications: Specification[];

  @OneToMany(() => Spsurcharges, (spsurcharges) => spsurcharges.com)
  spsurcharges: Spsurcharges[];

  @OneToMany(() => Store, (store) => store.com)
  stores: Store[];

  @OneToOne(() => Supparams, (supparams) => supparams.com)
  supparams: Supparams;

  @OneToMany(() => Supplier, (supplier) => supplier.com)
  suppliers: Supplier[];

  @OneToMany(() => Suptrntype, (suptrntype) => suptrntype.com)
  suptrntypes: Suptrntype[];

  @OneToOne(() => Sxcompanyext, (sxcompanyext) => sxcompanyext.com)
  sxcompanyext: Sxcompanyext;

  @OneToMany(() => Userjournal, (userjournal) => userjournal.com)
  userjournals: Userjournal[];

  @OneToMany(() => Varcomtemplate, (varcomtemplate) => varcomtemplate.com)
  varcomtemplates: Varcomtemplate[];

  @OneToMany(() => Varcomtrades, (varcomtrades) => varcomtrades.com)
  varcomtrades: Varcomtrades[];

}