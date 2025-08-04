import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_SX15270", ["comid"], { unique: true })
@ObjectType()
@Entity("SXCOMPANYEXT", { schema: "dbo" })
export class Sxcompanyext {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OWNERFIRST", nullable: true, length: 50 })
  ownerfirst: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OWNERLAST", nullable: true, length: 50 })
  ownerlast: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OWNERADT", nullable: true, length: 15 })
  owneradt: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OWNERADTTYPE", nullable: true })
  owneradttype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OWNERRELATIVENAME", nullable: true, length: 30 })
  ownerrelativename: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MUNICIPALITY", nullable: true, length: 50 })
  municipality: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSEFIRST", nullable: true, length: 50 })
  spousefirst: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSELAST", nullable: true, length: 50 })
  spouselast: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPOUSEDOY", nullable: true })
  spousedoy: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSEAFM", nullable: true, length: 15 })
  spouseafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSEZIPCODE", nullable: true, length: 15 })
  spousezipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSECITY", nullable: true, length: 50 })
  spousecity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSEADT", nullable: true, length: 15 })
  spouseadt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SPOUSEADDRESS", nullable: true, length: 50 })
  spouseaddress: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INEUROPETRADE", default: () => "2" })
  ineuropetrade: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "COMPANYKIND", nullable: true })
  companykind: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FRONTIER", default: () => "2" })
  frontier: number;

  @Field({ nullable: true })
  @Column("int", { name: "PARTNERS", nullable: true })
  partners: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BOOKS", nullable: true })
  books: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FORCEDVATSTATUS", nullable: true })
  forcedvatstatus: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPFIRST", nullable: true, length: 50 })
  repfirst: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPLAST", nullable: true, length: 50 })
  replast: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPAFM", nullable: true, length: 15 })
  repafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPADT", nullable: true, length: 15 })
  repadt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPADDRESS", nullable: true, length: 50 })
  repaddress: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPZIPCODE", nullable: true, length: 15 })
  repzipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPRELATIVENAME", nullable: true, length: 30 })
  reprelativename: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPMUNICIPALITY", nullable: true, length: 50 })
  repmunicipality: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPCITY", nullable: true, length: 50 })
  repcity: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "REPADTKIND", nullable: true })
  repadtkind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "REPDOY", nullable: true })
  repdoy: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAINACTIVITY", nullable: true })
  mainactivity: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MASALCOEF", nullable: true, precision: 53 })
  masalcoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MAPURCOEF", nullable: true, precision: 53 })
  mapurcoef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SECACTIVITY", nullable: true })
  secactivity: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SASALCOEF", nullable: true, precision: 53 })
  sasalcoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SAPURCOEF", nullable: true, precision: 53 })
  sapurcoef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OTHERACTIVITY", nullable: true })
  otheractivity: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OASALCOEF", nullable: true, precision: 53 })
  oasalcoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OAPURCOEF", nullable: true, precision: 53 })
  oapurcoef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BASEKAD", nullable: true })
  basekad: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INCOMEKAD", nullable: true })
  incomekad: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OAKAD", nullable: true })
  oakad: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OTHERACTIVITY2", nullable: true })
  otheractivity2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OASALCOEF2", nullable: true, precision: 53 })
  oasalcoef2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OAPURCOEF2", nullable: true, precision: 53 })
  oapurcoef2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OAKAD2", nullable: true })
  oakad2: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USEGENERALDOC",
    nullable: true,
    default: () => "0",
  })
  usegeneraldoc: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "SPECIALPAYMENTLIMIT",
    nullable: true,
    precision: 53,
  })
  specialpaymentlimit: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HIDEZERO", nullable: true, default: () => "0" })
  hidezero: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CUSTLIMIT", nullable: true, precision: 53 })
  custlimit: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "CUSTINDIVIDUALLIMIT",
    nullable: true,
    precision: 53,
  })
  custindividuallimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUPLIMIT", nullable: true, precision: 53 })
  suplimit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUPFARMERLIMIT", nullable: true, precision: 53 })
  supfarmerlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPTAXISUSERNAME", nullable: true, length: 50 })
  reptaxisusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPTAXISPWD", nullable: true, length: 50 })
  reptaxispwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRDOCSERIES", nullable: true })
  strdocseries: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "SPECIALEXPENSEPAYMENTLIMIT",
    nullable: true,
    precision: 53,
  })
  specialexpensepaymentlimit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SOCIALSECNUMBER", nullable: true, length: 20 })
  socialsecnumber: string | null;

  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.sxcompanyext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
