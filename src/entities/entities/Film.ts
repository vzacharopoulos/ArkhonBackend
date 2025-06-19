import { Column, Entity } from "typeorm";

@Entity("Film", { schema: "dbo" })
export class Film {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "code", nullable: true, length: 2 })
  code: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;
}
