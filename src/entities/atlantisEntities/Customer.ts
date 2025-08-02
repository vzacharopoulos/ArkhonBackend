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

import { Custaddress } from "./Custaddress";
import { Custbalancesheet } from "./Custbalancesheet";
import { Custbankaccount } from "./Custbankaccount";
import { Custfindata } from "./Custfindata";
import { Pricecategory } from "./Pricecategory";
import { Geogrpos } from "./Geogrpos";
import { Carrier } from "./Carrier";
import { Bunits } from "./Bunits";
import { Currency } from "./Currency";
import { Route } from "./Route";
import { Occupation } from "./Occupation";
import { Doy } from "./Doy";
import { Pgroup } from "./Pgroup";
import { Salesman } from "./Salesman";
import { Paymentterms } from "./Paymentterms";
import { Country } from "./Country";
import { Reliability } from "./Reliability";
import { Deliverytype } from "./Deliverytype";
import { Shipvia } from "./Shipvia";
import { Company } from "./Company";

import { Customertrans } from "./Customertrans";
import { Custrespperson } from "./Custrespperson";
import { Custtradelines } from "./Custtradelines";
import { Fintrade } from "./Fintrade";

import { Specification } from "./Specification";
import { Supplier } from "./Supplier";

import { Webcustomer } from "./Webcustomer";

@Index("UNI_2002", ["comid", "code"], { unique: true })
@Index("UNI_2036", ["id"], { unique: true })
@Index("UNIX_1057", ["afm"], {})
@Entity("CUSTOMER", { schema: "dbo" })
export class Customer {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Column("varchar", { name: "CARRIER", nullable: true, length: 30 })
  carrier: string | null;

  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Column("varchar", { name: "CITY2", nullable: true, length: 30 })
  city2: string | null;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "COMEDICODE", nullable: true, length: 10 })
  comedicode: string | null;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Column("varchar", { name: "DISTRICT1", nullable: true, length: 30 })
  district1: string | null;

  @Column("varchar", { name: "DISTRICT2", nullable: true, length: 30 })
  district2: string | null;

  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 255 })
  email: string | null;

  @Column("smallint", { name: "FPASTATUS" })
  fpastatus: number;

  @Column("varchar", { name: "FAX1", nullable: true, length: 20 })
  fax1: string | null;

  @Column("varchar", { name: "FAX2", nullable: true, length: 20 })
  fax2: string | null;

  @Column("varchar", { name: "IDENTITYNUM", nullable: true, length: 20 })
  identitynum: string | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("varchar", { name: "WEBPAGE", nullable: true, length: 50 })
  webpage: string | null;

  @Column("varchar", { name: "NAME", length: 70 })
  name: string;

  @Column("varchar", { name: "OCCUPATION", nullable: true, length: 50 })
  occupation: string | null;

  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Column("varchar", { name: "PAYMENTDAYS", nullable: true, length: 255 })
  paymentdays: string | null;

  @Column("datetime", { name: "PAYMENTHOURFROM", nullable: true })
  paymenthourfrom: Date | null;

  @Column("datetime", { name: "PAYMENTHOURTO", nullable: true })
  paymenthourto: Date | null;

  @Column("smallint", { name: "PAYMENTSTATUS", default: () => "0" })
  paymentstatus: number;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("varchar", { name: "PHONE11", nullable: true, length: 20 })
  phone11: string | null;

  @Column("varchar", { name: "PHONE12", nullable: true, length: 20 })
  phone12: string | null;

  @Column("varchar", { name: "PHONE21", nullable: true, length: 20 })
  phone21: string | null;

  @Column("varchar", { name: "PHONE22", nullable: true, length: 20 })
  phone22: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("varchar", { name: "STREET1", nullable: true, length: 50 })
  street1: string | null;

  @Column("varchar", { name: "STREET2", nullable: true, length: 50 })
  street2: string | null;

  @Column("varchar", { name: "TELEX1", nullable: true, length: 20 })
  telex1: string | null;

  @Column("varchar", { name: "TELEX2", nullable: true, length: 20 })
  telex2: string | null;

  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Column("varchar", { name: "ZIPCODE2", nullable: true, length: 10 })
  zipcode2: string | null;

  @Column("smallint", { name: "OMODE", default: () => "0" })
  omode: number;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("float", { name: "ORDERLIMIT", nullable: true, precision: 53 })
  orderlimit: number | null;

  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Column("int", { name: "CPRID", nullable: true })
  cprid: number | null;

  @Column("float", { name: "SATLINEORDER", nullable: true, precision: 53 })
  satlineorder: number | null;

  @Column("smallint", {
    name: "SATTOTALORDER",
    nullable: true,
    default: () => "0",
  })
  sattotalorder: number | null;

  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Column("int", { name: "LEGALF", nullable: true })
  legalf: number | null;

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

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "ABCDDID", nullable: true })
  abcddid: number | null;

  @Column("varchar", { name: "LOGEXPR", nullable: true, length: 50 })
  logexpr: string | null;

  @Column("float", { name: "LOGEXPRLIMIT", nullable: true, precision: 53 })
  logexprlimit: number | null;

  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Column("float", {
    name: "MAXDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  maxdiscount: number | null;

  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Column("int", { name: "AGEID", nullable: true })
  ageid: number | null;

  @Column("smallint", { name: "CATREALTY", nullable: true })
  catrealty: number | null;

  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Column("int", { name: "RELCOMID", nullable: true })
  relcomid: number | null;

  @Column("smallint", { name: "POSTSTATUS", nullable: true })
  poststatus: number | null;

  @Column("int", { name: "WORKFORCE", nullable: true })
  workforce: number | null;

  @Column("float", { name: "TRANSDOCLIMIT", nullable: true, precision: 53 })
  transdoclimit: number | null;

  @Column("varchar", { name: "DIPETHE", nullable: true, length: 15 })
  dipethe: string | null;

  @Column("varchar", { name: "DEHCODE", nullable: true, length: 15 })
  dehcode: string | null;

  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Column("float", { name: "VALUELIMIT", nullable: true, precision: 53 })
  valuelimit: number | null;

  @Column("float", { name: "DISCLIMIT", nullable: true, precision: 53 })
  disclimit: number | null;

  @Column("datetime", { name: "MEANPAYTIMESTARTDATE", nullable: true })
  meanpaytimestartdate: Date | null;

  @Column("smallint", {
    name: "ISINDIVIDUAL",
    nullable: true,
    default: () => "(0)",
  })
  isindividual: number | null;

  @Column("smallint", {
    name: "AUTOEMAILENABLED",
    nullable: true,
    default: () => "(0)",
  })
  autoemailenabled: number | null;

  @Column("varchar", { name: "AUTOEMAIL", nullable: true, length: 255 })
  autoemail: string | null;

  @Column("varchar", { name: "AUTOEMAILPWD", nullable: true, length: 20 })
  autoemailpwd: string | null;

  @Column("float", {
    name: "MEANPAYTIMESTARTBALANCE",
    nullable: true,
    precision: 53,
  })
  meanpaytimestartbalance: number | null;

  @Column("smallint", { name: "AUTOEMAILSENDTO", default: () => "(0)" })
  autoemailsendto: number;

  @Column("smallint", {
    name: "AFMSTATE",
    nullable: true,
    default: () => "(0)",
  })
  afmstate: number | null;

  @Column("datetime", { name: "AFMSTATECHECKDATE", nullable: true })
  afmstatecheckdate: Date | null;

  @Column("smallint", {
    name: "AFMSTATEEXCLUDECHECK",
    nullable: true,
    default: () => "(0)",
  })
  afmstateexcludecheck: number | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("smallint", { name: "ECOMAVAILABLE", nullable: true })
  ecomavailable: number | null;

  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 50 })
  fathername: string | null;

  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Column("datetime", { name: "LASTUPDDATETIME", nullable: true })
  lastupddatetime: Date | null;

  @Column("int", { name: "PESTPERID", nullable: true })
  pestperid: number | null;

  @Column("int", { name: "PESTDIMOSID", nullable: true })
  pestdimosid: number | null;

  @Column("varchar", { name: "pan_tiresias", nullable: true, length: 50 })
  panTiresias: string | null;

  @Column("smallint", { name: "pan_check1", nullable: true })
  panCheck1: number | null;

  @Column("smallint", { name: "pan_check2", nullable: true })
  panCheck2: number | null;

  @Column("smallint", { name: "FREQMTRLPERTRADE", nullable: true })
  freqmtrlpertrade: number | null;

  @Column("int", { name: "FREQMTRLTRADES", nullable: true })
  freqmtrltrades: number | null;

  @Column("int", { name: "FREQMTRLDAYS", nullable: true })
  freqmtrldays: number | null;

  @Column("int", { name: "FREQMTRLORDER", nullable: true })
  freqmtrlorder: number | null;

  @Column("int", { name: "FREQMTRLINFOQTY", nullable: true })
  freqmtrlinfoqty: number | null;

  @Column("smallint", { name: "SPECIALVATSTATUS", default: () => "(0)" })
  specialvatstatus: number;

  @Column("smallint", { name: "EINVOICESENDMETHOD", nullable: true })
  einvoicesendmethod: number | null;

  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Column("smallint", { name: "EINVOICEUPLOAD", nullable: true })
  einvoiceupload: number | null;

  @Column("smallint", { name: "EINVOICECANSEND", nullable: true })
  einvoicecansend: number | null;

  @Column("varchar", { name: "EINVOICETAGS", nullable: true, length: 255 })
  einvoicetags: string | null;

  @Column("varchar", { name: "RFCODE", nullable: true, length: 200 })
  rfcode: string | null;

  @Column("varbinary", { name: "RFPARAMS", nullable: true })
  rfparams: Buffer | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Column("varchar", {
    name: "UBLACCTCUSTOMERPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctcustomerpartyid: string | null;

  @Column("int", { name: "ISSUECNTID", nullable: true })
  issuecntid: number | null;

  

  @OneToMany(() => Custaddress, (custaddress) => custaddress.per)
  custaddresses: Custaddress[];

  @OneToMany(
    () => Custbalancesheet,
    (custbalancesheet) => custbalancesheet.master
  )
  custbalancesheets: Custbalancesheet[];

  @OneToMany(() => Custbankaccount, (custbankaccount) => custbankaccount.per)
  custbankaccounts: Custbankaccount[];

  @OneToOne(() => Custfindata, (custfindata) => custfindata.master)
  custfindata: Custfindata;

  @ManyToOne(() => Customer, (customer) => customer.customers)
  @JoinColumn([{ name: "BILLTOCUSID", referencedColumnName: "id" }])
  billtocus: Customer;

  @OneToMany(() => Customer, (customer) => customer.billtocus)
  customers: Customer[];

  @ManyToOne(() => Pricecategory, (pricecategory) => pricecategory.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PRCID", referencedColumnName: "codeid" },
  ])
  pricecategory: Pricecategory;

  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.customers)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @ManyToOne(() => Carrier, (carrier) => carrier.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CARID", referencedColumnName: "codeid" },
  ])
  carrier2: Carrier;

  @ManyToOne(() => Bunits, (bunits) => bunits.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BUSID", referencedColumnName: "codeid" },
  ])
  bunits: Bunits;

  @ManyToOne(() => Currency, (currency) => currency.customers)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @ManyToOne(() => Route, (route) => route.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ROTID", referencedColumnName: "codeid" },
  ])
  route: Route;

  @ManyToOne(() => Occupation, (occupation) => occupation.customers)
  @JoinColumn([{ name: "OCPID", referencedColumnName: "codeid" }])
  ocp: Occupation;

  @ManyToOne(() => Doy, (doy) => doy.customers)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @ManyToOne(() => Pgroup, (pgroup) => pgroup.customers)
  @JoinColumn([{ name: "GRPID", referencedColumnName: "id" }])
  grp: Pgroup;



  @ManyToOne(() => Salesman, (salesman) => salesman.customers)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @ManyToOne(() => Salesman, (salesman) => salesman.customers2)
  @JoinColumn([{ name: "COLIDCOLLECTOR", referencedColumnName: "id" }])
  colidcollector: Salesman;

  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @ManyToOne(() => Country, (country) => country.customers)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;



  @ManyToOne(() => Reliability, (reliability) => reliability.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RLBID", referencedColumnName: "codeid" },
  ])
  reliability: Reliability;

  @ManyToOne(() => Deliverytype, (deliverytype) => deliverytype.customers)
  @JoinColumn([{ name: "DLVTYPEID", referencedColumnName: "codeid" }])
  dlvtype: Deliverytype;

  @ManyToOne(() => Shipvia, (shipvia) => shipvia.customers)
  @JoinColumn([{ name: "SHVID", referencedColumnName: "codeid" }])
  shv: Shipvia;

  @ManyToOne(() => Company, (company) => company.customers)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;



  @OneToMany(() => Custrespperson, (custrespperson) => custrespperson.per)
  custresppeople: Custrespperson[];

  @OneToMany(() => Custtradelines, (custtradelines) => custtradelines.cus)
  custtradelines: Custtradelines[];



  @OneToMany(() => Fintrade, (fintrade) => fintrade.cus)
  fintrades: Fintrade[];





  @OneToMany(() => Specification, (specification) => specification.cus)
  specifications: Specification[];

  @OneToMany(() => Supplier, (supplier) => supplier.per)
  suppliers: Supplier[];

  @OneToMany(() => Webcustomer, (webcustomer) => webcustomer.cus)
  webcustomers: Webcustomer[];

}
