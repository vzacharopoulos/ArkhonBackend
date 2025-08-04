import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Acceventtype } from "./Acceventtype.entity";
import { Branch } from "./Branch.entity";
import { Journal } from "./Journal.entity";
import { Currency } from "./Currency.entity";
import { Acctrn } from "./Acctrn.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
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

  @Field({ nullable: true })
  @Column("int", { name: "ACEID", nullable: true })
  aceid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "APPROVALDATE", nullable: true })
  approvaldate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "APPROVALUSER", nullable: true })
  approvaluser: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "APPROVED" })
  approved: number;

  @Field({ nullable: true })
  @Column("int", { name: "ATRID", nullable: true })
  atrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", unique: true })
  dsrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISBALANCED", default: () => "0" })
  isbalanced: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCANCELLED", default: () => "0" })
  iscancelled: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPRINTED", default: () => "0" })
  isprinted: number;

  @Field({ nullable: true })
  @Column("int", { name: "JOUID" })
  jouid: number;

  @Field({ nullable: true })
  @Column("int", { name: "JOURNALNUM", default: () => "0" })
  journalnum: number;

  @Field({ nullable: true })
  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "0" })
  updcount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRNUMBER", unique: true })
  dsrnumber: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", default: () => "0" })
  source: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TRANSDATE" })
  transdate: Date;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("int", { name: "ROOTATRID", nullable: true })
  rootatrid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYRATE", nullable: true, precision: 53 })
  secondaryrate: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ANALLEVEL", nullable: true })
  anallevel: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "AEPID", nullable: true })
  aepid: number | null;



  @Field({ nullable: true })
  @Column("int", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CFOID", nullable: true })
  cfoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELACEID", nullable: true })
  relaceid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RELTYPE", nullable: true })
  reltype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MGREC_ID1", nullable: true })
  mgrecId1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADSID", nullable: true })
  adsid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALDISTCODE", nullable: true, length: 25 })
  analdistcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TRADERACCID", nullable: true })
  traderaccid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ROOTACELINE", nullable: true })
  rootaceline: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BATCHDEPRID", nullable: true })
  batchdeprid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CORFROMDATE", nullable: true })
  corfromdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CORTODATE", nullable: true })
  cortodate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "CORACEID", nullable: true })
  coraceid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COROTHERACEID", nullable: true })
  corotheraceid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CORORIGINACEID", nullable: true })
  cororiginaceid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 80 })
  name: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TR_AFM", nullable: true, length: 15 })
  trAfm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TR_NAME", nullable: true, length: 80 })
  trName: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TR_CNTID", nullable: true })
  trCntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TR_STREET", nullable: true, length: 50 })
  trStreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TR_ZIPCODE", nullable: true, length: 10 })
  trZipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TR_DISTRICT", nullable: true, length: 25 })
  trDistrict: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Acceventtype, (acceventtype) => acceventtype.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(() => Journal, (journal) => journal.accountevents)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "JOUID", referencedColumnName: "codeid" },
  ])
  journal: Journal;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.accountevents)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field(() => [Acctrn], { nullable: true })
  @OneToMany(() => Acctrn, (acctrn) => acctrn.ace)
  acctrns: Acctrn[];
}
