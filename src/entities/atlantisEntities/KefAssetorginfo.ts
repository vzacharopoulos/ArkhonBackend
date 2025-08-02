import { Column, Entity, Index } from "typeorm";

@Index("KEF_ASSETORGINFO_PK", ["recId", "comid"], { unique: true })
@Entity("KEF_ASSETORGINFO", { schema: "dbo" })
export class KefAssetorginfo {
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("int", { name: "ASTID", nullable: true })
  astid: number | null;

  @Column("varchar", { name: "ASTCODE", nullable: true, length: 25 })
  astcode: string | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("varchar", { name: "SN", nullable: true, length: 50 })
  sn: string | null;

  @Column("int", { name: "DPTID", nullable: true })
  dptid: number | null;

  @Column("varchar", { name: "LOCATION", nullable: true, length: 50 })
  location: string | null;
}
