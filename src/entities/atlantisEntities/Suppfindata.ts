import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Supplier } from "./Supplier";

@Index("UNI_2434", ["masterid"], { unique: true })
@Entity("SUPPFINDATA", { schema: "dbo" })
export class Suppfindata {
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "MEANPAYMENTTIME", nullable: true, precision: 53 })
  meanpaymenttime: number | null;

  @Column("float", { name: "MEANDUETIME", nullable: true, precision: 53 })
  meanduetime: number | null;

  @Column("datetime", { name: "CALCDATE", nullable: true })
  calcdate: Date | null;

  @Column("float", { name: "LMASTERBALANCE", nullable: true, precision: 53 })
  lmasterbalance: number | null;

  @Column("float", { name: "MASTERBALANCE", nullable: true, precision: 53 })
  masterbalance: number | null;

  @Column("float", {
    name: "LGENINDEFINITEBALANCE",
    nullable: true,
    precision: 53,
  })
  lgenindefinitebalance: number | null;

  @Column("float", {
    name: "LSELFINDEFINITEBALANCE",
    nullable: true,
    precision: 53,
  })
  lselfindefinitebalance: number | null;

  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value5: number | null;

  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value6: number | null;

  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value7: number | null;

  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value8: number | null;

  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value9: number | null;

  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value10: number | null;

  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value11: number | null;

  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value12: number | null;

  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value13: number | null;

  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value14: number | null;

  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value15: number | null;

  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value16: number | null;

  @Column("float", {
    name: "VALUE17",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value17: number | null;

  @Column("float", {
    name: "VALUE18",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value18: number | null;

  @Column("float", {
    name: "VALUE19",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value19: number | null;

  @Column("float", {
    name: "VALUE20",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value20: number | null;

  @Column("float", {
    name: "CURFYEIDMEANPAYTIME",
    nullable: true,
    precision: 53,
  })
  curfyeidmeanpaytime: number | null;

  @Column("datetime", { name: "LASTCREDITDATE", nullable: true })
  lastcreditdate: Date | null;

  @Column("datetime", { name: "LASTDEBITDATE", nullable: true })
  lastdebitdate: Date | null;

  @OneToOne(() => Supplier, (supplier) => supplier.suppfindata, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Supplier;
}
