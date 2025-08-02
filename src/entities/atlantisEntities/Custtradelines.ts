import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fintrade } from "./Fintrade";
import { Salesman } from "./Salesman";
import { Customer } from "./Customer";
import { Custbankaccount } from "./Custbankaccount";

@Index("UNI_3736", ["id"], { unique: true })
@Index("UNIX_1018", ["cusid"], {})
@Index("UNIX_1084", ["ftrid", "linenum"], {})
@Entity("CUSTTRADELINES", { schema: "dbo" })
export class Custtradelines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "CUSID" })
  cusid: number;

  @Column("int", { name: "FTRPAIDID", nullable: true })
  ftrpaidid: number | null;

  @Column("float", { name: "PERRATE", nullable: true, precision: 53 })
  perrate: number | null;

  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Column("float", { name: "PERLINEVALUE", nullable: true, precision: 53 })
  perlinevalue: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "TTRPAIDID", nullable: true })
  ttrpaidid: number | null;

  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Column("int", { name: "RELFUNDSLINEID", nullable: true })
  relfundslineid: number | null;

  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.custtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Salesman, (salesman) => salesman.custtradelines)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @ManyToOne(() => Customer, (customer) => customer.custtradelines)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

  @ManyToOne(
    () => Custbankaccount,
    (custbankaccount) => custbankaccount.custtradelines
  )
  @JoinColumn([{ name: "BANID", referencedColumnName: "id" }])
  ban: Custbankaccount;
}
