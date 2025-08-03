import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("ZTEMP", { schema: "dbo" })
export class Ztemp {
  @PrimaryColumn("int", { name: "code" })
  code: number | null;

  @Column("int", { name: "s1", nullable: true })
  s1: number | null;

  @Column("int", { name: "s2", nullable: true })
  s2: number | null;
}
