import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("GTEMPEXPORT", { schema: "dbo" })
export class Gtempexport {
  @PrimaryColumn("int", { name: "GROUPID", nullable: false })
  groupid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INVDATE", nullable: true })
  invdate: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INVCODE", nullable: true, length: 25 })
  invcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GCOMPCODE", nullable: true, length: 25 })
  gcompcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GTEMPKIND", nullable: true })
  gtempkind: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GTFILL1", nullable: true, length: 5 })
  gtfill1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GTEMPCOMM", nullable: true, length: 39 })
  gtempcomm: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEB", nullable: true, precision: 53 })
  deb: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CRED", nullable: true, precision: 53 })
  cred: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "LDATE", nullable: true })
  ldate: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "XNCODE", nullable: true })
  xncode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "XNSTR", nullable: true, length: 3 })
  xnstr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "XNDEB", nullable: true, precision: 53 })
  xndeb: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "XNCRED", nullable: true, precision: 53 })
  xncred: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "XNCH", nullable: true, precision: 53 })
  xnch: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PDATE", nullable: true })
  pdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PJUSTIFICATION", nullable: true, length: 255 })
  pjustification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PDSRID", nullable: true })
  pdsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTRAMYFDATA", nullable: true, length: 255 })
  extramyfdata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "HEXTRAMYFDATA", nullable: true, length: 255 })
  hextramyfdata: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUBVALUE", nullable: true, precision: 53 })
  subvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATVALUE", nullable: true, precision: 53 })
  vatvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SXSIGN", nullable: true })
  sxsign: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTRAMYDATA", nullable: true, length: 255 })
  extramydata: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIFTRID", nullable: true })
  biftrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BISOURCE", nullable: true })
  bisource: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BIDETAILTYPE", nullable: true })
  bidetailtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIDETAILID", nullable: true })
  bidetailid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BICOMID", nullable: true })
  bicomid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIACCID", nullable: true })
  biaccid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIFIPID", nullable: true })
  bifipid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIFYEID", nullable: true })
  bifyeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCANCELLED", nullable: true })
  iscancelled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BIUPDFORMULA", nullable: true, length: 50 })
  biupdformula: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BIUPDGLFORMULA", nullable: true, length: 50 })
  biupdglformula: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BIACCTRNID", nullable: true })
  biacctrnid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BICUSID", nullable: true })
  bicusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;
}
