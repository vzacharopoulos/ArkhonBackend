import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sxpcoefhist } from "./Sxpcoefhist.entity";
import { Sxpcoefcategory } from "./Sxpcoefcategory.entity";

@Index("UNI_15060", ["id"], { unique: true })
@Index("UNI_15084", ["salcode"], { unique: true })
@ObjectType()
@Entity("SXPROFITCOEF", { schema: "dbo" })
export class Sxprofitcoef {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "SALCODE", unique: true, length: 10 })
  salcode: string;

  @Field({ nullable: true })
  @Column("float", { name: "SALCOEF", nullable: true, precision: 53 })
  salcoef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PURCODE", nullable: true, length: 10 })
  purcode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PURCOEF", nullable: true, precision: 53 })
  purcoef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PURDESCR", nullable: true, length: 255 })
  purdescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOFFICIAL", default: () => "0" })
  isofficial: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "STOPDATE", nullable: true })
  stopdate: Date | null;

  @Field(() => [Sxpcoefhist], { nullable: true })
  @OneToMany(
    () => Sxpcoefhist,
    (sxpcoefhist) => sxpcoefhist.sxprofitcoefsalcode2
  )
  sxpcoefhists: Sxpcoefhist[];

  @Field({ nullable: true })
  @ManyToOne(
    () => Sxpcoefcategory,
    (sxpcoefcategory) => sxpcoefcategory.sxprofitcoefs
  )
  @JoinColumn([{ name: "SXPCOEFCATEGORYID", referencedColumnName: "codeid" }])
  sxpcoefcategory: Sxpcoefcategory;
}
