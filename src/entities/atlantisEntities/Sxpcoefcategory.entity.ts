import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Sxprofitcoef } from "./Sxprofitcoef.entity";

@Index("UNI_15404", ["codeid"], { unique: true })
@ObjectType()
@Entity("SXPCOEFCATEGORY", { schema: "dbo" })
export class Sxpcoefcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOFFICIAL", default: () => "0" })
  isofficial: number;

  @Field(() => [Sxprofitcoef], { nullable: true })
  @OneToMany(() => Sxprofitcoef, (sxprofitcoef) => sxprofitcoef.sxpcoefcategory)
  sxprofitcoefs: Sxprofitcoef[];
}
