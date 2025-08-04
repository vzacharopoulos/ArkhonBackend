import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Prdata } from "./Prdata.entity";

@Index("UNI_5874", ["comid", "domaintype", "codeid"], { unique: true })
@ObjectType()
@Entity("PRDEF", { schema: "dbo" })
export class Prdef {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 250 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAIN1", nullable: true })
  domain1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAIN2", nullable: true })
  domain2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FORMULA", nullable: true, length: 250 })
  formula: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLTITLES", nullable: true, length: 250 })
  coltitles: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "QTYSCALE", nullable: true })
  qtyscale: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACACHE", nullable: true })
  acache: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FDATE", nullable: true })
  fdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LDATE", nullable: true })
  ldate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRDEFINITION", nullable: true })
  prdefinition: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SCALEFLD", nullable: true, length: 30 })
  scalefld: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DISCMODE", default: () => "0" })
  discmode: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "CDSID", nullable: true })
  cdsid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COMPMODULUS", default: () => "0" })
  compmodulus: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CSPRICEMODE", default: () => "0" })
  cspricemode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "USEALTERPRICES", default: () => "0" })
  usealterprices: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPROGRESSIVESCALE", default: () => "0" })
  isprogressivescale: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "JOINED", default: () => "(0)" })
  joined: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ZEROBALANCE", default: () => "(0)" })
  zerobalance: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "STOREDSERNUM", default: () => "(0)" })
  storedsernum: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAIN1DBVIEWID", nullable: true })
  domain1Dbviewid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAIN2DBVIEWID", nullable: true })
  domain2Dbviewid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DOMAIN1DBVIEWFIELD",
    nullable: true,
    length: 100,
  })
  domain1Dbviewfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DOMAIN2DBVIEWFIELD",
    nullable: true,
    length: 100,
  })
  domain2Dbviewfield: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USESCRIPT", default: () => "(0)" })
  usescript: number;

  @Field({ nullable: true })
  @Column("int", { name: "SCRIPTCODE", nullable: true })
  scriptcode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SCRIPTFUNCTION", nullable: true, length: 255 })
  scriptfunction: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SCRIPTPARAMS", nullable: true })
  scriptparams: string | null;

  @Field(() => [Prdata], { nullable: true })
  @OneToMany(() => Prdata, (prdata) => prdata.prdef)
  prdata: Prdata[];
}
