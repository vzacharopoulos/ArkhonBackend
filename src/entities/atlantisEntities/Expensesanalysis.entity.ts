import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade.entity";
import { Cashexpense } from "./Cashexpense.entity";
import { Spsurcharges } from "./Spsurcharges.entity";

@Index("UNI_3452", ["ftrid", "linenum"], { unique: true })
@ObjectType()
@Entity("EXPENSESANALYSIS", { schema: "dbo" })
export class Expensesanalysis {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("float", { name: "SURVALUE", precision: 53 })
  survalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "SURLVALUE", precision: 53 })
  surlvalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "SURVATVALUE", precision: 53 })
  survatvalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "SURLVATVALUE", precision: 53 })
  surlvatvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERMODE", nullable: true })
  turnovermode: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REALVATVALUE", nullable: true, precision: 53 })
  realvatvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REALLVATVALUE", nullable: true, precision: 53 })
  reallvatvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTSURVALUE", nullable: true, precision: 53 })
  intsurvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.expensesanalyses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Cashexpense, (cashexpense) => cashexpense.expensesanalyses)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CAEID", referencedColumnName: "codeid" },
  ])
  cashexpense: Cashexpense;

  @Field({ nullable: true })
  @ManyToOne(
    () => Spsurcharges,
    (spsurcharges) => spsurcharges.expensesanalyses
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID", referencedColumnName: "codeid" },
  ])
  spsurcharges: Spsurcharges;
}
