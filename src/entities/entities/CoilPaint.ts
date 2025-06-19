import { Column, Entity, Index } from "typeorm";

@Index("PK_Coil_Paint", ["code"], { unique: true })
@Entity("Coil_Paint", { schema: "dbo" })
export class CoilPaint {
  @Column("smallint", { name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nvarchar", { name: "type", nullable: true, length: 50 })
  type: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("nchar", { name: "width", nullable: true, length: 20 })
  width: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("int", { name: "isActive", nullable: true })
  isActive: number | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("varchar", { name: "class", nullable: true, length: 50 })
  class: string | null;
}
