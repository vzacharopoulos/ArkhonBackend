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
import { Customer } from "./Customer.entity";
import { Country } from "./Country.entity";
import { Pgrouplines } from "./Pgrouplines.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5030", ["id"], { unique: true })
@Index("UNI_5066", ["code"], { unique: true })
@ObjectType()
@Entity("PGROUP", { schema: "dbo" })
export class Pgroup {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 50 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRORDER", nullable: true, length: 25 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISGROUPSUPERVISOR", default: () => "0" })
  isgroupsupervisor: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRANSDOCLIMIT", nullable: true, precision: 53 })
  transdoclimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUELIMIT", nullable: true, precision: 53 })
  valuelimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DISCLIMIT", nullable: true, precision: 53 })
  disclimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ORDERLIMIT", nullable: true, precision: 53 })
  orderlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOGEXPR", nullable: true, length: 50 })
  logexpr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LOGEXPRLIMIT", nullable: true, precision: 53 })
  logexprlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.grp)
  customers: Customer[];

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.pgroups)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field(() => [Pgrouplines], { nullable: true })
  @OneToMany(() => Pgrouplines, (pgrouplines) => pgrouplines.grp)
  pgrouplines: Pgrouplines[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.grp)
  suppliers: Supplier[];
}
