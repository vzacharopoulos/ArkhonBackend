import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2888", ["masterid", "comid", "stoid"], { unique: true })
@ObjectType()
@Entity("STOREFINDATA", { schema: "dbo" })
export class Storefindata {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", precision: 53 })
  secondaryqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPQTY", nullable: true, precision: 53 })
  prospqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIEDQTY", nullable: true, precision: 53 })
  tiedqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPSECQTY", nullable: true, precision: 53 })
  prospsecqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIEDSECQTY", nullable: true, precision: 53 })
  tiedsecqty: number | null;

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
  @Column("float", { name: "TIEDQTY1", nullable: true, precision: 53 })
  tiedqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIEDQTY2", nullable: true, precision: 53 })
  tiedqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIEDQTY3", nullable: true, precision: 53 })
  tiedqty3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TIEDQTY4", nullable: true, precision: 53 })
  tiedqty4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPQTY1", nullable: true, precision: 53 })
  prospqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPQTY2", nullable: true, precision: 53 })
  prospqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPQTY3", nullable: true, precision: 53 })
  prospqty3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PROSPQTY4", nullable: true, precision: 53 })
  prospqty4: number | null;

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
  @Column("datetime", { name: "LASTEXPORTDATE", nullable: true })
  lastexportdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTIMPORTDATE", nullable: true })
  lastimportdate: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.storefindata, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Material;
}
