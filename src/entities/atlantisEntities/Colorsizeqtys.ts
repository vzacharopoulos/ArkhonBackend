import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Itecolor } from "./Itecolor";

@Index("UNI_3230", ["iteid", "stoid", "colorcode", "qtymode"], { unique: true })
@Entity("COLORSIZEQTYS", { schema: "dbo" })
export class Colorsizeqtys {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("smallint", { primary: true, name: "QTYMODE", default: () => "0" })
  qtymode: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "SIZE1", nullable: true, precision: 53 })
  size1: number | null;

  @Column("float", { name: "SIZE2", nullable: true, precision: 53 })
  size2: number | null;

  @Column("float", { name: "SIZE3", nullable: true, precision: 53 })
  size3: number | null;

  @Column("float", { name: "SIZE4", nullable: true, precision: 53 })
  size4: number | null;

  @Column("float", { name: "SIZE5", nullable: true, precision: 53 })
  size5: number | null;

  @Column("float", { name: "SIZE6", nullable: true, precision: 53 })
  size6: number | null;

  @Column("float", { name: "SIZE7", nullable: true, precision: 53 })
  size7: number | null;

  @Column("float", { name: "SIZE8", nullable: true, precision: 53 })
  size8: number | null;

  @Column("float", { name: "SIZE9", nullable: true, precision: 53 })
  size9: number | null;

  @Column("float", { name: "SIZE10", nullable: true, precision: 53 })
  size10: number | null;

  @Column("float", { name: "SIZE11", nullable: true, precision: 53 })
  size11: number | null;

  @Column("float", { name: "SIZE12", nullable: true, precision: 53 })
  size12: number | null;

  @Column("float", { name: "SIZE13", nullable: true, precision: 53 })
  size13: number | null;

  @Column("float", { name: "SIZE14", nullable: true, precision: 53 })
  size14: number | null;

  @Column("float", { name: "SIZE15", nullable: true, precision: 53 })
  size15: number | null;

  @Column("float", { name: "SIZE16", nullable: true, precision: 53 })
  size16: number | null;

  @Column("float", { name: "SIZE17", nullable: true, precision: 53 })
  size17: number | null;

  @Column("float", { name: "SIZE18", nullable: true, precision: 53 })
  size18: number | null;

  @Column("float", { name: "SIZE19", nullable: true, precision: 53 })
  size19: number | null;

  @Column("float", { name: "SIZE20", nullable: true, precision: 53 })
  size20: number | null;

  @ManyToOne(() => Itecolor, (itecolor) => itecolor.colorsizeqtys, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "ITEID", referencedColumnName: "iteid" },
    { name: "COLORCODE", referencedColumnName: "colorcode" },
  ])
  itecolor: Itecolor;
}
