import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Colorsizeqtys } from "./Colorsizeqtys.entity";
import { Material } from "./Material.entity";
import { Storecolorsize } from "./Storecolorsize.entity";

@Index("UNI_2894", ["iteid", "colorcode"], { unique: true })
@ObjectType()
@Entity("ITECOLOR", { schema: "dbo" })
export class Itecolor {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

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
  @Column("varchar", { name: "OPTCOLORDESCR2", nullable: true, length: 100 })
  optcolordescr2: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SEZONID", nullable: true })
  sezonid: number | null;





  @Field(() => [Colorsizeqtys], { nullable: true })
  @OneToMany(() => Colorsizeqtys, (colorsizeqtys) => colorsizeqtys.itecolor)
  colorsizeqtys: Colorsizeqtys[];

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itecolors, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;



  @Field(() => [Storecolorsize], { nullable: true })
  @OneToMany(() => Storecolorsize, (storecolorsize) => storecolorsize.itecolor)
  storecolorsizes: Storecolorsize[];


}
