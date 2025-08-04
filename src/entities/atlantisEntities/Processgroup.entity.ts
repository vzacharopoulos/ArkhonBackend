import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_6368", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("PROCESSGROUP", { schema: "dbo" })
export class Processgroup {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.processgroup
  )
  storetradelines: Storetradelines[];

}
