import { Column, Entity } from "typeorm";

@Entity("Customer", { schema: "dbo" })
export class CustomerMes {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "afm", nullable: true, length: 9 })
  afm: string | null;

  @Column("nvarchar", { name: "name", nullable: true })
  name: string | null;

  @Column("nvarchar", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("nvarchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("smallint", { name: "grade", nullable: true })
  grade: number | null;
}
