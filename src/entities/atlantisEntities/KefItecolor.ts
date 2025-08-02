import { Column, Entity, Index } from "typeorm";

@Index("KEF_ITECOLOR_PK", ["iteid", "comid", "colorcode"], { unique: true })
@Entity("KEF_ITECOLOR", { schema: "dbo" })
export class KefItecolor {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("varchar", { name: "COLORDESCR", nullable: true, length: 100 })
  colordescr: string | null;

  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;
}
