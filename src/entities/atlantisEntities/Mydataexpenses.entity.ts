import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18308", ["codeid"], { unique: true })
@ObjectType()
@Entity("MYDATAEXPENSES", { schema: "dbo" })
export class Mydataexpenses {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PERCENTAGE", nullable: true, precision: 53 })
  percentage: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CATEGORYID", nullable: true })
  categoryid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CATEGORYDESCR", nullable: true, length: 255 })
  categorydescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISMYDATARECTYPE", nullable: true })
  ismydatarectype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;
}
