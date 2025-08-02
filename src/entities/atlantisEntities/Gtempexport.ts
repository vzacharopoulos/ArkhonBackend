import { Column, Entity } from "typeorm";

@Entity("GTEMPEXPORT", { schema: "dbo" })
export class Gtempexport {
  @Column("int", { name: "GROUPID", nullable: true })
  groupid: number | null;

  @Column("int", { name: "INVDATE", nullable: true })
  invdate: number | null;

  @Column("varchar", { name: "INVCODE", nullable: true, length: 25 })
  invcode: string | null;

  @Column("varchar", { name: "GCOMPCODE", nullable: true, length: 25 })
  gcompcode: string | null;

  @Column("int", { name: "GTEMPKIND", nullable: true })
  gtempkind: number | null;

  @Column("varchar", { name: "GTFILL1", nullable: true, length: 5 })
  gtfill1: string | null;

  @Column("varchar", { name: "GTEMPCOMM", nullable: true, length: 39 })
  gtempcomm: string | null;

  @Column("float", { name: "DEB", nullable: true, precision: 53 })
  deb: number | null;

  @Column("float", { name: "CRED", nullable: true, precision: 53 })
  cred: number | null;

  @Column("int", { name: "LDATE", nullable: true })
  ldate: number | null;

  @Column("int", { name: "XNCODE", nullable: true })
  xncode: number | null;

  @Column("varchar", { name: "XNSTR", nullable: true, length: 3 })
  xnstr: string | null;

  @Column("float", { name: "XNDEB", nullable: true, precision: 53 })
  xndeb: number | null;

  @Column("float", { name: "XNCRED", nullable: true, precision: 53 })
  xncred: number | null;

  @Column("float", { name: "XNCH", nullable: true, precision: 53 })
  xnch: number | null;

  @Column("datetime", { name: "PDATE", nullable: true })
  pdate: Date | null;

  @Column("varchar", { name: "PJUSTIFICATION", nullable: true, length: 255 })
  pjustification: string | null;

  @Column("int", { name: "PDSRID", nullable: true })
  pdsrid: number | null;

  @Column("varchar", { name: "EXTRAMYFDATA", nullable: true, length: 255 })
  extramyfdata: string | null;

  @Column("varchar", { name: "HEXTRAMYFDATA", nullable: true, length: 255 })
  hextramyfdata: string | null;

  @Column("float", { name: "SUBVALUE", nullable: true, precision: 53 })
  subvalue: number | null;

  @Column("float", { name: "VATVALUE", nullable: true, precision: 53 })
  vatvalue: number | null;

  @Column("smallint", { name: "SXSIGN", nullable: true })
  sxsign: number | null;

  @Column("varchar", { name: "EXTRAMYDATA", nullable: true, length: 255 })
  extramydata: string | null;

  @Column("int", { name: "BIFTRID", nullable: true })
  biftrid: number | null;

  @Column("smallint", { name: "BISOURCE", nullable: true })
  bisource: number | null;

  @Column("smallint", { name: "BIDETAILTYPE", nullable: true })
  bidetailtype: number | null;

  @Column("int", { name: "BIDETAILID", nullable: true })
  bidetailid: number | null;

  @Column("int", { name: "BICOMID", nullable: true })
  bicomid: number | null;

  @Column("int", { name: "BIACCID", nullable: true })
  biaccid: number | null;

  @Column("int", { name: "BIFIPID", nullable: true })
  bifipid: number | null;

  @Column("int", { name: "BIFYEID", nullable: true })
  bifyeid: number | null;

  @Column("smallint", { name: "ISCANCELLED", nullable: true })
  iscancelled: number | null;

  @Column("varchar", { name: "BIUPDFORMULA", nullable: true, length: 50 })
  biupdformula: string | null;

  @Column("varchar", { name: "BIUPDGLFORMULA", nullable: true, length: 50 })
  biupdglformula: string | null;

  @Column("int", { name: "BIACCTRNID", nullable: true })
  biacctrnid: number | null;

  @Column("int", { name: "BICUSID", nullable: true })
  bicusid: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;
}
