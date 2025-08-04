import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Expensesanalysis } from "./Expensesanalysis.entity";

@Index("UNI_5794", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CASHEXPENSE", { schema: "dbo" })
export class Cashexpense {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITMODE", nullable: true, default: () => "1" })
  debitmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field(() => [Expensesanalysis], { nullable: true })
  @OneToMany(
    () => Expensesanalysis,
    (expensesanalysis) => expensesanalysis.cashexpense
  )
  expensesanalyses: Expensesanalysis[];
}
