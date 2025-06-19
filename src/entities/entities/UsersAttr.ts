import { Column, Entity } from "typeorm";

@Entity("UsersAttr", { schema: "dbo" })
export class UsersAttr {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "testAttrib", nullable: true, length: 10 })
  testAttrib: string | null;
}
