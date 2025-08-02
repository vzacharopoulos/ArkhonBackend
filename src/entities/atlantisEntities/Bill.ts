import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Currency } from "./Currency";
import { Portfolio } from "./Portfolio";
import { Bankaccount } from "./Bankaccount";
import { Billstates } from "./Billstates";
import { Billkind } from "./Billkind";
import { Bank } from "./Bank";
import { Company } from "./Company";
import { Fundtradelines } from "./Fundtradelines";

@Index("UNI_3100", ["id"], { unique: true })
@Index("UNI_3112", ["comid", "code"], { unique: true })
@Index("UNIX_1049", ["donordomaintype", "donorid", "openbalupd"], {})
@Index("UNIX_1050", ["possessordomaintype", "possessorid", "openbalupd"], {})
@Index("UNIX_1069", ["comid", "atype", "expirationdate"], {})
@Entity("BILL", { schema: "dbo" })
export class Bill {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("varchar", { name: "CODE", nullable: true, unique: true, length: 30 })
  code: string | null;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("varchar", { name: "BLLNUMBER", nullable: true, length: 30 })
  bllnumber: string | null;

  @Column("datetime", { name: "DATEOFISSUE" })
  dateofissue: Date;

  @Column("varchar", { name: "PLACEOFISSUE", nullable: true, length: 30 })
  placeofissue: string | null;

  @Column("datetime", { name: "EXPIRATIONDATE" })
  expirationdate: Date;

  @Column("smallint", { name: "PUBLISHERDOMAINTYPE", default: () => "0" })
  publisherdomaintype: number;

  @Column("int", { name: "PUBLISHERID", nullable: true })
  publisherid: number | null;

  @Column("varchar", { name: "PUBLISHERNAME", nullable: true, length: 50 })
  publishername: string | null;

  @Column("varchar", { name: "PUBLISHERADDRESS", nullable: true, length: 50 })
  publisheraddress: string | null;

  @Column("smallint", { name: "PAYEEDOMAINTYPE", default: () => "0" })
  payeedomaintype: number;

  @Column("int", { name: "PAYEEID", nullable: true })
  payeeid: number | null;

  @Column("varchar", { name: "PAYEENAME", nullable: true, length: 50 })
  payeename: string | null;

  @Column("varchar", { name: "PAYEEADDRESS", nullable: true, length: 50 })
  payeeaddress: string | null;

  @Column("varchar", { name: "GUARANTORNAME", nullable: true, length: 50 })
  guarantorname: string | null;

  @Column("varchar", { name: "BANKACCNUM", nullable: true, length: 25 })
  bankaccnum: string | null;

  @Column("float", { name: "BLLVALUE", precision: 53 })
  bllvalue: number;

  @Column("smallint", { name: "VALEURDAYS", nullable: true })
  valeurdays: number | null;

  @Column("smallint", { name: "ISBLOCKED", nullable: true, default: () => "0" })
  isblocked: number | null;

  @Column("smallint", {
    name: "MAYBETRANSFERED",
    nullable: true,
    default: () => "1",
  })
  maybetransfered: number | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("float", { name: "BALANCE", nullable: true, precision: 53 })
  balance: number | null;

  @Column("smallint", { name: "POSSESSORDOMAINTYPE", nullable: true })
  possessordomaintype: number | null;

  @Column("int", { name: "POSSESSORID", nullable: true })
  possessorid: number | null;

  @Column("varchar", { name: "POSSESSORNAME", nullable: true, length: 50 })
  possessorname: string | null;

  @Column("varchar", { name: "POSSESSORADDRESS", nullable: true, length: 50 })
  possessoraddress: string | null;

  @Column("smallint", { name: "DONORDOMAINTYPE", nullable: true })
  donordomaintype: number | null;

  @Column("int", { name: "DONORID", nullable: true })
  donorid: number | null;

  @Column("datetime", { name: "CREATIONDATE", nullable: true })
  creationdate: Date | null;

  @Column("datetime", { name: "BALANCEDATE", nullable: true })
  balancedate: Date | null;

  @Column("varchar", { name: "BALANCECODE", nullable: true, length: 25 })
  balancecode: string | null;

  @Column("int", { name: "BBRID", nullable: true })
  bbrid: number | null;

  @Column("smallint", {
    name: "OPENBALUPD",
    nullable: true,
    default: () => "0",
  })
  openbalupd: number | null;

  @Column("float", { name: "BALANCEOPEN", nullable: true, precision: 53 })
  balanceopen: number | null;

  @Column("smallint", { name: "DONDOMOPEN", nullable: true })
  dondomopen: number | null;

  @Column("int", { name: "DONIDOPEN", nullable: true })
  donidopen: number | null;

  @Column("smallint", { name: "POSDOMOPEN", nullable: true })
  posdomopen: number | null;

  @Column("int", { name: "POSIDOPEN", nullable: true })
  posidopen: number | null;

  @Column("varchar", { name: "POSNAMEOPEN", nullable: true, length: 50 })
  posnameopen: string | null;

  @Column("smallint", { name: "THIRDUPD", nullable: true, default: () => "0" })
  thirdupd: number | null;

  @Column("float", { name: "INTERESTRATE", nullable: true, precision: 53 })
  interestrate: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", { name: "INPUTSTATUS", default: () => "0" })
  inputstatus: number;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "PORIDOPEN", nullable: true })
  poridopen: number | null;

  @Column("float", { name: "BRATE", nullable: true, precision: 53 })
  brate: number | null;

  @Column("int", { name: "ISPRINTED", nullable: true })
  isprinted: number | null;

  @Column("varchar", { name: "DONORNAME", nullable: true, length: 50 })
  donorname: string | null;

  @Column("varchar", { name: "DONNAMEOPEN", nullable: true, length: 50 })
  donnameopen: string | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @ManyToOne(() => Currency, (currency) => currency.bills)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @ManyToOne(() => Portfolio, (portfolio) => portfolio.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PORID", referencedColumnName: "codeid" },
  ])
  portfolio: Portfolio;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.bills)
  @JoinColumn([{ name: "BNABNKID", referencedColumnName: "id" }])
  bnabnk: Bankaccount;

  @ManyToOne(() => Billstates, (billstates) => billstates.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLSIDOPEN", referencedColumnName: "scodeid" },
  ])
  billstates: Billstates;

  @ManyToOne(() => Billstates, (billstates) => billstates.bills2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLSID", referencedColumnName: "scodeid" },
  ])
  billstates2: Billstates;

  @ManyToOne(() => Billkind, (billkind) => billkind.bills)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLKID", referencedColumnName: "codeid" },
  ])
  billkind: Billkind;

  @ManyToOne(() => Bank, (bank) => bank.bills)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @ManyToOne(() => Company, (company) => company.bills)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;



  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.bll)
  fundtradelines: Fundtradelines[];


}
