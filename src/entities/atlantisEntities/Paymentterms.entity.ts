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
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", {
    name: "IMMEDIATEVATPAYMENT",
    nullable: true,
    default: () => "0",
  })
  immediatevatpayment: number | null;

  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Column("varchar", { name: "GLCODESEG", nullable: true, length: 25 })
  glcodeseg: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Column("int", { name: "DSRIDPMT", nullable: true })
  dsridpmt: number | null;

  @Column("int", { name: "DSRIDCANCELPMT", nullable: true })
  dsridcancelpmt: number | null;

  @Column("int", { name: "SUPDSRIDPMT", nullable: true })
  supdsridpmt: number | null;

  @Column("int", { name: "SUPDSRIDCANCELPMT", nullable: true })
  supdsridcancelpmt: number | null;

  @Column("int", { name: "DSRIDNEGPMT", nullable: true })
  dsridnegpmt: number | null;

  @Column("int", { name: "DSRIDNEGCANCELPMT", nullable: true })
  dsridnegcancelpmt: number | null;

  @Column("int", { name: "SUPDSRIDNEGPMT", nullable: true })
  supdsridnegpmt: number | null;

  @Column("int", { name: "SUPDSRIDNEGCANCELPMT", nullable: true })
  supdsridnegcancelpmt: number | null;

  @Column("int", { name: "IMMEDIATEVATPAYMENTDAYS", nullable: true })
  immediatevatpaymentdays: number | null;

  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Column("int", { name: "DSRIDBANKPMT", nullable: true })
  dsridbankpmt: number | null;

  @Column("int", { name: "DSRIDCASHPMT", nullable: true })
  dsridcashpmt: number | null;

  @Column("int", { name: "DSRIDSUPBANKPMT", nullable: true })
  dsridsupbankpmt: number | null;

  @Column("int", { name: "DSRIDCASHCANCELPMT", nullable: true })
  dsridcashcancelpmt: number | null;

  @Column("int", { name: "DSRIDSUPCASHPMT", nullable: true })
  dsridsupcashpmt: number | null;

  @Column("int", { name: "SUPCASHBNAID", nullable: true })
  supcashbnaid: number | null;

  @Column("int", { name: "DSRIDCASHNEGPMT", nullable: true })
  dsridcashnegpmt: number | null;

  @Column("int", { name: "DSRIDCASHNEGCANCELPMT", nullable: true })
  dsridcashnegcancelpmt: number | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.paymentterms)
  bankaccounts: Bankaccount[];

  @OneToMany(() => Customer, (customer) => customer.paymentterms)
  customers: Customer[];

  @OneToMany(() => Fintrade, (fintrade) => fintrade.paymentterms)
  fintrades: Fintrade[];

  @OneToMany(
    () => Paymenttermlines,
    (paymenttermlines) => paymenttermlines.link
  )
  paymenttermlines: Paymenttermlines[];

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms2)
  @JoinColumn([{ name: "SUPBANKBNAID", referencedColumnName: "id" }])
  supbankbna: Bankaccount;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms3)
  @JoinColumn([{ name: "BANKBNAID", referencedColumnName: "id" }])
  bankbna: Bankaccount;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.paymentterms4)
  @JoinColumn([{ name: "CASHBNAID", referencedColumnName: "id" }])
  cashbna: Bankaccount;

  @ManyToOne(() => Company, (company) => company.paymentterms)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Reliablines, (reliablines) => reliablines.paymentterms)
  reliablines: Reliablines[];

  @OneToMany(() => Supplier, (supplier) => supplier.paymentterms)
  suppliers: Supplier[];
}
