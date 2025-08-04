import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ITECOLSIZEPRICE_PK", ["iteid", "comid", "colorcode", "pricetype"], {
  unique: true,
})
@ObjectType()
@Entity("KEF_ITECOLSIZEPRICE", { schema: "dbo" })
export class KefItecolsizeprice {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PRICETYPE" })
  pricetype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

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
}
