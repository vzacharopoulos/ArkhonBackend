import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Company } from "./Company.entity";
import { Branch } from "./Branch.entity";
import { Emailaccount } from "./Emailaccount.entity";

import { Userlogininfo } from "./Userlogininfo.entity";
import { Usershortcuts } from "./Usershortcuts.entity";

@Index("UNI_200", ["id"], { unique: true })
@Index("UNI_204", ["name"], { unique: true })
@ObjectType()
@Entity("PUSER", { schema: "dbo" })
export class Puser {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", unique: true, length: 15 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FULLNAME", nullable: true, length: 40 })
  fullname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PWD", nullable: true, length: 40 })
  pwd: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "USGID" })
  usgid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUPERVISOR", default: () => "0" })
  supervisor: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ENTERASTAB", default: () => "0" })
  enterastab: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLCOMPANIES", default: () => "0" })
  allcompanies: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "HASAUTHORITY", nullable: true })
  hasauthority: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCASHIER", default: () => "0" })
  iscashier: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "RESTRICTEDBRANCHES", default: () => "0" })
  restrictedbranches: number;

  @Field({ nullable: true })
  @Column("int", { name: "CRMID", nullable: true })
  crmid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GRPID", nullable: true })
  grpid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 100 })
  email: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWSYNCHDATA", default: () => "0" })
  allowsynchdata: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "QLIKFLAGS", nullable: true })
  qlikflags: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTCHPWD", nullable: true })
  lastchpwd: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOSUSER", nullable: true, default: () => "0" })
  isosuser: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABBREVIATION", nullable: true, length: 10 })
  abbreviation: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TOUCHRETAILDISCOUNT",
    nullable: true,
    default: () => "(0)",
  })
  touchretaildiscount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWDBBACKUP", default: () => "(0)" })
  allowdbbackup: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWDBRESTORE", default: () => "(0)" })
  allowdbrestore: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWDBCREATE", default: () => "(0)" })
  allowdbcreate: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWDBDELETE", default: () => "(0)" })
  allowdbdelete: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TOUCHRETAILOPENDRAWER",
    nullable: true,
    default: () => "(0)",
  })
  touchretailopendrawer: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TOUCHRETAILREPRINT",
    nullable: true,
    default: () => "(0)",
  })
  touchretailreprint: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RELATIVEGRPIDS", nullable: true, length: 150 })
  relativegrpids: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRICUSR", nullable: true, length: 30 })
  minagricusr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MINAGRICUSRAFM", nullable: true, length: 15 })
  minagricusrafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MINAGRICUSRSHOPCODE",
    nullable: true,
    length: 30,
  })
  minagricusrshopcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDFORCRMSALES", nullable: true })
  dsridforcrmsales: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDFORCRMSERVICE", nullable: true })
  dsridforcrmservice: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALURL", nullable: true, length: 255 })
  phonedialurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALUSER", nullable: true, length: 50 })
  phonedialuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALPWD", nullable: true, length: 50 })
  phonedialpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALEXT", nullable: true, length: 20 })
  phonedialext: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMEMAIL", nullable: true, length: 100 })
  crmemail: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMEMAILPASSWORD", nullable: true, length: 100 })
  crmemailpassword: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MOBILEPHONE", nullable: true, length: 20 })
  mobilephone: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TOUCHRETAILDELETEITEMS",
    nullable: true,
    default: () => "(0)",
  })
  touchretaildeleteitems: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PASSWORD_ERROR_TRIES", nullable: true })
  passwordErrorTries: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PASSWORD_HISTORY_LIST", nullable: true })
  passwordHistoryList: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SYSTEMREMINDERS",
    nullable: true,
    default: () => "(0)",
  })
  systemreminders: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPORTALVISIBLEBYDEFAULT", nullable: true })
  isportalvisiblebydefault: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ALLOWHIERARCHYVIOLATION",
    nullable: true,
    default: () => "(0)",
  })
  allowhierarchyviolation: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MAILSERVERPOLICY",
    nullable: true,
    default: () => "(4)",
  })
  mailserverpolicy: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEFAULTMAILSERVER", nullable: true })
  defaultmailserver: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SYSTEMREMINDERSPERIOD", nullable: true })
  systemremindersperiod: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USERAUTHBYSSOPROVIDER", default: () => "(0)" })
  userauthbyssoprovider: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALLOWALTUSERAUTH", default: () => "(0)" })
  allowaltuserauth: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SSOADMIN", default: () => "(0)" })
  ssoadmin: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USERCUSTOMMAINMENU",
    nullable: true,
    default: () => "(0)",
  })
  usercustommainmenu: number | null;


  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.pusers)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.pusers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(() => Emailaccount, (emailaccount) => emailaccount.pusers)
  @JoinColumn([{ name: "EMAILACCOUNTID", referencedColumnName: "id" }])
  emailaccount: Emailaccount;



  @Field(() => [Userlogininfo], { nullable: true })
  @OneToMany(() => Userlogininfo, (userlogininfo) => userlogininfo.usr)
  userlogininfos: Userlogininfo[];

  @Field(() => [Usershortcuts], { nullable: true })
  @OneToMany(() => Usershortcuts, (usershortcuts) => usershortcuts.usr)
  usershortcuts: Usershortcuts[];
}
