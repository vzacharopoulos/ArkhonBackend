import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company.entity";
import { Fundtradelines } from "./Fundtradelines.entity";
import { Valfndbnktrn } from "./Valfndbnktrn.entity";
import { Valfndcusttrn } from "./Valfndcusttrn.entity";
import { Valfndsuptrn } from "./Valfndsuptrn.entity";

@Index("UNI_5642", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("FUNDSTRNTYPE", { schema: "dbo" })
export class Fundstrntype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LIMDATE", nullable: true })
  limdate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PAYDATE", nullable: true })
  paydate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INSTALMENTS", nullable: true })
  instalments: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITCARD", nullable: true })
  creditcard: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BALANCE", nullable: true, precision: 53 })
  balance: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LBALANCE", nullable: true, precision: 53 })
  lbalance: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GROUPSTR", nullable: true, length: 25 })
  groupstr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "BANKCOM", nullable: true, precision: 53 })
  bankcom: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PAYCARDTYPE", default: () => "(0)" })
  paycardtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "HUBURL", nullable: true, length: 255 })
  huburl: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK2", nullable: true, length: 25 })
  accmask2: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.fundstrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Fundtradelines], { nullable: true })
  @OneToMany(
    () => Fundtradelines,
    (fundtradelines) => fundtradelines.fundstrntype
  )
  fundtradelines: Fundtradelines[];

  @Field(() => [Valfndbnktrn], { nullable: true })
  @OneToMany(() => Valfndbnktrn, (valfndbnktrn) => valfndbnktrn.fundstrntype)
  valfndbnktrns: Valfndbnktrn[];

  @Field(() => [Valfndcusttrn], { nullable: true })
  @OneToMany(() => Valfndcusttrn, (valfndcusttrn) => valfndcusttrn.fundstrntype)
  valfndcusttrns: Valfndcusttrn[];

  @Field(() => [Valfndsuptrn], { nullable: true })
  @OneToMany(() => Valfndsuptrn, (valfndsuptrn) => valfndsuptrn.fundstrntype)
  valfndsuptrns: Valfndsuptrn[];
}
