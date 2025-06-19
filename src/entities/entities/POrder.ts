import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_POrder", ["id"], { unique: true })
@Entity("POrder", { schema: "dbo" })
export class POrder {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "porderid", length: 50 })
  porderid: string;

  @Column("smalldatetime", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("smalldatetime", { name: "start_dt", nullable: true })
  startDt: Date | null;

  @Column("smalldatetime", { name: "finish_dt", nullable: true })
  finishDt: Date | null;

  @Column("int", { name: "duration", nullable: true })
  duration: number | null;

  @Column("smalldatetime", { name: "est_compl_date", nullable: true })
  estComplDate: Date | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("smalldatetime", { name: "loaded_dt", nullable: true })
  loadedDt: Date | null;

  @Column("smalldatetime", { name: "despatched_dt", nullable: true })
  despatchedDt: Date | null;

  @Column("nchar", { name: "destination", nullable: true, length: 10 })
  destination: string | null;

  @Column("smalldatetime", { name: "est_delivery", nullable: true })
  estDelivery: Date | null;

  @Column("nchar", { name: "offer", nullable: true, length: 10 })
  offer: string | null;

  @Column("nchar", { name: "filepath", nullable: true, length: 10 })
  filepath: string | null;

  @Column("nvarchar", { name: "orderid", nullable: true, length: 50 })
  orderid: string | null;

  @Column("nvarchar", { name: "panel", nullable: true, length: 51 })
  panel: string | null;

  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  quantity: number | null;

  @Column("nvarchar", { name: "foam", nullable: true, length: 50 })
  foam: string | null;

  @Column("nvarchar", { name: "paneltype", nullable: true, length: 50 })
  paneltype: string | null;

  @Column("nvarchar", { name: "panelthickness", nullable: true, length: 50 })
  panelthickness: string | null;

  @Column("nvarchar", { name: "colorup", nullable: true, length: 50 })
  colorup: string | null;

  @Column("nvarchar", { name: "colordown", nullable: true, length: 50 })
  colordown: string | null;

  @Column("nvarchar", { name: "thickup", nullable: true, length: 50 })
  thickup: string | null;

  @Column("nvarchar", { name: "thickdown", nullable: true, length: 50 })
  thickdown: string | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;
}
