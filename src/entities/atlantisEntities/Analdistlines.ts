import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Analdist } from "./Analdist";

@Index("UNI_708", ["comid", "adsid", "linenum"], { unique: true })
@Entity("ANALDISTLINES", { schema: "dbo" })
export class Analdistlines {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "ADSID" })
  adsid: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "ACCID" })
  accid: number;

  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @ManyToOne(() => Analdist, (analdist) => analdist.analdistlines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ADSID", referencedColumnName: "id" }])
  ads: Analdist;
}
