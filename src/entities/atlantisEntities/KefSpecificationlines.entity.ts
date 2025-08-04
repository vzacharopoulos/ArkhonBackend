import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECIFICATIONLINES_PK", ["spcid", "linenum"], { unique: true })
@ObjectType()
@Entity("KEF_SPECIFICATIONLINES", { schema: "dbo" })
export class KefSpecificationlines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPCCODE", nullable: true, length: 25 })
  spccode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINETYPE", nullable: true })
  linetype: number | null;
}
