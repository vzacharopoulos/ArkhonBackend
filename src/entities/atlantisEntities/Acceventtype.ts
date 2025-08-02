import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Accclosetemplate } from "./Accclosetemplate";
import { Account } from "./Account";
import { Journal } from "./Journal";
import { Company } from "./Company";
import { Accevtemplate } from "./Accevtemplate";
import { Accountevent } from "./Accountevent";
import { Analdist } from "./Analdist";
import { Userjournallines } from "./Userjournallines";

@Index("UNI_800", ["comid", "codeid"], { unique: true })
@Entity("ACCEVENTTYPE", { schema: "dbo" })
export class Acceventtype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("smallint", { name: "UPDKEPYOBALANCESHEET", default: () => "1" })
  updkepyobalancesheet: number;

  @Column("smallint", { name: "ISCANCELLING", default: () => "0" })
  iscancelling: number;

  @Column("smallint", { name: "ISANAL", default: () => "0" })
  isanal: number;

  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Column("int", { name: "DLAID", nullable: true })
  dlaid: number | null;

  @Column("smallint", { name: "ABCMODE", default: () => "1" })
  abcmode: number;

  @Column("int", { name: "ABCMODEL", nullable: true })
  abcmodel: number | null;

  @Column("smallint", { name: "ABCANAL", default: () => "0" })
  abcanal: number;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("smallint", { name: "NOUPDKEPYO", default: () => "(0)" })
  noupdkepyo: number;

  @Column("smallint", { name: "NOUPDMYF", default: () => "(0)" })
  noupdmyf: number;

  @Column("smallint", { name: "ZEROVALUEMODE", default: () => "(0)" })
  zerovaluemode: number;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @OneToMany(
    () => Accclosetemplate,
    (accclosetemplate) => accclosetemplate.acceventtype
  )
  accclosetemplates: Accclosetemplate[];

  @ManyToOne(() => Account, (account) => account.acceventtypes)
  @JoinColumn([{ name: "PRIMARYACCOUNT", referencedColumnName: "id" }])
  primaryaccount: Account;

  @ManyToOne(() => Journal, (journal) => journal.acceventtypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "JOUID", referencedColumnName: "codeid" },
  ])
  journal: Journal;

  @ManyToOne(() => Company, (company) => company.acceventtypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Accevtemplate, (accevtemplate) => accevtemplate.acceventtype)
  accevtemplates: Accevtemplate[];

  @OneToMany(() => Accountevent, (accountevent) => accountevent.acceventtype)
  accountevents: Accountevent[];

  @OneToMany(() => Analdist, (analdist) => analdist.acceventtype)
  analdists: Analdist[];

  @OneToMany(
    () => Userjournallines,
    (userjournallines) => userjournallines.acceventtype
  )
  userjournallines: Userjournallines[];
}
