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
import { Customer } from "./Customer.entity";
import { Custtradelines } from "./Custtradelines.entity";
import { Fintrade } from "./Fintrade.entity";

import { Country } from "./Country.entity";
import { Currency } from "./Currency.entity";
import { Geogrpos } from "./Geogrpos.entity";
import { Company } from "./Company.entity";
import { FintradeSync } from "./FintradeSync.entity";

@Index("UNI_2200", ["id"], { unique: true })
@Index("UNI_2202", ["comid", "code"], { unique: true })
@ObjectType()
@Entity("SALESMAN", { schema: "dbo" })
export class Salesman {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 255 })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX", nullable: true, length: 20 })
  fax: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MOBILE", nullable: true, length: 15 })
  mobile: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISSALESMAN",
    nullable: true,
    default: () => "1",
  })
  issalesman: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISCOLLECTOR",
    nullable: true,
    default: () => "0",
  })
  iscollector: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISREPR", nullable: true, default: () => "0" })
  isrepr: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "RATE01", nullable: true, precision: 53 })
  rate01: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RATE02", nullable: true, precision: 53 })
  rate02: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", nullable: true, length: 20 })
  title: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COMPELLATION", nullable: true })
  compellation: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RECORDRIGHT", default: () => "0" })
  recordright: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 100 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "URL", nullable: true, length: 100 })
  url: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "BIRTHDATE", nullable: true })
  birthdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "AGEID", nullable: true })
  ageid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FAMID", nullable: true })
  famid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EDUID", nullable: true })
  eduid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDA_SALESDSRID", nullable: true })
  pdaSalesdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDA_CASHDSRID", nullable: true })
  pdaCashdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PDA_ALLOWVALUECHANGES", default: () => "(0)" })
  pdaAllowvaluechanges: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PDA_PWD", nullable: true, length: 50 })
  pdaPwd: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDA_BLKID", nullable: true })
  pdaBlkid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CANBUY", default: () => "(0)" })
  canbuy: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.colidsalesman)
  customers: Customer[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.colidcollector)
  customers2: Customer[];

  @Field(() => [Custtradelines], { nullable: true })
  @OneToMany(
    () => Custtradelines,
    (custtradelines) => custtradelines.colidsalesman
  )
  custtradelines: Custtradelines[];

  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.colidsalesman)
  fintrades: Fintrade[];

  @Field(() => [FintradeSync], { nullable: true })
  @OneToMany(() => FintradeSync, (fintradeSync) => fintradeSync.salesman)
  fintradeSync: FintradeSync[];

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.salesmen)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Salesman, (salesman) => salesman.salesmen)
  @JoinColumn([{ name: "SMNIDSUP", referencedColumnName: "id" }])
  smnidsup: Salesman;

  @Field(() => [Salesman], { nullable: true })
  @OneToMany(() => Salesman, (salesman) => salesman.smnidsup)
  salesmen: Salesman[];

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.salesmen)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;



  @Field({ nullable: true })
  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.salesmen)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.salesmen)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

}
