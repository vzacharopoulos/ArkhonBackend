import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18314", ["codeid"], { unique: true })
@Index("UNI_18316", ["descr"], { unique: true })
@ObjectType()
@Entity("MYDATAPAYMENTTYPE", { schema: "dbo" })
export class Mydatapaymenttype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", unique: true, length: 120 })
  descr: string;
}
