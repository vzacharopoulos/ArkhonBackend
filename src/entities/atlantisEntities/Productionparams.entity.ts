import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_5778", ["comid"], { unique: true })
@ObjectType()
@Entity("PRODUCTIONPARAMS", { schema: "dbo" })
export class Productionparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "ACCDSRID", nullable: true })
  accdsrid: number | null;

  @Column("int", { name: "CONSDSRID", nullable: true })
  consdsrid: number | null;

  @Column("int", { name: "PRODDSRID", nullable: true })
  proddsrid: number | null;

  @Column("smallint", { name: "PRICEMODE", default: () => "1" })
  pricemode: number;

  @Column("smallint", { name: "PRICEDECIMALS", default: () => "0" })
  pricedecimals: number;

  @Column("smallint", { name: "VALUEDECIMALS", default: () => "0" })
  valuedecimals: number;

  @Column("int", { name: "PRODTOMATDSRID", nullable: true })
  prodtomatdsrid: number | null;

  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Column("smallint", { name: "SPECQTYDECIMALS", default: () => "0" })
  specqtydecimals: number;

  @Column("int", { name: "ACCCONDSRID", nullable: true })
  acccondsrid: number | null;

  @Column("smallint", { name: "PRACTICEPERIOD", nullable: true })
  practiceperiod: number | null;

  @Column("varchar", { name: "SPECMASKCODE", nullable: true, length: 25 })
  specmaskcode: string | null;

  @Column("int", { name: "CONTRDSRID", nullable: true })
  contrdsrid: number | null;

  @Column("smallint", {
    name: "STORECOSTMODE",
    nullable: true,
    default: () => "0",
  })
  storecostmode: number | null;

  @Column("varchar", { name: "PRODDOCSERIES", nullable: true, length: 100 })
  proddocseries: string | null;

  @Column("varchar", { name: "PRODDOCSERIES2", nullable: true, length: 100 })
  proddocseries2: string | null;

  @Column("int", { name: "CONSDSRID2", nullable: true })
  consdsrid2: number | null;

  @Column("int", { name: "PRODDSRID2", nullable: true })
  proddsrid2: number | null;

  @Column("smallint", {
    name: "BYPRODCOST",
    nullable: true,
    default: () => "0",
  })
  byprodcost: number | null;

  @Column("int", { name: "MPSDAYRANGE", default: () => "500" })
  mpsdayrange: number;

  @Column("smallint", {
    name: "ALLPRODLEVELS",
    nullable: true,
    default: () => "0",
  })
  allprodlevels: number | null;

  @Column("smallint", {
    name: "DELZEROQTYLINES",
    nullable: true,
    default: () => "(0)",
  })
  delzeroqtylines: number | null;

  @Column("smallint", {
    name: "FINSUBCONTRMODE",
    nullable: true,
    default: () => "(0)",
  })
  finsubcontrmode: number | null;

  @Column("varchar", { name: "SPECDRIVERNAME", nullable: true, length: 255 })
  specdrivername: string | null;

  @Column("int", { name: "SPECPRTID", nullable: true })
  specprtid: number | null;

  @Column("smallint", { name: "SPECCOPIES", nullable: true })
  speccopies: number | null;

  @Column("smallint", { name: "SPECDRAFTTYPE", nullable: true })
  specdrafttype: number | null;

  @Column("smallint", { name: "SPECFRMTYPE", default: () => "(0)" })
  specfrmtype: number;

  @Column("smallint", {
    name: "MINUSPRODS",
    nullable: true,
    default: () => "(0)",
  })
  minusprods: number | null;

  @OneToOne(() => Company, (company) => company.productionparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
