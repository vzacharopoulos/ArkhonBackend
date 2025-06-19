import { Column, Entity, Index } from "typeorm";

@Index("PK_Coil_Touch", ["code"], { unique: true })
@Entity("Coil_Touch", { schema: "dbo" })
export class CoilTouch {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("nvarchar", { name: "nameGR", nullable: true, length: 50 })
  nameGr: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("int", { name: "selection1", nullable: true })
  selection1: number | null;

  @Column("int", { name: "selection2", nullable: true })
  selection2: number | null;

  @Column("int", { name: "selection3", nullable: true })
  selection3: number | null;
}
