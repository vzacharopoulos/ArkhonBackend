import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FCategoriesExt", ["id"], { unique: true })
@Entity("FCategoriesExt", { schema: "dbo" })
export class FCategoriesExt {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "fcat", nullable: true })
  fcat: number | null;

  @Column("int", { name: "fd", nullable: true })
  fd: number | null;

  @Column("int", { name: "xd", nullable: true })
  xd: number | null;

  @Column("int", { name: "yd", nullable: true })
  yd: number | null;

  @Column("decimal", {
    name: "thickness",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  thickness: number | null;

  @Column("decimal", {
    name: "thicknessC",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  thicknessC: number | null;

  @Column("int", { name: "slit_size", nullable: true })
  slitSize: number | null;

  @Column("int", { name: "package_size", nullable: true })
  packageSize: number | null;

  @Column("varchar", { name: "nomthickness_", nullable: true, length: 4 })
  nomthickness_: string | null;

  @Column("varchar", { name: "subcode", length: 80 })
  subcode: string;

  @Column("varchar", { name: "atlasubcode__", length: 43 })
  atlasubcode__: string;

  @Column("varchar", { name: "atlasubcode_", length: 43 })
  atlasubcode_: string;

  @Column("numeric", {
    name: "tweight",
    nullable: true,
    precision: 38,
    scale: 7,
  })
  tweight: number | null;

  @Column("varchar", { name: "slitrange", length: 27 })
  slitrange: string;

  @Column("varchar", { name: "slithick", length: 32 })
  slithick: string;

  @Column("nvarchar", { name: "steel_type", nullable: true, length: 5 })
  steelType: string | null;

  @Column("decimal", {
    name: "coefficient",
    nullable: true,
    precision: 3,
    scale: 2,
    default: () => "(1)",
  })
  coefficient: number | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("nvarchar", { name: "atlacode_", length: 51 })
  atlacode_: string;

  @Column("varchar", { name: "nomthickness", nullable: true, length: 5 })
  nomthickness: string | null;

  @Column("varchar", { name: "atlasubcode", length: 43 })
  atlasubcode: string;

  @Column("nvarchar", { name: "atlacode", length: 51 })
  atlacode: string;

  @Column("int", { name: "Class", nullable: true })
  class: number | null;

  @Column("int", { name: "ClassD", nullable: true })
  classD: number | null;
}
