import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5838", ["batchid", "aceid"], { unique: true })
@ObjectType()
@Entity("GTEMPIDS", { schema: "dbo" })
export class Gtempids {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "BATCHID" })
  batchid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ACEID" })
  aceid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRANSDATE", nullable: true })
  transdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "TMPAETID", nullable: true })
  tmpaetid: number | null;
}
