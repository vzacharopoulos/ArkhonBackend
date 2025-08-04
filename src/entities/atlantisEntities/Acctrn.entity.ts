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
import { Account } from "./Account.entity";
import { Accountevent } from "./Accountevent.entity";

@Index("UNI_1124", ["id"], { unique: true })
@Index("UNIX_1002", ["aceid", "linenum"], {})
@Index("UNIX_1003", ["rootatrid"], {})
@Index("UNIX_1004", ["comid", "transdate", "aceid"], {})
@Index("UNIX_1005", ["accid", "transdate"], {})
@Index("UNIX_1071", ["atrid"], {})
@Index("UNIX_1107", ["rootatrid", "jouid", "comid"], {})
@ObjectType()
@Entity("ACCTRN", { schema: "dbo" })
export class Acctrn {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "AETID" })
  aetid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ATRID", nullable: true })
  atrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ROOTATRID", nullable: true })
  rootatrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACEID" })
  aceid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("int", { name: "JOUID" })
  jouid: number;

  @Field({ nullable: true })
  @Column("int", { name: "JOURNALNUM", default: () => "0" })
  journalnum: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRANSDATE" })
  transdate: Date;

  @Field({ nullable: true })
  @Column("smallint", { name: "APPROVED" })
  approved: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "CURID" })
  curid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID" })
  accid: number;

  @Field({ nullable: true })
  @Column("float", { name: "TRNVALUE", precision: 53 })
  trnvalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "LOCALVALUE", precision: 53 })
  localvalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYVALUE", nullable: true, precision: 53 })
  secondaryvalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID" })
  braid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISDEBIT", nullable: true, default: () => "0" })
  isdebit: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCREDIT", nullable: true, default: () => "0" })
  iscredit: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISOPENING", nullable: true, default: () => "0" })
  isopening: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCLOSING", nullable: true, default: () => "0" })
  isclosing: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG5", nullable: true, default: () => "0" })
  isflag5: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG6", nullable: true, default: () => "0" })
  isflag6: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG7", nullable: true, default: () => "0" })
  isflag7: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG8", nullable: true, default: () => "0" })
  isflag8: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG9", nullable: true, default: () => "0" })
  isflag9: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG10", nullable: true, default: () => "0" })
  isflag10: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG11", nullable: true, default: () => "0" })
  isflag11: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG12", nullable: true, default: () => "0" })
  isflag12: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG13", nullable: true, default: () => "0" })
  isflag13: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG14", nullable: true, default: () => "0" })
  isflag14: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG15", nullable: true, default: () => "0" })
  isflag15: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG16", nullable: true, default: () => "0" })
  isflag16: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG17", nullable: true, default: () => "0" })
  isflag17: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG18", nullable: true, default: () => "0" })
  isflag18: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG19", nullable: true, default: () => "0" })
  isflag19: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFLAG20", nullable: true, default: () => "0" })
  isflag20: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ANALPERC", nullable: true, precision: 53 })
  analperc: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADSID", nullable: true, length: 25 })
  adsid: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOCOUNT", nullable: true, precision: 53 })
  kepyocount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOVALUE", nullable: true, precision: 53 })
  kepyovalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYOVALUE", nullable: true, precision: 53 })
  lkepyovalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SKEPYOVALUE", nullable: true, precision: 53 })
  skepyovalue: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DATEENDCHECK", nullable: true })
  dateendcheck: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "MGREC_ID2", nullable: true })
  mgrecId2: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "UPDATEKEPYO",
    nullable: true,
    default: () => "0",
  })
  updatekepyo: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDIFMODELID", nullable: true })
  accdifmodelid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIFATRID", nullable: true })
  difatrid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MYFCOUNT", nullable: true, precision: 53 })
  myfcount: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.acctrns)
  @JoinColumn([{ name: "ACCID", referencedColumnName: "id" }])
  acc: Account;

  @Field({ nullable: true })
  @ManyToOne(() => Accountevent, (accountevent) => accountevent.acctrns, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ACEID", referencedColumnName: "id" }])
  ace: Accountevent;
}
