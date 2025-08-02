import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Account } from "./Account";

@Index("UNI_6492", ["accid"], { unique: true })
@Index("UNIX_1144", ["afm"], {})
@Entity("ACCOUNTEXT", { schema: "dbo" })
export class Accountext {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "ACCID" })
  accid: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 80 })
  name: string | null;

  @Column("varchar", { name: "JOBDESCR", nullable: true, length: 80 })
  jobdescr: string | null;

  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("int", { name: "GEOID", nullable: true })
  geoid: number | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "MANAGER", nullable: true, length: 80 })
  manager: string | null;

  @Column("smallint", { name: "SUMKEPYO", nullable: true })
  sumkepyo: number | null;

  @Column("varchar", { name: "REFACCCODE", nullable: true, length: 25 })
  refacccode: string | null;

  @Column("varchar", { name: "REFACCDESCR", nullable: true, length: 80 })
  refaccdescr: string | null;

  @Column("smallint", { name: "UPDKEPYO", nullable: true, default: () => "0" })
  updkepyo: number | null;

  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Column("smallint", { name: "MYFACCTYPE", nullable: true })
  myfacctype: number | null;

  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 50 })
  fathername: string | null;

  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @OneToOne(() => Account, (account) => account.accountext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ACCID", referencedColumnName: "id" }])
  acc: Account;
}
