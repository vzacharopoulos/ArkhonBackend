import { Column, Entity, Index } from "typeorm";

@Index("UNI_6396", ["comid"], { unique: true })
@Entity("COSTPARAMS", { schema: "dbo" })
export class Costparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "PCCOEF1CAPTION", nullable: true, length: 50 })
  pccoef1Caption: string | null;

  @Column("varchar", { name: "PCCOEF2CAPTION", nullable: true, length: 50 })
  pccoef2Caption: string | null;

  @Column("varchar", { name: "PCCOEF3CAPTION", nullable: true, length: 50 })
  pccoef3Caption: string | null;

  @Column("varchar", { name: "PCCOEF4CAPTION", nullable: true, length: 50 })
  pccoef4Caption: string | null;

  @Column("varchar", { name: "PCCOEF5CAPTION", nullable: true, length: 50 })
  pccoef5Caption: string | null;

  @Column("int", { name: "ACCDSRID", nullable: true })
  accdsrid: number | null;

  @Column("int", { name: "ACCCONDSRID", nullable: true })
  acccondsrid: number | null;

  @Column("int", { name: "PRODTOMATDSRID", nullable: true })
  prodtomatdsrid: number | null;

  @Column("int", { name: "CONSDSRID", nullable: true })
  consdsrid: number | null;

  @Column("int", { name: "PRODDSRID", nullable: true })
  proddsrid: number | null;

  @Column("int", { name: "SALESCOSTDSRID", nullable: true })
  salescostdsrid: number | null;

  @Column("smallint", { name: "INCLUDECOSTTRANS", nullable: true })
  includecosttrans: number | null;

  @Column("smallint", { name: "FIFOLIFO", nullable: true })
  fifolifo: number | null;

  @Column("smallint", { name: "CALCKMT", nullable: true })
  calckmt: number | null;

  @Column("smallint", { name: "NOTRANSITEMS", nullable: true })
  notransitems: number | null;

  @Column("varchar", { name: "MATERIALCODEFROM", nullable: true, length: 25 })
  materialcodefrom: string | null;

  @Column("varchar", { name: "MATERIALCODETO", nullable: true, length: 25 })
  materialcodeto: string | null;

  @Column("varchar", { name: "MATERIALCODEMASK", nullable: true, length: 25 })
  materialcodemask: string | null;

  @Column("smallint", { name: "CANCELALLOCATED", nullable: true })
  cancelallocated: number | null;

  @Column("smallint", { name: "CLEARCOSTLEVELS", nullable: true })
  clearcostlevels: number | null;

  @Column("varchar", {
    name: "PRECOSTCUSTTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostcusttrntypes: string | null;

  @Column("varchar", {
    name: "PRECOSTSUPTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostsuptrntypes: string | null;

  @Column("smallint", {
    name: "GROUPPRITEM",
    nullable: true,
    default: () => "0",
  })
  grouppritem: number | null;

  @Column("smallint", {
    name: "COSTACCMAKEANAL",
    nullable: true,
    default: () => "1",
  })
  costaccmakeanal: number | null;

  @Column("smallint", { name: "SYNCSPECS", nullable: true, default: () => "0" })
  syncspecs: number | null;

  @Column("smallint", {
    name: "ABCCOSTING",
    nullable: true,
    default: () => "(0)",
  })
  abccosting: number | null;
}
