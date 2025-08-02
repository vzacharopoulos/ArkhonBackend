import { Column, Entity, Index } from "typeorm";

@Index("KEF_COMRATES_PK", ["smnid", "iqcid"], { unique: true })
@Entity("KEF_COMRATES", { schema: "dbo" })
export class KefComrates {
  @Column("int", { primary: true, name: "SMNID" })
  smnid: number;

  @Column("int", { primary: true, name: "IQCID" })
  iqcid: number;

  @Column("varchar", { name: "SMNCODE", nullable: true, length: 25 })
  smncode: string | null;

  @Column("float", { name: "RATE01", nullable: true, precision: 53 })
  rate01: number | null;
}
