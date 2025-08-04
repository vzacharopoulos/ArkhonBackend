import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Webaccountlns } from "./Webaccountlns.entity";

@Index("UNI_18248", ["id"], { unique: true })
@ObjectType()
@Entity("WEBACCOUNT", { schema: "dbo" })
export class Webaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID" })
  accid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "USERNAME", length: 150 })
  username: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "PASSWORD", length: 100 })
  password: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TEMPKEY", nullable: true, length: 64 })
  tempkey: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACCESSOK", nullable: true })
  accessok: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", length: 64 })
  email: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "EMAILCONFR" })
  emailconfr: number;

  @Field({ nullable: true })
  @Column("int", { name: "CATEGORY" })
  category: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WEBGROUP", nullable: true })
  webgroup: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DATAPARAM", nullable: true })
  dataparam: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 64 })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADDRESS", nullable: true, length: 150 })
  address: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIP", nullable: true, length: 10 })
  zip: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FINALDATE", nullable: true })
  finaldate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SCRVALIDATE" })
  scrvalidate: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "INSDATE", nullable: true })
  insdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "INSUSER", nullable: true })
  insuser: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "UPDUSER", nullable: true })
  upduser: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTSYNC", nullable: true })
  lastsync: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "UPDCOUNT", nullable: true })
  updcount: number | null;

  @Field(() => [Webaccountlns], { nullable: true })
  @OneToMany(() => Webaccountlns, (webaccountlns) => webaccountlns.webacc)
  webaccountlns: Webaccountlns[];
}
