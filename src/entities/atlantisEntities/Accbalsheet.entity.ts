import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Account } from "./Account.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_1130", ["masterid", "fyeid", "fipid"], { unique: true })
@Entity("ACCBALSHEET", { schema: "dbo" })
export class Accbalsheet {
  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODCREDIT", nullable: true, precision: 53 })
  lperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODDEBIT", nullable: true, precision: 53 })
  lperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SPERIODCREDIT", nullable: true, precision: 53 })
  speriodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SPERIODDEBIT", nullable: true, precision: 53 })
  sperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODCREDITUPD", nullable: true, precision: 53 })
  lperiodcreditupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODDEBITUPD", nullable: true, precision: 53 })
  lperioddebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SPERIODCREDITUPD", nullable: true, precision: 53 })
  speriodcreditupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SPERIODDEBITUPD", nullable: true, precision: 53 })
  sperioddebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOCOUNT", nullable: true, precision: 53 })
  kepyocount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOCOUNTUPD", nullable: true, precision: 53 })
  kepyocountupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYODEBIT", nullable: true, precision: 53 })
  lkepyodebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYOCREDIT", nullable: true, precision: 53 })
  lkepyocredit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SKEPYODEBIT", nullable: true, precision: 53 })
  skepyodebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SKEPYOCREDIT", nullable: true, precision: 53 })
  skepyocredit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYODEBITUPD", nullable: true, precision: 53 })
  lkepyodebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYOCREDITUPD", nullable: true, precision: 53 })
  lkepyocreditupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SKEPYODEBITUPD", nullable: true, precision: 53 })
  skepyodebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SKEPYOCREDITUPD", nullable: true, precision: 53 })
  skepyocreditupd: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDLPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDLPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDSPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDSPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDLPERIODDEBITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperioddebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDLPERIODCREDITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperiodcreditupd: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDSPERIODDEBITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperioddebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "TDSPERIODCREDITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperiodcreditupd: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.accbalsheets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Account;
}
