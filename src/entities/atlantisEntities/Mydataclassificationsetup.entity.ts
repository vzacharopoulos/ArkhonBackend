import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_18294", ["id"], { unique: true })
@Index("UNI_18296", ["code"], { unique: true })
@ObjectType()
@Entity("MYDATACLASSIFICATIONSETUP", { schema: "dbo" })
export class Mydataclassificationsetup {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "GCODE" })
  gcode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 120 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "CATEGORY_1", length: 120 })
  category_1: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "E3_1", nullable: true, length: 120 })
  e3_1: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "E3_1_1", nullable: true })
  e3_1_1: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CATEGORY_2", nullable: true, length: 120 })
  category_2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "E3_2", nullable: true, length: 120 })
  e3_2: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "E3_2_1", nullable: true })
  e3_2_1: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CATEGORY_3", nullable: true, length: 120 })
  category_3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "E3_3", nullable: true, length: 120 })
  e3_3: string | null;
}
