import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade";
import { Cashexpense } from "./Cashexpense";
import { Spsurcharges } from "./Spsurcharges";

@Index("UNI_3452", ["ftrid", "linenum"], { unique: true })
@Entity("EXPENSESANALYSIS", { schema: "dbo" })
export class Expensesanalysis {
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("float", { name: "SURVALUE", precision: 53 })
  survalue: number;

  @Column("float", { name: "SURLVALUE", precision: 53 })
  surlvalue: number;

  @Column("float", { name: "SURVATVALUE", precision: 53 })
  survatvalue: number;

  @Column("float", { name: "SURLVATVALUE", precision: 53 })
  surlvatvalue: number;

  @Column("smallint", { name: "TURNOVERMODE", nullable: true })
  turnovermode: number | null;

  @Column("float", { name: "REALVATVALUE", nullable: true, precision: 53 })
  realvatvalue: number | null;

  @Column("float", { name: "REALLVATVALUE", nullable: true, precision: 53 })
  reallvatvalue: number | null;

  @Column("float", { name: "INTSURVALUE", nullable: true, precision: 53 })
  intsurvalue: number | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.expensesanalyses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Cashexpense, (cashexpense) => cashexpense.expensesanalyses)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CAEID", referencedColumnName: "codeid" },
  ])
  cashexpense: Cashexpense;

  @ManyToOne(
    () => Spsurcharges,
    (spsurcharges) => spsurcharges.expensesanalyses
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SURID", referencedColumnName: "codeid" },
  ])
  spsurcharges: Spsurcharges;
}
