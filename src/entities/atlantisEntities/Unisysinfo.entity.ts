import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("UNISYSINFO", { schema: "dbo" })
export class Unisysinfo {
  @PrimaryColumn("int", { name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "INFO", nullable: true, length: 255 })
  info: string | null;

  @Column("int", { name: "INFOINT", nullable: true })
  infoint: number | null;

  @Column("smallint", { name: "CUSTOMSYNC", nullable: true })
  customsync: number | null;
}
