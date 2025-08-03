import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_4906", ["comid"], { unique: true })
@ObjectType()
@Entity("CUSTPARAMS", { schema: "dbo" })
export class Custparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { name: "CUSTOMERCODEMODE", default: () => "0" })
  customercodemode: number;

  @Column("varchar", { name: "CUSTOMERCODEMASK", nullable: true, length: 25 })
  customercodemask: string | null;

  @Column("varchar", { name: "CUSTOMERCODEMEMO", nullable: true })
  customercodememo: string | null;

  @Column("varchar", { name: "ACCOUNTMASKDEF", nullable: true, length: 25 })
  accountmaskdef: string | null;

  @Column("smallint", { name: "FPASTATUSDEF", default: () => "0" })
  fpastatusdef: number;

  @Column("int", { name: "SHVIDDEF", nullable: true })
  shviddef: number | null;

  @Column("int", { name: "GEOIDDEF", nullable: true })
  geoiddef: number | null;

  @Column("int", { name: "PRCIDDEF", nullable: true })
  prciddef: number | null;

  @Column("int", { name: "PTRIDDEF", nullable: true })
  ptriddef: number | null;

  @Column("int", { name: "CNTIDDEF", nullable: true })
  cntiddef: number | null;

  @Column("int", { name: "CURIDDEF", nullable: true })
  curiddef: number | null;

  @Column("int", { name: "RLBIDDEF", nullable: true })
  rlbiddef: number | null;

  @Column("smallint", { name: "EQUIVCHECKMODE", default: () => "0" })
  equivcheckmode: number;

  @Column("int", { name: "EQUIVPLDSRID", nullable: true })
  equivpldsrid: number | null;

  @Column("int", { name: "EQUIVMNDSRID", nullable: true })
  equivmndsrid: number | null;

  @Column("int", { name: "EQUIVPLUSID", nullable: true })
  equivplusid: number | null;

  @Column("int", { name: "EQUIVMINUSID", nullable: true })
  equivminusid: number | null;

  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Column("smallint", { name: "CREDITLIMITSMODE", default: () => "0" })
  creditlimitsmode: number;

  @Column("smallint", { name: "CREDITCHECKMODE", default: () => "0" })
  creditcheckmode: number;

  @Column("smallint", { name: "CONTINUITY", default: () => "0" })
  continuity: number;

  @Column("varchar", { name: "MSG", nullable: true, length: 50 })
  msg: string | null;

  @Column("varchar", { name: "PADDCHAR", nullable: true, length: 1 })
  paddchar: string | null;

  @Column("varchar", { name: "DELIMETER", nullable: true, length: 1 })
  delimeter: string | null;

  @Column("smallint", { name: "AUTOLENGTH", nullable: true })
  autolength: number | null;

  @Column("varchar", { name: "CUSTMATUREDESCR1", nullable: true, length: 30 })
  custmaturedescr1: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR2", nullable: true, length: 30 })
  custmaturedescr2: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR3", nullable: true, length: 30 })
  custmaturedescr3: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR4", nullable: true, length: 30 })
  custmaturedescr4: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR5", nullable: true, length: 30 })
  custmaturedescr5: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR6", nullable: true, length: 30 })
  custmaturedescr6: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR7", nullable: true, length: 30 })
  custmaturedescr7: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR8", nullable: true, length: 30 })
  custmaturedescr8: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR9", nullable: true, length: 30 })
  custmaturedescr9: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR10", nullable: true, length: 30 })
  custmaturedescr10: string | null;

  @Column("int", { name: "CUSTMATUREFROM1", nullable: true })
  custmaturefrom1: number | null;

  @Column("int", { name: "CUSTMATUREFROM2", nullable: true })
  custmaturefrom2: number | null;

  @Column("int", { name: "CUSTMATUREFROM3", nullable: true })
  custmaturefrom3: number | null;

  @Column("int", { name: "CUSTMATUREFROM4", nullable: true })
  custmaturefrom4: number | null;

  @Column("int", { name: "CUSTMATUREFROM5", nullable: true })
  custmaturefrom5: number | null;

  @Column("int", { name: "CUSTMATUREFROM6", nullable: true })
  custmaturefrom6: number | null;

  @Column("int", { name: "CUSTMATUREFROM7", nullable: true })
  custmaturefrom7: number | null;

  @Column("int", { name: "CUSTMATUREFROM8", nullable: true })
  custmaturefrom8: number | null;

  @Column("int", { name: "CUSTMATUREFROM9", nullable: true })
  custmaturefrom9: number | null;

  @Column("int", { name: "CUSTMATUREFROM10", nullable: true })
  custmaturefrom10: number | null;

  @Column("int", { name: "CUSTMATURETO1", nullable: true })
  custmatureto1: number | null;

  @Column("int", { name: "CUSTMATURETO2", nullable: true })
  custmatureto2: number | null;

  @Column("int", { name: "CUSTMATURETO3", nullable: true })
  custmatureto3: number | null;

  @Column("int", { name: "CUSTMATURETO4", nullable: true })
  custmatureto4: number | null;

  @Column("int", { name: "CUSTMATURETO5", nullable: true })
  custmatureto5: number | null;

  @Column("int", { name: "CUSTMATURETO6", nullable: true })
  custmatureto6: number | null;

  @Column("int", { name: "CUSTMATURETO7", nullable: true })
  custmatureto7: number | null;

  @Column("int", { name: "CUSTMATURETO8", nullable: true })
  custmatureto8: number | null;

  @Column("int", { name: "CUSTMATURETO9", nullable: true })
  custmatureto9: number | null;

  @Column("int", { name: "CUSTMATURETO10", nullable: true })
  custmatureto10: number | null;

  @Column("varchar", { name: "CUSTMATUREDESCR11", nullable: true, length: 30 })
  custmaturedescr11: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR12", nullable: true, length: 30 })
  custmaturedescr12: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR13", nullable: true, length: 30 })
  custmaturedescr13: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR14", nullable: true, length: 30 })
  custmaturedescr14: string | null;

  @Column("varchar", { name: "CUSTMATUREDESCR15", nullable: true, length: 30 })
  custmaturedescr15: string | null;

  @Column("int", { name: "CUSTMATUREFROM11", nullable: true })
  custmaturefrom11: number | null;

  @Column("int", { name: "CUSTMATUREFROM12", nullable: true })
  custmaturefrom12: number | null;

  @Column("int", { name: "CUSTMATUREFROM13", nullable: true })
  custmaturefrom13: number | null;

  @Column("int", { name: "CUSTMATUREFROM14", nullable: true })
  custmaturefrom14: number | null;

  @Column("int", { name: "CUSTMATUREFROM15", nullable: true })
  custmaturefrom15: number | null;

  @Column("int", { name: "CUSTMATURETO11", nullable: true })
  custmatureto11: number | null;

  @Column("int", { name: "CUSTMATURETO12", nullable: true })
  custmatureto12: number | null;

  @Column("int", { name: "CUSTMATURETO13", nullable: true })
  custmatureto13: number | null;

  @Column("int", { name: "CUSTMATURETO14", nullable: true })
  custmatureto14: number | null;

  @Column("int", { name: "CUSTMATURETO15", nullable: true })
  custmatureto15: number | null;

  @Column("int", { name: "BLSOPBAL", nullable: true })
  blsopbal: number | null;

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

  @Column("smallint", { name: "BILLINST", nullable: true, default: () => "0" })
  billinst: number | null;

  @Column("varchar", { name: "CUSOCPIDS", nullable: true })
  cusocpids: string | null;

  @Column("smallint", { name: "RELIABILITYMESS", default: () => "0" })
  reliabilitymess: number;

  @Column("smallint", { name: "CREDITCHECKGROUPMODE", nullable: true })
  creditcheckgroupmode: number | null;

  @Column("int", { name: "OCPIDDEF", nullable: true })
  ocpiddef: number | null;

  @Column("varchar", { name: "BILLSTATES", nullable: true, length: 255 })
  billstates: string | null;

  @Column("smallint", { name: "OMODEDEF", default: () => "0" })
  omodedef: number;

  @Column("smallint", {
    name: "SEARCHSHOWREMAIN",
    nullable: true,
    default: () => "0",
  })
  searchshowremain: number | null;

  @Column("int", { name: "NPGIDDEF", nullable: true })
  npgiddef: number | null;

  @Column("smallint", { name: "DOCTITLEMODE", default: () => "(0)" })
  doctitlemode: number;

  @Column("varchar", { name: "DOCTITLEFIELDS", nullable: true })
  doctitlefields: string | null;

  @Column("float", { name: "CUSTMATURECOEF0", nullable: true, precision: 53 })
  custmaturecoef0: number | null;

  @Column("float", { name: "CUSTMATURECOEF1", nullable: true, precision: 53 })
  custmaturecoef1: number | null;

  @Column("float", { name: "CUSTMATURECOEF2", nullable: true, precision: 53 })
  custmaturecoef2: number | null;

  @Column("float", { name: "CUSTMATURECOEF3", nullable: true, precision: 53 })
  custmaturecoef3: number | null;

  @Column("float", { name: "CUSTMATURECOEF4", nullable: true, precision: 53 })
  custmaturecoef4: number | null;

  @Column("float", { name: "CUSTMATURECOEF5", nullable: true, precision: 53 })
  custmaturecoef5: number | null;

  @Column("float", { name: "CUSTMATURECOEF6", nullable: true, precision: 53 })
  custmaturecoef6: number | null;

  @Column("float", { name: "CUSTMATURECOEF7", nullable: true, precision: 53 })
  custmaturecoef7: number | null;

  @Column("float", { name: "CUSTMATURECOEF8", nullable: true, precision: 53 })
  custmaturecoef8: number | null;

  @Column("float", { name: "CUSTMATURECOEF9", nullable: true, precision: 53 })
  custmaturecoef9: number | null;

  @Column("float", { name: "CUSTMATURECOEF10", nullable: true, precision: 53 })
  custmaturecoef10: number | null;

  @Column("float", { name: "CUSTMATURECOEF11", nullable: true, precision: 53 })
  custmaturecoef11: number | null;

  @Column("float", { name: "CUSTMATURECOEF12", nullable: true, precision: 53 })
  custmaturecoef12: number | null;

  @Column("float", { name: "CUSTMATURECOEF13", nullable: true, precision: 53 })
  custmaturecoef13: number | null;

  @Column("float", { name: "CUSTMATURECOEF14", nullable: true, precision: 53 })
  custmaturecoef14: number | null;

  @Column("float", { name: "CUSTMATURECOEF15", nullable: true, precision: 53 })
  custmaturecoef15: number | null;

  @Column("float", { name: "CUSTMATURECOEF100", nullable: true, precision: 53 })
  custmaturecoef100: number | null;

  @Column("varchar", { name: "CUSTJOBCODEMASK", nullable: true, length: 25 })
  custjobcodemask: string | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("smallint", { name: "CREDITLIMITSGROUPMODE", nullable: true })
  creditlimitsgroupmode: number | null;

  @Column("int", { name: "SVDSRID", nullable: true })
  svdsrid: number | null;

  @Column("smallint", { name: "AUTOPDFSAVEMODE", default: () => "(0)" })
  autopdfsavemode: number;

  @Column("varchar", { name: "AUTOPDFSAVEFOLDER", nullable: true, length: 255 })
  autopdfsavefolder: string | null;

  @Column("smallint", { name: "AUTOPDFSAVEPERPOST", default: () => "(0)" })
  autopdfsaveperpost: number;

  @OneToOne(() => Company, (company) => company.custparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
