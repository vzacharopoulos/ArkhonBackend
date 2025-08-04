import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fintrade } from "./Fintrade.entity";
import { Currency } from "./Currency.entity";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Bill } from "./Bill.entity";
import { Billtrntype } from "./Billtrntype.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_3046", ["ftrid", "linenum"], { unique: true })
@Index("UNI_3054", ["id"], { unique: true })
@Index("UNIX_1051", ["bllid", "trndate"], {})
@Index("UNIX_1052", ["comid", "trndate"], {})
@Entity("FUNDTRADELINES", { schema: "dbo" })
export class Fundtradelines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", unique: true })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", unique: true })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRADERRATE", nullable: true, precision: 53 })
  traderrate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TRADERID", nullable: true })
  traderid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRADERDOMAINTYPE", nullable: true })
  traderdomaintype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("int", { name: "BLLID", nullable: true })
  bllid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BLLCODE", nullable: true, length: 25 })
  bllcode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TLINEVALUE", nullable: true, precision: 53 })
  tlinevalue: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DUEDATE", nullable: true })
  duedate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CREDITCARDNUM", nullable: true, length: 50 })
  creditcardnum: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPAYED", default: () => "0" })
  ispayed: number;

  @Field({ nullable: true })
  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INSTALLMENTS", nullable: true })
  installments: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CREDITCARDOWNER", nullable: true, length: 50 })
  creditcardowner: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "POSID", nullable: true })
  posid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CREDITCARDEXPIRE", nullable: true, length: 5 })
  creditcardexpire: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PACKNUMBER", nullable: true, length: 20 })
  packnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PACKDATE", nullable: true })
  packdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELFUNDSLINEID", nullable: true })
  relfundslineid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BILLREPLACEFLAG",
    nullable: true,
    default: () => "(0)",
  })
  billreplaceflag: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYORDER", nullable: true, length: 50 })
  onlinepayorder: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ONLINEPAYORDEREXPIRY", nullable: true })
  onlinepayorderexpiry: Date | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "ONLINEPAYTRANSACTION",
    nullable: true,
    length: 50,
  })
  onlinepaytransaction: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ONLINEPAYDATE", nullable: true })
  onlinepaydate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "ONLINEPAYCARDHOLDER",
    nullable: true,
    length: 50,
  })
  onlinepaycardholder: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "ONLINEPAYCARDNUMBER",
    nullable: true,
    length: 50,
  })
  onlinepaycardnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ONLINEPAYCARDEXPIRY", nullable: true })
  onlinepaycardexpiry: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PACKAUTH", nullable: true, length: 20 })
  packauth: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "ONLINEPAYTERMINALCODE",
    nullable: true,
    length: 50,
  })
  onlinepayterminalcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYRECEIPTNO", nullable: true, length: 50 })
  onlinepayreceiptno: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ONLINEPAYACTION", nullable: true })
  onlinepayaction: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYBANK", nullable: true, length: 20 })
  onlinepaybank: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINEPAYCARD", nullable: true, length: 50 })
  onlinepaycard: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINETRNBANK", nullable: true, length: 20 })
  onlinetrnbank: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ONLINETRNCARD", nullable: true, length: 50 })
  onlinetrncard: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELDEPOSITFTRID", nullable: true })
  reldepositftrid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIP", nullable: true, precision: 53 })
  tip: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SIGNATURETYPE", nullable: true })
  signaturetype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROVIDERSINPUT", nullable: true, length: 100 })
  providersinput: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PROVIDERSSIGNATURE",
    nullable: true,
    length: 100,
  })
  providerssignature: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRANSACTIONID", nullable: true, length: 50 })
  transactionid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ECRDATARESULT", nullable: true, length: 200 })
  ecrdataresult: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.fundtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.fundtradelines)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.fundtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Bill, (bill) => bill.fundtradelines)
  @JoinColumn([{ name: "BLLID", referencedColumnName: "id" }])
  bll: Bill;

  @Field({ nullable: true })
  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.fundtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
