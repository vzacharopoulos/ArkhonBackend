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

@Index("UNI_2200", ["id"], { unique: true })
@Index("UNI_2202", ["comid", "code"], { unique: true })
@ObjectType()
@Entity("SALESMAN", { schema: "dbo" })
export class Salesman {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "NAME", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "FAX", nullable: true, length: 20 })
  fax: string | null;

  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Column("varchar", { name: "MOBILE", nullable: true, length: 15 })
  mobile: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", {
    name: "ISSALESMAN",
    nullable: true,
    default: () => "1",
  })
  issalesman: number | null;

  @Column("smallint", {
    name: "ISCOLLECTOR",
    nullable: true,
    default: () => "0",
  })
  iscollector: number | null;

  @Column("smallint", { name: "ISREPR", nullable: true, default: () => "0" })
  isrepr: number | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("float", { name: "RATE01", nullable: true, precision: 53 })
  rate01: number | null;

  @Column("float", { name: "RATE02", nullable: true, precision: 53 })
  rate02: number | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Column("varchar", { name: "TITLE", nullable: true, length: 20 })
  title: string | null;

  @Column("smallint", { name: "COMPELLATION", nullable: true })
  compellation: number | null;

  @Column("smallint", { name: "RECORDRIGHT", default: () => "0" })
  recordright: number;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "URL", nullable: true, length: 100 })
  url: string | null;

  @Column("datetime", { name: "BIRTHDATE", nullable: true })
  birthdate: Date | null;

  @Column("int", { name: "AGEID", nullable: true })
  ageid: number | null;

  @Column("int", { name: "FAMID", nullable: true })
  famid: number | null;

  @Column("int", { name: "EDUID", nullable: true })
  eduid: number | null;

  @Column("int", { name: "PDA_SALESDSRID", nullable: true })
  pdaSalesdsrid: number | null;

  @Column("int", { name: "PDA_CASHDSRID", nullable: true })
  pdaCashdsrid: number | null;

  @Column("smallint", { name: "PDA_ALLOWVALUECHANGES", default: () => "(0)" })
  pdaAllowvaluechanges: number;

  @Column("varchar", { name: "PDA_PWD", nullable: true, length: 50 })
  pdaPwd: string | null;

  @Column("int", { name: "PDA_BLKID", nullable: true })
  pdaBlkid: number | null;

  @Column("smallint", { name: "CANBUY", default: () => "(0)" })
  canbuy: number;

  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @OneToMany(() => Customer, (customer) => customer.colidsalesman)
  customers: Customer[];

  @OneToMany(() => Customer, (customer) => customer.colidcollector)
  customers2: Customer[];

  @OneToMany(
    () => Custtradelines,
    (custtradelines) => custtradelines.colidsalesman
  )
  custtradelines: Custtradelines[];

  @OneToMany(() => Fintrade, (fintrade) => fintrade.colidsalesman)
  fintrades: Fintrade[];


  @ManyToOne(() => Country, (country) => country.salesmen)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @ManyToOne(() => Salesman, (salesman) => salesman.salesmen)
  @JoinColumn([{ name: "SMNIDSUP", referencedColumnName: "id" }])
  smnidsup: Salesman;

  @OneToMany(() => Salesman, (salesman) => salesman.smnidsup)
  salesmen: Salesman[];

  @ManyToOne(() => Currency, (currency) => currency.salesmen)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;



  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.salesmen)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @ManyToOne(() => Company, (company) => company.salesmen)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

}
