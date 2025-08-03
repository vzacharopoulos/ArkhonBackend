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

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "BNKID" })
  bnkid: number;

  @Column("int", { name: "FTRPAIDID", nullable: true })
  ftrpaidid: number | null;

  @Column("float", { name: "PERRATE", nullable: true, precision: 53 })
  perrate: number | null;

  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Column("float", { name: "PERLINEVALUE", nullable: true, precision: 53 })
  perlinevalue: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "TTRPAIDID", nullable: true })
  ttrpaidid: number | null;

  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Column("varchar", { name: "BNTRNID", nullable: true })
  bntrnid: string | null;

  @Column("varchar", { name: "BNPAYSTATUS", nullable: true, length: 50 })
  bnpaystatus: string | null;

  @Column("varchar", { name: "BNCLRSTATUS", nullable: true, length: 50 })
  bnclrstatus: string | null;

  @Column("varchar", { name: "BNPAYMENTID", nullable: true, length: 50 })
  bnpaymentid: string | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.banktradelines)
  @JoinColumn([{ name: "BNAID", referencedColumnName: "id" }])
  bna: Bankaccount;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.banktradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
