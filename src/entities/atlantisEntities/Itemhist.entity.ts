import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2856", ["iteid", "codedate"], { unique: true })
@ObjectType()
@Entity("ITEMHIST", { schema: "dbo" })
export class Itemhist {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("datetime", { primary: true, name: "CODEDATE" })
  codedate: Date;

  @Column("varchar", { name: "ITEMCODE", length: 25 })
  itemcode: string;

  @ManyToOne(() => Material, (material) => material.itemhists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
