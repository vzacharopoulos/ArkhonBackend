import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18326", ["codeid"], { unique: true })
@ObjectType()
@Entity("MYDATATRADECODES", { schema: "dbo" })
export class Mydatatradecodes {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 20 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSUER", nullable: true, length: 20 })
  issuer: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRADETYPE", nullable: true })
  tradetype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADETYPEDESCR", nullable: true, length: 20 })
  tradetypedescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELFDELIVERY", nullable: true })
  selfdelivery: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISWITHOUTFPA", nullable: true })
  iswithoutfpa: number | null;
}
