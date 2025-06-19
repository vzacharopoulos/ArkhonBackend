import { Column, Entity } from "typeorm";

@Entity("tube_sales", { schema: "dbo" })
export class TubeSales {
  @Column("bigint", { name: "row", nullable: true })
  row: string | null;

  @Column("nvarchar", { name: "atlacode", length: 49 })
  atlacode: string;

  @Column("int", { name: "sw", nullable: true })
  sw: number | null;
}
