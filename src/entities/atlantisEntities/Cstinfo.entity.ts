import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1460", ["cstinfo", "csttype", "cstname"], { unique: true })
@ObjectType()
@Entity("CSTINFO", { schema: "dbo" })
export class Cstinfo {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CSTINFO" })
  cstinfo: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CSTTYPE" })
  csttype: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CSTNAME", length: 100 })
  cstname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 100 })
  name: string;

  @Field({ nullable: true })
  @Column("int", { name: "SODEFAULT", nullable: true })
  sodefault: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "UPDUSERNAME", nullable: true, length: 30 })
  updusername: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "SOUPDDATE", nullable: true })
  soupddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CSTGEN", nullable: true })
  cstgen: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEFCOMPANY", nullable: true })
  defcompany: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOQV", nullable: true })
  soqv: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SOPKG", nullable: true, length: 32 })
  sopkg: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOTYPE", nullable: true })
  sotype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOHIDDEN", nullable: true })
  sohidden: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOMODE", nullable: true })
  somode: number | null;
}
