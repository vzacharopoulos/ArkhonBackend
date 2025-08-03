import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Billstates } from "./Billstates.entity";
import { Company } from "./Company.entity";
import { Fundtradelines } from "./Fundtradelines.entity";
import { Valfndbnktrn } from "./Valfndbnktrn.entity";
import { Valfndcusttrn } from "./Valfndcusttrn.entity";
import { Valfndsuptrn } from "./Valfndsuptrn.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5118", ["comid", "codeid"], { unique: true })
@Entity("BILLTRNTYPE", { schema: "dbo" })
export class Billtrntype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "BILLUPD" })
  billupd: number;

  @Column("int", { name: "BANKACCFUTID", nullable: true })
  bankaccfutid: number | null;

  @Column("int", { name: "TRADERFTTID", nullable: true })
  traderfttid: number | null;

  @Column("smallint", { name: "TRADERDOMAIN", nullable: true })
  traderdomain: number | null;

  @Column("smallint", {
    name: "TRADEROPENBALANCE",
    nullable: true,
    default: () => "0",
  })
  traderopenbalance: number | null;

  @Column("smallint", {
    name: "PREVPOSSESOROPENBALANCE",
    nullable: true,
    default: () => "0",
  })
  prevpossesoropenbalance: number | null;

  @Column("smallint", {
    name: "DONOROPENBALANCE",
    nullable: true,
    default: () => "0",
  })
  donoropenbalance: number | null;

  @Column("smallint", {
    name: "CURPOSSESORUPD",
    nullable: true,
    default: () => "0",
  })
  curpossesorupd: number | null;

  @Column("varchar", {
    name: "DEFAULTJUSTIFICATION",
    nullable: true,
    length: 255,
  })
  defaultjustification: string | null;

  @Column("smallint", { name: "FLAG1", nullable: true })
  flag1: number | null;

  @Column("smallint", { name: "FLAG2", nullable: true })
  flag2: number | null;

  @Column("smallint", { name: "FLAG3", nullable: true })
  flag3: number | null;

  @Column("smallint", { name: "FLAG4", nullable: true })
  flag4: number | null;

  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Column("smallint", { name: "FLAG6", nullable: true })
  flag6: number | null;

  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "ACCMASK2", nullable: true, length: 25 })
  accmask2: string | null;

  @Column("smallint", { name: "PREVPOSSESSORCAT", nullable: true })
  prevpossessorcat: number | null;

  @Column("varchar", { name: "PREVBLLSTATES", nullable: true, length: 255 })
  prevbllstates: string | null;

  @ManyToOne(() => Billstates, (billstates) => billstates.billtrntypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BLSIDUPD", referencedColumnName: "scodeid" },
  ])
  billstates: Billstates;

  @ManyToOne(() => Company, (company) => company.billtrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Fundtradelines,
    (fundtradelines) => fundtradelines.billtrntype
  )
  fundtradelines: Fundtradelines[];

  @OneToMany(() => Valfndbnktrn, (valfndbnktrn) => valfndbnktrn.billtrntype)
  valfndbnktrns: Valfndbnktrn[];

  @OneToMany(() => Valfndcusttrn, (valfndcusttrn) => valfndcusttrn.billtrntype)
  valfndcusttrns: Valfndcusttrn[];

  @OneToMany(() => Valfndsuptrn, (valfndsuptrn) => valfndsuptrn.billtrntype)
  valfndsuptrns: Valfndsuptrn[];
}
