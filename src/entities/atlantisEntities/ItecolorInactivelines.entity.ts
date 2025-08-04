import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_1700", ["iteid", "colorcode", "sizenum"], { unique: true })
@ObjectType()
@Entity("ITECOLOR_INACTIVELINES", { schema: "dbo" })
export class ItecolorInactivelines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SIZENUM" })
  sizenum: number;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itecolorInactivelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
