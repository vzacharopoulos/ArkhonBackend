import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5796", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ITEMGROUP2", { schema: "dbo" })
export class Itemgroup2 {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELID", nullable: true })
  relid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;
}
