import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sxaccountant } from "./Sxaccountant.entity";

@Index("UNI_SX16636", ["id"], { unique: true })
@ObjectType()
@Entity("SXCONTRACTOR", { schema: "dbo" })
export class Sxcontractor {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERMONTH" })
  permonth: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", length: 100 })
  description: string;

  @Field({ nullable: true })
  @Column("int", { name: "DOYCODEID", nullable: true })
  doycodeid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "AA", nullable: true })
  aa: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PERFROMDATE", nullable: true })
  perfromdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PERTODATE", nullable: true })
  pertodate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMPDESCR", nullable: true, length: 255 })
  compdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 255 })
  fathername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADDRESS", nullable: true, length: 255 })
  address: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADTNUMBER", nullable: true, length: 20 })
  adtnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPSURNAME", nullable: true, length: 50 })
  repsurname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPNAME", nullable: true, length: 50 })
  repname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPFATHERNAME", nullable: true, length: 255 })
  repfathername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPADDRESS", nullable: true, length: 255 })
  repaddress: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPPHONE1", nullable: true, length: 25 })
  repphone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPAFM", nullable: true, length: 15 })
  repafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPADT", nullable: true, length: 15 })
  repadt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AEFOLDERNUMBER", nullable: true, length: 255 })
  aefoldernumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACTIVITY", nullable: true, length: 255 })
  activity: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISLOCKED", default: () => "(0)" })
  islocked: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPLOTYPODESCR", nullable: true, length: 50 })
  diplotypodescr: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DIPLOTYPODATE", nullable: true })
  diplotypodate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "GIVEDATE", nullable: true })
  givedate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "KIND", nullable: true })
  kind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SXKADID", nullable: true })
  sxkadid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE1", nullable: true, precision: 53 })
  value1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE2", nullable: true, precision: 53 })
  value2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TAXVALUE1", nullable: true, precision: 53 })
  taxvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TAXVALUE2", nullable: true, precision: 53 })
  taxvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRATAXVALUE", nullable: true, precision: 53 })
  extrataxvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUMTAXVALUE", nullable: true, precision: 53 })
  sumtaxvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ORIGINTYPE", default: () => "(0)" })
  origintype: number;

  @Field({ nullable: true })
  @ManyToOne(() => Sxaccountant, (sxaccountant) => sxaccountant.sxcontractors)
  @JoinColumn([{ name: "SXACCOUNTANTCODEID", referencedColumnName: "codeid" }])
  sxaccountantcode: Sxaccountant;


}
