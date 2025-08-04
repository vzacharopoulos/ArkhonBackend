import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_SX15358", ["codeid", "ayear", "domaintype"], { unique: true })
@ObjectType()
@Entity("SXTAXVARS", { schema: "dbo" })
export class Sxtaxvars {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CODEID", length: 10 })
  codeid: string;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "AYEAR" })
  ayear: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FORMULA", nullable: true })
  formula: string | null;
}
