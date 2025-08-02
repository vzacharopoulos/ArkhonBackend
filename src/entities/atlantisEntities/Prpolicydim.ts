import { Column, Entity, Index } from "typeorm";

@Index("UNI_5832", ["domaintype", "codeid"], { unique: true })
@Entity("PRPOLICYDIM", { schema: "dbo" })
export class Prpolicydim {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TABLENAME", length: 50 })
  tablename: string;

  @Column("varchar", { name: "FIELDNAME", length: 50 })
  fieldname: string;

  @Column("smallint", { name: "QTYSCALE", default: () => "0" })
  qtyscale: number;

  @Column("smallint", { name: "FIELDTYPE" })
  fieldtype: number;

  @Column("varchar", { name: "LOOKUPTABLE", nullable: true, length: 50 })
  lookuptable: string | null;

  @Column("varchar", { name: "LOOKUPFIELD", nullable: true, length: 50 })
  lookupfield: string | null;

  @Column("varchar", { name: "RESULTFIELD", nullable: true, length: 50 })
  resultfield: string | null;

  @Column("varchar", { name: "VIEWTABLE", length: 50 })
  viewtable: string;

  @Column("varchar", { name: "VIEWKEYFIELD", length: 50 })
  viewkeyfield: string;

  @Column("varchar", { name: "VIEWRESULTFIELD", length: 50 })
  viewresultfield: string;

  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Column("varchar", { name: "MASSINSFRMCLASS", nullable: true, length: 100 })
  massinsfrmclass: string | null;

  @Column("varchar", { name: "MASSINSDMCLASS", nullable: true, length: 100 })
  massinsdmclass: string | null;

  @Column("smallint", { name: "ISCUSTOM", default: () => "(1)" })
  iscustom: number;
}
