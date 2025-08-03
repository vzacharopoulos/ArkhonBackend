import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4908", ["comid"], { unique: true })
@ObjectType()
@Entity("SUPPARAMS", { schema: "dbo" })
export class Supparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "SUPPLIERCODEMASK", nullable: true, length: 25 })
  suppliercodemask: string | null;

  @Column("varchar", { name: "ACCOUNTMASKDEF", nullable: true, length: 25 })
  accountmaskdef: string | null;

  @Column("int", { name: "CNTIDDEF", nullable: true })
  cntiddef: number | null;

  @Column("int", { name: "CURIDDEF", nullable: true })
  curiddef: number | null;

  @Column("varchar", { name: "SUPPLIERCODEMEMO", nullable: true })
  suppliercodememo: string | null;

  @Column("smallint", { name: "SUPPLIERCODEMODE", default: () => "0" })
  suppliercodemode: number;

  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Column("smallint", { name: "FPASTATUSDEF", default: () => "0" })
  fpastatusdef: number;

  @Column("int", { name: "GEOIDDEF", nullable: true })
  geoiddef: number | null;

  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Column("int", { name: "PTRIDDEF", nullable: true })
  ptriddef: number | null;

  @Column("int", { name: "SHVIDDEF", nullable: true })
  shviddef: number | null;

  @Column("int", { name: "EQUIVPLDSRID", nullable: true })
  equivpldsrid: number | null;

  @Column("int", { name: "EQUIVMNDSRID", nullable: true })
  equivmndsrid: number | null;

  @Column("int", { name: "EQUIVMINUSID", nullable: true })
  equivminusid: number | null;

  @Column("int", { name: "EQUIVPLUSID", nullable: true })
  equivplusid: number | null;

  @Column("smallint", { name: "EQUIVCHECKMODE", default: () => "0" })
  equivcheckmode: number;

  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Column("varchar", { name: "SUPMATUREDESCR1", nullable: true, length: 30 })
  supmaturedescr1: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR2", nullable: true, length: 30 })
  supmaturedescr2: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR3", nullable: true, length: 30 })
  supmaturedescr3: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR4", nullable: true, length: 30 })
  supmaturedescr4: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR5", nullable: true, length: 30 })
  supmaturedescr5: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR6", nullable: true, length: 30 })
  supmaturedescr6: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR7", nullable: true, length: 30 })
  supmaturedescr7: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR8", nullable: true, length: 30 })
  supmaturedescr8: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR9", nullable: true, length: 30 })
  supmaturedescr9: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR10", nullable: true, length: 30 })
  supmaturedescr10: string | null;

  @Column("int", { name: "SUPMATUREFROM1", nullable: true })
  supmaturefrom1: number | null;

  @Column("int", { name: "SUPMATUREFROM2", nullable: true })
  supmaturefrom2: number | null;

  @Column("int", { name: "SUPMATUREFROM3", nullable: true })
  supmaturefrom3: number | null;

  @Column("int", { name: "SUPMATUREFROM4", nullable: true })
  supmaturefrom4: number | null;

  @Column("int", { name: "SUPMATUREFROM5", nullable: true })
  supmaturefrom5: number | null;

  @Column("int", { name: "SUPMATUREFROM6", nullable: true })
  supmaturefrom6: number | null;

  @Column("int", { name: "SUPMATUREFROM7", nullable: true })
  supmaturefrom7: number | null;

  @Column("int", { name: "SUPMATUREFROM8", nullable: true })
  supmaturefrom8: number | null;

  @Column("int", { name: "SUPMATUREFROM9", nullable: true })
  supmaturefrom9: number | null;

  @Column("int", { name: "SUPMATUREFROM10", nullable: true })
  supmaturefrom10: number | null;

  @Column("int", { name: "SUPMATURETO1", nullable: true })
  supmatureto1: number | null;

  @Column("int", { name: "SUPMATURETO2", nullable: true })
  supmatureto2: number | null;

  @Column("int", { name: "SUPMATURETO3", nullable: true })
  supmatureto3: number | null;

  @Column("int", { name: "SUPMATURETO4", nullable: true })
  supmatureto4: number | null;

  @Column("int", { name: "SUPMATURETO5", nullable: true })
  supmatureto5: number | null;

  @Column("int", { name: "SUPMATURETO6", nullable: true })
  supmatureto6: number | null;

  @Column("int", { name: "SUPMATURETO7", nullable: true })
  supmatureto7: number | null;

  @Column("int", { name: "SUPMATURETO8", nullable: true })
  supmatureto8: number | null;

  @Column("int", { name: "SUPMATURETO9", nullable: true })
  supmatureto9: number | null;

  @Column("int", { name: "SUPMATURETO10", nullable: true })
  supmatureto10: number | null;

  @Column("varchar", { name: "SUPMATUREDESCR11", nullable: true, length: 30 })
  supmaturedescr11: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR12", nullable: true, length: 30 })
  supmaturedescr12: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR13", nullable: true, length: 30 })
  supmaturedescr13: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR14", nullable: true, length: 30 })
  supmaturedescr14: string | null;

  @Column("varchar", { name: "SUPMATUREDESCR15", nullable: true, length: 30 })
  supmaturedescr15: string | null;

  @Column("int", { name: "SUPMATUREFROM11", nullable: true })
  supmaturefrom11: number | null;

  @Column("int", { name: "SUPMATUREFROM12", nullable: true })
  supmaturefrom12: number | null;

  @Column("int", { name: "SUPMATUREFROM13", nullable: true })
  supmaturefrom13: number | null;

  @Column("int", { name: "SUPMATUREFROM14", nullable: true })
  supmaturefrom14: number | null;

  @Column("int", { name: "SUPMATUREFROM15", nullable: true })
  supmaturefrom15: number | null;

  @Column("int", { name: "SUPMATURETO11", nullable: true })
  supmatureto11: number | null;

  @Column("int", { name: "SUPMATURETO12", nullable: true })
  supmatureto12: number | null;

  @Column("int", { name: "SUPMATURETO13", nullable: true })
  supmatureto13: number | null;

  @Column("int", { name: "SUPMATURETO14", nullable: true })
  supmatureto14: number | null;

  @Column("int", { name: "SUPMATURETO15", nullable: true })
  supmatureto15: number | null;

  @Column("varchar", { name: "TITLE1", nullable: true, length: 25 })
  title1: string | null;

  @Column("varchar", { name: "TITLE2", nullable: true, length: 25 })
  title2: string | null;

  @Column("varchar", { name: "TITLE3", nullable: true, length: 25 })
  title3: string | null;

  @Column("varchar", { name: "TITLE4", nullable: true, length: 25 })
  title4: string | null;

  @Column("varchar", { name: "TITLE5", nullable: true, length: 25 })
  title5: string | null;

  @Column("varchar", { name: "TITLE6", nullable: true, length: 25 })
  title6: string | null;

  @Column("varchar", { name: "TITLE7", nullable: true, length: 25 })
  title7: string | null;

  @Column("varchar", { name: "TITLE8", nullable: true, length: 25 })
  title8: string | null;

  @Column("varchar", { name: "TITLE9", nullable: true, length: 25 })
  title9: string | null;

  @Column("varchar", { name: "TITLE10", nullable: true, length: 25 })
  title10: string | null;

  @Column("varchar", { name: "TITLE11", nullable: true, length: 25 })
  title11: string | null;

  @Column("varchar", { name: "TITLE12", nullable: true, length: 25 })
  title12: string | null;

  @Column("varchar", { name: "TITLE13", nullable: true, length: 25 })
  title13: string | null;

  @Column("varchar", { name: "TITLE14", nullable: true, length: 25 })
  title14: string | null;

  @Column("varchar", { name: "TITLE15", nullable: true, length: 25 })
  title15: string | null;

  @Column("varchar", { name: "TITLE16", nullable: true, length: 25 })
  title16: string | null;

  @Column("varchar", { name: "SUPOCPIDS", nullable: true })
  supocpids: string | null;

  @Column("int", { name: "OCPIDDEF", nullable: true })
  ocpiddef: number | null;

  @Column("smallint", { name: "OMODEDEF", default: () => "0" })
  omodedef: number;

  @Column("smallint", { name: "NOSYNCRELSUP", default: () => "0" })
  nosyncrelsup: number;

  @Column("float", { name: "SUPMATURECOEF0", nullable: true, precision: 53 })
  supmaturecoef0: number | null;

  @Column("float", { name: "SUPMATURECOEF1", nullable: true, precision: 53 })
  supmaturecoef1: number | null;

  @Column("float", { name: "SUPMATURECOEF2", nullable: true, precision: 53 })
  supmaturecoef2: number | null;

  @Column("float", { name: "SUPMATURECOEF3", nullable: true, precision: 53 })
  supmaturecoef3: number | null;

  @Column("float", { name: "SUPMATURECOEF4", nullable: true, precision: 53 })
  supmaturecoef4: number | null;

  @Column("float", { name: "SUPMATURECOEF5", nullable: true, precision: 53 })
  supmaturecoef5: number | null;

  @Column("float", { name: "SUPMATURECOEF6", nullable: true, precision: 53 })
  supmaturecoef6: number | null;

  @Column("float", { name: "SUPMATURECOEF7", nullable: true, precision: 53 })
  supmaturecoef7: number | null;

  @Column("float", { name: "SUPMATURECOEF8", nullable: true, precision: 53 })
  supmaturecoef8: number | null;

  @Column("float", { name: "SUPMATURECOEF9", nullable: true, precision: 53 })
  supmaturecoef9: number | null;

  @Column("float", { name: "SUPMATURECOEF10", nullable: true, precision: 53 })
  supmaturecoef10: number | null;

  @Column("float", { name: "SUPMATURECOEF11", nullable: true, precision: 53 })
  supmaturecoef11: number | null;

  @Column("float", { name: "SUPMATURECOEF12", nullable: true, precision: 53 })
  supmaturecoef12: number | null;

  @Column("float", { name: "SUPMATURECOEF13", nullable: true, precision: 53 })
  supmaturecoef13: number | null;

  @Column("float", { name: "SUPMATURECOEF14", nullable: true, precision: 53 })
  supmaturecoef14: number | null;

  @Column("float", { name: "SUPMATURECOEF15", nullable: true, precision: 53 })
  supmaturecoef15: number | null;

  @Column("float", { name: "SUPMATURECOEF100", nullable: true, precision: 53 })
  supmaturecoef100: number | null;

  @Column("smallint", {
    name: "SEARCHSHOWREMAIN",
    nullable: true,
    default: () => "(0)",
  })
  searchshowremain: number | null;

  @Column("smallint", { name: "SUPFUNDTRDDUPL", default: () => "(1)" })
  supfundtrddupl: number;

  @Column("smallint", { name: "BANKACCSUPTRDDUPL", default: () => "(1)" })
  bankaccsuptrddupl: number;

  @Column("smallint", { name: "SUPSUPTRDDUPL", default: () => "(1)" })
  supsuptrddupl: number;

  @Column("smallint", { name: "SUPFINTRDDUPL", default: () => "(1)" })
  supfintrddupl: number;

  @Column("int", { name: "SVDSRID", nullable: true })
  svdsrid: number | null;

  @Column("int", { name: "BANKSUPDSRID", nullable: true })
  banksupdsrid: number | null;

  @OneToOne(() => Company, (company) => company.supparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
