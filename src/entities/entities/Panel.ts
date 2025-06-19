import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PANEL", { schema: "dbo" })
export class Panel {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nvarchar", { name: "pcode", length: 51 })
  pcode: string;

  @Column("nvarchar", { name: "foam", nullable: true, length: 2 })
  foam: string | null;

  @Column("nchar", { name: "type", nullable: true, length: 2 })
  type: string | null;

  @Column("nchar", { name: "thickness", nullable: true, length: 3 })
  thickness: string | null;

  @Column("nchar", { name: "colorup", nullable: true, length: 3 })
  colorup: string | null;

  @Column("nchar", { name: "thickup", nullable: true, length: 3 })
  thickup: string | null;

  @Column("nchar", { name: "touchup", nullable: true, length: 2 })
  touchup: string | null;

  @Column("nchar", { name: "filmup", nullable: true, length: 2 })
  filmup: string | null;

  @Column("nchar", { name: "sheet_typeup", nullable: true, length: 2 })
  sheetTypeup: string | null;

  @Column("nchar", { name: "coatingup", nullable: true, length: 2 })
  coatingup: string | null;

  @Column("nchar", { name: "coathickup", nullable: true, length: 3 })
  coathickup: string | null;

  @Column("nchar", { name: "paintup", nullable: true, length: 2 })
  paintup: string | null;

  @Column("nchar", { name: "steelgradeup", nullable: true, length: 2 })
  steelgradeup: string | null;

  @Column("nchar", { name: "sidesign", nullable: true, length: 2 })
  sidesign: string | null;

  @Column("nchar", { name: "colordown", nullable: true, length: 3 })
  colordown: string | null;

  @Column("nchar", { name: "thickdown", nullable: true, length: 3 })
  thickdown: string | null;

  @Column("nchar", { name: "touchdown", nullable: true, length: 2 })
  touchdown: string | null;

  @Column("nchar", { name: "filmdown", nullable: true, length: 2 })
  filmdown: string | null;

  @Column("nchar", { name: "sheet_typedown", nullable: true, length: 2 })
  sheetTypedown: string | null;

  @Column("nchar", { name: "coatingdown", nullable: true, length: 2 })
  coatingdown: string | null;

  @Column("nchar", { name: "coathickdown", nullable: true, length: 3 })
  coathickdown: string | null;

  @Column("nchar", { name: "paintdown", nullable: true, length: 2 })
  paintdown: string | null;

  @Column("nchar", { name: "steelgradedown", nullable: true, length: 2 })
  steelgradedown: string | null;
}
