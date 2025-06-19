import { Column, Entity, Index } from "typeorm";

@Index("PK_Coil_Orders", ["id"], { unique: true })
@Entity("Coil_Orders", { schema: "dbo" })
export class CoilOrders {
  @Column("nchar", { primary: true, name: "id", length: 10 })
  id: string;

  @Column("nchar", { name: "corder_id", nullable: true, length: 13 })
  corderId: string | null;

  @Column("datetime", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("datetime", { name: "order_date", nullable: true })
  orderDate: Date | null;

  @Column("datetime", { name: "exp_del_date", nullable: true })
  expDelDate: Date | null;

  @Column("datetime", { name: "load_date", nullable: true })
  loadDate: Date | null;

  @Column("datetime", { name: "del_date", nullable: true })
  delDate: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "supplierid", nullable: true })
  supplierid: number | null;
}
