import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6060", ["tblno", "fldpos", "fldkind"], { unique: true })
@ObjectType()
@Entity("EXTRADBOBJECTS", { schema: "dbo" })
export class Extradbobjects {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "TBLNO" })
  tblno: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FLDPOS" })
  fldpos: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "FLDKIND" })
  fldkind: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDNAME", nullable: true, length: 50 })
  fldname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", nullable: true, length: 50 })
  title: string | null;



  @Field({ nullable: true })
  @Column("varchar", { name: "JOINFIELD", nullable: true, length: 50 })
  joinfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JOINDATASET", nullable: true, length: 50 })
  joindataset: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISPLAYFIELD", nullable: true, length: 50 })
  displayfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTRAWHERE", nullable: true, length: 100 })
  extrawhere: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NULLABLE", nullable: true })
  nullable: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEFAULTVALUE", nullable: true })
  defaultvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FSIZE", nullable: true })
  fsize: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FORDER", nullable: true, default: () => "0" })
  forder: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FDECIMALS", nullable: true })
  fdecimals: number | null;
}
