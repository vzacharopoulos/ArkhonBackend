import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Acceventtype } from "./Acceventtype";
import { Branch } from "./Branch";
import { Journal } from "./Journal";
import { Currency } from "./Currency";
import { Acctrn } from "./Acctrn";

@Index("UNI_1100", ["id"], { unique: true })
@Index("UNI_1136", ["comid", "fyeid", "dsrid", "dsrnumber"], { unique: true })
@Index(
  "UNIX_1000",
  ["comid", "transdate", "jouid", "journalnum", "approved"],
  {}
)
@Index("UNIX_1001", ["rootatrid"], {})
@Index("UNIX_1054", ["ftrid"], {})
@Index("UNIX_1059", ["approved", "batchid"], {})
@Entity("ACCOUNTEVENT", { schema: "dbo" })
export class Accountevent {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "ACEID", nullable: true })
  aceid: number | null;

  @Column("datetime", { name: "APPROVALDATE", nullable: true })
  approvaldate: Date | null;

  @Column("int", { name: "APPROVALUSER", nullable: true })
  approvaluser: number | null;

  @Column("smallint", { name: "APPROVED" })
  approved: number;

  @Column("int", { name: "ATRID", nullable: true })
  atrid: number | null;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("int", { name: "DSRID", unique: true })
  dsrid: number;

  @Column("int", { name: "FIPID" })
  fipid: number;

  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Column("smallint", { name: "ISBALANCED", default: () => "0" })
  isbalanced: number;

  @Column("smallint", { name: "ISCANCELLED", default: () => "0" })
  iscancelled: number;

  @Column("smallint", { name: "ISPRINTED", default: () => "0" })
  isprinted: number;

  @Column("int", { name: "JOUID" })
  jouid: number;

  @Column("int", { name: "JOURNALNUM", default: () => "0" })
  journalnum: number;

  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "0" })
  updcount: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Column("int", { name: "DSRNUMBER", unique: true })
  dsrnumber: number;

  @Column("smallint", { name: "SOURCE", default: () => "0" })
  source: number;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("datetime", { name: "TRANSDATE" })
  transdate: Date;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("int", { name: "ROOTATRID", nullable: true })
  rootatrid: number | null;

  @Column("float", { name: "SECONDARYRATE", nullable: true, precision: 53 })
  secondaryrate: number | null;

  @Column("smallint", { name: "ANALLEVEL", nullable: true })
  anallevel: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "AEPID", nullable: true })
  aepid: number | null;

  @Column("varbinary", { name: "ENTRYDATA", nullable: true })
  entrydata: Buffer | null;

  @Column("int", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Column("int", { name: "CFOID", nullable: true })
  cfoid: number | null;

  @Column("int", { name: "RELACEID", nullable: true })
  relaceid: number | null;

  @Column("smallint", { name: "RELTYPE", nullable: true })
  reltype: number | null;

  @Column("int", { name: "MGREC_ID1", nullable: true })
  mgrecId1: number | null;

  @Column("int", { name: "ADSID", nullable: true })
  adsid: number | null;

  @Column("varchar", { name: "ANALDISTCODE", nullable: true, length: 25 })
  analdistcode: string | null;

  @Column("int", { name: "TRADERACCID", nullable: true })
  traderaccid: number | null;

  @Column("int", { name: "ROOTACELINE", nullable: true })
  rootaceline: number | null;

  @Column("int", { name: "BATCHDEPRID", nullable: true })
  batchdeprid: number | null;

  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;

  @Column("datetime", { name: "CORFROMDATE", nullable: true })
  corfromdate: Date | null;

  @Column("datetime", { name: "CORTODATE", nullable: true })
  cortodate: Date | null;

  @Column("int", { name: "CORACEID", nullable: true })
  coraceid: number | null;

  @Column("int", { name: "COROTHERACEID", nullable: true })
  corotheraceid: number | null;

  @Column("int", { name: "CORORIGINACEID", nullable: true })
  cororiginaceid: number | null;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 80 })
  name: string | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Column("varchar", { name: "TR_AFM", nullable: true, length: 15 })
  trAfm: string | null;

  @Column("varchar", { name: "TR_NAME", nullable: true, length: 80 })
  trName: string | null;

  @Column("int", { name: "TR_CNTID", nullable: true })
  trCntid: number | null;

  @Column("varchar", { name: "TR_STREET", nullable: true, length: 50 })
  trStreet: string | null;

  @Column("varchar", { name: "TR_ZIPCODE", nullable: true, length: 10 })
  trZipcode: string | null;

  @Column("varchar", { name: "TR_DISTRICT", nullable: true, length: 25 })
  trDistrict: string | null;

  @ManyToOne(() => Acceventtype, (acceventtype) => acceventtype.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @ManyToOne(() => Branch, (branch) => branch.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @ManyToOne(() => Journal, (journal) => journal.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "JOUID", referencedColumnName: "codeid" },
  ])
  journal: Journal;

  @ManyToOne(() => Currency, (currency) => currency.accountevents)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @OneToMany(() => Acctrn, (acctrn) => acctrn.ace)
  acctrns: Acctrn[];
}
