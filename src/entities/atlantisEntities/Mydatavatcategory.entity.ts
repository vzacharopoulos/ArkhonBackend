import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18328", ["mydatacode"], { unique: true })
@ObjectType()
@Entity("MYDATAVATCATEGORY", { schema: "dbo" })
export class Mydatavatcategory {
  @Column("int", { primary: true, name: "MYDATACODE" })
  mydatacode: number;

  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @Column("varchar", { name: "PERCENTAGEDESCR", length: 20 })
  percentagedescr: string;
}
