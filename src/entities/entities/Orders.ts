import { Column, Entity } from "typeorm";

@Entity("Orders", { schema: "dbo" })
export class Orders {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("char", { name: "order_id", nullable: true, length: 13 })
  orderId: string | null;

  @Column("smalldatetime", { name: "order_dt", nullable: true })
  orderDt: Date | null;

  @Column("smallint", { name: "customer", nullable: true })
  customer: number | null;

  @Column("tinyint", { name: "status", nullable: true })
  status: number | null;
}
