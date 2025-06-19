import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_PPORDERLINES", ["id"], { unique: true })
@Entity("PPORDERLINES", { schema: "dbo" })
export class Pporderlines {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "PPORDERNO", nullable: true, length: 30 })
  pporderno: string | null;

  @Column("nvarchar", { name: "COILNO", nullable: true, length: 30 })
  coilno: string | null;

  @Column("decimal", {
    name: "init_weight",
    nullable: true,
    precision: 18,
    scale: 3,
  })
  initWeight: number | null;

  @Column("decimal", {
    name: "curr_weight",
    nullable: true,
    precision: 18,
    scale: 3,
  })
  currWeight: number | null;

  @Column("decimal", {
    name: "consumption",
    nullable: true,
    precision: 19,
    scale: 3,
  })
  consumption: number | null;

  @Column("smalldatetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "swheel", nullable: true })
  swheel: number | null;
}
