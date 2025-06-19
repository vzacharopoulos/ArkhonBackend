import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PPackages", { schema: "dbo" })
export class PPackages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "packno", nullable: true, length: 50 })
  packno: string | null;

  @Column("int", { name: "iteid", nullable: true })
  iteid: number | null;

  @Column("nvarchar", { name: "itename", nullable: true, length: 50 })
  itename: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 250 })
  description: string | null;

  @Column("int", { name: "pcs", nullable: true })
  pcs: number | null;

  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  quantity: number | null;

  @Column("nvarchar", { name: "tradecode", nullable: true, length: 50 })
  tradecode: string | null;

  @Column("date", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("date", { name: "despatch_dt", nullable: true })
  despatchDt: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "loc", nullable: true })
  loc: number | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("nvarchar", {
    name: "Classification",
    nullable: true,
    length: 5,
    default: () => "N'A'",
  })
  classification: string | null;

  @Column("nchar", { name: "comment", nullable: true, length: 250 })
  comment: string | null;

  @Column("int", { name: "importNo", nullable: true })
  importNo: number | null;

  @Column("nvarchar", { name: "panelThickness", nullable: true, length: 10 })
  panelThickness: string | null;

  @Column("nvarchar", { name: "cin", nullable: true, length: 100 })
  cin: string | null;

  @Column("nvarchar", { name: "cout", nullable: true, length: 100 })
  cout: string | null;

  @Column("nvarchar", { name: "thickin", nullable: true, length: 50 })
  thickin: string | null;

  @Column("nvarchar", { name: "thickout", nullable: true, length: 50 })
  thickout: string | null;

  @Column("nvarchar", { name: "moldin", nullable: true, length: 50 })
  moldin: string | null;

  @Column("nvarchar", { name: "moldout", nullable: true, length: 50 })
  moldout: string | null;

  @Column("decimal", {
    name: "panelWeightPerMeter",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeter: number | null;

  @Column("nvarchar", { name: "widthin", nullable: true, length: 50 })
  widthin: string | null;

  @Column("nvarchar", { name: "widthout", nullable: true, length: 50 })
  widthout: string | null;
}
