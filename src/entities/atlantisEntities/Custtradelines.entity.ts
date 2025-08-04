import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fintrade } from "./Fintrade.entity";
import { Salesman } from "./Salesman.entity";
import { Customer } from "./Customer.entity";
import { Custbankaccount } from "./Custbankaccount.entity";

@Index("UNI_3736", ["id"], { unique: true })
@Index("UNIX_1018", ["cusid"], {})
@Index("UNIX_1084", ["ftrid", "linenum"], {})
@ObjectType()
@Entity("CUSTTRADELINES", { schema: "dbo" })
export class Custtradelines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "CUSID" })
  cusid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRPAIDID", nullable: true })
  ftrpaidid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERRATE", nullable: true, precision: 53 })
  perrate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERLINEVALUE", nullable: true, precision: 53 })
  perlinevalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TTRPAIDID", nullable: true })
  ttrpaidid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELFUNDSLINEID", nullable: true })
  relfundslineid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

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
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.custtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Salesman, (salesman) => salesman.custtradelines)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.custtradelines)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;


}
