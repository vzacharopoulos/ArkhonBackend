import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_STORETRADELINES_CUT_SYNC", ["id"], { unique: true })
@Entity("STORETRADELINES_CUT_SYNC", { schema: "dbo" })
export class StoretradelinesCutSync {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Column("varchar", { name: "COILNO", nullable: true, length: 50 })
  coilno: string | null;

  @Column("smallint", { name: "isCanceled", nullable: true })
  isCanceled: number | null;

  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Column("smallint", { name: "Linetype", nullable: true })
  linetype: number | null;

  @Column("int", { name: "PCCOEF", nullable: true })
  pccoef: number | null;
}
