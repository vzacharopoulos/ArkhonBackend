import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Utask } from "./Utask";

@Index("UNI_5856", ["id"], { unique: true })
@Entity("TASKTRN", { schema: "dbo" })
export class Tasktrn {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "PARENTTASID", default: () => "0" })
  parenttasid: number;

  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Column("smallint", { name: "PRIORITY", default: () => "0" })
  priority: number;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("datetime", { name: "CREATIONDATE", nullable: true })
  creationdate: Date | null;

  @Column("datetime", { name: "DUEDATE", nullable: true })
  duedate: Date | null;

  @Column("datetime", { name: "PERFORMDATE", nullable: true })
  performdate: Date | null;

  @Column("smallint", { name: "TASKCATEGORY", default: () => "0" })
  taskcategory: number;

  @Column("smallint", { name: "STATUS", default: () => "0" })
  status: number;

  @Column("int", { name: "ASSIGNEDUSRID", nullable: true })
  assignedusrid: number | null;

  @Column("varbinary", { name: "INFO", nullable: true })
  info: Buffer | null;

  @Column("varchar", { name: "FTRTRADECODE", nullable: true, length: 30 })
  ftrtradecode: string | null;

  @Column("int", { name: "TASPRIORITY", nullable: true, default: () => "0" })
  taspriority: number | null;

  @Column("smallint", {
    name: "USEPRIORITY",
    nullable: true,
    default: () => "0",
  })
  usepriority: number | null;

  @Column("smallint", { name: "ASAP", nullable: true, default: () => "0" })
  asap: number | null;

  @Column("varchar", { name: "REMINDER", nullable: true })
  reminder: string | null;

  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Column("int", { name: "FROMUSRID", nullable: true })
  fromusrid: number | null;

  @Column("smallint", { name: "MESSREAD", default: () => "0" })
  messread: number;

  @Column("varchar", { name: "FNAMES", nullable: true, length: 255 })
  fnames: string | null;

  @Column("datetime", { name: "CREATIONTIME", nullable: true })
  creationtime: Date | null;

  @Column("varchar", { name: "EMAILMSG", nullable: true })
  emailmsg: string | null;

  @Column("smallint", {
    name: "BCKGEXEC",
    nullable: true,
    default: () => "(0)",
  })
  bckgexec: number | null;

  @Column("int", { name: "UTORDER", nullable: true, default: () => "(0)" })
  utorder: number | null;

  @Column("int", { name: "ACTID", nullable: true })
  actid: number | null;

  @Column("smallint", { name: "ACTSTATUS", nullable: true })
  actstatus: number | null;

  @Column("varchar", { name: "USRIDS", nullable: true, length: 250 })
  usrids: string | null;

  @Column("varchar", { name: "USGIDS", nullable: true, length: 250 })
  usgids: string | null;

  @Column("smallint", { name: "EVAINFO", default: () => "(0)" })
  evainfo: number;

  @ManyToOne(() => Utask, (utask) => utask.tasktrns, { onDelete: "CASCADE" })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TASID", referencedColumnName: "codeid" },
  ])
  utask: Utask;
}
