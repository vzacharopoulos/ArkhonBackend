import { Column, Entity } from "typeorm";

@Entity("tmp", { schema: "dbo" })
export class Tmp {
  @Column("varchar", { name: "coilno", nullable: true, length: 50 })
  coilno: string | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("nvarchar", { name: "comment2", nullable: true })
  comment2: string | null;

  @Column("nvarchar", { name: "comment3", nullable: true })
  comment3: string | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "loc", nullable: true })
  loc: number | null;

  @Column("decimal", {
    name: "weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  weight: number | null;
}
