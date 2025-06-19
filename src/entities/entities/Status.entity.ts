import { Entity, Column, PrimaryColumn, OneToMany, Index } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Coils } from "./Coils.entity";

@ObjectType()
@Index("PK_Status", ["id"], { unique: true })
@Entity("Status", { schema: "dbo" })
export class Status {
  @Field(() => Int)
  @PrimaryColumn("smallint", { name: "id" })
  id: number;

  @Field()
  @Column("nchar", { name: "name", length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "nameGR", nullable: true, length: 50 })
  nameGr: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "selection1", nullable: true })
  selection1: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "selection2", nullable: true })
  selection2: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "selection3", nullable: true })
  selection3: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "selection4", nullable: true })
  selection4: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "selection5", nullable: true })
  selection5: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "nameGR2", nullable: true, length: 50 })
  nameGr2: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "nameGRP", nullable: true, length: 50 })
  nameGrp: string | null;

  @Field(() => [Coils])
  @OneToMany(() => Coils, (coil) => coil.status)
  coils: Coils[];
}
