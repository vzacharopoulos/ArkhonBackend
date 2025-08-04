import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18276", ["classcode"], { unique: true })
@ObjectType()
@Entity("MYDATAREGSETUPACCREC", { schema: "dbo" })
export class Mydataregsetupaccrec {
  @Field({ nullable: true })
  @Column("smallint", { name: "ACCTYPE", nullable: true })
  acctype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 70 })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CLASSCODE", length: 20 })
  classcode: string;
}
