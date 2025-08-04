import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1426", ["code"], { unique: true })
@ObjectType()
@Entity("EINVDOCKIND", { schema: "dbo" })
export class Einvdockind {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CODE", length: 5 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 200 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "DSIGN", nullable: true })
  dsign: number | null;
}
