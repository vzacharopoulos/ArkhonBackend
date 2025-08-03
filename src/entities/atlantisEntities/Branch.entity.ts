import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Accountevent } from "./Accountevent.entity";
import { Assetorginfo } from "./Assetorginfo.entity";
import { Assettrans } from "./Assettrans.entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Company } from "./Company.entity";

import { Country } from "./Country.entity";
import { Store } from "./Store.entity";
import { Doy } from "./Doy.entity";
import { Branchkad } from "./Branchkad.entity";
import { Docseries } from "./Docseries.entity";
import { Fintrade } from "./Fintrade.entity";
import { Puser } from "./Puser.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_100", ["comid", "codeid"], { unique: true })
@Entity("BRANCH", { schema: "dbo" })
export class Branch {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Column("varchar", { name: "CONTACT", nullable: true, length: 255 })
  contact: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", { name: "VATSTATUS", default: () => "0" })
  vatstatus: number;

  @Column("varchar", { name: "DSRCOMP", nullable: true, length: 4 })
  dsrcomp: string | null;

  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Column("smallint", {
    name: "HEADQUARTERS",
    nullable: true,
    default: () => "0",
  })
  headquarters: number | null;

  @Column("varchar", { name: "TAXIS", nullable: true, length: 25 })
  taxis: string | null;

  @Column("varchar", { name: "IKA", nullable: true, length: 255 })
  ika: string | null;

  @Column("datetime", { name: "LASTIMPORTDATETIME", nullable: true })
  lastimportdatetime: Date | null;

  @Column("datetime", { name: "LASTIMPORTCONFIGDATETIME", nullable: true })
  lastimportconfigdatetime: Date | null;

  @Column("datetime", { name: "GLLIMITDATE", nullable: true })
  gllimitdate: Date | null;

  @Column("smallint", {
    name: "INIMPORTDATA",
    nullable: true,
    default: () => "0",
  })
  inimportdata: number | null;

  @Column("smallint", {
    name: "INIMPORTCONFIGDATA",
    nullable: true,
    default: () => "0",
  })
  inimportconfigdata: number | null;

  @Column("varchar", { name: "DIPETHECODE", nullable: true, length: 5 })
  dipethecode: string | null;

  @Column("varchar", { name: "DIPETHEPWD", nullable: true, length: 25 })
  dipethepwd: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Column("int", { name: "SPEID", nullable: true })
  speid: number | null;

  @Column("int", { name: "SNPGID", nullable: true })
  snpgid: number | null;

  @Column("varchar", { name: "IKACODE", nullable: true, length: 5 })
  ikacode: string | null;

  @Column("int", { name: "OAEDID", nullable: true })
  oaedid: number | null;

  @Column("int", { name: "SEPEID", nullable: true })
  sepeid: number | null;

  @Column("varchar", { name: "VALSURNAME", nullable: true, length: 50 })
  valsurname: string | null;

  @Column("varchar", { name: "VALNAME", nullable: true, length: 50 })
  valname: string | null;

  @Column("varchar", { name: "VALFATHERNAME", nullable: true, length: 50 })
  valfathername: string | null;

  @Column("varchar", { name: "VALSTREET", nullable: true, length: 50 })
  valstreet: string | null;

  @Column("varchar", { name: "VALZIPCODE", nullable: true, length: 10 })
  valzipcode: string | null;

  @Column("varchar", { name: "VALPHONE", nullable: true, length: 20 })
  valphone: string | null;

  @Column("int", { name: "VALDOYID", nullable: true })
  valdoyid: number | null;

  @Column("varchar", { name: "VALAFM", nullable: true, length: 15 })
  valafm: string | null;

  @Column("varchar", { name: "VALADT", nullable: true, length: 20 })
  valadt: string | null;

  @Column("varchar", { name: "VALJOBPOSITION", nullable: true, length: 30 })
  valjobposition: string | null;

  @Column("int", { name: "VALJOBID", nullable: true })
  valjobid: number | null;

  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Column("varchar", { name: "MINAGRINUSR", nullable: true, length: 30 })
  minagrinusr: string | null;

  @Column("varchar", { name: "MINAGRINSHOPCODE", nullable: true, length: 30 })
  minagrinshopcode: string | null;

  @Column("int", { name: "MINAGRPRESCRIBERID", nullable: true })
  minagrprescriberid: number | null;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Column("varchar", { name: "TRANSPORTERS", nullable: true, length: 150 })
  transporters: string | null;

  @OneToMany(() => Accountevent, (accountevent) => accountevent.branch)
  accountevents: Accountevent[];

  @OneToMany(() => Assetorginfo, (assetorginfo) => assetorginfo.branch)
  assetorginfos: Assetorginfo[];

  @OneToMany(() => Assettrans, (assettrans) => assettrans.branch)
  assettrans: Assettrans[];

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.branch)
  bankaccounts: Bankaccount[];

  @ManyToOne(() => Company, (company) => company.branches, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

 

  @ManyToOne(() => Country, (country) => country.branches)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @ManyToOne(() => Store, (store) => store.branches)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FROMSRCSPRSTOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @ManyToOne(() => Store, (store) => store.branches2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TOSRCSPRSTOID", referencedColumnName: "codeid" },
  ])
  store2: Store;

  @ManyToOne(() => Store, (store) => store.branches3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOIDDEF", referencedColumnName: "codeid" },
  ])
  store3: Store;

  @ManyToOne(() => Doy, (doy) => doy.branches)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @OneToMany(() => Branchkad, (branchkad) => branchkad.branch)
  branchkads: Branchkad[];

  @OneToMany(() => Docseries, (docseries) => docseries.branch)
  docseries: Docseries[];

  @OneToMany(() => Fintrade, (fintrade) => fintrade.branch)
  fintrades: Fintrade[];

  @OneToMany(() => Puser, (puser) => puser.branch)
  pusers: Puser[];

 
}
