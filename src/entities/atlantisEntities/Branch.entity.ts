import { Field } from "@nestjs/graphql";
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
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACT", nullable: true, length: 255 })
  contact: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATSTATUS", default: () => "0" })
  vatstatus: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DSRCOMP", nullable: true, length: 4 })
  dsrcomp: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PPGID", nullable: true })
  ppgid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NPGID", nullable: true })
  npgid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "HEADQUARTERS",
    nullable: true,
    default: () => "0",
  })
  headquarters: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXIS", nullable: true, length: 25 })
  taxis: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IKA", nullable: true, length: 255 })
  ika: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTIMPORTDATETIME", nullable: true })
  lastimportdatetime: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTIMPORTCONFIGDATETIME", nullable: true })
  lastimportconfigdatetime: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "GLLIMITDATE", nullable: true })
  gllimitdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "INIMPORTDATA",
    nullable: true,
    default: () => "0",
  })
  inimportdata: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "INIMPORTCONFIGDATA",
    nullable: true,
    default: () => "0",
  })
  inimportconfigdata: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHECODE", nullable: true, length: 5 })
  dipethecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHEPWD", nullable: true, length: 25 })
  dipethepwd: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPEID", nullable: true })
  speid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SNPGID", nullable: true })
  snpgid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IKACODE", nullable: true, length: 5 })
  ikacode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "OAEDID", nullable: true })
  oaedid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SEPEID", nullable: true })
  sepeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALSURNAME", nullable: true, length: 50 })
  valsurname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALNAME", nullable: true, length: 50 })
  valname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALFATHERNAME", nullable: true, length: 50 })
  valfathername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALSTREET", nullable: true, length: 50 })
  valstreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALZIPCODE", nullable: true, length: 10 })
  valzipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALPHONE", nullable: true, length: 20 })
  valphone: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VALDOYID", nullable: true })
  valdoyid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALAFM", nullable: true, length: 15 })
  valafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALADT", nullable: true, length: 20 })
  valadt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VALJOBPOSITION", nullable: true, length: 30 })
  valjobposition: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VALJOBID", nullable: true })
  valjobid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRINUSR", nullable: true, length: 30 })
  minagrinusr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRINSHOPCODE", nullable: true, length: 30 })
  minagrinshopcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MINAGRPRESCRIBERID", nullable: true })
  minagrprescriberid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRANSPORTERS", nullable: true, length: 150 })
  transporters: string | null;

  @Field(() => [Accountevent], { nullable: true })
  @OneToMany(() => Accountevent, (accountevent) => accountevent.branch)
  accountevents: Accountevent[];

  @Field(() => [Assetorginfo], { nullable: true })
  @OneToMany(() => Assetorginfo, (assetorginfo) => assetorginfo.branch)
  assetorginfos: Assetorginfo[];

  @Field(() => [Assettrans], { nullable: true })
  @OneToMany(() => Assettrans, (assettrans) => assettrans.branch)
  assettrans: Assettrans[];

  @Field(() => [Bankaccount], { nullable: true })
  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.branch)
  bankaccounts: Bankaccount[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.branches, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

 

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.branches)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.branches)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FROMSRCSPRSTOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.branches2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TOSRCSPRSTOID", referencedColumnName: "codeid" },
  ])
  store2: Store;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.branches3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOIDDEF", referencedColumnName: "codeid" },
  ])
  store3: Store;

  @Field({ nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.branches)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @Field(() => [Branchkad], { nullable: true })
  @OneToMany(() => Branchkad, (branchkad) => branchkad.branch)
  branchkads: Branchkad[];

  @Field(() => [Docseries], { nullable: true })
  @OneToMany(() => Docseries, (docseries) => docseries.branch)
  docseries: Docseries[];

  @Field(() => [Fintrade], { nullable: true })
  @OneToMany(() => Fintrade, (fintrade) => fintrade.branch)
  fintrades: Fintrade[];

  @Field(() => [Puser], { nullable: true })
  @OneToMany(() => Puser, (puser) => puser.branch)
  pusers: Puser[];

 
}
