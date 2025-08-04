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
import { Bankaccount } from "./Bankaccount.entity";
import { Fintrade } from "./Fintrade.entity";

@Index("UNI_6200", ["id"], { unique: true })
@Index("UNIX_1082", ["ftrid", "linenum"], {})
@ObjectType()
@Entity("BANKTRADELINES", { schema: "dbo" })
export class Banktradelines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "BNKID" })
  bnkid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRPAIDID", nullable: true })
  ftrpaidid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERRATE", nullable: true, precision: 53 })
  perrate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERLINEVALUE", nullable: true, precision: 53 })
  perlinevalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TTRPAIDID", nullable: true })
  ttrpaidid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNTRNID", nullable: true })
  bntrnid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNPAYSTATUS", nullable: true, length: 50 })
  bnpaystatus: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNCLRSTATUS", nullable: true, length: 50 })
  bnclrstatus: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BNPAYMENTID", nullable: true, length: 50 })
  bnpaymentid: string | null;

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
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.banktradelines)
  @JoinColumn([{ name: "BNAID", referencedColumnName: "id" }])
  bna: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.banktradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
