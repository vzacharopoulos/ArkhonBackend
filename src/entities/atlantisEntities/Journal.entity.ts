import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Acceventtype } from "./Acceventtype.entity";
import { Accountevent } from "./Accountevent.entity";
import { Company } from "./Company.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_1200", ["comid", "codeid"], { unique: true })
@Entity("JOURNAL", { schema: "dbo" })
export class Journal {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "TITLE", length: 255 })
  title: string;

  @Column("smallint", { name: "ATYPE", default: () => "1" })
  atype: number;

  @Column("smallint", { name: "KBSDAYS" })
  kbsdays: number;

  @Column("int", { name: "LASTTRANSNUMBER", default: () => "0" })
  lasttransnumber: number;

  @Column("datetime", { name: "LASTDATE", nullable: true })
  lastdate: Date | null;

  @Column("int", { name: "LASTPAGE", default: () => "0" })
  lastpage: number;

  @Column("datetime", { name: "LASTPRINTDATE", nullable: true })
  lastprintdate: Date | null;

  @Column("smallint", { name: "ISTD", default: () => "0" })
  istd: number;

  @OneToMany(() => Acceventtype, (acceventtype) => acceventtype.journal)
  acceventtypes: Acceventtype[];

  @OneToMany(() => Accountevent, (accountevent) => accountevent.journal)
  accountevents: Accountevent[];

  @ManyToOne(() => Company, (company) => company.journals)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
