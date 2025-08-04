import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Natinistorecolorsize } from "./Natinistorecolorsize.entity";

@Index(
  "UNI_5646_2",
  ["comid", "stoid", "fyeid", "fipid", "iteid", "bincode", "parid"],
  { unique: true }
)
@ObjectType()
@Entity("NATINISTORE", { schema: "dbo" })
export class Natinistore {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("varchar", {
    primary: true,
    name: "BINCODE",
    length: 25,
    default: () => "'*'",
  })
  bincode: string;

  @Field({ nullable: true })
  @Column("float", { name: "REMPRQTY", nullable: true, precision: 53 })
  remprqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REMSECQTY", nullable: true, precision: 53 })
  remsecqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "NEWPRQTY", nullable: true, precision: 53 })
  newprqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "NEWSECQTY", nullable: true, precision: 53 })
  newsecqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CONSUMPTIONQTY", nullable: true, precision: 53 })
  consumptionqty: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "INSDATE", nullable: true })
  insdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PARID", default: () => "0" })
  parid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPDATE", nullable: true })
  expdate: Date | null;

  @Field(() => [Natinistorecolorsize], { nullable: true })
  @OneToMany(
    () => Natinistorecolorsize,
    (natinistorecolorsize) => natinistorecolorsize.natinistore
  )
  natinistorecolorsizes: Natinistorecolorsize[];
}
