import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TOrdersLines", ["id"], { unique: true })
@Entity("TOrdersLines", { schema: "dbo" })
export class TOrdersLines {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "torderid", nullable: true, length: 13 })
  torderid: string | null;

  @Column("nchar", { name: "tcode", nullable: true, length: 24 })
  tcode: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("nvarchar", { name: "customer", nullable: true, length: 50 })
  customer: string | null;

  @Column("nvarchar", { name: "salesman", nullable: true, length: 50 })
  salesman: string | null;

  @Column("int", { name: "weight", nullable: true })
  weight: number | null;
}
