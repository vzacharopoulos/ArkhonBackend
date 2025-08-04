import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5564_1", ["ftrid", "linenum", "costftrid", "cfoid", "sourceid"], {
  unique: true,
})
@Index("UNIX_1074", ["ftrid", "insmode", "sourceid"], {})
@Index("UNIX_1098", ["cfoid"], {})
@Index("UNIX_1110", ["costftrid"], {})
@ObjectType()
@Entity("TRADECOST", { schema: "dbo" })
export class Tradecost {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCETYPE", nullable: true })
  sourcetype: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SOURCEID", default: () => "0" })
  sourceid: number;

  @Field({ nullable: true })
  @Column("int", { name: "PHGID", nullable: true })
  phgid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PHSID", nullable: true })
  phsid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CSTVALUE", nullable: true, precision: 53 })
  cstvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CSTAMOUNT", nullable: true, precision: 53 })
  cstamount: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOURCE", nullable: true })
  source: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CFOID" })
  cfoid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INSMODE", nullable: true })
  insmode: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COSTFTRID" })
  costftrid: number;

  @Field({ nullable: true })
  @Column("float", { name: "EXTVALUE", nullable: true, precision: 53 })
  extvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RESKIND", nullable: true, default: () => "0" })
  reskind: number | null;
}
