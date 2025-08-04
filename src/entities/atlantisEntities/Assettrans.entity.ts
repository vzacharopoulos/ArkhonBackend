import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Depricedasset } from "./Depricedasset.entity";
import { Branch } from "./Branch.entity";
import { Fintrade } from "./Fintrade.entity";
import { Assettrntype } from "./Assettrntype.entity";
import { Assetreadjust } from "./Assetreadjust.entity";
import { Deprtrans } from "./Deprtrans.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5630", ["id"], { unique: true })
@Index("UNIX_1007", ["ftrid"], {})
@Index("UNIX_1008", ["dpaid", "trndate", "id"], {})
@Index("UNIX_1009", ["comid", "trndate", "id"], {})
@Index("UNIX_1108", ["astid", "ftrid", "assetnature"], {})
@Entity("ASSETTRANS", { schema: "dbo" })
export class Assettrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ASSETNATURE" })
  assetnature: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ASTID" })
  astid: number;

  @Field({ nullable: true })
  @Column("int", { name: "DPAID" })
  dpaid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ltrnvalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INFO1", nullable: true, length: 255 })
  info1: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "ASSETVALUE", nullable: true, precision: 53 })
  assetvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSFACTOR", default: () => "1" })
  transfactor: number;

  @Field({ nullable: true })
  @Column("int", { name: "ASLID", nullable: true })
  aslid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LTRNVALUE2", nullable: true, precision: 53 })
  ltrnvalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LTRNVALUE3", nullable: true, precision: 53 })
  ltrnvalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LTRNVALUE4", nullable: true, precision: 53 })
  ltrnvalue4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LTRNVALUE5", nullable: true, precision: 53 })
  ltrnvalue5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IASASSETVALUE", nullable: true, precision: 53 })
  iasassetvalue: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Depricedasset, (depricedasset) => depricedasset.assettrans)
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.assettrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.assettrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Assettrntype, (assettrntype) => assettrntype.assettrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Assetreadjust, (assetreadjust) => assetreadjust.assettrans)
  @JoinColumn([{ name: "ARJID", referencedColumnName: "codeid" }])
  arj: Assetreadjust;



  @Field(() => [Deprtrans], { nullable: true })
  @OneToMany(() => Deprtrans, (deprtrans) => deprtrans.atn)
  deprtrans: Deprtrans[];
}
