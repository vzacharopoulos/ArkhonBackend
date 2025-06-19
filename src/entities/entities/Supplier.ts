import { Column, Entity } from "typeorm";

@Entity("Supplier", { schema: "dbo" })
export class Supplier {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;
}
