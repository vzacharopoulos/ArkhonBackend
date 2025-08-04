import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Lbdata } from "./Lbdata.entity";

@Index("UNI_6268", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("LBSHAPES", { schema: "dbo" })
export class Lbshapes {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("float", { name: "TOPMARG", nullable: true, precision: 53 })
  topmarg: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LEFTMARG", nullable: true, precision: 53 })
  leftmarg: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VPITCH", nullable: true, precision: 53 })
  vpitch: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "HPITCH", nullable: true, precision: 53 })
  hpitch: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "HEIGHT", nullable: true, precision: 53 })
  height: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WIDTH", nullable: true, precision: 53 })
  width: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VNUM", nullable: true })
  vnum: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HNUM", nullable: true })
  hnum: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MUNIT", nullable: true })
  munit: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ORIENTATION",
    nullable: true,
    default: () => "0",
  })
  orientation: number | null;

  @Field(() => [Lbdata], { nullable: true })
  @OneToMany(() => Lbdata, (lbdata) => lbdata.lbshapes)
  lbdata: Lbdata[];
}
