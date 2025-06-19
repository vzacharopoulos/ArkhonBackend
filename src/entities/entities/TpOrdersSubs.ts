import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TPOrders", ["id"], { unique: true })
@Entity("TPOrdersSubs", { schema: "dbo" })
export class TpOrdersSubs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "tporder_id", nullable: true, length: 15 })
  tporderId: string | null;

  @Column("nchar", { name: "subtporder_id", nullable: true, length: 19 })
  subtporderId: string | null;

  @Column("datetime", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("datetime", { name: "started_dt", nullable: true })
  startedDt: Date | null;

  @Column("datetime", { name: "finished_dt", nullable: true })
  finishedDt: Date | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", { name: "length", nullable: true })
  length: number | null;

  @Column("nvarchar", { name: "dimensions", nullable: true, length: 50 })
  dimensions: string | null;

  @Column("int", { name: "packaging", nullable: true })
  packaging: number | null;

  @Column("nchar", { name: "prodLine", nullable: true, length: 10 })
  prodLine: string | null;

  @Column("nvarchar", { name: "custorder", nullable: true, length: 100 })
  custorder: string | null;

  @Column("nvarchar", { name: "tubecode", nullable: true, length: 50 })
  tubecode: string | null;

  @Column("nchar", { name: "thickness", nullable: true, length: 10 })
  thickness: string | null;

  @Column("int", { name: "width", nullable: true })
  width: number | null;

  @Column("nchar", { name: "steelgrade", nullable: true, length: 10 })
  steelgrade: string | null;

  @Column("nvarchar", { name: "atlantisCode", nullable: true, length: 50 })
  atlantisCode: string | null;

  @Column("int", { name: "atlantisID", nullable: true })
  atlantisId: number | null;

  @Column("decimal", {
    name: "total_weight",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWeight: number | null;

  @Column("decimal", {
    name: "total_meters",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalMeters: number | null;

  @Column("decimal", {
    name: "total_metersp",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalMetersp: number | null;

  @Column("decimal", {
    name: "total_weightp",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWeightp: number | null;

  @Column("decimal", {
    name: "resWeight",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  resWeight: number | null;

  @Column("decimal", {
    name: "resLength",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  resLength: number | null;

  @Column("int", { name: "resMan", nullable: true })
  resMan: number | null;

  @Column("decimal", { name: "bcat", nullable: true, precision: 18, scale: 2 })
  bcat: number | null;

  @Column("decimal", { name: "ccat", nullable: true, precision: 18, scale: 2 })
  ccat: number | null;

  @Column("decimal", { name: "scrap", nullable: true, precision: 18, scale: 2 })
  scrap: number | null;

  @Column("int", { name: "bSync", nullable: true })
  bSync: number | null;

  @Column("int", { name: "mSync", nullable: true })
  mSync: number | null;

  @Column("decimal", {
    name: "maxCoilWeight",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  maxCoilWeight: number | null;
}
