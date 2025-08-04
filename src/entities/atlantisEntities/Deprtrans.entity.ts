import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset.entity";
import { Depricedasset } from "./Depricedasset.entity";
import { Assettrans } from "./Assettrans.entity";

@Index("UNI_5614", ["id"], { unique: true })
@Index("UNIX_1073", ["astid", "trndate"], {})
@ObjectType()
@Entity("DEPRTRANS", { schema: "dbo" })
export class Deprtrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRNDATE" })
  trndate: Date;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE1", nullable: true, precision: 53 })
  trnvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE2", nullable: true, precision: 53 })
  trnvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE3", nullable: true, precision: 53 })
  trnvalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE4", nullable: true, precision: 53 })
  trnvalue4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE5", nullable: true, precision: 53 })
  trnvalue5: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DEPRDATETO", nullable: true })
  deprdateto: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEPRDAYS", nullable: true })
  deprdays: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ASTID" })
  astid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOPENING", nullable: true, default: () => "0" })
  isopening: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KIND", nullable: true, default: () => "1" })
  kind: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDATED", nullable: true, default: () => "0" })
  glupdated: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "IASTRNVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iastrnvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "IASTRNVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iastrnvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "IASDIFTRNVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iasdiftrnvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "IASDIFTRNVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iasdiftrnvalue2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DTTYPE", default: () => "0" })
  dttype: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "IASTRNDATE", nullable: true })
  iastrndate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEPRTYPE", default: () => "0" })
  deprtype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCDEPR", default: () => "(0)" })
  calcdepr: number;

  @Field({ nullable: true })
  @ManyToOne(() => Asset, (asset) => asset.deprtrans)
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @Field({ nullable: true })
  @ManyToOne(() => Depricedasset, (depricedasset) => depricedasset.deprtrans)
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;

  @Field({ nullable: true })
  @ManyToOne(() => Assettrans, (assettrans) => assettrans.deprtrans)
  @JoinColumn([{ name: "ATNID", referencedColumnName: "id" }])
  atn: Assettrans;
}
