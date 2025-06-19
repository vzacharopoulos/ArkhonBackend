import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Checks", ["id"], { unique: true })
@Entity("Checks", { schema: "dbo" })
export class Checks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "custname", nullable: true, length: 100 })
  custname: string | null;

  @Column("nchar", { name: "afm", nullable: true, length: 9 })
  afm: string | null;

  @Column("nvarchar", { name: "checkNo", nullable: true, length: 20 })
  checkNo: string | null;

  @Column("smalldatetime", { name: "savedate", nullable: true })
  savedate: Date | null;

  @Column("smalldatetime", { name: "enddate", nullable: true })
  enddate: Date | null;

  @Column("nvarchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("decimal", {
    name: "checkamount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  checkamount: number | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;
}
