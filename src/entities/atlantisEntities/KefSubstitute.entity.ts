import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SUBSTITUTE_PK", ["iteid", "substitutecode"], { unique: true })
@ObjectType()
@Entity("KEF_SUBSTITUTE", { schema: "dbo" })
export class KefSubstitute {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "SUBSTITUTECODE", length: 25 })
  substitutecode: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUBSTITEID", nullable: true })
  substiteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBSTITECODE", nullable: true, length: 25 })
  substitecode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "MASTERQTY", nullable: true, precision: 53 })
  masterqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUBSTQTY", nullable: true, precision: 53 })
  substqty: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLORCODE", nullable: true, length: 15 })
  colorcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SIZEPOS", nullable: true })
  sizepos: number | null;
}
