import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Country } from "./Country";
import { Pgrouplines } from "./Pgrouplines";
import { Supplier } from "./Supplier";

@Index("UNI_5030", ["id"], { unique: true })
@Index("UNI_5066", ["code"], { unique: true })
@Entity("PGROUP", { schema: "dbo" })
export class Pgroup {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", unique: true, length: 50 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 25 })
  strorder: string | null;

  @Column("smallint", { name: "ISGROUPSUPERVISOR", default: () => "0" })
  isgroupsupervisor: number;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("float", { name: "ACCCRDLIMIT", nullable: true, precision: 53 })
  acccrdlimit: number | null;

  @Column("float", { name: "OPENCRDLIMIT", nullable: true, precision: 53 })
  opencrdlimit: number | null;

  @Column("float", { name: "CRDLIMIT", nullable: true, precision: 53 })
  crdlimit: number | null;

  @Column("float", { name: "TRANSDOCLIMIT", nullable: true, precision: 53 })
  transdoclimit: number | null;

  @Column("float", { name: "VALUELIMIT", nullable: true, precision: 53 })
  valuelimit: number | null;

  @Column("float", { name: "DISCLIMIT", nullable: true, precision: 53 })
  disclimit: number | null;

  @Column("float", { name: "ORDERLIMIT", nullable: true, precision: 53 })
  orderlimit: number | null;

  @Column("varchar", { name: "LOGEXPR", nullable: true, length: 50 })
  logexpr: string | null;

  @Column("float", { name: "LOGEXPRLIMIT", nullable: true, precision: 53 })
  logexprlimit: number | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @OneToMany(() => Customer, (customer) => customer.grp)
  customers: Customer[];

  @ManyToOne(() => Country, (country) => country.pgroups)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @OneToMany(() => Pgrouplines, (pgrouplines) => pgrouplines.grp)
  pgrouplines: Pgrouplines[];

  @OneToMany(() => Supplier, (supplier) => supplier.grp)
  suppliers: Supplier[];
}
