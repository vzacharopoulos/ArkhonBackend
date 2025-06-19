import { Column, Entity } from "typeorm";

@Entity("tube_sales_by_atlacode", { schema: "dbo" })
export class TubeSalesByAtlacode {
  @Column("bigint", { name: "row", nullable: true })
  row: string | null;

  @Column("nvarchar", { name: "atlacode", length: 49 })
  atlacode: string;

  @Column("int", { name: "sw", nullable: true })
  sw: number | null;
}
