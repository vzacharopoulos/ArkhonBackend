import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Specification } from "./Specification.entity";

@Index("UNI_5562_1", ["spcid", "resid"], { unique: true })
@ObjectType()
@Entity("SPECRESOURCE", { schema: "dbo" })
export class Specresource {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "RESID" })
  resid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCTYPE", default: () => "1" })
  calctype: number;

  @Field({ nullable: true })
  @Column("float", { name: "RESVALUE", precision: 53 })
  resvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MODIFIABLE", default: () => "0" })
  modifiable: number;

  @Field({ nullable: true })
  @Column("int", { name: "PHGID", nullable: true })
  phgid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PHSID", nullable: true })
  phsid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NOTES", nullable: true })
  notes: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RESAMOUNT", nullable: true, precision: 53 })
  resamount: number | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Specification,
    (specification) => specification.specresources,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;
}
