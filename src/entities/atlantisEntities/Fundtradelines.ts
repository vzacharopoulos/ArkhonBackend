import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fintrade } from "./Fintrade";
import { Currency } from "./Currency";
import { Fundstrntype } from "./Fundstrntype";
import { Bill } from "./Bill";
import { Billtrntype } from "./Billtrntype";

@Index("UNI_3046", ["ftrid", "linenum"], { unique: true })
@Index("UNI_3054", ["id"], { unique: true })
@Index("UNIX_1051", ["bllid", "trndate"], {})
@Index("UNIX_1052", ["comid", "trndate"], {})
@Entity("FUNDTRADELINES", { schema: "dbo" })
export class Fundtradelines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "FTRID", unique: true })
  ftrid: number;

  @Column("int", { name: "LINENUM", unique: true })
  linenum: number;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Column("float", { name: "TRADERRATE", nullable: true, precision: 53 })
  traderrate: number | null;

  @Column("int", { name: "TRADERID", nullable: true })
  traderid: number | null;

  @Column("smallint", { name: "TRADERDOMAINTYPE", nullable: true })
  traderdomaintype: number | null;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("int", { name: "BLLID", nullable: true })
  bllid: number | null;

  @Column("varchar", { name: "BLLCODE", nullable: true, length: 25 })
  bllcode: string | null;

  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Column("float", { name: "TLINEVALUE", nullable: true, precision: 53 })
  tlinevalue: number | null;

  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("datetime", { name: "DUEDATE", nullable: true })
  duedate: Date | null;

  @Column("varchar", { name: "CREDITCARDNUM", nullable: true, length: 50 })
  creditcardnum: string | null;

  @Column("smallint", { name: "ISPAYED", default: () => "0" })
  ispayed: number;

  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Column("int", { name: "INSTALLMENTS", nullable: true })
  installments: number | null;

  @Column("varchar", { name: "CREDITCARDOWNER", nullable: true, length: 50 })
  creditcardowner: string | null;

  @Column("int", { name: "POSID", nullable: true })
  posid: number | null;

  @Column("varchar", { name: "CREDITCARDEXPIRE", nullable: true, length: 5 })
  creditcardexpire: string | null;

  @Column("varchar", { name: "PACKNUMBER", nullable: true, length: 20 })
  packnumber: string | null;

  @Column("datetime", { name: "PACKDATE", nullable: true })
  packdate: Date | null;

  @Column("int", { name: "RELFUNDSLINEID", nullable: true })
  relfundslineid: number | null;

  @Column("smallint", {
    name: "BILLREPLACEFLAG",
    nullable: true,
    default: () => "(0)",
  })
  billreplaceflag: number | null;

  @Column("varchar", { name: "ONLINEPAYORDER", nullable: true, length: 50 })
  onlinepayorder: string | null;

  @Column("datetime", { name: "ONLINEPAYORDEREXPIRY", nullable: true })
  onlinepayorderexpiry: Date | null;

  @Column("varchar", {
    name: "ONLINEPAYTRANSACTION",
    nullable: true,
    length: 50,
  })
  onlinepaytransaction: string | null;

  @Column("datetime", { name: "ONLINEPAYDATE", nullable: true })
  onlinepaydate: Date | null;

  @Column("varchar", {
    name: "ONLINEPAYCARDHOLDER",
    nullable: true,
    length: 50,
  })
  onlinepaycardholder: string | null;

  @Column("varchar", {
    name: "ONLINEPAYCARDNUMBER",
    nullable: true,
    length: 50,
  })
  onlinepaycardnumber: string | null;

  @Column("datetime", { name: "ONLINEPAYCARDEXPIRY", nullable: true })
  onlinepaycardexpiry: Date | null;

  @Column("varchar", { name: "PACKAUTH", nullable: true, length: 20 })
  packauth: string | null;

  @Column("varchar", {
    name: "ONLINEPAYTERMINALCODE",
    nullable: true,
    length: 50,
  })
  onlinepayterminalcode: string | null;

  @Column("varchar", { name: "ONLINEPAYRECEIPTNO", nullable: true, length: 50 })
  onlinepayreceiptno: string | null;

  @Column("smallint", { name: "ONLINEPAYACTION", nullable: true })
  onlinepayaction: number | null;

  @Column("varchar", { name: "ONLINEPAYBANK", nullable: true, length: 20 })
  onlinepaybank: string | null;

  @Column("varchar", { name: "ONLINEPAYCARD", nullable: true, length: 50 })
  onlinepaycard: string | null;

  @Column("varchar", { name: "ONLINETRNBANK", nullable: true, length: 20 })
  onlinetrnbank: string | null;

  @Column("varchar", { name: "ONLINETRNCARD", nullable: true, length: 50 })
  onlinetrncard: string | null;

  @Column("int", { name: "RELDEPOSITFTRID", nullable: true })
  reldepositftrid: number | null;

  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @Column("float", { name: "TIP", nullable: true, precision: 53 })
  tip: number | null;

  @Column("smallint", { name: "SIGNATURETYPE", nullable: true })
  signaturetype: number | null;

  @Column("varchar", { name: "PROVIDERSINPUT", nullable: true, length: 100 })
  providersinput: string | null;

  @Column("varchar", {
    name: "PROVIDERSSIGNATURE",
    nullable: true,
    length: 100,
  })
  providerssignature: string | null;

  @Column("varchar", { name: "TRANSACTIONID", nullable: true, length: 50 })
  transactionid: string | null;

  @Column("varchar", { name: "ECRDATARESULT", nullable: true, length: 200 })
  ecrdataresult: string | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.fundtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Currency, (currency) => currency.fundtradelines)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.fundtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @ManyToOne(() => Bill, (bill) => bill.fundtradelines)
  @JoinColumn([{ name: "BLLID", referencedColumnName: "id" }])
  bll: Bill;

  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.fundtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
