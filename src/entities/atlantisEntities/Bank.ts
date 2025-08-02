import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Taxfreejustification } from "./Taxfreejustification";
import { Country } from "./Country";
import { Bankaccount } from "./Bankaccount";
import { Bill } from "./Bill";
import { Custbankaccount } from "./Custbankaccount";
import { Suppbankaccount } from "./Suppbankaccount";

@Index("UNI_2300", ["codeid"], { unique: true })
@Index("UNI_2308", ["id"], { unique: true })
@Entity("BANK", { schema: "dbo" })
export class Bank {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Column("float", { name: "COMPCENT", nullable: true, precision: 53 })
  compcent: number | null;

  @Column("float", { name: "COMPITEM", nullable: true, precision: 53 })
  compitem: number | null;

  @Column("smallint", { name: "VALEURDAYS1", nullable: true })
  valeurdays1: number | null;

  @Column("smallint", { name: "VALEURDAYS2", nullable: true })
  valeurdays2: number | null;

  @Column("float", { name: "RATE", nullable: true, precision: 53 })
  rate: number | null;

  @Column("float", { name: "LIMIT", nullable: true, precision: 53 })
  limit: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "BIC", nullable: true, length: 11 })
  bic: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("smallint", { name: "APITYPE", nullable: true })
  apitype: number | null;

  @Column("varchar", { name: "APIUSER", nullable: true, length: 50 })
  apiuser: string | null;

  @Column("varchar", { name: "APIPASS", nullable: true, length: 50 })
  apipass: string | null;

  @Column("varbinary", { name: "PAYLIST", nullable: true })
  paylist: Buffer | null;

  @Column("datetime", { name: "PAYLISTUPD", nullable: true })
  paylistupd: Date | null;

  @Column("smallint", { name: "VATSTATUS", nullable: true })
  vatstatus: number | null;

  @Column("varchar", { name: "STREET1", nullable: true, length: 50 })
  street1: string | null;

  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @ManyToOne(
    () => Taxfreejustification,
    (taxfreejustification) => taxfreejustification.banks
  )
  @JoinColumn([{ name: "TAXFREEID", referencedColumnName: "codeid" }])
  taxfree: Taxfreejustification;

  @ManyToOne(() => Country, (country) => country.banks)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.bnk)
  bankaccounts: Bankaccount[];

 

  @OneToMany(() => Bill, (bill) => bill.bnk)
  bills: Bill[];

  @OneToMany(() => Custbankaccount, (custbankaccount) => custbankaccount.bnk)
  custbankaccounts: Custbankaccount[];


  @OneToMany(() => Suppbankaccount, (suppbankaccount) => suppbankaccount.bnk)
  suppbankaccounts: Suppbankaccount[];




}
