import { Column, Entity, Index } from "typeorm";

@Index("UNI_5564_1", ["ftrid", "linenum", "costftrid", "cfoid", "sourceid"], {
  unique: true,
})
@Index("UNIX_1074", ["ftrid", "insmode", "sourceid"], {})
@Index("UNIX_1098", ["cfoid"], {})
@Index("UNIX_1110", ["costftrid"], {})
@Entity("TRADECOST", { schema: "dbo" })
export class Tradecost {
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("smallint", { name: "SOURCETYPE", nullable: true })
  sourcetype: number | null;

  @Column("int", { primary: true, name: "SOURCEID", default: () => "0" })
  sourceid: number;

  @Column("int", { name: "PHGID", nullable: true })
  phgid: number | null;

  @Column("int", { name: "PHSID", nullable: true })
  phsid: number | null;

  @Column("float", { name: "CSTVALUE", nullable: true, precision: 53 })
  cstvalue: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("float", { name: "CSTAMOUNT", nullable: true, precision: 53 })
  cstamount: number | null;

  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Column("int", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Column("int", { primary: true, name: "CFOID" })
  cfoid: number;

  @Column("smallint", { name: "INSMODE", nullable: true })
  insmode: number | null;

  @Column("int", { primary: true, name: "COSTFTRID" })
  costftrid: number;

  @Column("float", { name: "EXTVALUE", nullable: true, precision: 53 })
  extvalue: number | null;

  @Column("smallint", { name: "RESKIND", nullable: true, default: () => "0" })
  reskind: number | null;
}
