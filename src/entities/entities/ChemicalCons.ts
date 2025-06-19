import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Chemical_Cons", ["id"], { unique: true })
@Entity("Chemical_Cons", { schema: "dbo" })
export class ChemicalCons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "pporder", nullable: true, length: 50 })
  pporder: string | null;

  @Column("int", { name: "chemid", nullable: true })
  chemid: number | null;

  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  quantity: number | null;

  @Column("smalldatetime", { name: "consDate", nullable: true })
  consDate: Date | null;
}
