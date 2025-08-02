import { Column, Entity } from "typeorm";

@Entity("ZTEMP", { schema: "dbo" })
export class Ztemp {
  @Column("int", { name: "code", nullable: true })
  code: number | null;

  @Column("int", { name: "s1", nullable: true })
  s1: number | null;

  @Column("int", { name: "s2", nullable: true })
  s2: number | null;
}
