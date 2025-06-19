import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TPackages", ["packno"], { unique: true })
@Entity("TPackages", { schema: "dbo" })
export class TPackages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "packno", length: 50 })
  packno: string;

  @Column("nchar", { name: "tcode", nullable: true, length: 24 })
  tcode: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("decimal", {
    name: "weight",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  weight: number | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("int", { name: "loc", nullable: true })
  loc: number | null;

  @Column("date", { name: "create_dt", nullable: true })
  createDt: Date | null;

  @Column("date", { name: "reserve_dt", nullable: true })
  reserveDt: Date | null;

  @Column("date", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("nchar", { name: "res_quantity", nullable: true, length: 10 })
  resQuantity: string | null;

  @Column("int", { name: "actual_quantity", nullable: true })
  actualQuantity: number | null;

  @Column("nvarchar", { name: "customer", nullable: true })
  customer: string | null;

  @Column("nvarchar", { name: "subtporder_id", nullable: true, length: 50 })
  subtporderId: string | null;

  @Column("int", { name: "subtporder_sort", nullable: true })
  subtporderSort: number | null;

  @Column("nchar", { name: "init_packno", nullable: true, length: 50 })
  initPackno: string | null;

  @Column("nchar", { name: "torderid", nullable: true, length: 13 })
  torderid: string | null;

  @Column("int", { name: "imported", nullable: true })
  imported: number | null;

  @Column("date", { name: "dateof_des", nullable: true })
  dateofDes: Date | null;

  @Column("nvarchar", { name: "dcustomer", nullable: true })
  dcustomer: string | null;

  @Column("nchar", { name: "loaderid", nullable: true, length: 10 })
  loaderid: string | null;

  @Column("int", { name: "new_status", nullable: true })
  newStatus: number | null;

  @Column("int", { name: "import", nullable: true, default: () => "(0)" })
  import: number | null;

  @Column("int", { name: "dip", nullable: true, default: () => "(0)" })
  dip: number | null;

  @Column("date", { name: "import_dt", nullable: true })
  importDt: Date | null;

  @Column("nchar", {
    name: "Classification",
    nullable: true,
    length: 10,
    default: () => "N'A'",
  })
  classification: string | null;

  @Column("nvarchar", { name: "dcustomer2", nullable: true })
  dcustomer2: string | null;

  @Column("nvarchar", { name: "editTradecode", nullable: true })
  editTradecode: string | null;

  @Column("int", { name: "certified", nullable: true, default: () => "(0)" })
  certified: number | null;

  @Column("int", { name: "customs", nullable: true })
  customs: number | null;

  @Column("smalldatetime", { name: "dateofTrans", nullable: true })
  dateofTrans: Date | null;

  @Column("int", { name: "locTrans", nullable: true })
  locTrans: number | null;

  @Column("int", { name: "statusTrans", nullable: true })
  statusTrans: number | null;

  @Column("int", { name: "hasThread", nullable: true, default: () => "(0)" })
  hasThread: number | null;

  @Column("int", { name: "verified", nullable: true, default: () => "(0)" })
  verified: number | null;
}
