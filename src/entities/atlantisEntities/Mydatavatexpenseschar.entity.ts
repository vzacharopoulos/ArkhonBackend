import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18330", ["code"], { unique: true })
@ObjectType()
@Entity("MYDATAVATEXPENSESCHAR", { schema: "dbo" })
export class Mydatavatexpenseschar {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CODE", length: 20 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 120 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATDISCOUNT", nullable: true })
  vatdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADE", nullable: true, length: 120 })
  trade: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VATDESCR", nullable: true, length: 20 })
  vatdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRACOMMUNITY", nullable: true, length: 20 })
  intracommunity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "THIRDCOUNTRY", nullable: true, length: 20 })
  thirdcountry: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ASSETS_39A", nullable: true, length: 20 })
  assets_39A: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRACOMMUNITY_MAT", nullable: true, length: 20 })
  intracommunityMat: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "THIRDCOUNTRY_MAT", nullable: true, length: 20 })
  thirdcountryMat: string | null;
}
