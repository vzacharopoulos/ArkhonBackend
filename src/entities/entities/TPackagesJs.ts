import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("TPackages_JS", { schema: "dbo" })
export class TPackagesJs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "tpid_c", nullable: true, length: 50 })
  tpidC: string | null;

  @Column("nchar", { name: "tpid_s", nullable: true, length: 50 })
  tpidS: string | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "type", nullable: true })
  type: number | null;
}
