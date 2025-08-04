import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Presource } from "./Presource.entity";

@Index("UNI_3828", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CENTERCOST", { schema: "dbo" })
export class Centercost {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;



  @Field(() => [Presource], { nullable: true })
  @OneToMany(() => Presource, (presource) => presource.centercost)
  presources: Presource[];
}
