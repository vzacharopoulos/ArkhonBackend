import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Utask } from "./Utask.entity";

@Index("UNI_5856", ["id"], { unique: true })
@ObjectType()
@Entity("TASKTRN", { schema: "dbo" })
export class Tasktrn {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "PARENTTASID", default: () => "0" })
  parenttasid: number;

  @Field({ nullable: true })
  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRIORITY", default: () => "0" })
  priority: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CREATIONDATE", nullable: true })
  creationdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DUEDATE", nullable: true })
  duedate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PERFORMDATE", nullable: true })
  performdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TASKCATEGORY", default: () => "0" })
  taskcategory: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", default: () => "0" })
  status: number;

  @Field({ nullable: true })
  @Column("int", { name: "ASSIGNEDUSRID", nullable: true })
  assignedusrid: number | null;


  @Field({ nullable: true })
  @Column("varchar", { name: "FTRTRADECODE", nullable: true, length: 30 })
  ftrtradecode: string | null;

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
  @Column("smallint", { name: "ASAP", nullable: true, default: () => "0" })
  asap: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMINDER", nullable: true })
  reminder: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "USGID", nullable: true })
  usgid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FROMUSRID", nullable: true })
  fromusrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MESSREAD", default: () => "0" })
  messread: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FNAMES", nullable: true, length: 255 })
  fnames: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CREATIONTIME", nullable: true })
  creationtime: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAILMSG", nullable: true })
  emailmsg: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BCKGEXEC",
    nullable: true,
    default: () => "(0)",
  })
  bckgexec: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "UTORDER", nullable: true, default: () => "(0)" })
  utorder: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACTID", nullable: true })
  actid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACTSTATUS", nullable: true })
  actstatus: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USRIDS", nullable: true, length: 250 })
  usrids: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USGIDS", nullable: true, length: 250 })
  usgids: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EVAINFO", default: () => "(0)" })
  evainfo: number;

  @Field({ nullable: true })
  @ManyToOne(() => Utask, (utask) => utask.tasktrns, { onDelete: "CASCADE" })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TASID", referencedColumnName: "codeid" },
  ])
  utask: Utask;
}
