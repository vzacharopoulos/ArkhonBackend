import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("S_DOY", { schema: "dbo" })
export class SDoy {
  @PrimaryColumn("varchar", { name: "CODE", nullable: false, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;
}
