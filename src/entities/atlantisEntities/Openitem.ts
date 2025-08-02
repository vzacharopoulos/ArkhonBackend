import { Column, Entity, Index } from "typeorm";

@Index("UNI_5334", ["ftrid1", "perid", "ftrid2", "omode"], { unique: true })
@Index("UNIX_1035", ["ftrid2", "perid"], {})
@Entity("OPENITEM", { schema: "dbo" })
export class Openitem {
  @Column("int", { primary: true, name: "FTRID1" })
  ftrid1: number;

  @Column("int", { primary: true, name: "FTRID2" })
  ftrid2: number;

  @Column("datetime", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("float", { name: "AMOUNT", precision: 53 })
  amount: number;

  @Column("smallint", { primary: true, name: "OMODE" })
  omode: number;

  @Column("int", { primary: true, name: "PERID" })
  perid: number;

  @Column("smallint", { name: "PERTYPE", nullable: true })
  pertype: number | null;

  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;
}
