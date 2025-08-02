import { Column, Entity, Index, OneToMany } from "typeorm";
import { Expensesanalysis } from "./Expensesanalysis";

@Index("UNI_5794", ["comid", "codeid"], { unique: true })
@Entity("CASHEXPENSE", { schema: "dbo" })
export class Cashexpense {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("smallint", { name: "DEBITMODE", nullable: true, default: () => "1" })
  debitmode: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @OneToMany(
    () => Expensesanalysis,
    (expensesanalysis) => expensesanalysis.cashexpense
  )
  expensesanalyses: Expensesanalysis[];
}
