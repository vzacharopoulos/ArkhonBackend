import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_5352", ["id"], { unique: true })
@Index("UNIX_1033", ["ftrid"], {})
@Index("UNIX_1034", ["iteid", "trndate"], {})
@Index("UNIX_1060", ["perid", "source"], {})
@Index("UNIX_1109", ["stlid"], {})
@ObjectType()
@Entity("ITEMTRANSEST", { schema: "dbo" })
export class Itemtransest {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID" })
  braid: number;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE", nullable: true, precision: 53 })
  price: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MUID", nullable: true })
  muid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ESTDATE", nullable: true })
  estdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "PARID", nullable: true })
  parid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itemtransests)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
