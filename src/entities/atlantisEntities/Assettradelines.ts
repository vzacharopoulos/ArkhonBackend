import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset";
import { Fintrade } from "./Fintrade";
import { Depricedasset } from "./Depricedasset";

@Index("UNI_3728", ["id"], { unique: true })
@Index("UNI_5754", ["ftrid", "linenum"], { unique: true })
@Entity("ASSETTRADELINES", { schema: "dbo" })
export class Assettradelines {
  @Column("int", { name: "FTRID", unique: true })
  ftrid: number;

  @Column("int", { name: "LINENUM", unique: true })
  linenum: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("float", { name: "QTY", precision: 53 })
  qty: number;

  @Column("float", { name: "PRICE", precision: 53 })
  price: number;

  @Column("float", { name: "PRCDISC1", nullable: true, precision: 53 })
  prcdisc1: number | null;

  @Column("float", { name: "VALDISC1", nullable: true, precision: 53 })
  valdisc1: number | null;

  @Column("float", { name: "LVALDISC1", nullable: true, precision: 53 })
  lvaldisc1: number | null;

  @Column("float", { name: "PRCDISC2", nullable: true, precision: 53 })
  prcdisc2: number | null;

  @Column("float", { name: "VALDISC2", nullable: true, precision: 53 })
  valdisc2: number | null;

  @Column("float", { name: "LVALDISC2", nullable: true, precision: 53 })
  lvaldisc2: number | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Column("float", { name: "LVATAMOUNT", nullable: true, precision: 53 })
  lvatamount: number | null;

  @Column("float", { name: "LINEVALUE", precision: 53 })
  linevalue: number;

  @Column("float", { name: "LLINEVALUE", precision: 53 })
  llinevalue: number;

  @Column("float", { name: "NETLINEVALUE", nullable: true, precision: 53 })
  netlinevalue: number | null;

  @Column("float", { name: "LNETLINEVALUE", nullable: true, precision: 53 })
  lnetlinevalue: number | null;

  @Column("float", { name: "ITEMLINEVALUE", nullable: true, precision: 53 })
  itemlinevalue: number | null;

  @Column("float", { name: "LITEMLINEVALUE", nullable: true, precision: 53 })
  litemlinevalue: number | null;

  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("int", { name: "SECSTOID", nullable: true })
  secstoid: number | null;

  @Column("float", { name: "INTVATAMOUNT", nullable: true, precision: 53 })
  intvatamount: number | null;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Column("varchar", { name: "DPADESCR", nullable: true, length: 50 })
  dpadescr: string | null;

  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Column("float", { name: "LINEVALUE2", nullable: true, precision: 53 })
  linevalue2: number | null;

  @Column("float", { name: "LINEVALUE3", nullable: true, precision: 53 })
  linevalue3: number | null;

  @Column("float", { name: "LINEVALUE4", nullable: true, precision: 53 })
  linevalue4: number | null;

  @Column("float", { name: "LINEVALUE5", nullable: true, precision: 53 })
  linevalue5: number | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("varchar", { name: "SECJUSTIFICATION", nullable: true, length: 255 })
  secjustification: string | null;

  @Column("int", { name: "ADSID", nullable: true })
  adsid: number | null;

  @Column("int", { name: "ORIGINCNTID", nullable: true })
  origincntid: number | null;

  @Column("int", { name: "MYDATACHARCAT", nullable: true })
  mydatacharcat: number | null;

  @Column("float", { name: "ITEMLINEVALUEFULL", nullable: true, precision: 53 })
  itemlinevaluefull: number | null;

  @Column("float", { name: "VATAMOUNTFULL", nullable: true, precision: 53 })
  vatamountfull: number | null;

  @ManyToOne(() => Asset, (asset) => asset.assettradelines)
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.assettradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(
    () => Depricedasset,
    (depricedasset) => depricedasset.assettradelines
  )
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;
}
