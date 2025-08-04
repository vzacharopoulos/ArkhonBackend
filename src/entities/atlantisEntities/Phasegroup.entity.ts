import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Specification } from "./Specification.entity";
import { Storetrade } from "./Storetrade.entity";


@Index("UNI_5520", ["comid", "codeid"], { unique: true })
@Index("UNI_5522", ["id"], { unique: true })
@ObjectType()
@Entity("PHASEGROUP", { schema: "dbo" })
export class Phasegroup {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;


  @Field(() => [Specification], { nullable: true })
  @OneToMany(() => Specification, (specification) => specification.phasegroup)
  specifications: Specification[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.phasegroup)
  storetrades: Storetrade[];




}
