import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18322", ["codeid"], { unique: true })
@Index("UNI_18324", ["descr"], { unique: true })
@ObjectType()
@Entity("MYDATATAXFREEJUSTIFICATION", { schema: "dbo" })
export class Mydatataxfreejustification {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", unique: true, length: 255 })
  descr: string;
}
