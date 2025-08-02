import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Webaccountlns } from "./Webaccountlns";

@Index("UNI_18248", ["id"], { unique: true })
@Entity("WEBACCOUNT", { schema: "dbo" })
export class Webaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "ACCID" })
  accid: number;

  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;

  @Column("varchar", { name: "USERNAME", length: 150 })
  username: string;

  @Column("varchar", { name: "PASSWORD", length: 100 })
  password: string;

  @Column("varchar", { name: "TEMPKEY", nullable: true, length: 64 })
  tempkey: string | null;

  @Column("smallint", { name: "ACCESSOK", nullable: true })
  accessok: number | null;

  @Column("varchar", { name: "EMAIL", length: 64 })
  email: string;

  @Column("smallint", { name: "EMAILCONFR" })
  emailconfr: number;

  @Column("int", { name: "CATEGORY" })
  category: number;

  @Column("varchar", { name: "WEBGROUP", nullable: true })
  webgroup: string | null;

  @Column("smallint", { name: "DATAPARAM", nullable: true })
  dataparam: number | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 64 })
  name: string | null;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 150 })
  address: string | null;

  @Column("varchar", { name: "ZIP", nullable: true, length: 10 })
  zip: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("datetime", { name: "FINALDATE", nullable: true })
  finaldate: Date | null;

  @Column("smallint", { name: "SCRVALIDATE" })
  scrvalidate: number;

  @Column("datetime", { name: "INSDATE", nullable: true })
  insdate: Date | null;

  @Column("int", { name: "INSUSER", nullable: true })
  insuser: number | null;

  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Column("int", { name: "UPDUSER", nullable: true })
  upduser: number | null;

  @Column("datetime", { name: "LASTSYNC", nullable: true })
  lastsync: Date | null;

  @Column("int", { name: "UPDCOUNT", nullable: true })
  updcount: number | null;

  @OneToMany(() => Webaccountlns, (webaccountlns) => webaccountlns.webacc)
  webaccountlns: Webaccountlns[];
}
