import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bank } from "./Bank.entity..entity";
import { Bankaccount } from "./Bankaccount.entity";

import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_1432", ["codeid"], { unique: true })
@Entity("TAXFREEJUSTIFICATION", { schema: "dbo" })
export class Taxfreejustification {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ARTNUMBER", nullable: true, length: 10 })
  artnumber: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @Field(() => [Bank], { nullable: true })
  @OneToMany(() => Bank, (bank) => bank.taxfree)
  banks: Bank[];

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.taxfree)
  bankaccounts: Bankaccount[];
}
