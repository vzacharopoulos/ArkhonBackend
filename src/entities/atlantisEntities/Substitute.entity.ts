import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2850", ["iteid", "substitutecode"], { unique: true })
@Index("UNIX_1103", ["substitutecode"], {})
@ObjectType()
@Entity("SUBSTITUTE", { schema: "dbo" })
export class Substitute {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "SUBSTITUTECODE", length: 50 })
  substitutecode: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBSTITUTEDESCR", nullable: true, length: 100 })
  substitutedescr: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "MASTERQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  masterqty: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "SUBSTQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  substqty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUBSTITEID", nullable: true })
  substiteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLORCODE", nullable: true, length: 15 })
  colorcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SIZEPOS", nullable: true })
  sizepos: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISEAN13", nullable: true, default: () => "0" })
  isean13: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.substitutes, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
