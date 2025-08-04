import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4906", ["comid"], { unique: true })
@ObjectType()
@Entity("CUSTPARAMS", { schema: "dbo" })
export class Custparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CUSTOMERCODEMODE", default: () => "0" })
  customercodemode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTOMERCODEMASK", nullable: true, length: 25 })
  customercodemask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTOMERCODEMEMO", nullable: true })
  customercodememo: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTMASKDEF", nullable: true, length: 25 })
  accountmaskdef: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FPASTATUSDEF", default: () => "0" })
  fpastatusdef: number;

  @Field({ nullable: true })
  @Column("int", { name: "SHVIDDEF", nullable: true })
  shviddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GEOIDDEF", nullable: true })
  geoiddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRCIDDEF", nullable: true })
  prciddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PTRIDDEF", nullable: true })
  ptriddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTIDDEF", nullable: true })
  cntiddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURIDDEF", nullable: true })
  curiddef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RLBIDDEF", nullable: true })
  rlbiddef: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EQUIVCHECKMODE", default: () => "0" })
  equivcheckmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVPLDSRID", nullable: true })
  equivpldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVMNDSRID", nullable: true })
  equivmndsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVPLUSID", nullable: true })
  equivplusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVMINUSID", nullable: true })
  equivminusid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITLIMITSMODE", default: () => "0" })
  creditlimitsmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITCHECKMODE", default: () => "0" })
  creditcheckmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CONTINUITY", default: () => "0" })
  continuity: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MSG", nullable: true, length: 50 })
  msg: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR1", nullable: true, length: 30 })
  custmaturedescr1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR2", nullable: true, length: 30 })
  custmaturedescr2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR3", nullable: true, length: 30 })
  custmaturedescr3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR4", nullable: true, length: 30 })
  custmaturedescr4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR5", nullable: true, length: 30 })
  custmaturedescr5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR6", nullable: true, length: 30 })
  custmaturedescr6: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR7", nullable: true, length: 30 })
  custmaturedescr7: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR8", nullable: true, length: 30 })
  custmaturedescr8: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR9", nullable: true, length: 30 })
  custmaturedescr9: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR10", nullable: true, length: 30 })
  custmaturedescr10: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM1", nullable: true })
  custmaturefrom1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM2", nullable: true })
  custmaturefrom2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM3", nullable: true })
  custmaturefrom3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM4", nullable: true })
  custmaturefrom4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM5", nullable: true })
  custmaturefrom5: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM6", nullable: true })
  custmaturefrom6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM7", nullable: true })
  custmaturefrom7: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM8", nullable: true })
  custmaturefrom8: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM9", nullable: true })
  custmaturefrom9: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM10", nullable: true })
  custmaturefrom10: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO1", nullable: true })
  custmatureto1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO2", nullable: true })
  custmatureto2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO3", nullable: true })
  custmatureto3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO4", nullable: true })
  custmatureto4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO5", nullable: true })
  custmatureto5: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO6", nullable: true })
  custmatureto6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO7", nullable: true })
  custmatureto7: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO8", nullable: true })
  custmatureto8: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO9", nullable: true })
  custmatureto9: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO10", nullable: true })
  custmatureto10: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR11", nullable: true, length: 30 })
  custmaturedescr11: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR12", nullable: true, length: 30 })
  custmaturedescr12: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR13", nullable: true, length: 30 })
  custmaturedescr13: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR14", nullable: true, length: 30 })
  custmaturedescr14: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTMATUREDESCR15", nullable: true, length: 30 })
  custmaturedescr15: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM11", nullable: true })
  custmaturefrom11: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM12", nullable: true })
  custmaturefrom12: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM13", nullable: true })
  custmaturefrom13: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM14", nullable: true })
  custmaturefrom14: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATUREFROM15", nullable: true })
  custmaturefrom15: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO11", nullable: true })
  custmatureto11: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO12", nullable: true })
  custmatureto12: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO13", nullable: true })
  custmatureto13: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO14", nullable: true })
  custmatureto14: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTMATURETO15", nullable: true })
  custmatureto15: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BLSOPBAL", nullable: true })
  blsopbal: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE1", nullable: true, length: 25 })
  title1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE2", nullable: true, length: 25 })
  title2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE3", nullable: true, length: 25 })
  title3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE4", nullable: true, length: 25 })
  title4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE5", nullable: true, length: 25 })
  title5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE6", nullable: true, length: 25 })
  title6: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE7", nullable: true, length: 25 })
  title7: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE8", nullable: true, length: 25 })
  title8: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE9", nullable: true, length: 25 })
  title9: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE10", nullable: true, length: 25 })
  title10: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE11", nullable: true, length: 25 })
  title11: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE12", nullable: true, length: 25 })
  title12: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE13", nullable: true, length: 25 })
  title13: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE14", nullable: true, length: 25 })
  title14: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE15", nullable: true, length: 25 })
  title15: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE16", nullable: true, length: 25 })
  title16: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLINST", nullable: true, default: () => "0" })
  billinst: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSOCPIDS", nullable: true })
  cusocpids: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RELIABILITYMESS", default: () => "0" })
  reliabilitymess: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITCHECKGROUPMODE", nullable: true })
  creditcheckgroupmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OCPIDDEF", nullable: true })
  ocpiddef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BILLSTATES", nullable: true, length: 255 })
  billstates: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OMODEDEF", default: () => "0" })
  omodedef: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SEARCHSHOWREMAIN",
    nullable: true,
    default: () => "0",
  })
  searchshowremain: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NPGIDDEF", nullable: true })
  npgiddef: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOCTITLEMODE", default: () => "(0)" })
  doctitlemode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCTITLEFIELDS", nullable: true })
  doctitlefields: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF0", nullable: true, precision: 53 })
  custmaturecoef0: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF1", nullable: true, precision: 53 })
  custmaturecoef1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF2", nullable: true, precision: 53 })
  custmaturecoef2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF3", nullable: true, precision: 53 })
  custmaturecoef3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF4", nullable: true, precision: 53 })
  custmaturecoef4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF5", nullable: true, precision: 53 })
  custmaturecoef5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF6", nullable: true, precision: 53 })
  custmaturecoef6: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF7", nullable: true, precision: 53 })
  custmaturecoef7: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF8", nullable: true, precision: 53 })
  custmaturecoef8: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF9", nullable: true, precision: 53 })
  custmaturecoef9: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF10", nullable: true, precision: 53 })
  custmaturecoef10: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF11", nullable: true, precision: 53 })
  custmaturecoef11: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF12", nullable: true, precision: 53 })
  custmaturecoef12: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF13", nullable: true, precision: 53 })
  custmaturecoef13: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF14", nullable: true, precision: 53 })
  custmaturecoef14: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF15", nullable: true, precision: 53 })
  custmaturecoef15: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTMATURECOEF100", nullable: true, precision: 53 })
  custmaturecoef100: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTJOBCODEMASK", nullable: true, length: 25 })
  custjobcodemask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITLIMITSGROUPMODE", nullable: true })
  creditlimitsgroupmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SVDSRID", nullable: true })
  svdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOPDFSAVEMODE", default: () => "(0)" })
  autopdfsavemode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AUTOPDFSAVEFOLDER", nullable: true, length: 255 })
  autopdfsavefolder: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOPDFSAVEPERPOST", default: () => "(0)" })
  autopdfsaveperpost: number;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.custparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
