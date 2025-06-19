import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Dayshifts", ["id"], { unique: true })
@Entity("Dayshifts", { schema: "dbo" })
export class Dayshifts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("smalldatetime", { name: "wdate", nullable: true })
  wdate: Date | null;

  @Column("smallint", {
    name: "workhours",
    nullable: true,
    default: () => "(8)",
  })
  workhours: number | null;

  @Column("nchar", { name: "comments", nullable: true, length: 10 })
  comments: string | null;
}
