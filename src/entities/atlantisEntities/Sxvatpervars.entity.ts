import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_SX15296", ["id"], { unique: true })
@Index("UNI_SX15298", ["codeid", "fromdate"], { unique: true })
@ObjectType()
@Entity("SXVATPERVARS", { schema: "dbo" })
export class Sxvatpervars {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODEID", unique: true, length: 4 })
  codeid: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE", unique: true })
  fromdate: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "FORMULA", nullable: true })
  formula: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FORMULAGL", nullable: true })
  formulagl: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ATYPE", default: () => "0" })
  atype: number;
}
