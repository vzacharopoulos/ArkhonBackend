import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5776", ["codeid"], { unique: true })
@ObjectType()
@Entity("IMPORT", { schema: "dbo" })
export class Import {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TABLENAME", nullable: true, length: 100 })
  tablename: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FILEORIGIN", default: () => "1" })
  fileorigin: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FILETYPE", default: () => "0" })
  filetype: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINESPERREC", nullable: true })
  linesperrec: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EDSID", nullable: true })
  edsid: number | null;



  @Field({ nullable: true })
  @Column("int", { name: "STARTINGROW", nullable: true })
  startingrow: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DOMAINTYPE",
    nullable: true,
    default: () => "(0)",
  })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "UPDATEMODE",
    nullable: true,
    default: () => "(0)",
  })
  updatemode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "UPDATEKEY", nullable: true, length: 255 })
  updatekey: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "EXECSCRIPT",
    nullable: true,
    default: () => "(0)",
  })
  execscript: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SCRIPT", nullable: true, length: 255 })
  script: string | null;
}
