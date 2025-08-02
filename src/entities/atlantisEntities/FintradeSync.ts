import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_STORETRADELINES_SYNC", ["id"], { unique: true })
@Entity("FINTRADE_SYNC", { schema: "dbo" })
export class FintradeSync {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("varchar", { name: "DSRNUMBER", nullable: true, length: 30 })
  dsrnumber: string | null;

  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Column("smallint", { name: "ISCANCELED", nullable: true })
  iscanceled: number | null;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;

  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Column("int", { name: "salesmanoffice", nullable: true })
  salesmanoffice: number | null;

  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Column("smallint", { name: "ZUNDERPRODUCTION", nullable: true })
  zunderproduction: number | null;

  @Column("smallint", { name: "ZINCOMPLETE", nullable: true })
  zincomplete: number | null;

  @Column("smallint", { name: "ZFINISHED", nullable: true })
  zfinished: number | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Column("text", { name: "SecJustification", nullable: true })
  secJustification: string | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", { name: "isTemp", nullable: true })
  isTemp: number | null;

  @Column("int", { name: "isPrinted", nullable: true, default: () => "(0)" })
  isPrinted: number | null;

  @Column("nchar", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Column("int", { name: "status2", nullable: true })
  status2: number | null;

  @Column("int", { name: "isToLoad", nullable: true })
  isToLoad: number | null;

  @Column("varchar", { name: "arkhonmesuser", nullable: true, length: 50 })
  arkhonmesuser: string | null;

  @Column("int", {
    name: "nofcorrections",
    nullable: true,
    default: () => "(0)",
  })
  nofcorrections: number | null;
}
