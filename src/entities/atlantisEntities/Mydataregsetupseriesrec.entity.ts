import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18278", ["aadecode"], { unique: true })
@ObjectType()
@Entity("MYDATAREGSETUPSERIESREC", { schema: "dbo" })
export class Mydataregsetupseriesrec {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "AADECODE", length: 20 })
  aadecode: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 70 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DCISSUSER", nullable: true })
  dcissuser: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SINGISSUER", nullable: true })
  singissuer: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DCCOUNTERPART", nullable: true })
  dccounterpart: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SINGCOUNTERPART", nullable: true })
  singcounterpart: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CLASSISSUER", nullable: true })
  classissuer: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DSRIDISSUSERFLAG", nullable: true })
  dsridissuserflag: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DSRIDCOUNTERPARTFLAG", nullable: true })
  dsridcounterpartflag: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ENTITYSERIES", nullable: true, length: 15 })
  entityseries: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ENTITYSERIESTRADER", nullable: true, length: 15 })
  entityseriestrader: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "THIRDPARTYSERIES", nullable: true, length: 15 })
  thirdpartyseries: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "THIRDPARTYSERIESTRADER",
    nullable: true,
    length: 15,
  })
  thirdpartyseriestrader: string | null;
}
