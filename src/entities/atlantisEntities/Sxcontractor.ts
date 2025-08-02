import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sxaccountant } from "./Sxaccountant";

@Index("UNI_SX16636", ["id"], { unique: true })
@Entity("SXCONTRACTOR", { schema: "dbo" })
export class Sxcontractor {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Column("smallint", { name: "PERMONTH" })
  permonth: number;

  @Column("varchar", { name: "DESCRIPTION", length: 100 })
  description: string;

  @Column("int", { name: "DOYCODEID", nullable: true })
  doycodeid: number | null;

  @Column("int", { name: "AA", nullable: true })
  aa: number | null;

  @Column("datetime", { name: "PERFROMDATE", nullable: true })
  perfromdate: Date | null;

  @Column("datetime", { name: "PERTODATE", nullable: true })
  pertodate: Date | null;

  @Column("varchar", { name: "COMPDESCR", nullable: true, length: 255 })
  compdescr: string | null;

  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 255 })
  fathername: string | null;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("varchar", { name: "ADTNUMBER", nullable: true, length: 20 })
  adtnumber: string | null;

  @Column("varchar", { name: "REPSURNAME", nullable: true, length: 50 })
  repsurname: string | null;

  @Column("varchar", { name: "REPNAME", nullable: true, length: 50 })
  repname: string | null;

  @Column("varchar", { name: "REPFATHERNAME", nullable: true, length: 255 })
  repfathername: string | null;

  @Column("varchar", { name: "REPADDRESS", nullable: true, length: 255 })
  repaddress: string | null;

  @Column("varchar", { name: "REPPHONE1", nullable: true, length: 25 })
  repphone1: string | null;

  @Column("varchar", { name: "REPAFM", nullable: true, length: 15 })
  repafm: string | null;

  @Column("varchar", { name: "REPADT", nullable: true, length: 15 })
  repadt: string | null;

  @Column("varchar", { name: "AEFOLDERNUMBER", nullable: true, length: 255 })
  aefoldernumber: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Column("varchar", { name: "ACTIVITY", nullable: true, length: 255 })
  activity: string | null;

  @Column("smallint", { name: "ISLOCKED", default: () => "(0)" })
  islocked: number;

  @Column("varchar", { name: "DIPLOTYPODESCR", nullable: true, length: 50 })
  diplotypodescr: string | null;

  @Column("datetime", { name: "DIPLOTYPODATE", nullable: true })
  diplotypodate: Date | null;

  @Column("datetime", { name: "GIVEDATE", nullable: true })
  givedate: Date | null;

  @Column("int", { name: "KIND", nullable: true })
  kind: number | null;

  @Column("int", { name: "SXKADID", nullable: true })
  sxkadid: number | null;

  @Column("float", { name: "VALUE1", nullable: true, precision: 53 })
  value1: number | null;

  @Column("float", { name: "VALUE2", nullable: true, precision: 53 })
  value2: number | null;

  @Column("float", { name: "TAXVALUE1", nullable: true, precision: 53 })
  taxvalue1: number | null;

  @Column("float", { name: "TAXVALUE2", nullable: true, precision: 53 })
  taxvalue2: number | null;

  @Column("float", { name: "EXTRATAXVALUE", nullable: true, precision: 53 })
  extrataxvalue: number | null;

  @Column("float", { name: "SUMTAXVALUE", nullable: true, precision: 53 })
  sumtaxvalue: number | null;

  @Column("smallint", { name: "ORIGINTYPE", default: () => "(0)" })
  origintype: number;

  @ManyToOne(() => Sxaccountant, (sxaccountant) => sxaccountant.sxcontractors)
  @JoinColumn([{ name: "SXACCOUNTANTCODEID", referencedColumnName: "codeid" }])
  sxaccountantcode: Sxaccountant;


}
