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
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

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

  @Column("varchar", { name: "OPTCOLORDESCR2", nullable: true, length: 100 })
  optcolordescr2: string | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("int", { name: "SEZONID", nullable: true })
  sezonid: number | null;





  @OneToMany(() => Colorsizeqtys, (colorsizeqtys) => colorsizeqtys.itecolor)
  colorsizeqtys: Colorsizeqtys[];

  @ManyToOne(() => Material, (material) => material.itecolors, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;



  @OneToMany(() => Storecolorsize, (storecolorsize) => storecolorsize.itecolor)
  storecolorsizes: Storecolorsize[];


}
