import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5334", ["ftrid1", "perid", "ftrid2", "omode"], { unique: true })
@Index("UNIX_1035", ["ftrid2", "perid"], {})
@ObjectType()
@Entity("OPENITEM", { schema: "dbo" })
export class Openitem {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID1" })
  ftrid1: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID2" })
  ftrid2: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "AMOUNT", precision: 53 })
  amount: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "OMODE" })
  omode: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PERID" })
  perid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERTYPE", nullable: true })
  pertype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;
}
