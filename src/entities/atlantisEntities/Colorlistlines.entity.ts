import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Colorlist } from "./Colorlist.entity";

@Index("UNI_5866", ["linkid", "colorcode"], { unique: true })
@ObjectType()
@Entity("COLORLISTLINES", { schema: "dbo" })
export class Colorlistlines {
  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("varchar", { name: "COLORDESCR", nullable: true, length: 100 })
  colordescr: string | null;

  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;

  @Column("varchar", { name: "OPTCOLORDESCR", nullable: true, length: 100 })
  optcolordescr: string | null;

  @Column("int", { name: "CLGID", nullable: true })
  clgid: number | null;

  @ManyToOne(() => Colorlist, (colorlist) => colorlist.colorlistlines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Colorlist;
}
