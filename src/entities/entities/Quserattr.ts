import { Column, Entity } from "typeorm";

@Entity("quserattr", { schema: "dbo" })
export class Quserattr {
  @Column("nchar", { name: "userid", nullable: true, length: 50 })
  userid: string | null;

  @Column("nchar", { name: "type", nullable: true, length: 50 })
  type: string | null;

  @Column("nchar", { name: "value", nullable: true, length: 50 })
  value: string | null;
}
