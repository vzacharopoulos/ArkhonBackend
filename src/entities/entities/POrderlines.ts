import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_POrderlines", ["id"], { unique: true })
@Entity("POrderlines", { schema: "dbo" })
export class POrderlines {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "porder", nullable: true, length: 50 })
  porder: string | null;

  @Column("decimal", {
    name: "length",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  length: number | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("decimal", { name: "area", nullable: true, precision: 29, scale: 2 })
  area: number | null;
}
