import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bankaccount } from "./Bankaccount.entity";
import { Customer } from "./Customer.entity";
import { Fintrade } from "./Fintrade.entity";
import { Paymenttermlines } from "./Paymenttermlines.entity";
import { Company } from "./Company.entity";
import { Reliablines } from "./Reliablines.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5024", ["comid", "codeid"], { unique: true })
@Index("UNI_5240", ["id"], { unique: true })
@ObjectType()
@Entity("PAYMENTTERMS", { schema: "dbo" })
export class Paymentterms {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "IMMEDIATEVATPAYMENT",
    nullable: true,
    default: () => "0",
  })
  immediatevatpayment: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLCODESEG", nullable: true, length: 25 })
  glcodeseg: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDPMT", nullable: true })
  dsridpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCANCELPMT", nullable: true })
  dsridcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPDSRIDPMT", nullable: true })
  supdsridpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPDSRIDCANCELPMT", nullable: true })
  supdsridcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDNEGPMT", nullable: true })
  dsridnegpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDNEGCANCELPMT", nullable: true })
  dsridnegcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPDSRIDNEGPMT", nullable: true })
  supdsridnegpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPDSRIDNEGCANCELPMT", nullable: true })
  supdsridnegcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IMMEDIATEVATPAYMENTDAYS", nullable: true })
  immediatevatpaymentdays: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDBANKPMT", nullable: true })
  dsridbankpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCASHPMT", nullable: true })
  dsridcashpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDSUPBANKPMT", nullable: true })
  dsridsupbankpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCASHCANCELPMT", nullable: true })
  dsridcashcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDSUPCASHPMT", nullable: true })
  dsridsupcashpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPCASHBNAID", nullable: true })
  supcashbnaid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCASHNEGPMT", nullable: true })
  dsridcashnegpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCASHNEGCANCELPMT", nullable: true })
  dsridcashnegcancelpmt: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.paymentterms)
  bankaccounts: Bankaccount[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.paymentterms)
  customers: Customer[];

  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.paymentterms)
  fintrades: Fintrade[];

  @Field(() => [Paymenttermlines], { nullable: true })
  @OneToMany(
    () => Paymenttermlines,
    (paymenttermlines) => paymenttermlines.link
  )
  paymenttermlines: Paymenttermlines[];

  @Field({ nullable: true })
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms2)
  @JoinColumn([{ name: "SUPBANKBNAID", referencedColumnName: "id" }])
  supbankbna: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms3)
  @JoinColumn([{ name: "BANKBNAID", referencedColumnName: "id" }])
  bankbna: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms4)
  @JoinColumn([{ name: "CASHBNAID", referencedColumnName: "id" }])
  cashbna: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.paymentterms)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Reliablines], { nullable: true })
  @OneToMany(() => Reliablines, (reliablines) => reliablines.paymentterms)
  reliablines: Reliablines[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.paymentterms)
  suppliers: Supplier[];
}
