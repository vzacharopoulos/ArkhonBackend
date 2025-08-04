import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Taxfreejustification } from "./Taxfreejustification.entity";
import { Country } from "./Country.entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Bill } from "./Bill.entity";
import { Custbankaccount } from "./Custbankaccount.entity";
import { Suppbankaccount } from "./Suppbankaccount.entity";

import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_2300", ["codeid"], { unique: true })
@Index("UNI_2308", ["id"], { unique: true })
@Entity("BANK", { schema: "dbo" })
export class Bank {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("float", { name: "COMPCENT", nullable: true, precision: 53 })
  compcent: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COMPITEM", nullable: true, precision: 53 })
  compitem: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALEURDAYS1", nullable: true })
  valeurdays1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALEURDAYS2", nullable: true })
  valeurdays2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RATE", nullable: true, precision: 53 })
  rate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LIMIT", nullable: true, precision: 53 })
  limit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BIC", nullable: true, length: 11 })
  bic: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "APITYPE", nullable: true })
  apitype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "APIUSER", nullable: true, length: 50 })
  apiuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "APIPASS", nullable: true, length: 50 })
  apipass: string | null;


  @Field({ nullable: true })
  @Column("datetime", { name: "PAYLISTUPD", nullable: true })
  paylistupd: Date | null;

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
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Taxfreejustification,
    (taxfreejustification) => taxfreejustification.banks
  )
  @JoinColumn([{ name: "TAXFREEID", referencedColumnName: "codeid" }])
  taxfree: Taxfreejustification;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.banks)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.bnk)
  bankaccounts: Bankaccount[];

 

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.bnk)
  bills: Bill[];



  @Field(() => [Suppbankaccount], { nullable: true })
  @OneToMany(() => Suppbankaccount, (suppbankaccount) => suppbankaccount.bnk)
  suppbankaccounts: Suppbankaccount[];




}
