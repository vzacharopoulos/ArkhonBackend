import { Column, Entity, Index } from "typeorm";

@Index("UNI_18370", ["codeid"], { unique: true })
@Entity("LOTTRANSTYPE", { schema: "dbo" })
export class Lottranstype {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 255 })
  description: string | null;

  @Column("smallint", { name: "ENTRYTYPE", nullable: true })
  entrytype: number | null;

  @Column("varchar", { name: "ENTRYTYPEDESCR", nullable: true, length: 50 })
  entrytypedescr: string | null;

  @Column("smallint", { name: "TRANSTYPE", nullable: true })
  transtype: number | null;

  @Column("varchar", { name: "TRANSTYPEDESCR", nullable: true, length: 50 })
  transtypedescr: string | null;

  @Column("smallint", { name: "DOCTYPE", nullable: true })
  doctype: number | null;

  @Column("varchar", { name: "DOCTYPEDESCR", nullable: true, length: 50 })
  doctypedescr: string | null;
}
