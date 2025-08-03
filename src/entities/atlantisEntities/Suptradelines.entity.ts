import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fintrade } from "./Fintrade.entity";
import { Supplier } from "./Supplier.entity";
import { Suppbankaccount } from "./Suppbankaccount.entity";

@Index("UNI_3742", ["id"], { unique: true })
@Index("UNIX_1042", ["supid"], {})
@Index("UNIX_1085", ["ftrid", "linenum"], {})
@ObjectType()
@Entity("SUPTRADELINES", { schema: "dbo" })
export class Suptradelines {
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

  @Column("int", { name: "SUPID" })
  supid: number;

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

  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("varchar", { name: "EPAYCODE", nullable: true, length: 50 })
  epaycode: string | null;

  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.suptradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Supplier, (supplier) => supplier.suptradelines)
  @JoinColumn([{ name: "SUPID", referencedColumnName: "id" }])
  sup: Supplier;

  @ManyToOne(
    () => Suppbankaccount,
    (suppbankaccount) => suppbankaccount.suptradelines
  )
  @JoinColumn([{ name: "BANID", referencedColumnName: "id" }])
  ban: Suppbankaccount;
}
