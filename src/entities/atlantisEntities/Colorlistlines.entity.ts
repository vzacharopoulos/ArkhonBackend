import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Colorlist } from "./Colorlist.entity";

@Index("UNI_5866", ["linkid", "colorcode"], { unique: true })
@ObjectType()
@Entity("COLORLISTLINES", { schema: "dbo" })
export class Colorlistlines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLORDESCR", nullable: true, length: 100 })
  colordescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OPTCOLORDESCR", nullable: true, length: 100 })
  optcolordescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLGID", nullable: true })
  clgid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Colorlist, (colorlist) => colorlist.colorlistlines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Colorlist;
}
