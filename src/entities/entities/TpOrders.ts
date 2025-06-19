import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("TPOrders", { schema: "dbo" })
export class TpOrders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "tporder_id", nullable: true, length: 15 })
  tporderId: string | null;

  @Column("datetime", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("datetime", { name: "started_dt", nullable: true })
  startedDt: Date | null;

  @Column("datetime", { name: "finished_dt", nullable: true })
  finishedDt: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;
}
