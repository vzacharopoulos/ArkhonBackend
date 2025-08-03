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
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "LIMDATE", nullable: true })
  limdate: number | null;

  @Column("int", { name: "PAYDATE", nullable: true })
  paydate: number | null;

  @Column("int", { name: "INSTALMENTS", nullable: true })
  instalments: number | null;

  @Column("smallint", { name: "CREDITCARD", nullable: true })
  creditcard: number | null;

  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Column("float", { name: "BALANCE", nullable: true, precision: 53 })
  balance: number | null;

  @Column("float", { name: "LBALANCE", nullable: true, precision: 53 })
  lbalance: number | null;

  @Column("varchar", { name: "GROUPSTR", nullable: true, length: 25 })
  groupstr: string | null;

  @Column("float", { name: "BANKCOM", nullable: true, precision: 53 })
  bankcom: number | null;

  @Column("smallint", { name: "PAYCARDTYPE", default: () => "(0)" })
  paycardtype: number;

  @Column("varchar", { name: "HUBURL", nullable: true, length: 255 })
  huburl: string | null;

  @Column("varchar", { name: "ACCMASK2", nullable: true, length: 25 })
  accmask2: string | null;

  @ManyToOne(() => Company, (company) => company.fundstrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Fundtradelines,
    (fundtradelines) => fundtradelines.fundstrntype
  )
  fundtradelines: Fundtradelines[];

  @OneToMany(() => Valfndbnktrn, (valfndbnktrn) => valfndbnktrn.fundstrntype)
  valfndbnktrns: Valfndbnktrn[];

  @OneToMany(() => Valfndcusttrn, (valfndcusttrn) => valfndcusttrn.fundstrntype)
  valfndcusttrns: Valfndcusttrn[];

  @OneToMany(() => Valfndsuptrn, (valfndsuptrn) => valfndsuptrn.fundstrntype)
  valfndsuptrns: Valfndsuptrn[];
}
