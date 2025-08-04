import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Accclosetemplate } from "./Accclosetemplate.entity";
import { Account } from "./Account.entity";
import { Journal } from "./Journal.entity";
import { Company } from "./Company.entity";
import { Accevtemplate } from "./Accevtemplate.entity";
import { Accountevent } from "./Accountevent.entity";
import { Analdist } from "./Analdist.entity";
import { Userjournallines } from "./Userjournallines.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_800", ["comid", "codeid"], { unique: true })
@Entity("ACCEVENTTYPE", { schema: "dbo" })
export class Acceventtype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDKEPYOBALANCESHEET", default: () => "1" })
  updkepyobalancesheet: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCANCELLING", default: () => "0" })
  iscancelling: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISANAL", default: () => "0" })
  isanal: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DLAID", nullable: true })
  dlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ABCMODE", default: () => "1" })
  abcmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "ABCMODEL", nullable: true })
  abcmodel: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ABCANAL", default: () => "0" })
  abcanal: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOUPDKEPYO", default: () => "(0)" })
  noupdkepyo: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOUPDMYF", default: () => "(0)" })
  noupdmyf: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ZEROVALUEMODE", default: () => "(0)" })
  zerovaluemode: number;

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
  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Field(() => [Accclosetemplate], { nullable: true })
  @OneToMany(
    () => Accclosetemplate,
    (accclosetemplate) => accclosetemplate.acceventtype
  )
  accclosetemplates: Accclosetemplate[];

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.acceventtypes)
  @JoinColumn([{ name: "PRIMARYACCOUNT", referencedColumnName: "id" }])
  primaryaccount: Account;

  @Field({ nullable: true })
  @ManyToOne(() => Journal, (journal) => journal.acceventtypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "JOUID", referencedColumnName: "codeid" },
  ])
  journal: Journal;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.acceventtypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Accevtemplate], { nullable: true })
  @OneToMany(() => Accevtemplate, (accevtemplate) => accevtemplate.acceventtype)
  accevtemplates: Accevtemplate[];

  @Field(() => [Accountevent], { nullable: true })
  @OneToMany(() => Accountevent, (accountevent) => accountevent.acceventtype)
  accountevents: Accountevent[];

  @Field(() => [Analdist], { nullable: true })
  @OneToMany(() => Analdist, (analdist) => analdist.acceventtype)
  analdists: Analdist[];

  @Field(() => [Userjournallines], { nullable: true })
  @OneToMany(
    () => Userjournallines,
    (userjournallines) => userjournallines.acceventtype
  )
  userjournallines: Userjournallines[];
}
