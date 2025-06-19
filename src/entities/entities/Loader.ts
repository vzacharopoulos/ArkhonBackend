import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Loader", { schema: "dbo" })
export class Loader {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "loader_code", nullable: true, length: 10 })
  loaderCode: string | null;

  @Column("date", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("date", { name: "load_dt", nullable: true })
  loadDt: Date | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("nchar", { name: "orderid", nullable: true, length: 10 })
  orderid: string | null;
}
