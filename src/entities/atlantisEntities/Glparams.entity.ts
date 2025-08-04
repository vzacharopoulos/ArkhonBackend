import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4902", ["comid"], { unique: true })
@ObjectType()
@Entity("GLPARAMS", { schema: "dbo" })
export class Glparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTSMASK", nullable: true, length: 25 })
  accountsmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTPOINT", nullable: true, length: 1 })
  accountpoint: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ONLINEACCTRN", default: () => "0" })
  onlineacctrn: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODECOMPONS", nullable: true, length: 255 })
  codecompons: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALMODE", nullable: true, default: () => "1" })
  almode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ALDSRID", nullable: true })
  aldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CASHACCID", nullable: true })
  cashaccid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FTRCHANGE", default: () => "0" })
  ftrchange: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACECHANGE", default: () => "0" })
  acechange: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DELEMPTYLINES",
    nullable: true,
    default: () => "0",
  })
  delemptylines: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ALDLPDSRID", nullable: true })
  aldlpdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALDLPMODE", nullable: true })
  aldlpmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHECKLIMITACC", default: () => "0" })
  checklimitacc: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CALCPRORATA",
    nullable: true,
    default: () => "0",
  })
  calcprorata: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRVPRORATAPERC", nullable: true, precision: 53 })
  prvprorataperc: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ROM_CHECKCDCOUNT", default: () => "0" })
  romCheckcdcount: number;

  @Field({ nullable: true })
  @Column("int", { name: "DIFDSRID", nullable: true })
  difdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KFASACENUMCHANGE", default: () => "(0)" })
  kfasacenumchange: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KFASACECHANGE", default: () => "(0)" })
  kfasacechange: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KFASFTRCHANGE", default: () => "(0)" })
  kfasftrchange: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KFASAUTONUMACCEVENT", default: () => "(0)" })
  kfasautonumaccevent: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYTOTALSGROUPKIND", default: () => "(0)" })
  daytotalsgroupkind: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHECKUNBALANCED", default: () => "(0)" })
  checkunbalanced: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MASKPERFYEDATA", nullable: true })
  maskperfyedata: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOONLINECONNECTION", default: () => "(0)" })
  noonlineconnection: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MODELSACCOUNTS", default: () => "(0)" })
  modelsaccounts: number;

  @Field({ nullable: true })
  @Column("int", { name: "SALESSPLDSRID", nullable: true })
  salesspldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PURCHSPLDSRID", nullable: true })
  purchspldsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USECOMMERCIALAFM", default: () => "(0)" })
  usecommercialafm: number;

  @Field({ nullable: true })
  @Column("int", { name: "CORDSRID", nullable: true })
  cordsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COROTHERDSRID", nullable: true })
  corotherdsrid: number | null;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.glparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
