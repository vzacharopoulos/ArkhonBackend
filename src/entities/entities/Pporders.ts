import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_PPORDERS", ["id"], { unique: true })
@Entity("PPORDERS", { schema: "dbo" })
export class Pporders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "PPORDERNO", nullable: true, length: 100 })
  pporderno: string | null;

  @Column("date", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("date", { name: "finish_date", nullable: true })
  finishDate: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("nvarchar", { name: "panelcode", nullable: true, length: 150 })
  panelcode: string | null;

  @Column("date", { name: "est_date_of_prod", nullable: true })
  estDateOfProd: Date | null;

  @Column("date", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  quantity: number | null;
}
