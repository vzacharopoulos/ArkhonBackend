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
import { Currency } from "./Currency.entity";
import { Portfolio } from "./Portfolio.entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Billstates } from "./Billstates.entity";
import { Billkind } from "./Billkind.entity";
import { Bank } from "./Bank.entity..entity";
import { Company } from "./Company.entity";
import { Fundtradelines } from "./Fundtradelines.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_3100", ["id"], { unique: true })
@Index("UNI_3112", ["comid", "code"], { unique: true })
@Index("UNIX_1049", ["donordomaintype", "donorid", "openbalupd"], {})
@Index("UNIX_1050", ["possessordomaintype", "possessorid", "openbalupd"], {})
@Index("UNIX_1069", ["comid", "atype", "expirationdate"], {})
@Entity("BILL", { schema: "dbo" })
export class Bill {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, unique: true, length: 30 })
  code: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "BLLNUMBER", nullable: true, length: 30 })
  bllnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DATEOFISSUE" })
  dateofissue: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "PLACEOFISSUE", nullable: true, length: 30 })
  placeofissue: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIRATIONDATE" })
  expirationdate: Date;

  @Field({ nullable: true })
  @Column("smallint", { name: "PUBLISHERDOMAINTYPE", default: () => "0" })
  publisherdomaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "PUBLISHERID", nullable: true })
  publisherid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PUBLISHERNAME", nullable: true, length: 50 })
  publishername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PUBLISHERADDRESS", nullable: true, length: 50 })
  publisheraddress: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PAYEEDOMAINTYPE", default: () => "0" })
  payeedomaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "PAYEEID", nullable: true })
  payeeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PAYEENAME", nullable: true, length: 50 })
  payeename: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PAYEEADDRESS", nullable: true, length: 50 })
  payeeaddress: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GUARANTORNAME", nullable: true, length: 50 })
  guarantorname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BANKACCNUM", nullable: true, length: 25 })
  bankaccnum: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "BLLVALUE", precision: 53 })
  bllvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALEURDAYS", nullable: true })
  valeurdays: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISBLOCKED", nullable: true, default: () => "0" })
  isblocked: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MAYBETRANSFERED",
    nullable: true,
    default: () => "1",
  })
  maybetransfered: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "BALANCE", nullable: true, precision: 53 })
  balance: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "POSSESSORDOMAINTYPE", nullable: true })
  possessordomaintype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "POSSESSORID", nullable: true })
  possessorid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "POSSESSORNAME", nullable: true, length: 50 })
  possessorname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "POSSESSORADDRESS", nullable: true, length: 50 })
  possessoraddress: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DONORDOMAINTYPE", nullable: true })
  donordomaintype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DONORID", nullable: true })
  donorid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CREATIONDATE", nullable: true })
  creationdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "BALANCEDATE", nullable: true })
  balancedate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BALANCECODE", nullable: true, length: 25 })
  balancecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BBRID", nullable: true })
  bbrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "OPENBALUPD",
    nullable: true,
    default: () => "0",
  })
  openbalupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BALANCEOPEN", nullable: true, precision: 53 })
  balanceopen: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DONDOMOPEN", nullable: true })
  dondomopen: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DONIDOPEN", nullable: true })
  donidopen: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "POSDOMOPEN", nullable: true })
  posdomopen: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "POSIDOPEN", nullable: true })
  posidopen: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "POSNAMEOPEN", nullable: true, length: 50 })
  posnameopen: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "THIRDUPD", nullable: true, default: () => "0" })
  thirdupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTERESTRATE", nullable: true, precision: 53 })
  interestrate: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTSTATUS", default: () => "0" })
  inputstatus: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PORIDOPEN", nullable: true })
  poridopen: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BRATE", nullable: true, precision: 53 })
  brate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISPRINTED", nullable: true })
  isprinted: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DONORNAME", nullable: true, length: 50 })
  donorname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DONNAMEOPEN", nullable: true, length: 50 })
  donnameopen: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.bills)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Portfolio, (portfolio) => portfolio.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PORID", referencedColumnName: "codeid" },
  ])
  portfolio: Portfolio;

  @Field({ nullable: true })
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.bills)
  @JoinColumn([{ name: "BNABNKID", referencedColumnName: "id" }])
  bnabnk: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Billstates, (billstates) => billstates.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLSIDOPEN", referencedColumnName: "scodeid" },
  ])
  billstates: Billstates;

  @Field({ nullable: true })
  @ManyToOne(() => Billstates, (billstates) => billstates.bills2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLSID", referencedColumnName: "scodeid" },
  ])
  billstates2: Billstates;

  @Field({ nullable: true })
  @ManyToOne(() => Billkind, (billkind) => billkind.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLKID", referencedColumnName: "codeid" },
  ])
  billkind: Billkind;

  @Field({ nullable: true })
  @ManyToOne(() => Bank, (bank) => bank.bills)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.bills)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;



  @Field(() => [Fundtradelines], { nullable: true })
  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.bll)
  fundtradelines: Fundtradelines[];


}
