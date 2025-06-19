import { Column, Entity } from "typeorm";

@Entity("VCOILS", { schema: "dbo" })
export class Vcoils {
  @Column("int", { name: "id" })
  id: number;

  @Column("nvarchar", { name: "coilno", nullable: true })
  coilno: string | null;

  @Column("nchar", { name: "color", nullable: true, length: 10 })
  color: string | null;

  @Column("nchar", { name: "sheet_type", nullable: true, length: 10 })
  sheetType: string | null;

  @Column("nchar", { name: "coating", nullable: true, length: 10 })
  coating: string | null;

  @Column("nchar", { name: "coathick", nullable: true, length: 10 })
  coathick: string | null;

  @Column("nchar", { name: "paint_type", nullable: true, length: 10 })
  paintType: string | null;

  @Column("nchar", { name: "steel_grade", nullable: true, length: 10 })
  steelGrade: string | null;

  @Column("smalldatetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("smalldatetime", { name: "del_date", nullable: true })
  delDate: Date | null;

  @Column("smalldatetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("nchar", { name: "gauge_thickness", nullable: true, length: 10 })
  gaugeThickness: string | null;

  @Column("decimal", {
    name: "thickness",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  thickness: number | null;

  @Column("decimal", {
    name: "width_coil",
    nullable: true,
    precision: 10,
    scale: 4,
  })
  widthCoil: number | null;

  @Column("decimal", {
    name: "init_weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  initWeight: number | null;

  @Column("decimal", {
    name: "weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  weight: number | null;

  @Column("decimal", {
    name: "curr_weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  currWeight: number | null;

  @Column("decimal", {
    name: "gross_weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  grossWeight: number | null;

  @Column("decimal", {
    name: "wastage",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  wastage: number | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("smallint", { name: "loc", nullable: true })
  loc: number | null;

  @Column("decimal", {
    name: "curr_length",
    nullable: true,
    precision: 38,
    scale: 20,
  })
  currLength: number | null;

  @Column("nvarchar", { name: "comments", nullable: true })
  comments: string | null;

  @Column("nvarchar", { name: "commentsPanel", nullable: true })
  commentsPanel: string | null;

  @Column("nvarchar", { name: "supplier", nullable: true })
  supplier: string | null;

  @Column("varchar", { name: "openstatus", length: 6 })
  openstatus: string;

  @Column("int", { name: "innerdiameter", nullable: true })
  innerdiameter: number | null;

  @Column("int", { name: "quality", nullable: true })
  quality: number | null;

  @Column("nvarchar", { name: "supcoilID", nullable: true })
  supcoilId: string | null;

  @Column("nvarchar", { name: "customer", nullable: true })
  customer: string | null;

  @Column("smalldatetime", { name: "order_date", nullable: true })
  orderDate: Date | null;

  @Column("nchar", { name: "corderid", nullable: true, length: 13 })
  corderid: string | null;

  @Column("smalldatetime", { name: "load_date", nullable: true })
  loadDate: Date | null;

  @Column("nchar", { name: "tporder_id", nullable: true, length: 15 })
  tporderId: string | null;

  @Column("int", { name: "tporder_sort", nullable: true })
  tporderSort: number | null;

  @Column("char", {
    name: "CLASSIFICATION",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  classification: string | null;

  @Column("varchar", { name: "PAINTED", length: 11 })
  painted: string;

  @Column("nchar", { name: "heatno", nullable: true, length: 20 })
  heatno: string | null;

  @Column("date", { name: "cutDate", nullable: true })
  cutDate: Date | null;

  @Column("decimal", {
    name: "cutWastage",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  cutWastage: number | null;

  @Column("varchar", { name: "nomthickness", nullable: true, length: 4 })
  nomthickness: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 10, scale: 2 })
  price: number | null;

  @Column("date", { name: "paintDate", nullable: true })
  paintDate: Date | null;

  @Column("nvarchar", { name: "cutComment", nullable: true })
  cutComment: string | null;

  @Column("nchar", { name: "surface_type", nullable: true, length: 10 })
  surfaceType: string | null;

  @Column("nchar", { name: "loaderid", nullable: true, length: 10 })
  loaderid: string | null;

  @Column("int", { name: "donkey", nullable: true })
  donkey: number | null;

  @Column("date", { name: "dateof_des34", nullable: true })
  dateofDes34: Date | null;
}
