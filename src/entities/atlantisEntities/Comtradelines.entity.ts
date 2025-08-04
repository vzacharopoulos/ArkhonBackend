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
import { Vatcategory } from "./Vatcategory.entity";
import { Fintrade } from "./Fintrade.entity";
import { Analdist } from "./Analdist.entity";
import { Varcomtrades } from "./Varcomtrades.entity";

@Index("UNI_3414", ["id"], { unique: true })
@Index("UNIX_1016", ["accid"], {})
@Index("UNIX_1083", ["ftrid", "linenum"], {})
@ObjectType()
@Entity("COMTRADELINES", { schema: "dbo" })
export class Comtradelines {
  @Field({ nullable: true })
  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "GROUPVALUE" })
  groupvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUBJECTTOVAT" })
  subjecttovat: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERUPD" })
  turnoverupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOUPD" })
  kepyoupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE", precision: 53 })
  linevalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "LLINEVALUE", precision: 53 })
  llinevalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "TLINEVALUE", precision: 53 })
  tlinevalue: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABMID", nullable: true })
  abmid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDIFMODELID", nullable: true })
  accdifmodelid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPENSEPERCENTAGE", nullable: true, precision: 53 })
  expensepercentage: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.comtradelines)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.comtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Analdist, (analdist) => analdist.comtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ADSID", referencedColumnName: "code" },
  ])
  analdist: Analdist;

  @Field({ nullable: true })
  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.comtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "VCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades: Varcomtrades;
}
