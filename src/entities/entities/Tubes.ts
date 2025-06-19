import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TUBES", ["id"], { unique: true })
@Entity("TUBES", { schema: "dbo" })
export class Tubes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "code", length: 42 })
  code: string;

  @Column("nchar", { name: "galv_type", nullable: true, length: 3 })
  galvType: string | null;

  @Column("decimal", {
    name: "thickclass",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  thickclass: number | null;

  @Column("decimal", {
    name: "thickness",
    nullable: true,
    precision: 3,
    scale: 2,
  })
  thickness: number | null;

  @Column("int", { name: "fd", nullable: true })
  fd: number | null;

  @Column("int", { name: "xd", nullable: true })
  xd: number | null;

  @Column("int", { name: "yd", nullable: true })
  yd: number | null;

  @Column("nchar", { name: "steelgrade", nullable: true, length: 2 })
  steelgrade: string | null;

  @Column("decimal", { name: "length", nullable: true, precision: 4, scale: 2 })
  length: number | null;

  @Column("decimal", {
    name: "nomweight",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  nomweight: number | null;

  @Column("int", { name: "stock", nullable: true })
  stock: number | null;

  @Column("int", { name: "minstock", nullable: true })
  minstock: number | null;

  @Column("date", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "slit_size", nullable: true })
  slitSize: number | null;

  @Column("int", { name: "packquantity", nullable: true })
  packquantity: number | null;

  @Column("float", { name: "nompacks", nullable: true, precision: 53 })
  nompacks: number | null;

  @Column("int", { name: "rstock", nullable: true })
  rstock: number | null;

  @Column("int", { name: "completepacks", nullable: true })
  completepacks: number | null;

  @Column("varchar", { name: "nomthickness", nullable: true, length: 4 })
  nomthickness: string | null;

  @Column("int", { name: "available_stock", nullable: true })
  availableStock: number | null;

  @Column("int", { name: "fcat", nullable: true })
  fcat: number | null;

  @Column("nvarchar", { name: "atlacode_", length: 49 })
  atlacode_: string;

  @Column("varchar", { name: "test_", nullable: true, length: 4 })
  test_: string | null;

  @Column("varchar", { name: "subcode", length: 80 })
  subcode: string;

  @Column("varchar", { name: "atlasubcode_", length: 43 })
  atlasubcode_: string;

  @Column("varchar", { name: "test", nullable: true, length: 4 })
  test: string | null;

  @Column("nvarchar", { name: "atlacode", length: 49 })
  atlacode: string;

  @Column("varchar", { name: "atlasubcode", length: 43 })
  atlasubcode: string;
}
