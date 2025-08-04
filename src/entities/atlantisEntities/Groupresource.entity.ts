import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Presource } from "./Presource.entity";

@Index("UNI_5554", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("GROUPRESOURCE", { schema: "dbo" })
export class Groupresource {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Presource], { nullable: true })
  @OneToMany(() => Presource, (presource) => presource.groupresource)
  presources: Presource[];
}
