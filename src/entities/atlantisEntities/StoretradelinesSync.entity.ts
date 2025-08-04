import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_STORETRADELINES_SYNC_1", ["id"], { unique: true })
@ObjectType()
@Entity("STORETRADELINES_SYNC", { schema: "dbo" })
export class StoretradelinesSync {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "mu", nullable: true, length: 3 })
  mu: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DIM1", nullable: true, default: () => "(0)" })
  dim1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DIM2", nullable: true, precision: 53 })
  dim2: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "WEIGHT",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  weight: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DELIVEREDQTY", nullable: true, precision: 53 })
  deliveredqty: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DELIVEREDPRIMARYQTY",
    nullable: true,
    precision: 53,
  })
  deliveredprimaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REMAINPRIMARYQTY", nullable: true, precision: 53 })
  remainprimaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DELIVEREDSECONDARYQTY",
    nullable: true,
    precision: 53,
  })
  deliveredsecondaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRICE", nullable: true, precision: 53 })
  price: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "isCanceled", nullable: true })
  isCanceled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "Justification", nullable: true })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", {
    name: "delivered_pcs",
    nullable: true,
    default: () => "(0)",
  })
  deliveredPcs: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "remain_pcs", nullable: true })
  remainPcs: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "delivered_weight",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  deliveredWeight: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "remain_weight", nullable: true, precision: 53 })
  remainWeight: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "discount",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  discount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "value", nullable: true, precision: 53 })
  value: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "fpaPercentage",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  fpaPercentage: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "tvalue", nullable: true, precision: 53 })
  tvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "backordervalue", nullable: true, precision: 53 })
  backordervalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "backordertvalue", nullable: true, precision: 53 })
  backordertvalue: number | null;

  @Field({ nullable: true })
  @Column("timestamp", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Field({ nullable: true })
  @Column("int", {
    name: "pcsPerPackage",
    nullable: true,
    default: () => "(1)",
  })
  pcsPerPackage: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "hasInventory", nullable: true })
  hasInventory: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "hasInventoryWhere", nullable: true, length: 50 })
  hasInventoryWhere: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "linenum", nullable: true })
  linenum: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "returned_pcs", nullable: true, default: () => "(0)" })
  returnedPcs: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "returned_weight",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  returnedWeight: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "pcsEntered", nullable: true })
  pcsEntered: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "isToLoad", nullable: true, default: () => "(0)" })
  isToLoad: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "isToLoadDate", nullable: true })
  isToLoadDate: Date | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "isToLoadTruck", nullable: true, length: 100 })
  isToLoadTruck: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "cin", nullable: true, length: 100 })
  cin: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "cout", nullable: true, length: 100 })
  cout: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "thickin", nullable: true, length: 10 })
  thickin: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "thickout", nullable: true, length: 10 })
  thickout: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "prodSchedule", nullable: true, default: () => "(0)" })
  prodSchedule: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "prodStatus", nullable: true, default: () => "(-1)" })
  prodStatus: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "prodDate", nullable: true })
  prodDate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "moldin", nullable: true, length: 10 })
  moldin: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "moldout", nullable: true, length: 10 })
  moldout: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "widthin", nullable: true, length: 4 })
  widthin: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "widthout", nullable: true, length: 4 })
  widthout: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "panelHeader", nullable: true, length: 250 })
  panelHeader: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "panelThickness", nullable: true, length: 3 })
  panelThickness: string | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "panelWeightPerMeter",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeter: number | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "panelWeightPerMeterFoam",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeterFoam: number | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "panelWeightPerMeterSheetOut",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeterSheetOut: number | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "panelWeightPerMeterSheetIn",
    nullable: true,
    precision: 6,
    scale: 4,
  })
  panelWeightPerMeterSheetIn: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "cinDescr", nullable: true, length: 100 })
  cinDescr: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "coutDescr", nullable: true, length: 100 })
  coutDescr: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "ppcomment", nullable: true })
  ppcomment: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "importNo", nullable: true })
  importNo: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "masterProduction", nullable: true, length: 50 })
  masterProduction: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "typein", nullable: true, length: 5 })
  typein: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "typeout", nullable: true, length: 5 })
  typeout: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "pclass", nullable: true, default: () => "(0)" })
  pclass: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "steelgrade", nullable: true, length: 20 })
  steelgrade: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "coating", nullable: true, length: 20 })
  coating: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "coatthick", nullable: true, length: 20 })
  coatthick: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "paint", nullable: true, length: 20 })
  paint: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "classification", nullable: true, length: 20 })
  classification: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "vcoil", nullable: true, length: 20 })
  vcoil: string | null;
}
