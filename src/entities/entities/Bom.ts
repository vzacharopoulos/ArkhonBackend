import { Column, Entity } from "typeorm";

@Entity("BOM", { schema: "dbo" })
export class Bom {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;
}
