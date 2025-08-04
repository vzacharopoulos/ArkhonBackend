import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18328", ["mydatacode"], { unique: true })
@ObjectType()
@Entity("MYDATAVATCATEGORY", { schema: "dbo" })
export class Mydatavatcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "MYDATACODE" })
  mydatacode: number;

  @Field({ nullable: true })
  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PERCENTAGEDESCR", length: 20 })
  percentagedescr: string;
}
