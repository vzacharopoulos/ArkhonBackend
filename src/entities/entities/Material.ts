import { Column, Entity } from "typeorm";

@Entity("Material", { schema: "dbo" })
export class Material {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("nchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("nchar", { name: "description", nullable: true, length: 10 })
  description: string | null;

  @Column("smallint", { name: "init_quantity", nullable: true })
  initQuantity: number | null;

  @Column("smallint", { name: "cur_quantity", nullable: true })
  curQuantity: number | null;

  @Column("smallint", { name: "crit_quantity", nullable: true })
  critQuantity: number | null;

  @Column("smallint", { name: "supplier", nullable: true })
  supplier: number | null;

  @Column("smalldatetime", { name: "delivery_dt", nullable: true })
  deliveryDt: Date | null;
}
