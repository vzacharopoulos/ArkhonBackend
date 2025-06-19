import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Coil_Steel", ["code"], { unique: true })
@Entity("Coil_Steel", { schema: "dbo" })
export class CoilSteel {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("nchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("nchar", { name: "subtype", nullable: true, length: 10 })
  subtype: string | null;

  @Column("tinyint", { name: "ce", nullable: true })
  ce: number | null;

  @Column("nchar", { name: "sheet_code", nullable: true, length: 2 })
  sheetCode: string | null;

  @Column("nvarchar", { name: "atlasubcode", length: 12 })
  atlasubcode: string;
}
