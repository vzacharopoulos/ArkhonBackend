import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_payments", ["id"], { unique: true })
@Entity("payments", { schema: "dbo" })
export class Payments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "tradecode", nullable: true, length: 50 })
  tradecode: string | null;

  @Column("int", { name: "type", nullable: true })
  type: number | null;

  @Column("int", { name: "number", nullable: true })
  number: number | null;

  @Column("decimal", {
    name: "percentage",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  percentage: number | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amount: number | null;

  @Column("nvarchar", { name: "method", nullable: true })
  method: string | null;

  @Column("smalldatetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("timestamp", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "checked", nullable: true })
  checked: number | null;

  @Column("nvarchar", { name: "mesuser", nullable: true, length: 50 })
  mesuser: string | null;

  @Column("smalldatetime", { name: "dateChecked", nullable: true })
  dateChecked: Date | null;

  @Column("nvarchar", { name: "justification", nullable: true })
  justification: string | null;

  @Column("nvarchar", { name: "filepath", nullable: true })
  filepath: string | null;

  @Column("nvarchar", { name: "filename", nullable: true })
  filename: string | null;
}
