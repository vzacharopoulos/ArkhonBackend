import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Assettrans } from "./Assettrans.entity";

@Index("UNI_5892", ["codeid"], { unique: true })
@ObjectType()
@Entity("ASSETREADJUST", { schema: "dbo" })
export class Assetreadjust {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Field(() => [Assettrans], { nullable: true })
  @OneToMany(() => Assettrans, (assettrans) => assettrans.arj)
  assettrans: Assettrans[];
}
