import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNI_6312", ["code"], { unique: true })
@ObjectType()
@Entity("TRANSNATURE", { schema: "dbo" })
export class Transnature {
  @PrimaryColumn("varchar", { name: "CODE", unique: true, length: 30 })
  code: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITTRDUPD", default: () => "0" })
  debittrdupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITTRDUPD", default: () => "0" })
  credittrdupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERTRDUPD", default: () => "0" })
  turnovertrdupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CURPOSSESSORUPD", default: () => "0" })
  curpossessorupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BLSUPDID", default: () => "0" })
  blsupdid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLUPD", default: () => "0" })
  billupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITDONUPD", default: () => "0" })
  creditdonupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITDONUPD", default: () => "0" })
  debitdonupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INDEFINITECREDITDONUPD", default: () => "0" })
  indefinitecreditdonupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITPOSUPD", default: () => "0" })
  creditposupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITPOSUPD", default: () => "0" })
  debitposupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INDEFINITECREDITPOSUPD", default: () => "0" })
  indefinitecreditposupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITBLLTRAUPD", default: () => "0" })
  creditblltraupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITBLLTRAUPD", default: () => "0" })
  debitblltraupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INDEFINITECREDITBLLTRAUPD", default: () => "0" })
  indefinitecreditblltraupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;
}
