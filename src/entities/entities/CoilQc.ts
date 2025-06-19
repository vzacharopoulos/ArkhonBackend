import { Column, Entity, Index } from "typeorm";

@Index("PK_CoilQC", ["coilno", "pass"], { unique: true })
@Entity("CoilQC", { schema: "dbo" })
export class CoilQc {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { primary: true, name: "coilno", length: 13 })
  coilno: string;

  @Column("int", { primary: true, name: "pass" })
  pass: number;

  @Column("nchar", { name: "color", nullable: true, length: 10 })
  color: string | null;

  @Column("decimal", {
    name: "pw_top_drive",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pwTopDrive: number | null;

  @Column("decimal", {
    name: "pw_top_middle",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pwTopMiddle: number | null;

  @Column("decimal", {
    name: "pw_top_operator",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pwTopOperator: number | null;

  @Column("decimal", {
    name: "pw_bottom_middle",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  pwBottomMiddle: number | null;

  @Column("nchar", { name: "hardness", nullable: true, length: 10 })
  hardness: string | null;

  @Column("nchar", { name: "tbend", nullable: true, length: 10 })
  tbend: string | null;

  @Column("nchar", { name: "ri", nullable: true, length: 10 })
  ri: string | null;

  @Column("nchar", { name: "glossper", nullable: true, length: 10 })
  glossper: string | null;

  @Column("nchar", { name: "mekdr", nullable: true, length: 10 })
  mekdr: string | null;

  @Column("decimal", { name: "ccDL", nullable: true, precision: 5, scale: 2 })
  ccDl: number | null;

  @Column("decimal", { name: "ccDA", nullable: true, precision: 5, scale: 2 })
  ccDa: number | null;

  @Column("decimal", { name: "ccDB", nullable: true, precision: 5, scale: 2 })
  ccDb: number | null;

  @Column("decimal", { name: "ccDE", nullable: true, precision: 5, scale: 2 })
  ccDe: number | null;

  @Column("nchar", { name: "tempzone1", nullable: true, length: 10 })
  tempzone1: string | null;

  @Column("nchar", { name: "tempzone2", nullable: true, length: 10 })
  tempzone2: string | null;

  @Column("nchar", { name: "tempzone3", nullable: true, length: 10 })
  tempzone3: string | null;
}
