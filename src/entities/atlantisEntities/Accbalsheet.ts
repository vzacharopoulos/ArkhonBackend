import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Account } from "./Account";

@Index("UNI_1130", ["masterid", "fyeid", "fipid"], { unique: true })
@Entity("ACCBALSHEET", { schema: "dbo" })
export class Accbalsheet {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Column("float", { name: "LPERIODCREDIT", nullable: true, precision: 53 })
  lperiodcredit: number | null;

  @Column("float", { name: "LPERIODDEBIT", nullable: true, precision: 53 })
  lperioddebit: number | null;

  @Column("float", { name: "SPERIODCREDIT", nullable: true, precision: 53 })
  speriodcredit: number | null;

  @Column("float", { name: "SPERIODDEBIT", nullable: true, precision: 53 })
  sperioddebit: number | null;

  @Column("float", { name: "LPERIODCREDITUPD", nullable: true, precision: 53 })
  lperiodcreditupd: number | null;

  @Column("float", { name: "LPERIODDEBITUPD", nullable: true, precision: 53 })
  lperioddebitupd: number | null;

  @Column("float", { name: "SPERIODCREDITUPD", nullable: true, precision: 53 })
  speriodcreditupd: number | null;

  @Column("float", { name: "SPERIODDEBITUPD", nullable: true, precision: 53 })
  sperioddebitupd: number | null;

  @Column("float", { name: "KEPYOCOUNT", nullable: true, precision: 53 })
  kepyocount: number | null;

  @Column("float", { name: "KEPYOCOUNTUPD", nullable: true, precision: 53 })
  kepyocountupd: number | null;

  @Column("float", { name: "LKEPYODEBIT", nullable: true, precision: 53 })
  lkepyodebit: number | null;

  @Column("float", { name: "LKEPYOCREDIT", nullable: true, precision: 53 })
  lkepyocredit: number | null;

  @Column("float", { name: "SKEPYODEBIT", nullable: true, precision: 53 })
  skepyodebit: number | null;

  @Column("float", { name: "SKEPYOCREDIT", nullable: true, precision: 53 })
  skepyocredit: number | null;

  @Column("float", { name: "LKEPYODEBITUPD", nullable: true, precision: 53 })
  lkepyodebitupd: number | null;

  @Column("float", { name: "LKEPYOCREDITUPD", nullable: true, precision: 53 })
  lkepyocreditupd: number | null;

  @Column("float", { name: "SKEPYODEBITUPD", nullable: true, precision: 53 })
  skepyodebitupd: number | null;

  @Column("float", { name: "SKEPYOCREDITUPD", nullable: true, precision: 53 })
  skepyocreditupd: number | null;

  @Column("float", {
    name: "TDLPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperioddebit: number | null;

  @Column("float", {
    name: "TDLPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperiodcredit: number | null;

  @Column("float", {
    name: "TDSPERIODDEBIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperioddebit: number | null;

  @Column("float", {
    name: "TDSPERIODCREDIT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperiodcredit: number | null;

  @Column("float", {
    name: "TDLPERIODDEBITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperioddebitupd: number | null;

  @Column("float", {
    name: "TDLPERIODCREDITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdlperiodcreditupd: number | null;

  @Column("float", {
    name: "TDSPERIODDEBITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperioddebitupd: number | null;

  @Column("float", {
    name: "TDSPERIODCREDITUPD",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  tdsperiodcreditupd: number | null;

  @ManyToOne(() => Account, (account) => account.accbalsheets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Account;
}
