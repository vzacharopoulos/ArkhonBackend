import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mydataexplines } from "./Mydataexplines.entity";
import { Mydatalines } from "./Mydatalines.entity";

@Index("UNI_18206", ["id"], { unique: true })
@Index("UNIIDX_1160_1", ["relftrids", "ftrid"], {})
@Index("UNIIDX_1160_2", ["relftrids", "accid"], {})
@Index("UNIIDX_1160_3", ["relftrids", "sxid"], {})
@Index("UNIX_1136", ["issuedate"], {})
@Index("UNIX_1137", ["ftrid"], {})
@ObjectType()
@Entity("MYDATAHEADER", { schema: "dbo" })
export class Mydataheader {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "(0)" })
  updcount: number | null;

  @Column("int", { name: "SXID", nullable: true })
  sxid: number | null;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("varchar", { name: "MARK", nullable: true, length: 64 })
  mark: string | null;

  @Column("smallint", { name: "ISSSTYPE", nullable: true })
  issstype: number | null;

  @Column("int", { name: "ISSID", nullable: true })
  issid: number | null;

  @Column("varchar", { name: "ISSVATNUMBER", nullable: true, length: 15 })
  issvatnumber: string | null;

  @Column("int", { name: "ISSCOUNTRY", nullable: true })
  isscountry: number | null;

  @Column("varchar", { name: "ISSCOUNTRYCODE", nullable: true, length: 10 })
  isscountrycode: string | null;

  @Column("int", { name: "ISSBRANCH", nullable: true })
  issbranch: number | null;

  @Column("varchar", { name: "ISSNAME", nullable: true, length: 128 })
  issname: string | null;

  @Column("varchar", { name: "ISSSTREET", nullable: true, length: 100 })
  issstreet: string | null;

  @Column("varchar", { name: "ISSNUMBER", nullable: true, length: 5 })
  issnumber: string | null;

  @Column("varchar", { name: "ISSPOSTALCODE", nullable: true, length: 7 })
  isspostalcode: string | null;

  @Column("varchar", { name: "ISSCITY", nullable: true, length: 30 })
  isscity: string | null;

  @Column("smallint", { name: "COUDTYPE", nullable: true })
  coudtype: number | null;

  @Column("int", { name: "COUID", nullable: true })
  couid: number | null;

  @Column("varchar", { name: "COUVATNUMBER", nullable: true, length: 15 })
  couvatnumber: string | null;

  @Column("int", { name: "COUCOUNTRY", nullable: true })
  coucountry: number | null;

  @Column("varchar", { name: "COUCOUNTRYCODE", nullable: true, length: 10 })
  coucountrycode: string | null;

  @Column("int", { name: "COUBRANCH", nullable: true })
  coubranch: number | null;

  @Column("varchar", { name: "COUNAME", nullable: true, length: 128 })
  couname: string | null;

  @Column("varchar", { name: "COUSTREET", nullable: true, length: 100 })
  coustreet: string | null;

  @Column("varchar", { name: "COUNUMBER", nullable: true, length: 5 })
  counumber: string | null;

  @Column("varchar", { name: "COUPOSTALCODE", nullable: true, length: 7 })
  coupostalcode: string | null;

  @Column("varchar", { name: "COUCITY", nullable: true, length: 30 })
  coucity: string | null;

  @Column("varchar", { name: "SERIES", nullable: true, length: 30 })
  series: string | null;

  @Column("varchar", { name: "AA", nullable: true, length: 50 })
  aa: string | null;

  @Column("datetime", { name: "ISSUEDATE", nullable: true })
  issuedate: Date | null;

  @Column("varchar", { name: "INVOICETYPE", nullable: true, length: 30 })
  invoicetype: string | null;

  @Column("int", { name: "VATPAYMENTSUSPENSION", nullable: true })
  vatpaymentsuspension: number | null;

  @Column("int", { name: "CURRENCY", nullable: true })
  currency: number | null;

  @Column("varchar", { name: "CURRENCYCODE", nullable: true, length: 7 })
  currencycode: string | null;

  @Column("float", { name: "EXCHANGERATE", nullable: true, precision: 53 })
  exchangerate: number | null;

  @Column("varchar", {
    name: "CORRELATEDINVOICES",
    nullable: true,
    length: 128,
  })
  correlatedinvoices: string | null;

  @Column("int", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("datetime", { name: "DISPATCHDATE", nullable: true })
  dispatchdate: Date | null;

  @Column("datetime", { name: "DISPATCHTIME", nullable: true })
  dispatchtime: Date | null;

  @Column("varchar", { name: "VEHICLENUMBER", nullable: true, length: 10 })
  vehiclenumber: string | null;

  @Column("int", { name: "MOVEPURPOSE", nullable: true })
  movepurpose: number | null;

  @Column("float", { name: "NETVALUE", nullable: true, precision: 53 })
  netvalue: number | null;

  @Column("float", { name: "VATVALUE", nullable: true, precision: 53 })
  vatvalue: number | null;

  @Column("float", { name: "WITHHELDVALUE", nullable: true, precision: 53 })
  withheldvalue: number | null;

  @Column("float", { name: "FEESVALUE", nullable: true, precision: 53 })
  feesvalue: number | null;

  @Column("float", { name: "STAMPDUTYVALUE", nullable: true, precision: 53 })
  stampdutyvalue: number | null;

  @Column("float", { name: "OTHERTAXESVALUE", nullable: true, precision: 53 })
  othertaxesvalue: number | null;

  @Column("float", { name: "DEDUCTIONSVALUE", nullable: true, precision: 53 })
  deductionsvalue: number | null;

  @Column("float", { name: "GROSSVALUE", nullable: true, precision: 53 })
  grossvalue: number | null;

  @Column("smallint", { name: "ISCREDIT", nullable: true })
  iscredit: number | null;

  @Column("varchar", { name: "HUID", nullable: true, length: 64 })
  huid: string | null;

  @Column("varchar", { name: "ERRORTEXT", nullable: true, length: 255 })
  errortext: string | null;

  @Column("int", { name: "CANCELLATIONFTRID", nullable: true })
  cancellationftrid: number | null;

  @Column("varchar", { name: "CANCELLATIONMARK", nullable: true, length: 64 })
  cancellationmark: string | null;

  @Column("int", { name: "PAYMENTTYPE", nullable: true })
  paymenttype: number | null;

  @Column("smallint", { name: "ISFROMEINVOICE", nullable: true })
  isfromeinvoice: number | null;

  @Column("smallint", {
    name: "FUELINVOICE",
    nullable: true,
    default: () => "(0)",
  })
  fuelinvoice: number | null;

  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("smallint", { name: "ERRORSTATUS", nullable: true })
  errorstatus: number | null;

  @Column("smallint", { name: "REJECTIONTYPE", nullable: true })
  rejectiontype: number | null;

  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Column("varchar", { name: "RELFTRIDS", nullable: true, length: 100 })
  relftrids: string | null;

  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Column("varchar", { name: "COUIDENTITYNUM", nullable: true, length: 100 })
  couidentitynum: string | null;

  @Column("varchar", { name: "SUPPLYACCOUNTNO", nullable: true, length: 100 })
  supplyaccountno: string | null;

  @Column("smallint", { name: "TRANSMISSIONFAILURE", nullable: true })
  transmissionfailure: number | null;

  @Column("smallint", { name: "INVOICEVARIATIONTYPE", nullable: true })
  invoicevariationtype: number | null;

  @Column("float", { name: "DEVIATIONVALUE", nullable: true, precision: 53 })
  deviationvalue: number | null;

  @Column("int", { name: "ISSUECNTID", nullable: true })
  issuecntid: number | null;

  @Column("varchar", { name: "ISSUECNTIDCODE", nullable: true, length: 10 })
  issuecntidcode: string | null;

  @Column("varchar", { name: "QRURL", nullable: true, length: 255 })
  qrurl: string | null;

  @Column("smallint", { name: "ISDELIVERYNOTE", nullable: true })
  isdeliverynote: number | null;

  @Column("varchar", {
    name: "OTHERMOVEPURPOSETITLE",
    nullable: true,
    length: 120,
  })
  othermovepurposetitle: string | null;

  @Column("varchar", { name: "LOADINGADDRSTREET", nullable: true, length: 100 })
  loadingaddrstreet: string | null;

  @Column("varchar", { name: "LOADINGADDRNUMBER", nullable: true, length: 5 })
  loadingaddrnumber: string | null;

  @Column("varchar", {
    name: "LOADINGADDRPOSTALCODE",
    nullable: true,
    length: 7,
  })
  loadingaddrpostalcode: string | null;

  @Column("varchar", { name: "LOADINGADDRCITY", nullable: true, length: 30 })
  loadingaddrcity: string | null;

  @Column("varchar", {
    name: "DELIVERYADDRSTREET",
    nullable: true,
    length: 100,
  })
  deliveryaddrstreet: string | null;

  @Column("varchar", { name: "DELIVERYADDRNUMBER", nullable: true, length: 5 })
  deliveryaddrnumber: string | null;

  @Column("varchar", {
    name: "DELIVERYADDRPOSTALCODE",
    nullable: true,
    length: 7,
  })
  deliveryaddrpostalcode: string | null;

  @Column("varchar", { name: "DELIVERYADDRCITY", nullable: true, length: 30 })
  deliveryaddrcity: string | null;

  @Column("int", { name: "STARTSHIPPINGBRANCH", nullable: true })
  startshippingbranch: number | null;

  @Column("int", { name: "COMPLETESHIPPINGBRANCH", nullable: true })
  completeshippingbranch: number | null;


  @OneToMany(
    () => Mydataexplines,
    (mydataexplines) => mydataexplines.mydataheader
  )
  mydataexplines: Mydataexplines[];

  @OneToMany(() => Mydatalines, (mydatalines) => mydatalines.mydataheader)
  mydatalines: Mydatalines[];


}
