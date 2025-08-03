import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Tasktrn } from "./Tasktrn.entity";

@Index("UNI_5852", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("UTASK", { schema: "dbo" })
export class Utask {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Column("int", { name: "PARENTTASID", default: () => "0" })
  parenttasid: number;

  @Column("int", { name: "OFFSET", nullable: true })
  offset: number | null;

  @Column("smallint", { name: "CATEGORYOFFSET", nullable: true })
  categoryoffset: number | null;

  @Column("smallint", { name: "PRIORITY", default: () => "0" })
  priority: number;

  @Column("int", { name: "PROCID", nullable: true })
  procid: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("smallint", { name: "TASKCATEGORY", default: () => "0" })
  taskcategory: number;

  @Column("varchar", { name: "EMAILMSG", nullable: true })
  emailmsg: string | null;

  @Column("smallint", { name: "HASEMAIL", default: () => "0" })
  hasemail: number;

  @Column("smallint", { name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Column("int", { name: "DESTDSRID", nullable: true })
  destdsrid: number | null;

  @Column("int", { name: "NEWSTAID", nullable: true })
  newstaid: number | null;

  @Column("smallint", { name: "FTRCATEGORY", default: () => "0" })
  ftrcategory: number;

  @Column("int", { name: "TASPRIORITY", nullable: true, default: () => "0" })
  taspriority: number | null;

  @Column("smallint", {
    name: "USEPRIORITY",
    nullable: true,
    default: () => "0",
  })
  usepriority: number | null;

  @Column("varchar", { name: "CONDITIONS", nullable: true })
  conditions: string | null;

  @Column("smallint", { name: "ASAP", nullable: true, default: () => "0" })
  asap: number | null;

  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Column("varchar", { name: "PRINTERNAME", nullable: true, length: 255 })
  printername: string | null;

  @Column("smallint", { name: "PERUSER", nullable: true, default: () => "0" })
  peruser: number | null;

  @Column("varchar", { name: "REMINDER", nullable: true, length: 255 })
  reminder: string | null;

  @Column("smallint", {
    name: "USERMESSAGE",
    nullable: true,
    default: () => "0",
  })
  usermessage: number | null;

  @Column("smallint", {
    name: "PRINTPERPOST",
    nullable: true,
    default: () => "0",
  })
  printperpost: number | null;


  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Column("smallint", { name: "SENDEMAIL", default: () => "0" })
  sendemail: number;

  @Column("smallint", {
    name: "BCKGEXEC",
    nullable: true,
    default: () => "(0)",
  })
  bckgexec: number | null;

  @Column("smallint", {
    name: "ATTACHFORMAT",
    nullable: true,
    default: () => "(0)",
  })
  attachformat: number | null;

  @Column("smallint", {
    name: "DRAFTTYPE",
    nullable: true,
    default: () => "(0)",
  })
  drafttype: number | null;

  @Column("int", { name: "PRTTYPE", nullable: true })
  prttype: number | null;

  @Column("int", { name: "PRTORIENTATION", nullable: true })
  prtorientation: number | null;

  @Column("int", { name: "NUMOFCOPIES", nullable: true })
  numofcopies: number | null;

  @Column("varchar", { name: "EMAILTITLE", nullable: true, length: 255 })
  emailtitle: string | null;

  @Column("int", { name: "RPTID", nullable: true })
  rptid: number | null;

  @Column("varchar", { name: "RPTPRMS", nullable: true })
  rptprms: string | null;

  @Column("int", { name: "UTORDER", nullable: true, default: () => "(0)" })
  utorder: number | null;

  @Column("varchar", { name: "MAILRECIPIENTSCC", nullable: true, length: 255 })
  mailrecipientscc: string | null;

  @Column("varchar", { name: "MAILRECIPIENTSBCC", nullable: true, length: 255 })
  mailrecipientsbcc: string | null;

  @Column("smallint", {
    name: "SETASPRINTED",
    nullable: true,
    default: () => "(0)",
  })
  setasprinted: number | null;

  @Column("smallint", { name: "RPTEXPORTFILE", nullable: true })
  rptexportfile: number | null;

  @Column("varchar", { name: "PROGRSCRIPTCODE", nullable: true, length: 100 })
  progrscriptcode: string | null;

  @Column("varchar", {
    name: "PROGRSCRIPTFUNCTION",
    nullable: true,
    length: 255,
  })
  progrscriptfunction: string | null;

  @Column("varchar", { name: "PROGRSCRIPTPARAMS", nullable: true })
  progrscriptparams: string | null;

  @Column("varchar", { name: "CONDITIONSEXEC", nullable: true })
  conditionsexec: string | null;

  @Column("int", { name: "ATPID", nullable: true })
  atpid: number | null;

  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Column("int", { name: "TOGRPID", nullable: true })
  togrpid: number | null;

  @Column("int", { name: "TOUSRID", nullable: true })
  tousrid: number | null;

  @Column("datetime", { name: "FORECASTEDBEGINNING", nullable: true })
  forecastedbeginning: Date | null;

  @Column("int", { name: "REMINDERAMOUNT", nullable: true })
  reminderamount: number | null;

  @Column("int", { name: "REMINDERTYPE", nullable: true })
  remindertype: number | null;

  @Column("datetime", { name: "REMINDERDATE", nullable: true })
  reminderdate: Date | null;

  @Column("smallint", { name: "CRMPRIORITY", nullable: true })
  crmpriority: number | null;

  @Column("smallint", { name: "GRPIDLOGIN", nullable: true })
  grpidlogin: number | null;

  @Column("smallint", { name: "USRIDLOGIN", nullable: true })
  usridlogin: number | null;

  @Column("int", { name: "CRMCUSID", nullable: true })
  crmcusid: number | null;

  @Column("smallint", { name: "ISFTRCUSID", nullable: true })
  isftrcusid: number | null;

  @Column("smallint", { name: "CREATEMAINCONID", nullable: true })
  createmainconid: number | null;

  @Column("smallint", { name: "COLIDSALESMANTYPE", nullable: true })
  colidsalesmantype: number | null;

  @Column("int", { name: "BEGINNINGAMOUNT", nullable: true })
  beginningamount: number | null;

  @Column("int", { name: "BEGINNINGTYPE", nullable: true })
  beginningtype: number | null;

  @Column("datetime", { name: "BEGINNINGDATE", nullable: true })
  beginningdate: Date | null;

  @Column("varchar", { name: "CRMDESCR", nullable: true })
  crmdescr: string | null;

  @Column("varchar", { name: "CRMSHORTDESCR", nullable: true, length: 100 })
  crmshortdescr: string | null;

  @Column("int", { name: "CRMCMPID", nullable: true })
  crmcmpid: number | null;

  @Column("smallint", { name: "CRMJUSTIFICATIONUSE", nullable: true })
  crmjustificationuse: number | null;

  @Column("smallint", { name: "CRMSECJUSTIFICATIONUSE", nullable: true })
  crmsecjustificationuse: number | null;

  @Column("smallint", { name: "CRMCOMMENTSUSE", nullable: true })
  crmcommentsuse: number | null;

  @Column("int", { name: "CRMJUSTIFICATIONCMTID", nullable: true })
  crmjustificationcmtid: number | null;

  @Column("int", { name: "CRMSECJUSTIFICATIONCMTID", nullable: true })
  crmsecjustificationcmtid: number | null;

  @Column("int", { name: "CRMCOMMENTSCMTID", nullable: true })
  crmcommentscmtid: number | null;

  @Column("varchar", {
    name: "CRMJUSTIFICATIONDESCR",
    nullable: true,
    length: 100,
  })
  crmjustificationdescr: string | null;

  @Column("varchar", {
    name: "CRMSECJUSTIFICATIONDESCR",
    nullable: true,
    length: 100,
  })
  crmsecjustificationdescr: string | null;

  @Column("varchar", { name: "CRMCOMMENTSDESCR", nullable: true, length: 100 })
  crmcommentsdescr: string | null;

  @Column("varchar", { name: "CRMCOMMENTSCONTENT", nullable: true })
  crmcommentscontent: string | null;

  @Column("smallint", { name: "CRMACTIVITYPERMATERIALCHECK", nullable: true })
  crmactivitypermaterialcheck: number | null;

  @Column("smallint", { name: "CRMOPPORTUNITYCHECK", nullable: true })
  crmopportunitycheck: number | null;

  @Column("smallint", { name: "CRMOFFERCHECK", nullable: true })
  crmoffercheck: number | null;

  @Column("smallint", { name: "CHANGEACTIVITIESWITHOUTSTATUS", nullable: true })
  changeactivitieswithoutstatus: number | null;

  @Column("smallint", { name: "AFFECTSCURRENTACTIVITY", nullable: true })
  affectscurrentactivity: number | null;

  @Column("smallint", { name: "AFFECTSRELATIVEACTIVITY", nullable: true })
  affectsrelativeactivity: number | null;

  @Column("smallint", { name: "AUTOMATICSELECTIONACTIVITIES", nullable: true })
  automaticselectionactivities: number | null;

  @Column("smallint", { name: "ASSIGNONLYNOTASSIGNED", nullable: true })
  assignonlynotassigned: number | null;

  @Column("smallint", { name: "COPYMOVERELACTIVITY", nullable: true })
  copymoverelactivity: number | null;

  @Column("varchar", { name: "INSUSER", nullable: true, length: 100 })
  insuser: string | null;

  @Column("varchar", { name: "CHANNEL", nullable: true, length: 100 })
  channel: string | null;

  @Column("smallint", { name: "EVAINFO", default: () => "(0)" })
  evainfo: number;

  @Column("varchar", { name: "USRIDS", nullable: true, length: 250 })
  usrids: string | null;

  @Column("varchar", { name: "USGIDS", nullable: true, length: 250 })
  usgids: string | null;

  @Column("varchar", { name: "RPTPRMS2", nullable: true })
  rptprms2: string | null;

  @OneToMany(() => Tasktrn, (tasktrn) => tasktrn.utask)
  tasktrns: Tasktrn[];
}
