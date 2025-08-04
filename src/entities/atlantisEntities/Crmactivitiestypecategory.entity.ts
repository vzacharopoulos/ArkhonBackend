import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18170", ["codeid"], { unique: true })
@ObjectType()
@Entity("CRMACTIVITIESTYPECATEGORY", { schema: "dbo" })
export class Crmactivitiestypecategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTDESCR", nullable: true, length: 10 })
  shortdescr: string | null;
}
