import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Expensesanalysis } from "./Expensesanalysis.entity";
import { Material } from "./Material.entity";

import { Vatcategory } from "./Vatcategory.entity";
import { Company } from "./Company.entity";

@Index("UNI_5052", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("SPSURCHARGES", { schema: "dbo" })
export class Spsurcharges {
  @Column("int", { primary: true, name: "COMID", default: () => "0" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("smallint", { name: "CALCMODE", nullable: true, default: () => "0" })
  calcmode: number | null;

  @Column("smallint", { name: "DEBITMODE", nullable: true, default: () => "1" })
  debitmode: number | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("float", { name: "EXPVALUE", nullable: true, precision: 53 })
  expvalue: number | null;

  @Column("smallint", { name: "FPAMODE", nullable: true, default: () => "0" })
  fpamode: number | null;

  @Column("varchar", { name: "GLSALESSEG", nullable: true, length: 25 })
  glsalesseg: string | null;

  @Column("varchar", { name: "GLPURSEG", nullable: true, length: 25 })
  glpurseg: string | null;

  @Column("varchar", { name: "VATSALESSEG", nullable: true, length: 25 })
  vatsalesseg: string | null;

  @Column("varchar", { name: "VATPURSEG", nullable: true, length: 25 })
  vatpurseg: string | null;

  @Column("smallint", { name: "KEPYOMODE", nullable: true, default: () => "0" })
  kepyomode: number | null;

  @Column("smallint", { name: "STOCKMODE", nullable: true, default: () => "0" })
  stockmode: number | null;

  @Column("smallint", {
    name: "USEDBYITEMS",
    nullable: true,
    default: () => "0",
  })
  usedbyitems: number | null;

  @Column("smallint", { name: "RLMODE", nullable: true, default: () => "0" })
  rlmode: number | null;

  @Column("smallint", {
    name: "TURNOVERMODE",
    nullable: true,
    default: () => "0",
  })
  turnovermode: number | null;

  @Column("smallint", {
    name: "INTRASTATMODE",
    nullable: true,
    default: () => "1",
  })
  intrastatmode: number | null;

  @Column("smallint", { name: "CHANGEMODE", default: () => "0" })
  changemode: number;

  @Column("varchar", { name: "FORMEXPVALUE", nullable: true, length: 255 })
  formexpvalue: string | null;

  @Column("int", { name: "EFKMODE", default: () => "0" })
  efkmode: number;

  @Column("int", { name: "SOURCETYPE", default: () => "0" })
  sourcetype: number;

  @Column("smallint", { name: "KEEPVATSTATUS", default: () => "0" })
  keepvatstatus: number;

  @Column("smallint", { name: "INCLUDEVAT", default: () => "0" })
  includevat: number;

  @Column("smallint", { name: "ITEMCOSTMODE", default: () => "0" })
  itemcostmode: number;

  @Column("smallint", { name: "ATYPE", nullable: true, default: () => "0" })
  atype: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("smallint", { name: "ISWITHHOLDING", default: () => "(0)" })
  iswithholding: number;

  @Column("varchar", { name: "CONDEXPVALUE", nullable: true, length: 255 })
  condexpvalue: string | null;

  @Column("int", { name: "MYDATACATID", nullable: true })
  mydatacatid: number | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("varchar", { name: "MYDATAINCCLASSCAT", nullable: true, length: 120 })
  mydataincclasscat: string | null;

  @Column("varchar", {
    name: "MYDATAINCCLASSTYPE",
    nullable: true,
    length: 120,
  })
  mydataincclasstype: string | null;

  @Column("varchar", { name: "MYDATAEXPCLASSCAT", nullable: true, length: 120 })
  mydataexpclasscat: string | null;

  @Column("varchar", {
    name: "MYDATAEXPCLASSTYPE",
    nullable: true,
    length: 120,
  })
  mydataexpclasstype: string | null;

  @Column("smallint", { name: "ISTHIRDPARTYSALES", nullable: true })
  isthirdpartysales: number | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @OneToMany(
    () => Expensesanalysis,
    (expensesanalysis) => expensesanalysis.spsurcharges
  )
  expensesanalyses: Expensesanalysis[];

  @OneToMany(() => Material, (material) => material.spsurcharges)
  materials: Material[];

  @OneToMany(() => Material, (material) => material.spsurcharges2)
  materials2: Material[];

  @OneToMany(() => Material, (material) => material.spsurcharges3)
  materials3: Material[];

  @OneToMany(() => Material, (material) => material.spsurcharges4)
  materials4: Material[];

  @OneToMany(() => Material, (material) => material.spsurcharges5)
  materials5: Material[];

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.spsurcharges)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @ManyToOne(() => Company, (company) => company.spsurcharges)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

}
