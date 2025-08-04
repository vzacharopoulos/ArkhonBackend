import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bank } from "./Bank.entity..entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Branch } from "./Branch.entity";
import { Carrier } from "./Carrier.entity";
import { Company } from "./Company.entity";
import { Custaddress } from "./Custaddress.entity";
import { Customer } from "./Customer.entity";

import { Pgroup } from "./Pgroup.entity";
import { Salesman } from "./Salesman.entity";
import { Store } from "./Store.entity";
import { Storetrade } from "./Storetrade.entity";
import { Suppaddress } from "./Suppaddress.entity";
import { Supplier } from "./Supplier.entity";

import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5008", ["codeid"], { unique: true })
@Entity("COUNTRY", { schema: "dbo" })
export class Country {
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
  @Column("smallint", { name: "ATYPE", nullable: true, default: () => "0" })
  atype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OPTCODEID", nullable: true, length: 25 })
  optcodeid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASKCUST", nullable: true, length: 25 })
  accmaskcust: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASKSUP", nullable: true, length: 25 })
  accmasksup: string | null;

  @Field(() => [Bank], { nullable: true })
  @OneToMany(() => Bank, (bank) => bank.cnt)
  banks: Bank[];

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.cnt)
  bankaccounts: Bankaccount[];

  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.cnt)
  branches: Branch[];

  @Field(() => [Carrier], { nullable: true })
  @OneToMany(() => Carrier, (carrier) => carrier.cnt)
  carriers: Carrier[];

  @Field(() => [Company], { nullable: true })
  @OneToMany(() => Company, (company) => company.cnt)
  companies: Company[];

  @Field(() => [Custaddress], { nullable: true })
  @OneToMany(() => Custaddress, (custaddress) => custaddress.cnt)
  custaddresses: Custaddress[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.cnt)
  customers: Customer[];



  @Field(() => [Pgroup], { nullable: true })
  @OneToMany(() => Pgroup, (pgroup) => pgroup.cnt)
  pgroups: Pgroup[];

  @Field(() => [Salesman], { nullable: true })
  @OneToMany(() => Salesman, (salesman) => salesman.cnt)
  salesmen: Salesman[];

  @Field(() => [Store], { nullable: true })
  @OneToMany(() => Store, (store) => store.cnt)
  stores: Store[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.cnt)
  storetrades: Storetrade[];

  @Field(() => [Suppaddress], { nullable: true })
  @OneToMany(() => Suppaddress, (suppaddress) => suppaddress.cnt)
  suppaddresses: Suppaddress[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.cnt)
  suppliers: Supplier[];


}
