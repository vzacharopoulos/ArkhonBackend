import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";
import { Storetrade } from "./Storetrade.entity";
import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_2874", ["id"], { unique: true })
@Index("UNI_2876", ["iteid", "code"], { unique: true })
@ObjectType()
@Entity("PARTITION", { schema: "dbo" })
export class Partition {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", unique: true })
  iteid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "INPUTDATE", nullable: true })
  inputdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SALEABLE", nullable: true, default: () => "1" })
  saleable: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BOUNDQTY1", nullable: true, precision: 53 })
  boundqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "BOUNDQTY2", nullable: true, precision: 53 })
  boundqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPECTEDQTY1", nullable: true, precision: 53 })
  expectedqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPECTEDQTY2", nullable: true, precision: 53 })
  expectedqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INPUTQTY1", nullable: true, precision: 53 })
  inputqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INPUTQTY2", nullable: true, precision: 53 })
  inputqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OUTPUTQTY1", nullable: true, precision: 53 })
  outputqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OUTPUTQTY2", nullable: true, precision: 53 })
  outputqty2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY1", nullable: true, precision: 53 })
  initqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY2", nullable: true, precision: 53 })
  initqty2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "ESTQTY1", nullable: true, precision: 53 })
  estqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ESTQTY2", nullable: true, precision: 53 })
  estqty2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCSALMASK", nullable: true, length: 25 })
  accsalmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCPURMASK", nullable: true, length: 25 })
  accpurmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PURCHABLE", nullable: true, default: () => "1" })
  purchable: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CONSUMABLE",
    nullable: true,
    default: () => "(1)",
  })
  consumable: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "SPECIALDATE", nullable: true })
  specialdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "COUNTRYOFORIGIN", nullable: true })
  countryoforigin: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LOTIFYQTYMODE", nullable: true })
  lotifyqtymode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LPACKAGEVOLUME", nullable: true })
  lpackagevolume: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.partitions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.par)
  storetrades: Storetrade[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.par)
  storetradelines: Storetradelines[];
}
