import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("TPOrdersLines", { schema: "dbo" })
export class TpOrdersLines {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "subtporder_id", nullable: true, length: 19 })
  subtporderId: string | null;

  @Column("nvarchar", { name: "coilno", nullable: true, length: 30 })
  coilno: string | null;

  @Column("int", { name: "position", nullable: true })
  position: number | null;
}
