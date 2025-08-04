import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Customer } from "./Customer.entity";

@ObjectType()
@Index("UNI_2122", ["masterid"], { unique: true })
@Entity("CUSTFINDATA", { schema: "dbo" })

export class Custfindata {
  @Field(() => Int)
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Field(() => Int)
  @Column("int", { name: "COMID" })
  comid: number;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "MEANPAYMENTTIME", nullable: true, precision: 53 })
  meanpaymenttime: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "MEANDUETIME", nullable: true, precision: 53 })
  meanduetime: number | null;

  @Field({ nullable: true }) // Or @Field(() => Date, { nullable: true }) if you want Date scalars!
  @Column("datetime", { name: "CALCDATE", nullable: true })
  calcdate: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "LMASTERBALANCE", nullable: true, precision: 53 })
  lmasterbalance: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "MASTERBALANCE", nullable: true, precision: 53 })
  masterbalance: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "LGENINDEFINITEBALANCE",
    nullable: true,
    precision: 53,
  })
  lgenindefinitebalance: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "LSELFINDEFINITEBALANCE",
    nullable: true,
    precision: 53,
  })
  lselfindefinitebalance: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("float", { name: "SALESCOST", nullable: true, precision: 53 })
  salescost: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value5: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value6: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value7: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value8: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value9: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value10: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value11: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value12: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value13: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value14: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value15: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value16: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE17",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value17: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE18",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value18: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE19",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value19: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "VALUE20",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value20: number | null;

  @Field(() => Float, { nullable: true })
  @Column("float", {
    name: "CURFYEIDMEANPAYTIME",
    nullable: true,
    precision: 53,
  })
  curfyeidmeanpaytime: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SALESCOSTPERIODS", nullable: true, length: 50 })
  salescostperiods: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTDEBITDATE", nullable: true })
  lastdebitdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTCREDITDATE", nullable: true })
  lastcreditdate: Date | null;

  @Field(() => Customer, { nullable: true })
  @OneToOne(() => Customer, (customer) => customer.custfindata, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Customer;
}
