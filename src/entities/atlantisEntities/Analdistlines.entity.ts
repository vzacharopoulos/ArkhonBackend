import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Analdist } from "./Analdist.entity";

@Index("UNI_708", ["comid", "adsid", "linenum"], { unique: true })
@ObjectType()
@Entity("ANALDISTLINES", { schema: "dbo" })
export class Analdistlines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ADSID" })
  adsid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID" })
  accid: number;

  @Field({ nullable: true })
  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @Field({ nullable: true })
  @ManyToOne(() => Analdist, (analdist) => analdist.analdistlines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ADSID", referencedColumnName: "id" }])
  ads: Analdist;
}
