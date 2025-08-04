import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Asset } from "./Asset.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5620", ["comid", "codeid"], { unique: true })
@Entity("ASSETCATEGORY", { schema: "dbo" })
export class Assetcategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF1", nullable: true, precision: 53 })
  deprcoef1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF2", nullable: true, precision: 53 })
  deprcoef2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF3", nullable: true, precision: 53 })
  deprcoef3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF4", nullable: true, precision: 53 })
  deprcoef4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPRCOEF5", nullable: true, precision: 53 })
  deprcoef5: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEPRMODE" })
  deprmode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLASSET", nullable: true, length: 25 })
  glasset: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPR1", nullable: true, length: 25 })
  gldepr1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPR2", nullable: true, length: 25 })
  gldepr2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPR3", nullable: true, length: 25 })
  gldepr3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPR4", nullable: true, length: 25 })
  gldepr4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPR5", nullable: true, length: 25 })
  gldepr5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPRED1", nullable: true, length: 25 })
  gldepred1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPRED2", nullable: true, length: 25 })
  gldepred2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPRED3", nullable: true, length: 25 })
  gldepred3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPRED4", nullable: true, length: 25 })
  gldepred4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDEPRED5", nullable: true, length: 25 })
  gldepred5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLDIFFRECALC", nullable: true, length: 25 })
  gldiffrecalc: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLEARNING", nullable: true, length: 25 })
  glearning: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLFUND", nullable: true, length: 25 })
  glfund: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLLOSS", nullable: true, length: 25 })
  glloss: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLPROFIT", nullable: true, length: 25 })
  glprofit: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLTAXFREEVALUE", nullable: true, length: 25 })
  gltaxfreevalue: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PROFITGUSID", nullable: true })
  profitgusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LOSSGUSID", nullable: true })
  lossgusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CROSSDEPRGUSID", nullable: true })
  crossdeprgusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "REJUSTGUSID", nullable: true })
  rejustgusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLPRODUCTION", nullable: true, length: 25 })
  glproduction: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ELPFAIRVALUELOSS", nullable: true, length: 25 })
  elpfairvalueloss: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ELPIMPAIRMENT", nullable: true, length: 25 })
  elpimpairment: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ELPUNIMPAIRED", nullable: true, length: 25 })
  elpunimpaired: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "ELPIMPAIRMENTINVERSION",
    nullable: true,
    length: 25,
  })
  elpimpairmentinversion: string | null;

  @Field(() => [Asset], { nullable: true })
  @OneToMany(() => Asset, (asset) => asset.assetcategory)
  assets: Asset[];

  @Field(() => [Asset], { nullable: true })
  @OneToMany(() => Asset, (asset) => asset.assetcategory2)
  assets2: Asset[];
}
