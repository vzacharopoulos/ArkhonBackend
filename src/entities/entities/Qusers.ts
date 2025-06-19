import { Column, Entity } from "typeorm";

@Entity("qusers", { schema: "dbo" })
export class Qusers {
  @Column("nchar", { name: "id", nullable: true, length: 10 })
  id: string | null;

  @Column("nchar", { name: "userid", nullable: true, length: 50 })
  userid: string | null;

  @Column("nchar", { name: "name", nullable: true, length: 50 })
  name: string | null;
}
