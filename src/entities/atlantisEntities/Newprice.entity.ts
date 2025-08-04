import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("NEWPRICE", { schema: "dbo" })
export class Newprice {
  @PrimaryColumn("nvarchar", { name: "CODE", nullable: false, length: 255 })
  code: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "DESCRIPTION", nullable: true, length: 255 })
  description: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "WHSPRICE", nullable: true, precision: 53 })
  whsprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RTLPRICE", nullable: true, precision: 53 })
  rtlprice: number | null;
}
