import { Column, Entity } from "typeorm";

@Entity("SalesTarget", { schema: "dbo" })
export class SalesTarget {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("nvarchar", { name: "steelgrade", nullable: true, length: 50 })
  steelgrade: string | null;

  @Column("nvarchar", { name: "nomthickness", nullable: true, length: 50 })
  nomthickness: string | null;

  @Column("decimal", {
    name: "salesTargetMST",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  salesTargetMst: number | null;

  @Column("nvarchar", { name: "STYPE", length: 101 })
  stype: string;
}
