import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6066", ["id"], { unique: true })
@Entity("CREDITVTCID", { schema: "dbo" })
export class Creditvtcid {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "VTCID" })
  vtcid: number;

  @Column("int", { name: "VCTID" })
  vctid: number;

  @Column("smallint", { name: "DTYPE", default: () => "0" })
  dtype: number;

  @Column("int", { name: "ITEMTYPE", default: () => "0" })
  itemtype: number;

  @Column("int", { name: "EXTRAID", nullable: true })
  extraid: number | null;

  @Column("smallint", { name: "ONLYSALES", default: () => "0" })
  onlysales: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;
}
