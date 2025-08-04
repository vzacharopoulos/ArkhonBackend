import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_5916", ["comid"], { unique: true })
@ObjectType()
@Entity("RETAILPARAMS", { schema: "dbo" })
export class Retailparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "CUSID" })
  cusid: number;

  @Field({ nullable: true })
  @Column("int", { name: "BILLDSRID", nullable: true })
  billdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRPID", nullable: true })
  prpid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COLORSIZEMODE", default: () => "0" })
  colorsizemode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BARCODEMODE", default: () => "0" })
  barcodemode: number;

  @Field({ nullable: true })
  @Column("int", { name: "DPSTRTTID", nullable: true })
  dpstrttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLOSRTTID", nullable: true })
  closrttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OPENRTTID", nullable: true })
  openrttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BLNCRTTID", nullable: true })
  blncrttid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BRAGROUPATITLE", nullable: true, length: 20 })
  bragroupatitle: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BRAGROUPBTITLE", nullable: true, length: 20 })
  bragroupbtitle: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTSEARCHFIELDS", nullable: true, length: 255 })
  custsearchfields: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWRETURNCASH", default: () => "0" })
  allowreturncash: number;



  @Field({ nullable: true })
  @Column("smallint", { name: "SHOWPICTURE", default: () => "0" })
  showpicture: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SHOWBANKDEPOSITSASEXPENSES",
    default: () => "(0)",
  })
  showbankdepositsasexpenses: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USERETAILSERVICEFORONOFF",
    default: () => "(0)",
  })
  useretailserviceforonoff: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "LOADBRANCHSALESMEN", default: () => "(1)" })
  loadbranchsalesmen: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "RECALCLINEVALUESONCUSCHANGE",
    default: () => "(1)",
  })
  recalclinevaluesoncuschange: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "REPEATEDNEWRECORD", default: () => "(0)" })
  repeatednewrecord: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FINDFIRSTDATEPAYMENT", default: () => "(0)" })
  findfirstdatepayment: number;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.retailparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
