import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material";

@Index("UNI_2884", ["masterid", "comid", "stoid", "fyeid", "fipid"], {
  unique: true,
})
@Entity("STOREBALANCESHEET", { schema: "dbo" })
export class Storebalancesheet {
  @Column("int", { primary: true, name: "MASTERID" })
  masterid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Column("float", { name: "EXPORTPRQTY", nullable: true, precision: 53 })
  exportprqty: number | null;

  @Column("float", { name: "EXPORTSECQTY", nullable: true, precision: 53 })
  exportsecqty: number | null;

  @Column("float", { name: "EXPORTVALUE", nullable: true, precision: 53 })
  exportvalue: number | null;

  @Column("float", { name: "IMPORTPRQTY", nullable: true, precision: 53 })
  importprqty: number | null;

  @Column("float", { name: "IMPORTSECQTY", nullable: true, precision: 53 })
  importsecqty: number | null;

  @Column("float", { name: "IMPORTVALUE", nullable: true, precision: 53 })
  importvalue: number | null;

  @Column("float", { name: "PURCHASESQTY", nullable: true, precision: 53 })
  purchasesqty: number | null;

  @Column("float", { name: "PURCHASESVALUE", nullable: true, precision: 53 })
  purchasesvalue: number | null;

  @Column("float", { name: "SALESQTY", nullable: true, precision: 53 })
  salesqty: number | null;

  @Column("float", { name: "SALESVALUE", nullable: true, precision: 53 })
  salesvalue: number | null;

  @Column("float", { name: "CONSUMPTIONQTY", nullable: true, precision: 53 })
  consumptionqty: number | null;

  @Column("float", { name: "CONSUMPTIONVALUE", nullable: true, precision: 53 })
  consumptionvalue: number | null;

  @Column("float", { name: "PRODUCTIONQTY", nullable: true, precision: 53 })
  productionqty: number | null;

  @Column("float", { name: "PRODUCTIONVALUE", nullable: true, precision: 53 })
  productionvalue: number | null;

  @Column("float", { name: "BILLEDINPQTY", nullable: true, precision: 53 })
  billedinpqty: number | null;

  @Column("float", { name: "BILLEDOUTQTY", nullable: true, precision: 53 })
  billedoutqty: number | null;

  @Column("float", { name: "COSTVALUE", nullable: true, precision: 53 })
  costvalue: number | null;

  @Column("datetime", { name: "CALCDATE", nullable: true })
  calcdate: Date | null;

  @Column("float", {
    name: "VALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value1: number | null;

  @Column("float", {
    name: "VALUE10",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value10: number | null;

  @Column("float", {
    name: "VALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value2: number | null;

  @Column("float", {
    name: "VALUE3",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value3: number | null;

  @Column("float", {
    name: "VALUE4",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value4: number | null;

  @Column("float", {
    name: "VALUE5",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value5: number | null;

  @Column("float", {
    name: "VALUE6",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value6: number | null;

  @Column("float", {
    name: "VALUE7",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value7: number | null;

  @Column("float", {
    name: "VALUE8",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value8: number | null;

  @Column("float", {
    name: "VALUE9",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value9: number | null;

  @Column("float", {
    name: "VALUE11",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value11: number | null;

  @Column("float", {
    name: "VALUE12",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value12: number | null;

  @Column("float", {
    name: "VALUE13",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value13: number | null;

  @Column("float", {
    name: "VALUE14",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value14: number | null;

  @Column("float", {
    name: "VALUE15",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value15: number | null;

  @Column("float", {
    name: "VALUE16",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  value16: number | null;

  @Column("float", {
    name: "SALESCOST",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  salescost: number | null;

  @Column("float", {
    name: "INGREDIENTVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ingredientvalue: number | null;

  @Column("float", {
    name: "LABORVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  laborvalue: number | null;

  @Column("float", {
    name: "OVERHEADVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  overheadvalue: number | null;

  @Column("float", { name: "TAXFREEQTY", nullable: true, precision: 53 })
  taxfreeqty: number | null;

  @Column("float", { name: "THIRDQTY", nullable: true, precision: 53 })
  thirdqty: number | null;

  @Column("float", { name: "EXPORTTHIRDQTY", nullable: true, precision: 53 })
  exportthirdqty: number | null;

  @Column("float", {
    name: "COSTACCINGRVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  costaccingrvalue: number | null;

  @Column("float", {
    name: "COSTACCLBRVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  costacclbrvalue: number | null;

  @Column("float", {
    name: "COSTACCVHDVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  costaccvhdvalue: number | null;

  @ManyToOne(() => Material, (material) => material.storebalancesheets, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MASTERID", referencedColumnName: "id" }])
  master: Material;
}
