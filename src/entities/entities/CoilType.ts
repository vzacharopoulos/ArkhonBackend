import { Column, Entity, Index } from "typeorm";

@Index("PK_Coil_Type", ["code"], { unique: true })
@Entity("Coil_Type", { schema: "dbo" })
export class CoilType {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 30 })
  description: string | null;
}
