import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_15462", ["id"], { unique: true })
@Index("UNIX_15462", ["code"], {})
@ObjectType()
@Entity("SXKAD97", { schema: "dbo" })
export class Sxkad97 {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;
}
