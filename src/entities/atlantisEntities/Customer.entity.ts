import { Field, ObjectType, Int, Float } from "@nestjs/graphql";
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

import { Custaddress } from "./Custaddress.entity";
import { Pricecategory } from "./Pricecategory.entity";
import { Geogrpos } from "./Geogrpos.entity";
import { Carrier } from "./Carrier.entity";
import { Bunits } from "./Bunits.entity";
import { Currency } from "./Currency.entity";
import { Route } from "./Route.entity";
import { Occupation } from "./Occupation.entity";
import { Doy } from "./Doy.entity";
import { Pgroup } from "./Pgroup.entity";
import { Salesman } from "./Salesman.entity";
import { Paymentterms } from "./Paymentterms.entity";
import { Country } from "./Country.entity";
import { Reliability } from "./Reliability.entity";
import { Deliverytype } from "./Deliverytype.entity";
import { Shipvia } from "./Shipvia.entity";
import { Company } from "./Company.entity";
import { Customertrans } from "./Customertrans.entity";
import { Custrespperson } from "./Custrespperson.entity";
import { Custtradelines } from "./Custtradelines.entity";
import { Fintrade } from "./Fintrade.entity";
import { Specification } from "./Specification.entity";
import { Supplier } from "./Supplier.entity";
import { Webcustomer } from "./Webcustomer.entity";
import { FintradeSync } from "./FintradeSync.entity";
import { Custbalancesheet } from "./Custbalancesheet.entity";
import { Custfindata } from "./Custfindata.entity";

@ObjectType()
@Index("UNI_2002", ["comid", "code"], { unique: true })
@Index("UNI_2036", ["id"], { unique: true })
@Index("UNIX_1057", ["afm"], {})
@Entity("CUSTOMER", { schema: "dbo" })
export class Customer {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CARRIER", nullable: true, length: 30 })
  carrier: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY2", nullable: true, length: 30 })
  city2: string | null;

  @Field()
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMEDICODE", nullable: true, length: 10 })
  comedicode: string | null;

  @Field(() => Int)
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT1", nullable: true, length: 30 })
  district1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT2", nullable: true, length: 30 })
  district2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 255 })
  email: string | null;

  @Field(() => Int)
  @Column("smallint", { name: "FPASTATUS" })
  fpastatus: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX1", nullable: true, length: 20 })
  fax1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX2", nullable: true, length: 20 })
  fax2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IDENTITYNUM", nullable: true, length: 20 })
  identitynum: string | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WEBPAGE", nullable: true, length: 50 })
  webpage: string | null;

  @Field()
  @Column("varchar", { name: "NAME", length: 70 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "OCCUPATION", nullable: true, length: 50 })
  occupation: string | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PAYMENTDAYS", nullable: true, length: 255 })
  paymentdays: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PAYMENTHOURFROM", nullable: true })
  paymenthourfrom: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PAYMENTHOURTO", nullable: true })
  paymenthourto: Date | null;

  @Field(() => Int)
  @Column("smallint", { name: "PAYMENTSTATUS", default: () => "0" })
  paymentstatus: number;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE11", nullable: true, length: 20 })
  phone11: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE12", nullable: true, length: 20 })
  phone12: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE21", nullable: true, length: 20 })
  phone21: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE22", nullable: true, length: 20 })
  phone22: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET1", nullable: true, length: 50 })
  street1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET2", nullable: true, length: 50 })
  street2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX1", nullable: true, length: 20 })
  telex1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX2", nullable: true, length: 20 })
  telex2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE2", nullable: true, length: 10 })
  zipcode2: string | null;

  @Field(() => Int)
  @Column("smallint", { name: "OMODE", default: () => "0" })
  omode: number;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "ORDERLIMIT", nullable: true, precision: 53 })
  orderlimit: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "CPRID", nullable: true })
  cprid: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "SATLINEORDER", nullable: true, precision: 53 })
  satlineorder: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", {
    name: "SATTOTALORDER",
    nullable: true,
    default: () => "0",
  })
  sattotalorder: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "LEGALF", nullable: true })
  legalf: number | null;

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

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "ABCDDID", nullable: true })
  abcddid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOGEXPR", nullable: true, length: 50 })
  logexpr: string | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "LOGEXPRLIMIT", nullable: true, precision: 53 })
  logexprlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "MAXDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  maxdiscount: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "AGEID", nullable: true })
  ageid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "CATREALTY", nullable: true })
  catrealty: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Field(() => Int, { nullable: true })
  @Field({ nullable: true })
  @Column("int", { name: "RELCOMID", nullable: true })
  relcomid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "POSTSTATUS", nullable: true })
  poststatus: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "WORKFORCE", nullable: true })
  workforce: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "TRANSDOCLIMIT", nullable: true, precision: 53 })
  transdoclimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHE", nullable: true, length: 15 })
  dipethe: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEHCODE", nullable: true, length: 15 })
  dehcode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "VALUELIMIT", nullable: true, precision: 53 })
  valuelimit: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "DISCLIMIT", nullable: true, precision: 53 })
  disclimit: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "MEANPAYTIMESTARTDATE", nullable: true })
  meanpaytimestartdate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", {
    name: "ISINDIVIDUAL",
    nullable: true,
    default: () => "(0)",
  })
  isindividual: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", {
    name: "AUTOEMAILENABLED",
    nullable: true,
    default: () => "(0)",
  })
  autoemailenabled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AUTOEMAIL", nullable: true, length: 255 })
  autoemail: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AUTOEMAILPWD", nullable: true, length: 20 })
  autoemailpwd: string | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "MEANPAYTIMESTARTBALANCE",
    nullable: true,
    precision: 53,
  })
  meanpaytimestartbalance: number | null;

  @Field(() => Int)
  @Column("smallint", { name: "AUTOEMAILSENDTO", default: () => "(0)" })
  autoemailsendto: number;

  @Field(() => Int, { nullable: true })
  @Column("smallint", {
    name: "AFMSTATE",
    nullable: true,
    default: () => "(0)",
  })
  afmstate: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "AFMSTATECHECKDATE", nullable: true })
  afmstatecheckdate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", {
    name: "AFMSTATEEXCLUDECHECK",
    nullable: true,
    default: () => "(0)",
  })
  afmstateexcludecheck: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ECOMAVAILABLE", nullable: true })
  ecomavailable: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 50 })
  fathername: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATETIME", nullable: true })
  lastupddatetime: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "PESTPERID", nullable: true })
  pestperid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "PESTDIMOSID", nullable: true })
  pestdimosid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "pan_tiresias", nullable: true, length: 50 })
  panTiresias: string | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "pan_check1", nullable: true })
  panCheck1: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "pan_check2", nullable: true })
  panCheck2: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "FREQMTRLPERTRADE", nullable: true })
  freqmtrlpertrade: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FREQMTRLTRADES", nullable: true })
  freqmtrltrades: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FREQMTRLDAYS", nullable: true })
  freqmtrldays: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FREQMTRLORDER", nullable: true })
  freqmtrlorder: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FREQMTRLINFOQTY", nullable: true })
  freqmtrlinfoqty: number | null;

  @Field(() => Int)
  @Column("smallint", { name: "SPECIALVATSTATUS", default: () => "(0)" })
  specialvatstatus: number;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "EINVOICESENDMETHOD", nullable: true })
  einvoicesendmethod: number | null;

  @Field(() => Int)
  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "EINVOICEUPLOAD", nullable: true })
  einvoiceupload: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "EINVOICECANSEND", nullable: true })
  einvoicecansend: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICETAGS", nullable: true, length: 255 })
  einvoicetags: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RFCODE", nullable: true, length: 200 })
  rfcode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "UBLACCTCUSTOMERPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctcustomerpartyid: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "ISSUECNTID", nullable: true })
  issuecntid: number | null;

  // @Field(() => [Custbalancesheet], { nullable: true })
  // @OneToMany(
  //   () => Custbalancesheet,
  //   (custbalancesheet) => custbalancesheet.master
  // )
  // custbalancesheets: Custbalancesheet[];

  @Field(() => Custfindata, { nullable: true })
  @OneToOne(() => Custfindata, (custfindata) => custfindata.master)
  custfindata: Custfindata;

  @Field(() => Pricecategory, { nullable: true })
  @ManyToOne(() => Pricecategory, (pricecategory) => pricecategory.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PRCID", referencedColumnName: "codeid" },//this is always null and it wont work
  ])
  pricecategory: Pricecategory;

  @Field(() => Geogrpos, { nullable: true })
  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.customers)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @Field(() => Carrier, { nullable: true })
  @ManyToOne(() => Carrier, (carrier) => carrier.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CARID", referencedColumnName: "codeid" },
  ])
  carrier2: Carrier;

  @Field(() => Bunits, { nullable: true })
  @ManyToOne(() => Bunits, (bunits) => bunits.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BUSID", referencedColumnName: "codeid" },
  ])
  bunits: Bunits;

  @Field(() => Currency, { nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.customers)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field(() => Route, { nullable: true })
  @ManyToOne(() => Route, (route) => route.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ROTID", referencedColumnName: "codeid" },
  ])
  route: Route;

  @Field(() => Occupation, { nullable: true })
  @ManyToOne(() => Occupation, (occupation) => occupation.customers)
  @JoinColumn([{ name: "OCPID", referencedColumnName: "codeid" }])
  ocp: Occupation;

  @Field(() => Doy, { nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.customers)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @Field(() => Pgroup, { nullable: true })
  @ManyToOne(() => Pgroup, (pgroup) => pgroup.customers)
  @JoinColumn([{ name: "GRPID", referencedColumnName: "id" }])
  grp: Pgroup;

  @Field(() => Salesman, { nullable: true })
  @ManyToOne(() => Salesman, (salesman) => salesman.customers)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @Field(() => Salesman, { nullable: true })
  @ManyToOne(() => Salesman, (salesman) => salesman.customers2)
  @JoinColumn([{ name: "COLIDCOLLECTOR", referencedColumnName: "id" }])
  colidcollector: Salesman;

  @Field(() => Paymentterms, { nullable: true })
  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @Field(() => Country, { nullable: true })
  @ManyToOne(() => Country, (country) => country.customers)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field(() => Reliability, { nullable: true })
  @ManyToOne(() => Reliability, (reliability) => reliability.customers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RLBID", referencedColumnName: "codeid" },
  ])
  reliability: Reliability;

  @Field(() => Deliverytype, { nullable: true })
  @ManyToOne(() => Deliverytype, (deliverytype) => deliverytype.customers)
  @JoinColumn([{ name: "DLVTYPEID", referencedColumnName: "codeid" }])
  dlvtype: Deliverytype;

  @Field(() => Shipvia, { nullable: true })
  @ManyToOne(() => Shipvia, (shipvia) => shipvia.customers)
  @JoinColumn([{ name: "SHVID", referencedColumnName: "codeid" }])
  shv: Shipvia;

  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.customers)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Custrespperson], { nullable: true })
  @OneToMany(() => Custrespperson, (custrespperson) => custrespperson.per)
  custresppeople: Custrespperson[];

  @Field(() => [Custtradelines], { nullable: true })
  @OneToMany(() => Custtradelines, (custtradelines) => custtradelines.cus)
  custtradelines: Custtradelines[];

  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.cus)
  fintrades: Fintrade[];

  @Field(() => [Specification], { nullable: true })
  @OneToMany(() => Specification, (specification) => specification.cus)
  specifications: Specification[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.per)
  suppliers: Supplier[];

  @Field(() => [Webcustomer], { nullable: true })
  @OneToMany(() => Webcustomer, (webcustomer) => webcustomer.cus)
  webcustomers: Webcustomer[];

  @Field(() => [Custaddress], { nullable: true })
  @OneToMany(() => Custaddress, (custaddress) => custaddress.per)
  custaddresses: Custaddress[];

  @Field(() => [FintradeSync], { nullable: true })
  @OneToMany(() => FintradeSync, (fintradeSync) => fintradeSync.cus)
  fintradeSyncs: FintradeSync[];
}
