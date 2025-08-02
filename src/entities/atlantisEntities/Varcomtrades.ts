import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Comtradelines } from "./Comtradelines";
import { Salesparams } from "./Salesparams";
import { Varcomtemplines } from "./Varcomtemplines";
import { Company } from "./Company";
import { Vatcategory } from "./Vatcategory";

@Index("UNI_5124", ["comid", "codeid"], { unique: true })
@Entity("VARCOMTRADES", { schema: "dbo" })
export class Varcomtrades {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Column("smallint", { name: "GROUPVALUE" })
  groupvalue: number;

  @Column("smallint", { name: "TURNOVERUPD" })
  turnoverupd: number;

  @Column("smallint", { name: "SUBJECTTOVAT", default: () => "1" })
  subjecttovat: number;

  @Column("smallint", { name: "KEPYOUPD" })
  kepyoupd: number;

  @Column("int", { name: "VATVCTID", nullable: true })
  vatvctid: number | null;

  @Column("int", { name: "SOURCETYPE", default: () => "0" })
  sourcetype: number;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("smallint", { name: "INTRMODE", default: () => "(0)" })
  intrmode: number;

  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Column("int", { name: "TAXKIND", nullable: true })
  taxkind: number | null;

  @Column("int", { name: "KADID", nullable: true })
  kadid: number | null;

  @Column("int", { name: "MYDATACATID", nullable: true })
  mydatacatid: number | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("smallint", {
    name: "VATDEDUCTION",
    nullable: true,
    default: () => "(0)",
  })
  vatdeduction: number | null;

  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("smallint", { name: "ACCOMMODATIONFEE", default: () => "(0)" })
  accommodationfee: number;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.varcomtrades)
  comtradelines: Comtradelines[];

  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades)
  salesparams: Salesparams[];

  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades2)
  salesparams2: Salesparams[];

  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades3)
  salesparams3: Salesparams[];

  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades4)
  salesparams4: Salesparams[];

  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades5)
  salesparams5: Salesparams[];

  @OneToMany(
    () => Varcomtemplines,
    (varcomtemplines) => varcomtemplines.varcomtrades
  )
  varcomtemplines: Varcomtemplines[];

  @ManyToOne(() => Company, (company) => company.varcomtrades)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.varcomtrades)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;
}
