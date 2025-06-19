import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_PPORDERLINES2", ["id"], { unique: true })
@Entity("PPORDERLINES2", { schema: "dbo" })
export class Pporderlines2 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "PPORDERNO", nullable: true, length: 30 })
  pporderno: string | null;

  @Column("nvarchar", { name: "CUSTPORDERNO", nullable: true, length: 30 })
  custporderno: string | null;

  @Column("smalldatetime", { name: "prodDate", nullable: true })
  prodDate: Date | null;

  @Column("smalldatetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "isCanceled", nullable: true, default: () => "(0)" })
  isCanceled: number | null;

  @Column("nvarchar", { name: "PANELCODE", nullable: true, length: 150 })
  panelcode: string | null;

  @Column("nvarchar", { name: "tradecode", nullable: true, length: 30 })
  tradecode: string | null;
}
