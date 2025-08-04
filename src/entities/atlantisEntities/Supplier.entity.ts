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

import { Fintrade } from "./Fintrade.entity";
import { Itemsup } from "./Itemsup.entity";
import { Suppaddress } from "./Suppaddress.entity";
import { Suppbalancesheet } from "./Suppbalancesheet.entity";
import { Suppbankaccount } from "./Suppbankaccount.entity";
import { Suppfindata } from "./Suppfindata.entity";
import { Deliverytype } from "./Deliverytype.entity";
import { Shipvia } from "./Shipvia.entity";
import { Country } from "./Country.entity";
import { Geogrpos } from "./Geogrpos.entity";
import { Customer } from "./Customer.entity";
import { Pgroup } from "./Pgroup.entity";
import { Doy } from "./Doy.entity";
import { Paymentterms } from "./Paymentterms.entity";
import { Currency } from "./Currency.entity";
import { Occupation } from "./Occupation.entity";
import { Company } from "./Company.entity";
import { Suppliertrans } from "./Suppliertrans.entity";
import { Supprespperson } from "./Supprespperson.entity";
import { Suptradelines } from "./Suptradelines.entity";

@Index("UNI_2400", ["id"], { unique: true })
@Index("UNI_2406_1", ["comid", "code"], { unique: true })
@Index("UNIX_1058", ["afm"], {})
@ObjectType()
@Entity("SUPPLIER", { schema: "dbo" })
export class Supplier {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALARM", nullable: true, default: () => "0" })
  alarm: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CARRIER", nullable: true, length: 30 })
  carrier: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY2", nullable: true, length: 30 })
  city2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMEDICODE", nullable: true, length: 10 })
  comedicode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
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
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX1", nullable: true, length: 20 })
  fax1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX2", nullable: true, length: 20 })
  fax2: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FPASTATUS" })
  fpastatus: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "IDENTITYNUM", nullable: true, length: 20 })
  identitynum: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WEBPAGE", nullable: true, length: 50 })
  webpage: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "OCCUPATION", nullable: true, length: 50 })
  occupation: string | null;

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

  @Field({ nullable: true })
  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OMODE", default: () => "0" })
  omode: number;

  @Field({ nullable: true })
  @Column("int", { name: "CARID", nullable: true })
  carid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SUBCONTRACTOR",
    nullable: true,
    default: () => "0",
  })
  subcontractor: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RESID", nullable: true })
  resid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

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
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LEGALF", nullable: true })
  legalf: number | null;

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
  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SCNID", nullable: true })
  scnid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHE", nullable: true, length: 15 })
  dipethe: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISFARMER",
    nullable: true,
    default: () => "(0)",
  })
  isfarmer: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPCUSTCODE", nullable: true, length: 25 })
  supcustcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "EINVBARCODE",
    nullable: true,
    default: () => "(0)",
  })
  einvbarcode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "EINVEQITECODE",
    nullable: true,
    default: () => "(0)",
  })
  einveqitecode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AFMSTATE",
    nullable: true,
    default: () => "(0)",
  })
  afmstate: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "AFMSTATECHECKDATE", nullable: true })
  afmstatecheckdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AFMSTATEEXCLUDECHECK",
    nullable: true,
    default: () => "(0)",
  })
  afmstateexcludecheck: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 50 })
  fathername: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICESENDMETHOD", nullable: true })
  einvoicesendmethod: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICEUPLOAD", nullable: true })
  einvoiceupload: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EINVOICECANSEND", nullable: true })
  einvoicecansend: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICETAGS", nullable: true, length: 255 })
  einvoicetags: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOEMAILENABLED", default: () => "(0)" })
  autoemailenabled: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOEMAILSENDTO", nullable: true })
  autoemailsendto: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AUTOEMAIL", nullable: true, length: 255 })
  autoemail: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSUECNTID", nullable: true })
  issuecntid: number | null;


  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.sup)
  fintrades: Fintrade[];

  @Field(() => [Itemsup], { nullable: true })
  @OneToMany(() => Itemsup, (itemsup) => itemsup.sup)
  itemsups: Itemsup[];

  

  @Field(() => [Suppaddress], { nullable: true })
  @OneToMany(() => Suppaddress, (suppaddress) => suppaddress.per)
  suppaddresses: Suppaddress[];

  @Field(() => [Suppbalancesheet], { nullable: true })
  @OneToMany(
    () => Suppbalancesheet,
    (suppbalancesheet) => suppbalancesheet.master
  )
  suppbalancesheets: Suppbalancesheet[];

  @Field(() => [Suppbankaccount], { nullable: true })
  @OneToMany(() => Suppbankaccount, (suppbankaccount) => suppbankaccount.per)
  suppbankaccounts: Suppbankaccount[];

  @Field({ nullable: true })
  @OneToOne(() => Suppfindata, (suppfindata) => suppfindata.master)
  suppfindata: Suppfindata;

  @Field({ nullable: true })
  @ManyToOne(() => Deliverytype, (deliverytype) => deliverytype.suppliers)
  @JoinColumn([{ name: "DLVTYPEID", referencedColumnName: "codeid" }])
  dlvtype: Deliverytype;

  @Field({ nullable: true })
  @ManyToOne(() => Shipvia, (shipvia) => shipvia.suppliers)
  @JoinColumn([{ name: "SHVID", referencedColumnName: "codeid" }])
  shv: Shipvia;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.suppliers)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;



  @Field({ nullable: true })
  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.suppliers)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.suppliers)
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;

  @Field({ nullable: true })
  @ManyToOne(() => Pgroup, (pgroup) => pgroup.suppliers)
  @JoinColumn([{ name: "GRPID", referencedColumnName: "id" }])
  grp: Pgroup;

  @Field({ nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.suppliers)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @Field({ nullable: true })
  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.suppliers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;



  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.suppliers)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Occupation, (occupation) => occupation.suppliers)
  @JoinColumn([{ name: "OCPID", referencedColumnName: "codeid" }])
  ocp: Occupation;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.suppliers)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;


  @Field(() => [Suppliertrans], { nullable: true })
  @OneToMany(() => Suppliertrans, (suppliertrans) => suppliertrans.per)
  suppliertrans: Suppliertrans[];

  @Field(() => [Supprespperson], { nullable: true })
  @OneToMany(() => Supprespperson, (supprespperson) => supprespperson.per)
  suppresppeople: Supprespperson[];

  @Field(() => [Suptradelines], { nullable: true })
  @OneToMany(() => Suptradelines, (suptradelines) => suptradelines.sup)
  suptradelines: Suptradelines[];


}
