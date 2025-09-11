import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, Int, Float } from "@nestjs/graphql";
import { Status } from "./Status.entity";
import { UsersLocationAccess } from "./UserLocationAccess.entity";
import { Location } from "./Location.entity";
import {openstatus} from "../../coils/dto/coils-enum-types"
import { CoilColor } from "./CoilColor.entity";

@ObjectType()
@Index("PK_COILS", ["id"], { unique: true })
@Entity("COILS", { schema: "dbo" })
export class Coils {
@Field(() => Int)
@PrimaryGeneratedColumn({ type: "int", name: "id" })
id: number;

@Field({ nullable: true })
@Column("nvarchar", { name: "coilno", nullable: true })
coilno: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "color", nullable: true, length: 10 })
color: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "sheet_type", nullable: true, length: 10 })
sheetType: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "coating", nullable: true, length: 10 })
coating: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "coathick", nullable: true, length: 10 })
coathick: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "paint_type", nullable: true, length: 10 })
paintType: string | null;

@Field({ nullable: true })
@Column("nchar", { name: "steel_grade", nullable: true, length: 10 })
steelGrade: string | null;

@Field(() => Date, { nullable: true })
@Column("smalldatetime", { name: "create_date", nullable: true })
createDate: Date | null;

@Field(() => Date, { nullable: true })
@Column("smalldatetime", { name: "del_date", nullable: true })
delDate: Date | null;

@Field(() => Date, { nullable: true })
@Column("smalldatetime", { name: "up_date", nullable: true })
upDate: Date | null;

@Field({ nullable: true })
@Column("nchar", { name: "gauge_thickness", nullable: true, length: 10 })
gaugeThickness: string | null;

@Field(() => Float, { nullable: true })
@Column("decimal", {
name: "thickness",
nullable: true,
precision: 10,
scale: 2,
})
thickness: number | null;

@Field(() => Float, { nullable: true })
@Column("decimal", {
name: "width_coil",
nullable: true,
precision: 10,
scale: 4,
})
widthCoil: number | null;

@Field(() => Float, { nullable: true })
@Column("decimal", {
name: "init_weight",
nullable: true,
precision: 10,
scale: 3,
})
initWeight: number | null;

 @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  weight: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "curr_weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  currWeight: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "gross_weight",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  grossWeight: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "wastage",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  wastage: number | null;
 @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "loc", nullable: true })
  loc: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "curr_length",
    nullable: true,
    precision: 38,
    scale: 20,
  })
  currLength: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "comments", nullable: true })
  comments: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "commentsPanel", nullable: true })
  commentsPanel: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "supplier", nullable: true })
  supplier: string | null;

@Column({
    type: 'varchar', // Or 'varchar' depending on your SQL Server column type
    length: 6,       // Max length of your enum values, e.g., 'CLOSED' is 6 characters
    enum: openstatus, // Link to your TypeScript enum
    default: openstatus.OPEN // Optional: set a default value
  })
  @Field(() => openstatus, { nullable: false }) // Expose it as the GraphQL Enum type
  openstatus: openstatus;


  @Field(() => Int, { nullable: true })
  @Column("int", { name: "innerdiameter", nullable: true })
  innerdiameter: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "quality", nullable: true })
  quality: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "supcoilID", nullable: true })
  supcoilId: string | null;
   @Field({ nullable: true })
  @Column("nvarchar", { name: "customer", nullable: true })
  customer: string | null;

  @Field(() => Date, { nullable: true })
  @Column("smalldatetime", { name: "order_date", nullable: true })
  orderDate: Date | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "corderid", nullable: true, length: 13 })
  corderid: string | null;

  @Field(() => Date, { nullable: true })
  @Column("smalldatetime", { name: "load_date", nullable: true })
  loadDate: Date | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "tporder_id", nullable: true, length: 15 })
  tporderId: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "tporder_sort", nullable: true })
  tporderSort: number | null;

  @Field({ nullable: true })
  @Column("char", {
    name: "CLASSIFICATION",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  classification: string | null;

  @Field()
  @Column("varchar", { name: "PAINTED", length: 11 })
  painted: string;

  @Field({ nullable: true })
  @Column("nchar", { name: "heatno", nullable: true, length: 20 })
  heatno: string | null;

  @Field(() => Date, { nullable: true })
  @Column("date", { name: "cutDate", nullable: true })
  cutDate: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "cutWastage",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  cutWastage: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "nomthickness", nullable: true, length: 4 })
  nomthickness: string | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "price", nullable: true, precision: 10, scale: 2 })
  price: number | null;

  @Field(() => Date, { nullable: true })
  @Column("date", { name: "paintDate", nullable: true })
  paintDate: Date | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "cutComment", nullable: true })
  cutComment: string | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "surface_type", nullable: true, length: 10 })
  surfaceType: string | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "loaderid", nullable: true, length: 10 })
  loaderid: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "donkey", nullable: true })
  donkey: number | null;

  @Field(() => Date, { nullable: true })
  @Column("date", { name: "dateof_des34", nullable: true })
  dateofDes34: Date | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "dcustomer", nullable: true })
  dcustomer: string | null;

  @Field(() => Date, { nullable: true })
  @Column("smalldatetime", { name: "prodDate", nullable: true })
  prodDate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "datediff", nullable: true })
  datediff: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "datediffnow", nullable: true })
  datediffnow: number | null;
   @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "tempStatus", nullable: true })
  tempStatus: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "property", nullable: true })
  property: number | null;

  @Field()
  @Column("varchar", { name: "slitrange", length: 27 })
  slitrange: string;

  @Field()
  @Column("varchar", { name: "slithick", length: 32 })
  slithick: string;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "locTrans", nullable: true })
  locTrans: number | null;

  @Field(() => Date, { nullable: true })
  @Column("smalldatetime", { name: "dateTrans", nullable: true })
  dateTrans: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "customs", nullable: true })
  customs: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthAGR", nullable: true, precision: 38, scale: 20 })
  currLengthAgr: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthPOL", nullable: true, precision: 38, scale: 20 })
  currLengthPol: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthALU", nullable: true, precision: 38, scale: 20 })
  currLengthAlu: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthALUP", nullable: true, precision: 38, scale: 20 })
  currLengthAlup: number | null;

  @Field(() => Float, { nullable: true })
  @Column("numeric", { name: "curr_lengthPAP", nullable: true, precision: 38, scale: 17 })
  currLengthPap: number | null;



    @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthALUE", nullable: true, precision: 38, scale: 20 })
  currLengthAlue: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthBIT", nullable: true, precision: 38, scale: 20 })
  currLengthBit: number | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "curr_lengthSTO", nullable: true, precision: 38, scale: 20 })
  currLengthSto: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "ANVcoated", nullable: true, default: () => "(0)" })
  anVcoated: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "prodComment", nullable: true })
  prodComment: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "documents", nullable: true })
  documents: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "vesselName", nullable: true })
  vesselName: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "dischargePort", nullable: true })
  dischargePort: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "productCode", nullable: true, length: 50 })
  productCode: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "dcustomerName", nullable: true })
  dcustomerName: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "cnomthickness", nullable: true, length: 4 })
  cnomthickness: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "tnomthickness", nullable: true, length: 4 })
  tnomthickness: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "ptradecode", nullable: true, length: 50 })
  ptradecode: string | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", { name: "clength", nullable: true, precision: 10, scale: 3 })
  clength: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffDelNow", nullable: true })
  dateDiffDelNow: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffCutNow", nullable: true })
  dateDiffCutNow: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffCutProd", nullable: true })
  dateDiffCutProd: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffCutSales", nullable: true })
  dateDiffCutSales: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffDelPaint", nullable: true })
  dateDiffDelPaint: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffDelSales", nullable: true })
  dateDiffDelSales: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "dateDiffDelCut", nullable: true })
  dateDiffDelCut: number | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "company", nullable: true, length: 50 })
  company: string | null;

  // @Field(() => CoilColor, { nullable: true })
  // @ManyToOne(() => CoilColor, (color) => color.coils)
  // @JoinColumn({ name: 'color'})
  // colorRef: CoilColor | null;

  // Expose name directly to GraphQL (optional convenience field)
  // @Field(() => String, { nullable: true })
  // get colorName(): string | null {
  //   return this.colorRef?.name ?? null;
  // }
 // ✅ New boolean column (BIT in MSSQL)

  @Field(() => Boolean, { nullable: true })
  @Column({ type: "bit", default: false })
  isUnloaded: boolean;

   @Field(() => Int, { nullable: true })
  @Column("int", { name: "shipBayNo", nullable: true })
  shipBayNo: number | null;



  @Field(() => [UsersLocationAccess])
  @OneToMany(() => UsersLocationAccess, (access) => access.location)
  locationAccess: UsersLocationAccess[];

  @Field(() => Status, { nullable: true })
  @ManyToOne(() => Status, (status) => status.coils)
  @JoinColumn({ name: "status" })
  status: Status;
}
