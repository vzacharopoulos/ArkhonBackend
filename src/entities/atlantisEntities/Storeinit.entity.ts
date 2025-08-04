import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("STOREINIT", { schema: "dbo" })
export class Storeinit {
  @PrimaryColumn("int", { name: "ITEID", nullable: false })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IMPQTY1", nullable: true, precision: 53 })
  impqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IMPQTY2", nullable: true, precision: 53 })
  impqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IMPVALUE", nullable: true, precision: 53 })
  impvalue: number | null;
}
