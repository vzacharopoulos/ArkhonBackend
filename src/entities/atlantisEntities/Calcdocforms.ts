import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms";

@Index(
  "UNI_5764_1",
  ["comid", "fyeid", "fipid", "dfmid", "atype", "linkid", "fipid_2"],
  { unique: true }
)
@Entity("CALCDOCFORMS", { schema: "dbo" })
export class Calcdocforms {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Column("smallint", { primary: true, name: "ATYPE" })
  atype: number;

  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Column("float", { name: "TOTAMOUNT", precision: 53 })
  totamount: number;

  @Column("int", { primary: true, name: "FIPID_2" })
  fipid_2: number;

  @Column("float", { name: "PREVFAMOUNT", precision: 53, default: () => "0" })
  prevfamount: number;

  @Column("float", { name: "TOTAMOUNTDE", nullable: true, precision: 53 })
  totamountde: number | null;

  @ManyToOne(() => Docforms, (docforms) => docforms.calcdocforms, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DFMID", referencedColumnName: "id" }])
  dfm: Docforms;
}
