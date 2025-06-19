import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_DefCoil", ["id"], { unique: true })
@Entity("DefCoil", { schema: "dbo" })
export class DefCoil {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "coilno", nullable: true, length: 20 })
  coilno: string | null;

  @Column("int", { name: "defid", nullable: true })
  defid: number | null;

  @Column("nchar", { name: "decid", nullable: true, length: 10 })
  decid: string | null;

  @Column("date", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("nchar", { name: "comment", nullable: true, length: 200 })
  comment: string | null;

  @Column("nvarchar", { name: "imageName", nullable: true, length: 150 })
  imageName: string | null;

  @Column("nvarchar", { name: "imageUrl", nullable: true, length: 150 })
  imageUrl: string | null;
}
