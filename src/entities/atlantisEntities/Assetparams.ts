import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_5610", ["comid"], { unique: true })
@Entity("ASSETPARAMS", { schema: "dbo" })
export class Assetparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "ASSETSMASK", nullable: true, length: 25 })
  assetsmask: string | null;

  @Column("float", { name: "LINEARVALUE", nullable: true, precision: 53 })
  linearvalue: number | null;

  @Column("float", { name: "ASCPERC", nullable: true, precision: 53 })
  ascperc: number | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("int", { name: "DEPRDSRID", nullable: true })
  deprdsrid: number | null;

  @Column("smallint", { name: "MONTHCALC", default: () => "0" })
  monthcalc: number;

  @Column("smallint", {
    name: "PERDEPRECIATION",
    nullable: true,
    default: () => "0",
  })
  perdepreciation: number | null;

  @Column("int", { name: "DSRIDIAS", nullable: true })
  dsridias: number | null;

  @Column("varchar", { name: "DSRCODE", nullable: true, length: 5 })
  dsrcode: string | null;

  @Column("varchar", { name: "REGNUMSMASK", nullable: true, length: 25 })
  regnumsmask: string | null;

  @Column("smallint", { name: "INLAW", default: () => "(0)" })
  inlaw: number;

  @Column("smallint", { name: "PERCENTAGE", nullable: true })
  percentage: number | null;

  @Column("datetime", { name: "EXPIRYDATE", nullable: true })
  expirydate: Date | null;

  @Column("int", { name: "DSRIDPRODUCTION", nullable: true })
  dsridproduction: number | null;

  @Column("smallint", {
    name: "ASCPERCINUSE",
    nullable: true,
    default: () => "(0)",
  })
  ascpercinuse: number | null;

  @Column("smallint", { name: "NONEGATIVEVALUE", default: () => "(0)" })
  nonegativevalue: number;

  @Column("smallint", {
    name: "DEPRINUSE",
    nullable: true,
    default: () => "(0)",
  })
  deprinuse: number | null;

  @Column("float", { name: "LIMITVALUEINUSE", nullable: true, precision: 53 })
  limitvalueinuse: number | null;

  @Column("smallint", { name: "DATEDEPRSOLDASSETS", nullable: true })
  datedeprsoldassets: number | null;

  @Column("smallint", {
    name: "VATADDED",
    nullable: true,
    default: () => "(0)",
  })
  vatadded: number | null;

  @Column("smallint", { name: "LIMITCALCDEPR", nullable: true })
  limitcalcdepr: number | null;

  @Column("smallint", {
    name: "DEPRINUSEINFIPID",
    nullable: true,
    default: () => "(0)",
  })
  deprinuseinfipid: number | null;

  @Column("smallint", { name: "COUNTRYONLINESPURCHASES", nullable: true })
  countryonlinespurchases: number | null;

  @Column("smallint", { name: "COUNTRYONLINESSALES", nullable: true })
  countryonlinessales: number | null;

  @OneToOne(() => Company, (company) => company.assetparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
