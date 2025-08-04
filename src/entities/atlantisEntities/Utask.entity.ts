import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Tasktrn } from "./Tasktrn.entity";

@Index("UNI_5852", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("UTASK", { schema: "dbo" })
export class Utask {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PARENTTASID", default: () => "0" })
  parenttasid: number;

  @Field({ nullable: true })
  @Column("int", { name: "OFFSET", nullable: true })
  offset: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CATEGORYOFFSET", nullable: true })
  categoryoffset: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRIORITY", default: () => "0" })
  priority: number;

  @Field({ nullable: true })
  @Column("int", { name: "PROCID", nullable: true })
  procid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TASKCATEGORY", default: () => "0" })
  taskcategory: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAILMSG", nullable: true })
  emailmsg: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HASEMAIL", default: () => "0" })
  hasemail: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "DESTDSRID", nullable: true })
  destdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NEWSTAID", nullable: true })
  newstaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FTRCATEGORY", default: () => "0" })
  ftrcategory: number;

  @Field({ nullable: true })
  @Column("int", { name: "TASPRIORITY", nullable: true, default: () => "0" })
  taspriority: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USEPRIORITY",
    nullable: true,
    default: () => "0",
  })
  usepriority: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONDITIONS", nullable: true })
  conditions: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ASAP", nullable: true, default: () => "0" })
  asap: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRINTERNAME", nullable: true, length: 255 })
  printername: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERUSER", nullable: true, default: () => "0" })
  peruser: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMINDER", nullable: true, length: 255 })
  reminder: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "USERMESSAGE",
    nullable: true,
    default: () => "0",
  })
  usermessage: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PRINTPERPOST",
    nullable: true,
    default: () => "0",
  })
  printperpost: number | null;


  @Field({ nullable: true })
  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SENDEMAIL", default: () => "0" })
  sendemail: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BCKGEXEC",
    nullable: true,
    default: () => "(0)",
  })
  bckgexec: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ATTACHFORMAT",
    nullable: true,
    default: () => "(0)",
  })
  attachformat: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DRAFTTYPE",
    nullable: true,
    default: () => "(0)",
  })
  drafttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRTTYPE", nullable: true })
  prttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRTORIENTATION", nullable: true })
  prtorientation: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "NUMOFCOPIES", nullable: true })
  numofcopies: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAILTITLE", nullable: true, length: 255 })
  emailtitle: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "RPTID", nullable: true })
  rptid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RPTPRMS", nullable: true })
  rptprms: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "UTORDER", nullable: true, default: () => "(0)" })
  utorder: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MAILRECIPIENTSCC", nullable: true, length: 255 })
  mailrecipientscc: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MAILRECIPIENTSBCC", nullable: true, length: 255 })
  mailrecipientsbcc: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SETASPRINTED",
    nullable: true,
    default: () => "(0)",
  })
  setasprinted: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RPTEXPORTFILE", nullable: true })
  rptexportfile: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROGRSCRIPTCODE", nullable: true, length: 100 })
  progrscriptcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PROGRSCRIPTFUNCTION",
    nullable: true,
    length: 255,
  })
  progrscriptfunction: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PROGRSCRIPTPARAMS", nullable: true })
  progrscriptparams: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONDITIONSEXEC", nullable: true })
  conditionsexec: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ATPID", nullable: true })
  atpid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TOGRPID", nullable: true })
  togrpid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TOUSRID", nullable: true })
  tousrid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FORECASTEDBEGINNING", nullable: true })
  forecastedbeginning: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "REMINDERAMOUNT", nullable: true })
  reminderamount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "REMINDERTYPE", nullable: true })
  remindertype: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "REMINDERDATE", nullable: true })
  reminderdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMPRIORITY", nullable: true })
  crmpriority: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GRPIDLOGIN", nullable: true })
  grpidlogin: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "USRIDLOGIN", nullable: true })
  usridlogin: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMCUSID", nullable: true })
  crmcusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFTRCUSID", nullable: true })
  isftrcusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREATEMAINCONID", nullable: true })
  createmainconid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COLIDSALESMANTYPE", nullable: true })
  colidsalesmantype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BEGINNINGAMOUNT", nullable: true })
  beginningamount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BEGINNINGTYPE", nullable: true })
  beginningtype: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "BEGINNINGDATE", nullable: true })
  beginningdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMDESCR", nullable: true })
  crmdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMSHORTDESCR", nullable: true, length: 100 })
  crmshortdescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMCMPID", nullable: true })
  crmcmpid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMJUSTIFICATIONUSE", nullable: true })
  crmjustificationuse: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMSECJUSTIFICATIONUSE", nullable: true })
  crmsecjustificationuse: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMCOMMENTSUSE", nullable: true })
  crmcommentsuse: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMJUSTIFICATIONCMTID", nullable: true })
  crmjustificationcmtid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMSECJUSTIFICATIONCMTID", nullable: true })
  crmsecjustificationcmtid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMCOMMENTSCMTID", nullable: true })
  crmcommentscmtid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CRMJUSTIFICATIONDESCR",
    nullable: true,
    length: 100,
  })
  crmjustificationdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CRMSECJUSTIFICATIONDESCR",
    nullable: true,
    length: 100,
  })
  crmsecjustificationdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMCOMMENTSDESCR", nullable: true, length: 100 })
  crmcommentsdescr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CRMCOMMENTSCONTENT", nullable: true })
  crmcommentscontent: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMACTIVITYPERMATERIALCHECK", nullable: true })
  crmactivitypermaterialcheck: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMOPPORTUNITYCHECK", nullable: true })
  crmopportunitycheck: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CRMOFFERCHECK", nullable: true })
  crmoffercheck: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHANGEACTIVITIESWITHOUTSTATUS", nullable: true })
  changeactivitieswithoutstatus: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AFFECTSCURRENTACTIVITY", nullable: true })
  affectscurrentactivity: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AFFECTSRELATIVEACTIVITY", nullable: true })
  affectsrelativeactivity: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AUTOMATICSELECTIONACTIVITIES", nullable: true })
  automaticselectionactivities: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ASSIGNONLYNOTASSIGNED", nullable: true })
  assignonlynotassigned: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COPYMOVERELACTIVITY", nullable: true })
  copymoverelactivity: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INSUSER", nullable: true, length: 100 })
  insuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CHANNEL", nullable: true, length: 100 })
  channel: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EVAINFO", default: () => "(0)" })
  evainfo: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "USRIDS", nullable: true, length: 250 })
  usrids: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USGIDS", nullable: true, length: 250 })
  usgids: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RPTPRMS2", nullable: true })
  rptprms2: string | null;

  @Field(() => [Tasktrn], { nullable: true })
  @OneToMany(() => Tasktrn, (tasktrn) => tasktrn.utask)
  tasktrns: Tasktrn[];
}
