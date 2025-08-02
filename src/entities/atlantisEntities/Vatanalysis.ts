import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade";

@Index("UNI_3440", ["ftrid", "vtcid"], { unique: true })
@Entity("VATANALYSIS", { schema: "dbo" })
export class Vatanalysis {
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Column("int", { primary: true, name: "VTCID" })
  vtcid: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "SUBJECTTOVALUE", precision: 53 })
  subjecttovalue: number;

  @Column("float", { name: "LSUBJECTTOVALUE", precision: 53 })
  lsubjecttovalue: number;

  @Column("float", { name: "VTCVALUE", precision: 53 })
  vtcvalue: number;

  @Column("float", { name: "LVTCVALUE", precision: 53 })
  lvtcvalue: number;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.vatanalyses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
