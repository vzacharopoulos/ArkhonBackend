import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6532", ["comid"], { unique: true })
@ObjectType()
@Entity("QLIKPARAMS", { schema: "dbo" })
export class Qlikparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "CURYEAR", nullable: true })
  curyear: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRVYEAR", nullable: true })
  prvyear: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COSTPRICE", nullable: true, length: 30 })
  costprice: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COSTPRICEDESCR", nullable: true, length: 25 })
  costpricedescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BUDGETCODEPRODUCT", nullable: true, length: 25 })
  budgetcodeproduct: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BUDGETCODECUSTOMER", nullable: true, length: 25 })
  budgetcodecustomer: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FILENAME", nullable: true, length: 50 })
  filename: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAXTRANMONTH", nullable: true })
  maxtranmonth: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ANALACC", default: () => "0" })
  analacc: number;

  @Field({ nullable: true })
  @Column("int", { name: "SRVMARKUP", nullable: true })
  srvmarkup: number | null;



  @Field({ nullable: true })
  @Column("varchar", { name: "BUDGETCODESERVICES", nullable: true, length: 25 })
  budgetcodeservices: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "BUDGETCODECUSSERVICES",
    nullable: true,
    length: 25,
  })
  budgetcodecusservices: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SERVERPATH", nullable: true, length: 100 })
  serverpath: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEEPVERSIONS", nullable: true })
  keepversions: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BUDGETCODEGL", nullable: true, length: 25 })
  budgetcodegl: string | null;
}
