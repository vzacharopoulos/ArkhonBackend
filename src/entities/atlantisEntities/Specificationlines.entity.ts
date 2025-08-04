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
import { Speccolorsize } from "./Speccolorsize.entity";
import { Material } from "./Material.entity";
import { Specification } from "./Specification.entity";

@Index("UNI_5542", ["spcid", "linenum"], { unique: true })
@ObjectType()
@Entity("SPECIFICATIONLINES", { schema: "dbo" })
export class Specificationlines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "QTYTYPE", nullable: true })
  qtytype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "WASTETYPE", nullable: true })
  wastetype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LINETYPE", default: () => "0" })
  linetype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTESETUP", nullable: true, precision: 53 })
  wastesetup: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLORTMP", nullable: true, length: 15 })
  colortmp: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SIZETMP", nullable: true })
  sizetmp: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTYTMP", nullable: true, precision: 53 })
  qtytmp: number | null;

  @Field(() => [Speccolorsize], { nullable: true })
  @OneToMany(
    () => Speccolorsize,
    (speccolorsize) => speccolorsize.specificationlines
  )
  speccolorsizes: Speccolorsize[];

  
  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.specificationlines)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @ManyToOne(
    () => Specification,
    (specification) => specification.specificationlines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;

  @Field({ nullable: true })
  @ManyToOne(
    () => Specification,
    (specification) => specification.specificationlines2
  )
  @JoinColumn([{ name: "RELSPCID", referencedColumnName: "id" }])
  relspc: Specification;
}
