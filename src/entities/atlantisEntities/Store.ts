import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Branch } from "./Branch";
import { Storagebin } from "./Storagebin";
import { Country } from "./Country";
import { Company } from "./Company";
import { Storetrade } from "./Storetrade";
import { Storetradelines } from "./Storetradelines";

@Index("UNI_300", ["comid", "codeid"], { unique: true })
@Entity("STORE", { schema: "dbo" })
export class Store {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Column("varchar", { name: "CONTACT", nullable: true, length: 255 })
  contact: string | null;

  @Column("float", { name: "SURFACE", nullable: true, precision: 53 })
  surface: number | null;

  @Column("float", { name: "VOLUME", nullable: true, precision: 53 })
  volume: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("int", { name: "RAWMATERIALSTOID", nullable: true })
  rawmaterialstoid: number | null;

  @Column("smallint", { name: "ISTHIRDSTORE", default: () => "0" })
  isthirdstore: number;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Column("smallint", {
    name: "MYDATACLASSIFICATIONOTHER",
    default: () => "(0)",
  })
  mydataclassificationother: number;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Column("varchar", { name: "TRANSPORTERS", nullable: true, length: 150 })
  transporters: string | null;

  @OneToMany(() => Branch, (branch) => branch.store)
  branches: Branch[];

  @OneToMany(() => Branch, (branch) => branch.store2)
  branches2: Branch[];

  @OneToMany(() => Branch, (branch) => branch.store3)
  branches3: Branch[];

  @OneToMany(() => Storagebin, (storagebin) => storagebin.store)
  storagebins: Storagebin[];

  @ManyToOne(() => Country, (country) => country.stores)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @ManyToOne(() => Company, (company) => company.stores, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Storetrade, (storetrade) => storetrade.store)
  storetrades: Storetrade[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.store2)
  storetrades2: Storetrade[];

  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.store)
  storetradelines: Storetradelines[];

  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.store2)
  storetradelines2: Storetradelines[];
}
