import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Itecolor } from "./Itecolor.entity";

@Index("UNI_3478", ["ftrid", "stlid", "colorcode"], { unique: true })
@ObjectType()
@Entity("STORECOLORSIZE", { schema: "dbo" })
export class Storecolorsize {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "STLID" })
  stlid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE1", nullable: true, precision: 53 })
  size1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE2", nullable: true, precision: 53 })
  size2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE3", nullable: true, precision: 53 })
  size3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE4", nullable: true, precision: 53 })
  size4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE5", nullable: true, precision: 53 })
  size5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE6", nullable: true, precision: 53 })
  size6: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE7", nullable: true, precision: 53 })
  size7: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE8", nullable: true, precision: 53 })
  size8: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE9", nullable: true, precision: 53 })
  size9: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE10", nullable: true, precision: 53 })
  size10: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE11", nullable: true, precision: 53 })
  size11: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE12", nullable: true, precision: 53 })
  size12: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE13", nullable: true, precision: 53 })
  size13: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE14", nullable: true, precision: 53 })
  size14: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE15", nullable: true, precision: 53 })
  size15: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE16", nullable: true, precision: 53 })
  size16: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE17", nullable: true, precision: 53 })
  size17: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE18", nullable: true, precision: 53 })
  size18: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE19", nullable: true, precision: 53 })
  size19: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SIZE20", nullable: true, precision: 53 })
  size20: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COLINENO", nullable: true })
  colineno: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE1", nullable: true, precision: 53 })
  price1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE2", nullable: true, precision: 53 })
  price2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE3", nullable: true, precision: 53 })
  price3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE4", nullable: true, precision: 53 })
  price4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE5", nullable: true, precision: 53 })
  price5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE6", nullable: true, precision: 53 })
  price6: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE7", nullable: true, precision: 53 })
  price7: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE8", nullable: true, precision: 53 })
  price8: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE9", nullable: true, precision: 53 })
  price9: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE10", nullable: true, precision: 53 })
  price10: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE11", nullable: true, precision: 53 })
  price11: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE12", nullable: true, precision: 53 })
  price12: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE13", nullable: true, precision: 53 })
  price13: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE14", nullable: true, precision: 53 })
  price14: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE15", nullable: true, precision: 53 })
  price15: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE16", nullable: true, precision: 53 })
  price16: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE17", nullable: true, precision: 53 })
  price17: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE18", nullable: true, precision: 53 })
  price18: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE19", nullable: true, precision: 53 })
  price19: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE20", nullable: true, precision: 53 })
  price20: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Itecolor, (itecolor) => itecolor.storecolorsizes)
  @JoinColumn([
    { name: "ITEID", referencedColumnName: "iteid" },
    { name: "COLORCODE", referencedColumnName: "colorcode" },
  ])
  itecolor: Itecolor;
}
