import { Column, Entity } from "typeorm";

@Entity("Z_STATUS", { schema: "dbo" })
export class ZStatus {
  @Column("smallint", { name: "ID", nullable: true })
  id: number | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;
}
