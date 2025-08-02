import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_SX15270", ["comid"], { unique: true })
@Entity("SXCOMPANYEXT", { schema: "dbo" })
export class Sxcompanyext {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Column("varchar", { name: "OWNERFIRST", nullable: true, length: 50 })
  ownerfirst: string | null;

  @Column("varchar", { name: "OWNERLAST", nullable: true, length: 50 })
  ownerlast: string | null;

  @Column("varchar", { name: "OWNERADT", nullable: true, length: 15 })
  owneradt: string | null;

  @Column("smallint", { name: "OWNERADTTYPE", nullable: true })
  owneradttype: number | null;

  @Column("varchar", { name: "OWNERRELATIVENAME", nullable: true, length: 30 })
  ownerrelativename: string | null;

  @Column("varchar", { name: "MUNICIPALITY", nullable: true, length: 50 })
  municipality: string | null;

  @Column("varchar", { name: "SPOUSEFIRST", nullable: true, length: 50 })
  spousefirst: string | null;

  @Column("varchar", { name: "SPOUSELAST", nullable: true, length: 50 })
  spouselast: string | null;

  @Column("int", { name: "SPOUSEDOY", nullable: true })
  spousedoy: number | null;

  @Column("varchar", { name: "SPOUSEAFM", nullable: true, length: 15 })
  spouseafm: string | null;

  @Column("varchar", { name: "SPOUSEZIPCODE", nullable: true, length: 15 })
  spousezipcode: string | null;

  @Column("varchar", { name: "SPOUSECITY", nullable: true, length: 50 })
  spousecity: string | null;

  @Column("varchar", { name: "SPOUSEADT", nullable: true, length: 15 })
  spouseadt: string | null;

  @Column("varchar", { name: "SPOUSEADDRESS", nullable: true, length: 50 })
  spouseaddress: string | null;

  @Column("smallint", { name: "INEUROPETRADE", default: () => "2" })
  ineuropetrade: number;

  @Column("smallint", { name: "COMPANYKIND", nullable: true })
  companykind: number | null;

  @Column("smallint", { name: "FRONTIER", default: () => "2" })
  frontier: number;

  @Column("int", { name: "PARTNERS", nullable: true })
  partners: number | null;

  @Column("smallint", { name: "BOOKS", nullable: true })
  books: number | null;

  @Column("smallint", { name: "FORCEDVATSTATUS", nullable: true })
  forcedvatstatus: number | null;

  @Column("varchar", { name: "REPFIRST", nullable: true, length: 50 })
  repfirst: string | null;

  @Column("varchar", { name: "REPLAST", nullable: true, length: 50 })
  replast: string | null;

  @Column("varchar", { name: "REPAFM", nullable: true, length: 15 })
  repafm: string | null;

  @Column("varchar", { name: "REPADT", nullable: true, length: 15 })
  repadt: string | null;

  @Column("varchar", { name: "REPADDRESS", nullable: true, length: 50 })
  repaddress: string | null;

  @Column("varchar", { name: "REPZIPCODE", nullable: true, length: 15 })
  repzipcode: string | null;

  @Column("varchar", { name: "REPRELATIVENAME", nullable: true, length: 30 })
  reprelativename: string | null;

  @Column("varchar", { name: "REPMUNICIPALITY", nullable: true, length: 50 })
  repmunicipality: string | null;

  @Column("varchar", { name: "REPCITY", nullable: true, length: 50 })
  repcity: string | null;

  @Column("smallint", { name: "REPADTKIND", nullable: true })
  repadtkind: number | null;

  @Column("int", { name: "REPDOY", nullable: true })
  repdoy: number | null;

  @Column("int", { name: "MAINACTIVITY", nullable: true })
  mainactivity: number | null;

  @Column("float", { name: "MASALCOEF", nullable: true, precision: 53 })
  masalcoef: number | null;

  @Column("float", { name: "MAPURCOEF", nullable: true, precision: 53 })
  mapurcoef: number | null;

  @Column("int", { name: "SECACTIVITY", nullable: true })
  secactivity: number | null;

  @Column("float", { name: "SASALCOEF", nullable: true, precision: 53 })
  sasalcoef: number | null;

  @Column("float", { name: "SAPURCOEF", nullable: true, precision: 53 })
  sapurcoef: number | null;

  @Column("int", { name: "OTHERACTIVITY", nullable: true })
  otheractivity: number | null;

  @Column("float", { name: "OASALCOEF", nullable: true, precision: 53 })
  oasalcoef: number | null;

  @Column("float", { name: "OAPURCOEF", nullable: true, precision: 53 })
  oapurcoef: number | null;

  @Column("int", { name: "BASEKAD", nullable: true })
  basekad: number | null;

  @Column("int", { name: "INCOMEKAD", nullable: true })
  incomekad: number | null;

  @Column("int", { name: "OAKAD", nullable: true })
  oakad: number | null;

  @Column("int", { name: "OTHERACTIVITY2", nullable: true })
  otheractivity2: number | null;

  @Column("float", { name: "OASALCOEF2", nullable: true, precision: 53 })
  oasalcoef2: number | null;

  @Column("float", { name: "OAPURCOEF2", nullable: true, precision: 53 })
  oapurcoef2: number | null;

  @Column("int", { name: "OAKAD2", nullable: true })
  oakad2: number | null;

  @Column("smallint", {
    name: "USEGENERALDOC",
    nullable: true,
    default: () => "0",
  })
  usegeneraldoc: number | null;

  @Column("float", {
    name: "SPECIALPAYMENTLIMIT",
    nullable: true,
    precision: 53,
  })
  specialpaymentlimit: number | null;

  @Column("smallint", { name: "HIDEZERO", nullable: true, default: () => "0" })
  hidezero: number | null;

  @Column("float", { name: "CUSTLIMIT", nullable: true, precision: 53 })
  custlimit: number | null;

  @Column("float", {
    name: "CUSTINDIVIDUALLIMIT",
    nullable: true,
    precision: 53,
  })
  custindividuallimit: number | null;

  @Column("float", { name: "SUPLIMIT", nullable: true, precision: 53 })
  suplimit: number | null;

  @Column("float", { name: "SUPFARMERLIMIT", nullable: true, precision: 53 })
  supfarmerlimit: number | null;

  @Column("varchar", { name: "REPTAXISUSERNAME", nullable: true, length: 50 })
  reptaxisusername: string | null;

  @Column("varchar", { name: "REPTAXISPWD", nullable: true, length: 50 })
  reptaxispwd: string | null;

  @Column("varchar", { name: "STRDOCSERIES", nullable: true })
  strdocseries: string | null;

  @Column("float", {
    name: "SPECIALEXPENSEPAYMENTLIMIT",
    nullable: true,
    precision: 53,
  })
  specialexpensepaymentlimit: number | null;

  @Column("varchar", { name: "SOCIALSECNUMBER", nullable: true, length: 20 })
  socialsecnumber: string | null;

  @OneToOne(() => Company, (company) => company.sxcompanyext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
