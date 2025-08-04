import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18370", ["codeid"], { unique: true })
@ObjectType()
@Entity("LOTTRANSTYPE", { schema: "dbo" })
export class Lottranstype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 255 })
  description: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ENTRYTYPE", nullable: true })
  entrytype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ENTRYTYPEDESCR", nullable: true, length: 50 })
  entrytypedescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSTYPE", nullable: true })
  transtype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRANSTYPEDESCR", nullable: true, length: 50 })
  transtypedescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOCTYPE", nullable: true })
  doctype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCTYPEDESCR", nullable: true, length: 50 })
  doctypedescr: string | null;
}
