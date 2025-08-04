import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6394", ["id"], { unique: true })
@ObjectType()
@Entity("COSTACCPARAMS", { schema: "dbo" })
export class Costaccparams {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TOREADDSRIDS", nullable: true, length: 255 })
  toreaddsrids: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TOMAKEDSRID", nullable: true })
  tomakedsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMPINGRDSRID", nullable: true })
  compingrdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DECOMPINGRDSRID", nullable: true })
  decompingrdsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PRECOSTCUSTTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostcusttrntypes: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PRECOSTSUPTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostsuptrntypes: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "COSTACCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  costacccheckmode: number | null;
}
