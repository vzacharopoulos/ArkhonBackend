import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Accountevent } from "./Accountevent.entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Bill } from "./Bill.entity";
import { Customer } from "./Customer.entity";
import { Equival } from "./Equival.entity";
import { Fintrade } from "./Fintrade.entity";
import { Fundtradelines } from "./Fundtradelines.entity";
import { Material } from "./Material.entity";
import { Salesman } from "./Salesman.entity";
import { Supplier } from "./Supplier.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5000", ["codeid"], { unique: true })
@Entity("CURRENCY", { schema: "dbo" })
export class Currency {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 10 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "VALUESDECIMALS",
    nullable: true,
    default: () => "0",
  })
  valuesdecimals: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PRICESDECIMALS",
    nullable: true,
    default: () => "0",
  })
  pricesdecimals: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LOCKCURID", nullable: true })
  lockcurid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LOCKRATE", nullable: true, precision: 53 })
  lockrate: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SYMBOL", nullable: true, length: 3 })
  symbol: string | null;

  @Field(() => [Accountevent], { nullable: true })
  @OneToMany(() => Accountevent, (accountevent) => accountevent.cur)
  accountevents: Accountevent[];

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.cur)
  bankaccounts: Bankaccount[];

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.cur)
  bills: Bill[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.cur)
  customers: Customer[];

  @Field(() => [Equival], { nullable: true })
  @OneToMany(() => Equival, (equival) => equival.curidref2)
  equivals: Equival[];

  @Field(() => [Equival], { nullable: true })
  @OneToMany(() => Equival, (equival) => equival.cur)
  equivals2: Equival[];

  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.cur)
  fintrades: Fintrade[];

  @Field(() => [Fundtradelines], { nullable: true })
  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.cur)
  fundtradelines: Fundtradelines[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.cur)
  materials: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (salesman) => salesman.cur)
  salesmen: Salesman[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.cur)
  suppliers: Supplier[];
}
