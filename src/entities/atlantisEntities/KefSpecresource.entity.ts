import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECRESOURCE_PK", ["spcid", "resid"], { unique: true })
@ObjectType()
@Entity("KEF_SPECRESOURCE", { schema: "dbo" })
export class KefSpecresource {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "RESID" })
  resid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPCCODE", nullable: true, length: 25 })
  spccode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RESVALUE", nullable: true, precision: 53 })
  resvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CALCTYPE", nullable: true })
  calctype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MODIFIABLE", nullable: true })
  modifiable: number | null;
}
