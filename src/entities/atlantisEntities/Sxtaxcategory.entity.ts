import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_SX15062", ["codeid"], { unique: true })
@ObjectType()
@Entity("SXTAXCATEGORY", { schema: "dbo" })
export class Sxtaxcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;


}
