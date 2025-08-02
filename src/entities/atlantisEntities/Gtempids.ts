import { Column, Entity, Index } from "typeorm";

@Index("UNI_5838", ["batchid", "aceid"], { unique: true })
@Entity("GTEMPIDS", { schema: "dbo" })
export class Gtempids {
  @Column("int", { primary: true, name: "BATCHID" })
  batchid: number;

  @Column("int", { primary: true, name: "ACEID" })
  aceid: number;

  @Column("datetime", { name: "TRANSDATE", nullable: true })
  transdate: Date | null;

  @Column("int", { name: "TMPAETID", nullable: true })
  tmpaetid: number | null;
}
