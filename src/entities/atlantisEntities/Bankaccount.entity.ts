import { Field } from "@nestjs/graphql";
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
import { Bankaccbalancesheet } from "./Bankaccbalancesheet.entity";
import { Bankaccfindata } from "./Bankaccfindata.entity";
import { Country } from "./Country.entity";
import { Branch } from "./Branch.entity";
import { Taxfreejustification } from "./Taxfreejustification.entity";
import { Currency } from "./Currency.entity";
import { Paymentterms } from "./Paymentterms.entity";
import { Bank } from "./Bank.entity..entity";
import { Bankacctrans } from "./Bankacctrans.entity";
import { Banktradelines } from "./Banktradelines.entity";
import { Bill } from "./Bill.entity";
import { Fintrade } from "./Fintrade.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_2600", ["id"], { unique: true })
@Index("UNI_2602_1", ["comid", "code", "domaintype"], { unique: true })
@Entity("BANKACCOUNT", { schema: "dbo" })
export class Bankaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BACCNUMBER", length: 50 })
  baccnumber: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MINIMUMBALANCE", nullable: true, precision: 53 })
  minimumbalance: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "BANKRATE", nullable: true, precision: 53 })
  bankrate: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASKBILL", nullable: true, length: 25 })
  accmaskbill: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", unique: true, default: () => "0" })
  domaintype: number;

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
  @Column("varchar", { name: "IBAN", nullable: true, length: 40 })
  iban: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "ENTRYDATE", nullable: true })
  entrydate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ONLINETRANS", default: () => "(0)" })
  onlinetrans: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ONLINEMASSTRANS",
    nullable: true,
    default: () => "(0)",
  })
  onlinemasstrans: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATSTATUS", nullable: true })
  vatstatus: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET1", nullable: true, length: 50 })
  street1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field(() => [Bankaccbalancesheet], { nullable: true })
  @OneToMany(
    () => Bankaccbalancesheet,
    (bankaccbalancesheet) => bankaccbalancesheet.master
  )
  bankaccbalancesheets: Bankaccbalancesheet[];

  @Field({ nullable: true })
  @OneToOne(() => Bankaccfindata, (bankaccfindata) => bankaccfindata.master)
  bankaccfindata: Bankaccfindata;



  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.bankaccounts)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.bankaccounts)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(
    () => Taxfreejustification,
    (taxfreejustification) => taxfreejustification.bankaccounts
  )
  @JoinColumn([{ name: "TAXFREEID", referencedColumnName: "codeid" }])
  taxfree: Taxfreejustification;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.bankaccounts)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.bankaccounts)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @Field({ nullable: true })
  @ManyToOne(() => Bank, (bank) => bank.bankaccounts)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @Field(() => [Bankacctrans], { nullable: true })
  @OneToMany(() => Bankacctrans, (bankacctrans) => bankacctrans.per)
  bankacctrans: Bankacctrans[];

  @Field(() => [Banktradelines], { nullable: true })
  @OneToMany(() => Banktradelines, (banktradelines) => banktradelines.bna)
  banktradelines: Banktradelines[];

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.bnabnk)
  bills: Bill[];



  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.bna)
  fintrades: Fintrade[];

  @Field(() => [Paymentterms], { nullable: true })
  @OneToMany(() => Paymentterms, (paymentterms) => paymentterms.supbankbna)
  paymentterms2: Paymentterms[];

  @Field(() => [Paymentterms], { nullable: true })
  @OneToMany(() => Paymentterms, (paymentterms) => paymentterms.bankbna)
  paymentterms3: Paymentterms[];

  @Field(() => [Paymentterms], { nullable: true })
  @OneToMany(() => Paymentterms, (paymentterms) => paymentterms.cashbna)
  paymentterms4: Paymentterms[];


}
