import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_3810_1", ["iteid", "stoid", "bincode", "parid"], { unique: true })
@ObjectType()
@Entity("DETAILITEMQTYS", { schema: "dbo" })
export class Detailitemqtys {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Field({ nullable: true })
  @Column("varchar", {
    primary: true,
    name: "BINCODE",
    length: 25,
    default: () => "''",
  })
  bincode: string;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PARID", default: () => "0" })
  parid: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "INITQTY1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  initqty1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "INITQTY2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  initqty2: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.detailitemqtys)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
