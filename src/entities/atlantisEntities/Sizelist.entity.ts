import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_5860", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("SIZELIST", { schema: "dbo" })
export class Sizelist {
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
  @Column("varchar", { name: "SIZE1", nullable: true, length: 15 })
  size1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE2", nullable: true, length: 15 })
  size2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE3", nullable: true, length: 15 })
  size3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE4", nullable: true, length: 15 })
  size4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE5", nullable: true, length: 15 })
  size5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE6", nullable: true, length: 15 })
  size6: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE7", nullable: true, length: 15 })
  size7: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE8", nullable: true, length: 15 })
  size8: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE9", nullable: true, length: 15 })
  size9: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE10", nullable: true, length: 15 })
  size10: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE11", nullable: true, length: 15 })
  size11: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE12", nullable: true, length: 15 })
  size12: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE13", nullable: true, length: 15 })
  size13: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE14", nullable: true, length: 15 })
  size14: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE15", nullable: true, length: 15 })
  size15: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE16", nullable: true, length: 15 })
  size16: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE17", nullable: true, length: 15 })
  size17: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE18", nullable: true, length: 15 })
  size18: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE19", nullable: true, length: 15 })
  size19: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SIZE20", nullable: true, length: 15 })
  size20: string | null;


  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.sizelist)
  materials: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.sizelist2)
  materials2: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.sizelist3)
  materials3: Material[];


}