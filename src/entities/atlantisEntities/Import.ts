import { Column, Entity, Index } from "typeorm";

@Index("UNI_5776", ["codeid"], { unique: true })
@Entity("IMPORT", { schema: "dbo" })
export class Import {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TABLENAME", nullable: true, length: 100 })
  tablename: string | null;

  @Column("smallint", { name: "FILEORIGIN", default: () => "1" })
  fileorigin: number;

  @Column("smallint", { name: "FILETYPE", default: () => "0" })
  filetype: number;

  @Column("int", { name: "LINESPERREC", nullable: true })
  linesperrec: number | null;

  @Column("int", { name: "EDSID", nullable: true })
  edsid: number | null;

  @Column("varbinary", { name: "DATA", nullable: true })
  data: Buffer | null;

  @Column("int", { name: "STARTINGROW", nullable: true })
  startingrow: number | null;

  @Column("smallint", {
    name: "DOMAINTYPE",
    nullable: true,
    default: () => "(0)",
  })
  domaintype: number | null;

  @Column("smallint", {
    name: "UPDATEMODE",
    nullable: true,
    default: () => "(0)",
  })
  updatemode: number | null;

  @Column("varchar", { name: "UPDATEKEY", nullable: true, length: 255 })
  updatekey: string | null;

  @Column("smallint", {
    name: "EXECSCRIPT",
    nullable: true,
    default: () => "(0)",
  })
  execscript: number | null;

  @Column("varchar", { name: "SCRIPT", nullable: true, length: 255 })
  script: string | null;
}
