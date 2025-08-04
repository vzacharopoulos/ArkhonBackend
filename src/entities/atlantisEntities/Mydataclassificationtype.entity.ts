import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18298", ["codeid"], { unique: true })
@Index("UNI_18300", ["codeiddescr", "iscredit"], { unique: true })
@ObjectType()
@Entity("MYDATACLASSIFICATIONTYPE", { schema: "dbo" })
export class Mydataclassificationtype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODEIDDESCR", unique: true, length: 255 })
  codeiddescr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCREDIT", unique: true })
  iscredit: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPERIODICAL" })
  isperiodical: number;
}
