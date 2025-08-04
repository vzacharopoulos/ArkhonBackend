import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accdiffmodellines } from "./Accdiffmodellines.entity";

@Index("UNI_SX15466", ["id"], { unique: true })
@Index("UNI_SX15488", ["code"], { unique: true })
@ObjectType()
@Entity("ACCDIFFMODEL", { schema: "dbo" })
export class Accdiffmodel {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", length: 100 })
  description: string;

  @Field({ nullable: true })
  @Column("int", { name: "DIFFGROUP", nullable: true })
  diffgroup: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EMPLOYEENUM", nullable: true })
  employeenum: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MOBILENUM", nullable: true })
  mobilenum: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AKIND", default: () => "(1)" })
  akind: number;

  @Field(() => [Accdiffmodellines], { nullable: true })
  @OneToMany(
    () => Accdiffmodellines,
    (accdiffmodellines) => accdiffmodellines.accdiffmodel
  )
  accdiffmodellines: Accdiffmodellines[];


}
