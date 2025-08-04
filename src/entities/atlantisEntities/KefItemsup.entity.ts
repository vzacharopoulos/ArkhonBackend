import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ITEMSUP_PK", ["comid", "itecode", "supcode"], { unique: true })
@ObjectType()
@Entity("KEF_ITEMSUP", { schema: "dbo" })
export class KefItemsup {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "ITECODE", length: 25 })
  itecode: string;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "SUPCODE", length: 25 })
  supcode: string;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPITECODE", nullable: true, length: 25 })
  supitecode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CODEDATE", nullable: true })
  codedate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "AGGREEDPRICE", nullable: true, precision: 53 })
  aggreedprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DISCOUNT1", nullable: true, precision: 53 })
  discount1: number | null;
}
