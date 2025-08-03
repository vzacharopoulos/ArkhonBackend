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
import { Customer } from "./Customer.entity";
import { Pgrouplines } from "./Pgrouplines.entity";
import { Company } from "./Company.entity";
import { Reliablines } from "./Reliablines.entity";

@Index("UNI_5016", ["comid", "codeid"], { unique: true })
@Index("UNI_5242", ["id"], { unique: true })
@ObjectType()
@Entity("RELIABILITY", { schema: "dbo" })
export class Reliability {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "RLBMODE", nullable: true, default: () => "0" })
  rlbmode: number | null;

  @Column("float", { name: "VALUELIMIT", nullable: true, precision: 53 })
  valuelimit: number | null;

  @Column("float", { name: "DISCLIMIT", nullable: true, precision: 53 })
  disclimit: number | null;

  @Column("smallint", {
    name: "CONTINUITY",
    nullable: true,
    default: () => "0",
  })
  continuity: number | null;

  @Column("varchar", { name: "MSG", nullable: true, length: 50 })
  msg: string | null;

  @Column("varchar", { name: "PWD", nullable: true, length: 20 })
  pwd: string | null;

  @Column("smallint", { name: "PTRMODE", nullable: true })
  ptrmode: number | null;

  @Column("smallint", { name: "FDTMODE", nullable: true })
  fdtmode: number | null;

  @Column("float", { name: "ORDERLIMIT", nullable: true, precision: 53 })
  orderlimit: number | null;

  @Column("float", { name: "MEANPAYLIMIT", nullable: true, precision: 53 })
  meanpaylimit: number | null;

  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Column("float", { name: "SELFOPENCRDLIMIT", nullable: true, precision: 53 })
  selfopencrdlimit: number | null;

  @Column("float", { name: "MEANDUETIME", nullable: true, precision: 53 })
  meanduetime: number | null;

  @Column("varchar", { name: "LOGEXPR", nullable: true, length: 50 })
  logexpr: string | null;

  @Column("float", { name: "LOGEXPRLIMIT", nullable: true, precision: 53 })
  logexprlimit: number | null;

  @Column("varchar", { name: "VALUELIMITPWD", nullable: true, length: 20 })
  valuelimitpwd: string | null;

  @Column("varchar", { name: "DISCLIMITPWD", nullable: true, length: 20 })
  disclimitpwd: string | null;

  @Column("varchar", { name: "ORDERLIMITPWD", nullable: true, length: 20 })
  orderlimitpwd: string | null;

  @Column("varchar", { name: "MEANPAYLIMITPWD", nullable: true, length: 20 })
  meanpaylimitpwd: string | null;

  @Column("varchar", { name: "ACCCRDLIMITPWD", nullable: true, length: 20 })
  acccrdlimitpwd: string | null;

  @Column("varchar", { name: "OPENCRDLIMITPWD", nullable: true, length: 20 })
  opencrdlimitpwd: string | null;

  @Column("varchar", {
    name: "SELFOPENCRDLIMITPWD",
    nullable: true,
    length: 20,
  })
  selfopencrdlimitpwd: string | null;

  @Column("varchar", { name: "MEANDUETIMEPWD", nullable: true, length: 20 })
  meanduetimepwd: string | null;

  @Column("varchar", { name: "LOGEXPRLIMITPWD", nullable: true, length: 20 })
  logexprlimitpwd: string | null;

  @Column("varchar", { name: "PTRMODEPWD", nullable: true, length: 20 })
  ptrmodepwd: string | null;

  @Column("varchar", { name: "FDTMODEPWD", nullable: true, length: 20 })
  fdtmodepwd: string | null;

  @Column("varchar", { name: "PWDSCRIPT", nullable: true })
  pwdscript: string | null;

  @Column("smallint", { name: "VARPWD", default: () => "0" })
  varpwd: number;

  @Column("float", { name: "TRANSDOCLIMIT", nullable: true, precision: 53 })
  transdoclimit: number | null;

  @Column("varchar", { name: "TRANSDOCLIMITPWD", nullable: true, length: 20 })
  transdoclimitpwd: string | null;

  @Column("int", { name: "DAYSOFOUTSTANDINGINVOICE", nullable: true })
  daysofoutstandinginvoice: number | null;

  @Column("varchar", {
    name: "DAYSOFOUTSTANDINGINVOICEPWD",
    nullable: true,
    length: 20,
  })
  daysofoutstandinginvoicepwd: string | null;

  @OneToMany(() => Customer, (customer) => customer.reliability)
  customers: Customer[];

  @OneToMany(() => Pgrouplines, (pgrouplines) => pgrouplines.reliability)
  pgrouplines: Pgrouplines[];

  @ManyToOne(() => Company, (company) => company.reliabilities)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Reliablines, (reliablines) => reliablines.link)
  reliablines: Reliablines[];
}
