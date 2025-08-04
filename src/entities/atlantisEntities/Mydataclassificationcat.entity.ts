import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18290", ["codeid"], { unique: true })
@Index("UNI_18292", ["codeiddescr"], { unique: true })
@ObjectType()
@Entity("MYDATACLASSIFICATIONCAT", { schema: "dbo" })
export class Mydataclassificationcat {
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
  @Column("smallint", { name: "ISCREDIT" })
  iscredit: number;
}
