import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18306", ["iscredit", "codeid", "invoicetype"], { unique: true })
@ObjectType()
@Entity("MYDATAE3SUFFIX", { schema: "dbo" })
export class Mydatae3Suffix {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "INVOICETYPE", length: 120 })
  invoicetype: string;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "ISCREDIT" })
  iscredit: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CODEID", length: 20 })
  codeid: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 120 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUFFIX", length: 50 })
  suffix: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRACOMMUNITY", nullable: true, length: 50 })
  intracommunity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "THIRDCOUNTRY", nullable: true, length: 50 })
  thirdcountry: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OTHER", nullable: true, length: 50 })
  other: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OTHERCOUNTRY", nullable: true, length: 50 })
  othercountry: string | null;
}
