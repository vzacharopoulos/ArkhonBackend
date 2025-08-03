import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Customer } from "./Customer.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_2118", ["masterid", "fyeid", "fipid"], { unique: true })
@Entity("CUSTBALANCESHEET", { schema: "dbo" })
export class Custbalancesheet {
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Column("float", {
    name: "LPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lperiodcredit: number | null;

  @Column("float", {
    name: "LPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lperioddebit: number | null;

  @Column("float", {
    name: "MASTERPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  masterperiodcredit: number | null;

  @Column("float", {
    name: "MASTERPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  masterperioddebit: number | null;

  @Column("float", {
    name: "LPERIODTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lperiodturnover: number | null;

  @Column("float", {
    name: "MASTERPERIODTURNOVER",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  masterperiodturnover: number | null;

  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value5: number | null;

  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value6: number | null;

  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value7: number | null;

  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value8: number | null;

  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value9: number | null;

  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value10: number | null;

  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value11: number | null;

  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value12: number | null;

  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value13: number | null;

  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value14: number | null;

  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value15: number | null;

  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value16: number | null;

  @Column("float", {
    name: "VALUE17",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value17: number | null;

  @Column("float", {
    name: "VALUE18",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value18: number | null;

  @Column("float", {
    name: "VALUE19",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value19: number | null;

  @Column("float", {
    name: "VALUE20",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value20: number | null;

  @Column("float", {
    name: "SALESCOST",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  salescost: number | null;

  @Column("float", { name: "FFMEANDUETIME", nullable: true, precision: 53 })
  ffmeanduetime: number | null;

  @Column("float", { name: "FFMEANPAYMENTTIME", nullable: true, precision: 53 })
  ffmeanpaymenttime: number | null;

  @ManyToOne(() => Customer, (customer) => customer.custbalancesheets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Customer;
}
