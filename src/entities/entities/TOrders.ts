import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TOrders", ["id"], { unique: true })
@Entity("TOrders", { schema: "dbo" })
export class TOrders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "torderid", nullable: true, length: 13 })
  torderid: string | null;

  @Column("nvarchar", { name: "customer", nullable: true })
  customer: string | null;

  @Column("nvarchar", { name: "salesman", nullable: true })
  salesman: string | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("datetime", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("datetime", { name: "complete_dt", nullable: true })
  completeDt: Date | null;

  @Column("datetime", { name: "des_del_dt", nullable: true })
  desDelDt: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;
}
