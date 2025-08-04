import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18310", ["codeid"], { unique: true })
@Index("UNI_18312", ["descr"], { unique: true })
@ObjectType()
@Entity("MYDATAMEASUREMENTUNIT", { schema: "dbo" })
export class Mydatameasurementunit {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", unique: true, length: 60 })
  descr: string;
}
