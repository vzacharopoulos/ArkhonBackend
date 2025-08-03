import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Storetrade } from "./Storetrade.entity";

@Index("UNI_5462", ["comid", "codeid"], { unique: true })
@Index("UNI_5464", ["comid", "shortcut"], { unique: true })
@ObjectType()
@Entity("TRANSPORTATION", { schema: "dbo" })
export class Transportation {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "SHORTCUT", unique: true, length: 25 })
  shortcut: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("varchar", { name: "STR1", nullable: true, length: 40 })
  str1: string | null;

  @Column("varchar", { name: "STR2", nullable: true, length: 40 })
  str2: string | null;

  @Column("varchar", { name: "STR3", nullable: true, length: 40 })
  str3: string | null;

  @Column("int", { name: "VAL1", nullable: true })
  val1: number | null;

  @Column("int", { name: "VAL10", nullable: true })
  val10: number | null;

  @Column("int", { name: "VAL11", nullable: true })
  val11: number | null;

  @Column("int", { name: "VAL12", nullable: true })
  val12: number | null;

  @Column("int", { name: "VAL13", nullable: true })
  val13: number | null;

  @Column("int", { name: "VAL14", nullable: true })
  val14: number | null;

  @Column("int", { name: "VAL15", nullable: true })
  val15: number | null;

  @Column("int", { name: "VAL16", nullable: true })
  val16: number | null;

  @Column("int", { name: "VAL17", nullable: true })
  val17: number | null;

  @Column("int", { name: "VAL18", nullable: true })
  val18: number | null;

  @Column("int", { name: "VAL19", nullable: true })
  val19: number | null;

  @Column("int", { name: "VAL2", nullable: true })
  val2: number | null;

  @Column("int", { name: "VAL20", nullable: true })
  val20: number | null;

  @Column("int", { name: "VAL3", nullable: true })
  val3: number | null;

  @Column("int", { name: "VAL4", nullable: true })
  val4: number | null;

  @Column("int", { name: "VAL5", nullable: true })
  val5: number | null;

  @Column("int", { name: "VAL6", nullable: true })
  val6: number | null;

  @Column("int", { name: "VAL7", nullable: true })
  val7: number | null;

  @Column("int", { name: "VAL8", nullable: true })
  val8: number | null;

  @Column("int", { name: "VAL9", nullable: true })
  val9: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("int", { name: "CARRIERID", nullable: true })
  carrierid: number | null;

  

  @OneToMany(() => Storetrade, (storetrade) => storetrade.transportation)
  storetrades: Storetrade[];
}
