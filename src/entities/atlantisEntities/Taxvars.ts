import { Column, Entity, Index } from "typeorm";

@Index("UNI_15494", ["codeid", "ayear", "domaintype"], { unique: true })
@Entity("TAXVARS", { schema: "dbo" })
export class Taxvars {
  @Column("varchar", { primary: true, name: "CODEID", length: 10 })
  codeid: string;

  @Column("int", { primary: true, name: "AYEAR" })
  ayear: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "FORMULA", nullable: true })
  formula: string | null;

  @Column("varchar", { name: "FORMULAGL", nullable: true })
  formulagl: string | null;
}
