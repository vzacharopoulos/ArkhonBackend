import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account";
import { Accountevent } from "./Accountevent";

@Index("UNI_1124", ["id"], { unique: true })
@Index("UNIX_1002", ["aceid", "linenum"], {})
@Index("UNIX_1003", ["rootatrid"], {})
@Index("UNIX_1004", ["comid", "transdate", "aceid"], {})
@Index("UNIX_1005", ["accid", "transdate"], {})
@Index("UNIX_1071", ["atrid"], {})
@Index("UNIX_1107", ["rootatrid", "jouid", "comid"], {})
@Entity("ACCTRN", { schema: "dbo" })
export class Acctrn {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "AETID" })
  aetid: number;

  @Column("int", { name: "ATRID", nullable: true })
  atrid: number | null;

  @Column("int", { name: "ROOTATRID", nullable: true })
  rootatrid: number | null;

  @Column("int", { name: "ACEID" })
  aceid: number;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("int", { name: "JOUID" })
  jouid: number;

  @Column("int", { name: "JOURNALNUM", default: () => "0" })
  journalnum: number;

  @Column("datetime", { name: "TRANSDATE" })
  transdate: Date;

  @Column("smallint", { name: "APPROVED" })
  approved: number;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "CURID" })
  curid: number;

  @Column("int", { name: "ACCID" })
  accid: number;

  @Column("float", { name: "TRNVALUE", precision: 53 })
  trnvalue: number;

  @Column("float", { name: "LOCALVALUE", precision: 53 })
  localvalue: number;

  @Column("float", { name: "SECONDARYVALUE", nullable: true, precision: 53 })
  secondaryvalue: number | null;

  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "BRAID" })
  braid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("int", { name: "FIPID" })
  fipid: number;

  @Column("smallint", { name: "ISDEBIT", nullable: true, default: () => "0" })
  isdebit: number | null;

  @Column("smallint", { name: "ISCREDIT", nullable: true, default: () => "0" })
  iscredit: number | null;

  @Column("smallint", { name: "ISOPENING", nullable: true, default: () => "0" })
  isopening: number | null;

  @Column("smallint", { name: "ISCLOSING", nullable: true, default: () => "0" })
  isclosing: number | null;

  @Column("smallint", { name: "ISFLAG5", nullable: true, default: () => "0" })
  isflag5: number | null;

  @Column("smallint", { name: "ISFLAG6", nullable: true, default: () => "0" })
  isflag6: number | null;

  @Column("smallint", { name: "ISFLAG7", nullable: true, default: () => "0" })
  isflag7: number | null;

  @Column("smallint", { name: "ISFLAG8", nullable: true, default: () => "0" })
  isflag8: number | null;

  @Column("smallint", { name: "ISFLAG9", nullable: true, default: () => "0" })
  isflag9: number | null;

  @Column("smallint", { name: "ISFLAG10", nullable: true, default: () => "0" })
  isflag10: number | null;

  @Column("smallint", { name: "ISFLAG11", nullable: true, default: () => "0" })
  isflag11: number | null;

  @Column("smallint", { name: "ISFLAG12", nullable: true, default: () => "0" })
  isflag12: number | null;

  @Column("smallint", { name: "ISFLAG13", nullable: true, default: () => "0" })
  isflag13: number | null;

  @Column("smallint", { name: "ISFLAG14", nullable: true, default: () => "0" })
  isflag14: number | null;

  @Column("smallint", { name: "ISFLAG15", nullable: true, default: () => "0" })
  isflag15: number | null;

  @Column("smallint", { name: "ISFLAG16", nullable: true, default: () => "0" })
  isflag16: number | null;

  @Column("smallint", { name: "ISFLAG17", nullable: true, default: () => "0" })
  isflag17: number | null;

  @Column("smallint", { name: "ISFLAG18", nullable: true, default: () => "0" })
  isflag18: number | null;

  @Column("smallint", { name: "ISFLAG19", nullable: true, default: () => "0" })
  isflag19: number | null;

  @Column("smallint", { name: "ISFLAG20", nullable: true, default: () => "0" })
  isflag20: number | null;

  @Column("float", { name: "ANALPERC", nullable: true, precision: 53 })
  analperc: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("varchar", { name: "ADSID", nullable: true, length: 25 })
  adsid: string | null;

  @Column("float", { name: "KEPYOCOUNT", nullable: true, precision: 53 })
  kepyocount: number | null;

  @Column("float", { name: "KEPYOVALUE", nullable: true, precision: 53 })
  kepyovalue: number | null;

  @Column("float", { name: "LKEPYOVALUE", nullable: true, precision: 53 })
  lkepyovalue: number | null;

  @Column("float", { name: "SKEPYOVALUE", nullable: true, precision: 53 })
  skepyovalue: number | null;

  @Column("datetime", { name: "DATEENDCHECK", nullable: true })
  dateendcheck: Date | null;

  @Column("int", { name: "MGREC_ID2", nullable: true })
  mgrecId2: number | null;

  @Column("smallint", {
    name: "UPDATEKEPYO",
    nullable: true,
    default: () => "0",
  })
  updatekepyo: number | null;

  @Column("int", { name: "ACCDIFMODELID", nullable: true })
  accdifmodelid: number | null;

  @Column("int", { name: "DIFATRID", nullable: true })
  difatrid: number | null;

  @Column("float", { name: "MYFCOUNT", nullable: true, precision: 53 })
  myfcount: number | null;

  @ManyToOne(() => Account, (account) => account.acctrns)
  @JoinColumn([{ name: "ACCID", referencedColumnName: "id" }])
  acc: Account;

  @ManyToOne(() => Accountevent, (accountevent) => accountevent.acctrns, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ACEID", referencedColumnName: "id" }])
  ace: Accountevent;
}
