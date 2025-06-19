import { Column, Entity } from "typeorm";

@Entity("Destination", { schema: "dbo" })
export class Destination {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;
}
