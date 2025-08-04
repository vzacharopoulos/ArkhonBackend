import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_5778", ["comid"], { unique: true })
@ObjectType()
@Entity("PRODUCTIONPARAMS", { schema: "dbo" })
export class Productionparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDSRID", nullable: true })
  accdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONSDSRID", nullable: true })
  consdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODDSRID", nullable: true })
  proddsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRICEMODE", default: () => "1" })
  pricemode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRICEDECIMALS", default: () => "0" })
  pricedecimals: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALUEDECIMALS", default: () => "0" })
  valuedecimals: number;

  @Field({ nullable: true })
  @Column("int", { name: "PRODTOMATDSRID", nullable: true })
  prodtomatdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECQTYDECIMALS", default: () => "0" })
  specqtydecimals: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCCONDSRID", nullable: true })
  acccondsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRACTICEPERIOD", nullable: true })
  practiceperiod: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPECMASKCODE", nullable: true, length: 25 })
  specmaskcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONTRDSRID", nullable: true })
  contrdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "STORECOSTMODE",
    nullable: true,
    default: () => "0",
  })
  storecostmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRODDOCSERIES", nullable: true, length: 100 })
  proddocseries: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRODDOCSERIES2", nullable: true, length: 100 })
  proddocseries2: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONSDSRID2", nullable: true })
  consdsrid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODDSRID2", nullable: true })
  proddsrid2: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BYPRODCOST",
    nullable: true,
    default: () => "0",
  })
  byprodcost: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MPSDAYRANGE", default: () => "500" })
  mpsdayrange: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ALLPRODLEVELS",
    nullable: true,
    default: () => "0",
  })
  allprodlevels: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DELZEROQTYLINES",
    nullable: true,
    default: () => "(0)",
  })
  delzeroqtylines: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "FINSUBCONTRMODE",
    nullable: true,
    default: () => "(0)",
  })
  finsubcontrmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPECDRIVERNAME", nullable: true, length: 255 })
  specdrivername: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPECPRTID", nullable: true })
  specprtid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECCOPIES", nullable: true })
  speccopies: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECDRAFTTYPE", nullable: true })
  specdrafttype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECFRMTYPE", default: () => "(0)" })
  specfrmtype: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MINUSPRODS",
    nullable: true,
    default: () => "(0)",
  })
  minusprods: number | null;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.productionparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
