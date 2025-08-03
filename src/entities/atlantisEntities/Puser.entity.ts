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

  @Column("varchar", { name: "NAME", unique: true, length: 15 })
  name: string;

  @Column("varchar", { name: "FULLNAME", nullable: true, length: 40 })
  fullname: string | null;

  @Column("varchar", { name: "PWD", nullable: true, length: 40 })
  pwd: string | null;

  @Column("int", { name: "USGID" })
  usgid: number;

  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Column("smallint", { name: "SUPERVISOR", default: () => "0" })
  supervisor: number;

  @Column("smallint", { name: "ENTERASTAB", default: () => "0" })
  enterastab: number;

  @Column("smallint", { name: "ALLCOMPANIES", default: () => "0" })
  allcompanies: number;

  @Column("smallint", { name: "HASAUTHORITY", nullable: true })
  hasauthority: number | null;

  @Column("smallint", { name: "ISCASHIER", default: () => "0" })
  iscashier: number;

  @Column("smallint", { name: "RESTRICTEDBRANCHES", default: () => "0" })
  restrictedbranches: number;

  @Column("int", { name: "CRMID", nullable: true })
  crmid: number | null;

  @Column("int", { name: "GRPID", nullable: true })
  grpid: number | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 100 })
  email: string | null;

  @Column("smallint", { name: "ALLOWSYNCHDATA", default: () => "0" })
  allowsynchdata: number;

  @Column("smallint", { name: "QLIKFLAGS", nullable: true })
  qlikflags: number | null;

  @Column("datetime", { name: "LASTCHPWD", nullable: true })
  lastchpwd: Date | null;

  @Column("smallint", { name: "ISOSUSER", nullable: true, default: () => "0" })
  isosuser: number | null;

  @Column("varchar", { name: "ABBREVIATION", nullable: true, length: 10 })
  abbreviation: string | null;

  @Column("smallint", {
    name: "TOUCHRETAILDISCOUNT",
    nullable: true,
    default: () => "(0)",
  })
  touchretaildiscount: number | null;

  @Column("smallint", { name: "ALLOWDBBACKUP", default: () => "(0)" })
  allowdbbackup: number;

  @Column("smallint", { name: "ALLOWDBRESTORE", default: () => "(0)" })
  allowdbrestore: number;

  @Column("smallint", { name: "ALLOWDBCREATE", default: () => "(0)" })
  allowdbcreate: number;

  @Column("smallint", { name: "ALLOWDBDELETE", default: () => "(0)" })
  allowdbdelete: number;

  @Column("smallint", {
    name: "TOUCHRETAILOPENDRAWER",
    nullable: true,
    default: () => "(0)",
  })
  touchretailopendrawer: number | null;

  @Column("smallint", {
    name: "TOUCHRETAILREPRINT",
    nullable: true,
    default: () => "(0)",
  })
  touchretailreprint: number | null;

  @Column("varchar", { name: "RELATIVEGRPIDS", nullable: true, length: 150 })
  relativegrpids: string | null;

  @Column("varchar", { name: "MINAGRICUSR", nullable: true, length: 30 })
  minagricusr: string | null;

  @Column("varchar", { name: "MINAGRICUSRAFM", nullable: true, length: 15 })
  minagricusrafm: string | null;

  @Column("varchar", {
    name: "MINAGRICUSRSHOPCODE",
    nullable: true,
    length: 30,
  })
  minagricusrshopcode: string | null;

  @Column("int", { name: "DSRIDFORCRMSALES", nullable: true })
  dsridforcrmsales: number | null;

  @Column("int", { name: "DSRIDFORCRMSERVICE", nullable: true })
  dsridforcrmservice: number | null;

  @Column("varchar", { name: "PHONEDIALURL", nullable: true, length: 255 })
  phonedialurl: string | null;

  @Column("varchar", { name: "PHONEDIALUSER", nullable: true, length: 50 })
  phonedialuser: string | null;

  @Column("varchar", { name: "PHONEDIALPWD", nullable: true, length: 50 })
  phonedialpwd: string | null;

  @Column("varchar", { name: "PHONEDIALEXT", nullable: true, length: 20 })
  phonedialext: string | null;

  @Column("varchar", { name: "CRMEMAIL", nullable: true, length: 100 })
  crmemail: string | null;

  @Column("varchar", { name: "CRMEMAILPASSWORD", nullable: true, length: 100 })
  crmemailpassword: string | null;

  @Column("varchar", { name: "MOBILEPHONE", nullable: true, length: 20 })
  mobilephone: string | null;

  @Column("smallint", {
    name: "TOUCHRETAILDELETEITEMS",
    nullable: true,
    default: () => "(0)",
  })
  touchretaildeleteitems: number | null;

  @Column("int", { name: "PASSWORD_ERROR_TRIES", nullable: true })
  passwordErrorTries: number | null;

  @Column("varchar", { name: "PASSWORD_HISTORY_LIST", nullable: true })
  passwordHistoryList: string | null;

  @Column("smallint", {
    name: "SYSTEMREMINDERS",
    nullable: true,
    default: () => "(0)",
  })
  systemreminders: number | null;

  @Column("smallint", { name: "ISPORTALVISIBLEBYDEFAULT", nullable: true })
  isportalvisiblebydefault: number | null;

  @Column("smallint", {
    name: "ALLOWHIERARCHYVIOLATION",
    nullable: true,
    default: () => "(0)",
  })
  allowhierarchyviolation: number | null;

  @Column("smallint", {
    name: "MAILSERVERPOLICY",
    nullable: true,
    default: () => "(4)",
  })
  mailserverpolicy: number | null;

  @Column("smallint", { name: "DEFAULTMAILSERVER", nullable: true })
  defaultmailserver: number | null;

  @Column("int", { name: "SYSTEMREMINDERSPERIOD", nullable: true })
  systemremindersperiod: number | null;

  @Column("smallint", { name: "USERAUTHBYSSOPROVIDER", default: () => "(0)" })
  userauthbyssoprovider: number;

  @Column("smallint", { name: "ALLOWALTUSERAUTH", default: () => "(0)" })
  allowaltuserauth: number;

  @Column("smallint", { name: "SSOADMIN", default: () => "(0)" })
  ssoadmin: number;

  @Column("smallint", {
    name: "USERCUSTOMMAINMENU",
    nullable: true,
    default: () => "(0)",
  })
  usercustommainmenu: number | null;


  @ManyToOne(() => Company, (company) => company.pusers)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @ManyToOne(() => Branch, (branch) => branch.pusers)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @ManyToOne(() => Emailaccount, (emailaccount) => emailaccount.pusers)
  @JoinColumn([{ name: "EMAILACCOUNTID", referencedColumnName: "id" }])
  emailaccount: Emailaccount;



  @OneToMany(() => Userlogininfo, (userlogininfo) => userlogininfo.usr)
  userlogininfos: Userlogininfo[];

  @OneToMany(() => Usershortcuts, (usershortcuts) => usershortcuts.usr)
  usershortcuts: Usershortcuts[];
}
