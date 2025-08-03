import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6532", ["comid"], { unique: true })
@ObjectType()
@Entity("QLIKPARAMS", { schema: "dbo" })
export class Qlikparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "CURYEAR", nullable: true })
  curyear: number | null;

  @Column("int", { name: "PRVYEAR", nullable: true })
  prvyear: number | null;

  @Column("varchar", { name: "COSTPRICE", nullable: true, length: 30 })
  costprice: string | null;

  @Column("varchar", { name: "COSTPRICEDESCR", nullable: true, length: 25 })
  costpricedescr: string | null;

  @Column("varchar", { name: "BUDGETCODEPRODUCT", nullable: true, length: 25 })
  budgetcodeproduct: string | null;

  @Column("varchar", { name: "BUDGETCODECUSTOMER", nullable: true, length: 25 })
  budgetcodecustomer: string | null;

  @Column("varchar", { name: "FILENAME", nullable: true, length: 50 })
  filename: string | null;

  @Column("int", { name: "MAXTRANMONTH", nullable: true })
  maxtranmonth: number | null;

  @Column("smallint", { name: "ANALACC", default: () => "0" })
  analacc: number;

  @Column("int", { name: "SRVMARKUP", nullable: true })
  srvmarkup: number | null;



  @Column("varchar", { name: "BUDGETCODESERVICES", nullable: true, length: 25 })
  budgetcodeservices: string | null;

  @Column("varchar", {
    name: "BUDGETCODECUSSERVICES",
    nullable: true,
    length: 25,
  })
  budgetcodecusservices: string | null;

  @Column("varchar", { name: "SERVERPATH", nullable: true, length: 100 })
  serverpath: string | null;

  @Column("smallint", { name: "KEEPVERSIONS", nullable: true })
  keepversions: number | null;

  @Column("varchar", { name: "BUDGETCODEGL", nullable: true, length: 25 })
  budgetcodegl: string | null;
}
