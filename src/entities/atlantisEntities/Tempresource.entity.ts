import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("TEMPRESOURCE", { schema: "dbo" })
export class Tempresource {
  @PrimaryColumn("int", { name: "ID1", nullable: false })
  id1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ID2", nullable: true })
  id2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE1", nullable: true, precision: 53 })
  value1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE2", nullable: true, precision: 53 })
  value2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE3", nullable: true, precision: 53 })
  value3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALUE4", nullable: true, precision: 53 })
  value4: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INSMODE", nullable: true })
  insmode: number | null;
}
