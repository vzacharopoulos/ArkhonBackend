import { Column, Entity, Index } from "typeorm";

@Index("UNI_6312", ["code"], { unique: true })
@Entity("TRANSNATURE", { schema: "dbo" })
export class Transnature {
  @Column("varchar", { name: "CODE", unique: true, length: 30 })
  code: string;

  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("smallint", { name: "DEBITTRDUPD", default: () => "0" })
  debittrdupd: number;

  @Column("smallint", { name: "CREDITTRDUPD", default: () => "0" })
  credittrdupd: number;

  @Column("smallint", { name: "TURNOVERTRDUPD", default: () => "0" })
  turnovertrdupd: number;

  @Column("smallint", { name: "CURPOSSESSORUPD", default: () => "0" })
  curpossessorupd: number;

  @Column("smallint", { name: "BLSUPDID", default: () => "0" })
  blsupdid: number;

  @Column("smallint", { name: "BILLUPD", default: () => "0" })
  billupd: number;

  @Column("smallint", { name: "CREDITDONUPD", default: () => "0" })
  creditdonupd: number;

  @Column("smallint", { name: "DEBITDONUPD", default: () => "0" })
  debitdonupd: number;

  @Column("smallint", { name: "INDEFINITECREDITDONUPD", default: () => "0" })
  indefinitecreditdonupd: number;

  @Column("smallint", { name: "CREDITPOSUPD", default: () => "0" })
  creditposupd: number;

  @Column("smallint", { name: "DEBITPOSUPD", default: () => "0" })
  debitposupd: number;

  @Column("smallint", { name: "INDEFINITECREDITPOSUPD", default: () => "0" })
  indefinitecreditposupd: number;

  @Column("smallint", { name: "CREDITBLLTRAUPD", default: () => "0" })
  creditblltraupd: number;

  @Column("smallint", { name: "DEBITBLLTRAUPD", default: () => "0" })
  debitblltraupd: number;

  @Column("smallint", { name: "INDEFINITECREDITBLLTRAUPD", default: () => "0" })
  indefinitecreditblltraupd: number;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;
}
