import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_SX15046", ["codeid"], { unique: true })
@ObjectType()
@Entity("SXCONCATEGORY", { schema: "dbo" })
export class Sxconcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;


}
