import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4902", ["comid"], { unique: true })
@ObjectType()
@Entity("GLPARAMS", { schema: "dbo" })
export class Glparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "ACCOUNTSMASK", nullable: true, length: 25 })
  accountsmask: string | null;

  @Column("varchar", { name: "ACCOUNTPOINT", nullable: true, length: 1 })
  accountpoint: string | null;

  @Column("smallint", { name: "ONLINEACCTRN", default: () => "0" })
  onlineacctrn: number;

  @Column("varchar", { name: "CODECOMPONS", nullable: true, length: 255 })
  codecompons: string | null;

  @Column("smallint", { name: "ALMODE", nullable: true, default: () => "1" })
  almode: number | null;

  @Column("int", { name: "ALDSRID", nullable: true })
  aldsrid: number | null;

  @Column("int", { name: "CASHACCID", nullable: true })
  cashaccid: number | null;

  @Column("smallint", { name: "FTRCHANGE", default: () => "0" })
  ftrchange: number;

  @Column("smallint", { name: "ACECHANGE", default: () => "0" })
  acechange: number;

  @Column("smallint", {
    name: "DELEMPTYLINES",
    nullable: true,
    default: () => "0",
  })
  delemptylines: number | null;

  @Column("int", { name: "ALDLPDSRID", nullable: true })
  aldlpdsrid: number | null;

  @Column("smallint", { name: "ALDLPMODE", nullable: true })
  aldlpmode: number | null;

  @Column("smallint", { name: "CHECKLIMITACC", default: () => "0" })
  checklimitacc: number;

  @Column("smallint", {
    name: "CALCPRORATA",
    nullable: true,
    default: () => "0",
  })
  calcprorata: number | null;

  @Column("float", { name: "PRVPRORATAPERC", nullable: true, precision: 53 })
  prvprorataperc: number | null;

  @Column("smallint", { name: "ROM_CHECKCDCOUNT", default: () => "0" })
  romCheckcdcount: number;

  @Column("int", { name: "DIFDSRID", nullable: true })
  difdsrid: number | null;

  @Column("smallint", { name: "KFASACENUMCHANGE", default: () => "(0)" })
  kfasacenumchange: number;

  @Column("smallint", { name: "KFASACECHANGE", default: () => "(0)" })
  kfasacechange: number;

  @Column("smallint", { name: "KFASFTRCHANGE", default: () => "(0)" })
  kfasftrchange: number;

  @Column("smallint", { name: "KFASAUTONUMACCEVENT", default: () => "(0)" })
  kfasautonumaccevent: number;

  @Column("smallint", { name: "DAYTOTALSGROUPKIND", default: () => "(0)" })
  daytotalsgroupkind: number;

  @Column("smallint", { name: "CHECKUNBALANCED", default: () => "(0)" })
  checkunbalanced: number;

  @Column("varchar", { name: "MASKPERFYEDATA", nullable: true })
  maskperfyedata: string | null;

  @Column("smallint", { name: "NOONLINECONNECTION", default: () => "(0)" })
  noonlineconnection: number;

  @Column("smallint", { name: "MODELSACCOUNTS", default: () => "(0)" })
  modelsaccounts: number;

  @Column("int", { name: "SALESSPLDSRID", nullable: true })
  salesspldsrid: number | null;

  @Column("int", { name: "PURCHSPLDSRID", nullable: true })
  purchspldsrid: number | null;

  @Column("smallint", { name: "USECOMMERCIALAFM", default: () => "(0)" })
  usecommercialafm: number;

  @Column("int", { name: "CORDSRID", nullable: true })
  cordsrid: number | null;

  @Column("int", { name: "COROTHERDSRID", nullable: true })
  corotherdsrid: number | null;

  @OneToOne(() => Company, (company) => company.glparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
