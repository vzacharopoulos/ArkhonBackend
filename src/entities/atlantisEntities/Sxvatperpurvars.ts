import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_SX15436", ["id"], { unique: true })
@Index("UNI_SX15438", ["codeid", "fromdate"], { unique: true })
@Entity("SXVATPERPURVARS", { schema: "dbo" })
export class Sxvatperpurvars {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "CODEID", unique: true, length: 4 })
  codeid: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("datetime", { name: "FROMDATE", unique: true })
  fromdate: Date;

  @Column("varchar", { name: "FORMULA", nullable: true })
  formula: string | null;

  @Column("varchar", { name: "FORMULAGL", nullable: true })
  formulagl: string | null;

  @Column("int", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "PAGENO", nullable: true })
  pageno: number | null;
}
