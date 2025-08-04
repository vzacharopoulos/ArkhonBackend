import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Material } from "./Material.entity";
import { Supplier } from "./Supplier.entity";
import { Itsuphist } from "./Itsuphist.entity";

@Index("UNI_2860", ["iteid", "supid"], { unique: true })
@Index("UNIX_1029", ["supid"], {})
@ObjectType()
@Entity("ITEMSUP", { schema: "dbo" })
export class Itemsup {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SUPID" })
  supid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUPCLASS", nullable: true, default: () => "0" })
  supclass: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPITECODE", nullable: true, length: 25 })
  supitecode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CODEDATE", nullable: true })
  codedate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AGGREEDDELDAYS", nullable: true })
  aggreeddeldays: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "AGGREEDPRICE", nullable: true, precision: 53 })
  aggreedprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DISCOUNT1", nullable: true, precision: 53 })
  discount1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DISCOUNT2", nullable: true, precision: 53 })
  discount2: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "LASTBUYSUPPRICE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  lastbuysupprice: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTBUYSUPPRICEUPDATE", nullable: true })
  lastbuysuppriceupdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPITEDESCR", nullable: true, length: 50 })
  supitedescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPCOLOR", nullable: true })
  supcolor: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPSIZE", nullable: true })
  supsize: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itemsups, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @ManyToOne(() => Supplier, (supplier) => supplier.itemsups, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "SUPID", referencedColumnName: "id" }])
  sup: Supplier;

  @Field(() => [Itsuphist], { nullable: true })
  @OneToMany(() => Itsuphist, (itsuphist) => itsuphist.itemsup)
  itsuphists: Itsuphist[];
}
