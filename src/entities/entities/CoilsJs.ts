import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_COILS_JS", ["id"], { unique: true })
@Entity("COILS_JS", { schema: "dbo" })
export class CoilsJs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "cid_c", nullable: true, length: 20 })
  cidC: string | null;

  @Column("nvarchar", { name: "cid_s", nullable: true, length: 20 })
  cidS: string | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "type" })
  type: number;
}
