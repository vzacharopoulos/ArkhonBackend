import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6366", ["id"], { unique: true })
@Entity("ATLCALENDAR", { schema: "dbo" })
export class Atlcalendar {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "CALKIND", default: () => "(0)" })
  calkind: number;

  @Column("smallint", { name: "CALDAY", nullable: true })
  calday: number | null;

  @Column("smallint", { name: "CALMONTH", nullable: true })
  calmonth: number | null;

  @Column("smallint", { name: "PASXADIFFDAYS", nullable: true })
  pasxadiffdays: number | null;

  @Column("int", { name: "FID", nullable: true })
  fid: number | null;

  @Column("datetime", { name: "FACTUALDATE", nullable: true })
  factualdate: Date | null;
}
