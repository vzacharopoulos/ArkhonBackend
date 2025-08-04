import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_5610", ["comid"], { unique: true })
@ObjectType()
@Entity("ASSETPARAMS", { schema: "dbo" })
export class Assetparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ASSETSMASK", nullable: true, length: 25 })
  assetsmask: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEARVALUE", nullable: true, precision: 53 })
  linearvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ASCPERC", nullable: true, precision: 53 })
  ascperc: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEPRDSRID", nullable: true })
  deprdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MONTHCALC", default: () => "0" })
  monthcalc: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PERDEPRECIATION",
    nullable: true,
    default: () => "0",
  })
  perdepreciation: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDIAS", nullable: true })
  dsridias: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DSRCODE", nullable: true, length: 5 })
  dsrcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REGNUMSMASK", nullable: true, length: 25 })
  regnumsmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INLAW", default: () => "(0)" })
  inlaw: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERCENTAGE", nullable: true })
  percentage: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIRYDATE", nullable: true })
  expirydate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDPRODUCTION", nullable: true })
  dsridproduction: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ASCPERCINUSE",
    nullable: true,
    default: () => "(0)",
  })
  ascpercinuse: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NONEGATIVEVALUE", default: () => "(0)" })
  nonegativevalue: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DEPRINUSE",
    nullable: true,
    default: () => "(0)",
  })
  deprinuse: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LIMITVALUEINUSE", nullable: true, precision: 53 })
  limitvalueinuse: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DATEDEPRSOLDASSETS", nullable: true })
  datedeprsoldassets: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "VATADDED",
    nullable: true,
    default: () => "(0)",
  })
  vatadded: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LIMITCALCDEPR", nullable: true })
  limitcalcdepr: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DEPRINUSEINFIPID",
    nullable: true,
    default: () => "(0)",
  })
  deprinuseinfipid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COUNTRYONLINESPURCHASES", nullable: true })
  countryonlinespurchases: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COUNTRYONLINESSALES", nullable: true })
  countryonlinessales: number | null;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.assetparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
