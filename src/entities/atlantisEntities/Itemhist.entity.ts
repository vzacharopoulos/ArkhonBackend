import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2856", ["iteid", "codedate"], { unique: true })
@ObjectType()
@Entity("ITEMHIST", { schema: "dbo" })
export class Itemhist {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("datetime", { primary: true, name: "CODEDATE" })
  codedate: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITEMCODE", length: 25 })
  itemcode: string;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itemhists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
