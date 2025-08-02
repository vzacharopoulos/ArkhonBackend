import { Column, Entity } from "typeorm";

@Entity("MYDATATEMPCLASSSETUP", { schema: "dbo" })
export class Mydatatempclasssetup {
  @Column("varchar", { name: "CODE", length: 120 })
  code: string;

  @Column("varchar", { name: "CATEGORY_1", nullable: true, length: 120 })
  category_1: string | null;

  @Column("varchar", { name: "E3_1", nullable: true, length: 120 })
  e3_1: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 120 })
  descr: string | null;
}
