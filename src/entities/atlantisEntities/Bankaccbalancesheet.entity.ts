import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bankaccount } from "./Bankaccount.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_2614", ["masterid", "fyeid", "fipid", "addid"], { unique: true })
@Entity("BANKACCBALANCESHEET", { schema: "dbo" })
export class Bankaccbalancesheet {
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
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "LPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MASTERPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  masterperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MASTERPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  masterperioddebit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BNKID" })
  bnkid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ADDID" })
  addid: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "LPERIODTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  lperiodturnover: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MASTERPERIODTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  masterperiodturnover: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value5: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value6: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value7: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value8: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value9: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value10: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value11: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value12: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value13: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value14: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value15: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value16: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE17",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value17: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE18",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value18: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE19",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value19: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE20",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  value20: number | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Bankaccount,
    (bankaccount) => bankaccount.bankaccbalancesheets,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Bankaccount;
}
