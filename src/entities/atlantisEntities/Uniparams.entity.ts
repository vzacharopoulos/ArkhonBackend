import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5848", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("UNIPARAMS", { schema: "dbo" })
export class Uniparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AVALUE", length: 50, default: () => "' '" })
  avalue: string;
}
