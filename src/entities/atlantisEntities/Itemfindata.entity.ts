import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2904", ["masterid", "comid"], { unique: true })
@ObjectType()
@Entity("ITEMFINDATA", { schema: "dbo" })
export class Itemfindata {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("float", { name: "FIFOVALUE", nullable: true, precision: 53 })
  fifovalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LIFOVALUE", nullable: true, precision: 53 })
  lifovalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "KMTVALUE", nullable: true, precision: 53 })
  kmtvalue: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CALCDATE", nullable: true })
  calcdate: Date | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value1: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value10: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value2: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE3",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value3: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE4",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value4: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value5: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value6: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value7: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value8: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value9: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value11: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value12: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value13: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value14: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value15: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value16: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COSTVALUE", nullable: true, precision: 53 })
  costvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "AVGREMAGE", nullable: true, precision: 53 })
  avgremage: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "AVGSTORETIME", nullable: true, precision: 53 })
  avgstoretime: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TRSPEED", nullable: true, precision: 53 })
  trspeed: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.itemfindata, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Material;
}
