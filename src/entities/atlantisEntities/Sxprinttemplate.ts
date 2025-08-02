import { Column, Entity, Index } from "typeorm";

@Index("UNI_SX15310", ["domaintype", "codeid", "formtype"], { unique: true })
@Index("UNI_SX15312", ["domaintype", "fromdate", "formtype", "pagenum"], {
  unique: true,
})
@Entity("SXPRINTTEMPLATE", { schema: "dbo" })
export class Sxprinttemplate {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 30 })
  descr: string | null;

  @Column("varbinary", { name: "FORMDATA", nullable: true })
  formdata: Buffer | null;

  @Column("int", { primary: true, name: "DOMAINTYPE", default: () => "(-15)" })
  domaintype: number;

  @Column("smallint", {
    name: "AUTOPAPERFEED",
    nullable: true,
    default: () => "(0)",
  })
  autopaperfeed: number | null;

  @Column("int", { name: "TDCID", nullable: true })
  tdcid: number | null;

  @Column("int", { primary: true, name: "FORMTYPE" })
  formtype: number;

  @Column("datetime", { name: "FROMDATE", unique: true })
  fromdate: Date;

  @Column("smallint", { name: "PAGENUM", nullable: true, unique: true })
  pagenum: number | null;
}
