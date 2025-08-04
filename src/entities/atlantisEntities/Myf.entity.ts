import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MyfData } from "./MyfData.entity";

@Index("UNI_1438", ["id"], { unique: true })
@ObjectType()
@Entity("MYF", { schema: "dbo" })
export class Myf {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEAR" })
  fyear: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FMONTH" })
  fmonth: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 100 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", length: 15 })
  afm: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "BRANHNO", nullable: true, length: 10 })
  branhno: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALTYPE", default: () => "(0)" })
  valtype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "AKIND", default: () => "(0)" })
  akind: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISLOCKED", default: () => "(0)" })
  islocked: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE" })
  fromdate: Date;

  @Field({ nullable: true })
  @Column("datetime", { name: "TODATE" })
  todate: Date;

  @Field({ nullable: true })
  @Column("datetime", { name: "GIVEDATE", nullable: true })
  givedate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GSISRESPONSE", nullable: true })
  gsisresponse: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GSISRESPONSEID", nullable: true })
  gsisresponseid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "AA", nullable: true })
  aa: number | null;

  @Field(() => [MyfData], { nullable: true })
  @OneToMany(() => MyfData, (myfData) => myfData.myf)
  myfData: MyfData[];
}
