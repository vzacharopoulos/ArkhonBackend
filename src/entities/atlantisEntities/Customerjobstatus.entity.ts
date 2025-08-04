import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6258", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CUSTOMERJOBSTATUS", { schema: "dbo" })
export class Customerjobstatus {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;
}
