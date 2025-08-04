import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("UNISYSINFO", { schema: "dbo" })
export class Unisysinfo {
  @PrimaryColumn("int", { name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "INFO", nullable: true, length: 255 })
  info: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "INFOINT", nullable: true })
  infoint: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CUSTOMSYNC", nullable: true })
  customsync: number | null;
}
