import { Column, Entity, Index, OneToMany } from "typeorm";
import { Lbdata } from "./Lbdata";

@Index("UNI_6268", ["comid", "codeid"], { unique: true })
@Entity("LBSHAPES", { schema: "dbo" })
export class Lbshapes {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("float", { name: "TOPMARG", nullable: true, precision: 53 })
  topmarg: number | null;

  @Column("float", { name: "LEFTMARG", nullable: true, precision: 53 })
  leftmarg: number | null;

  @Column("float", { name: "VPITCH", nullable: true, precision: 53 })
  vpitch: number | null;

  @Column("float", { name: "HPITCH", nullable: true, precision: 53 })
  hpitch: number | null;

  @Column("float", { name: "HEIGHT", nullable: true, precision: 53 })
  height: number | null;

  @Column("float", { name: "WIDTH", nullable: true, precision: 53 })
  width: number | null;

  @Column("smallint", { name: "VNUM", nullable: true })
  vnum: number | null;

  @Column("smallint", { name: "HNUM", nullable: true })
  hnum: number | null;

  @Column("smallint", { name: "MUNIT", nullable: true })
  munit: number | null;

  @Column("smallint", {
    name: "ORIENTATION",
    nullable: true,
    default: () => "0",
  })
  orientation: number | null;

  @OneToMany(() => Lbdata, (lbdata) => lbdata.lbshapes)
  lbdata: Lbdata[];
}
