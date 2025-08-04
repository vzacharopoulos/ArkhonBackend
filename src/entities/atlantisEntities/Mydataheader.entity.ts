import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "(0)" })
  updcount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SXID", nullable: true })
  sxid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MARK", nullable: true, length: 64 })
  mark: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISSSTYPE", nullable: true })
  issstype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSID", nullable: true })
  issid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSVATNUMBER", nullable: true, length: 15 })
  issvatnumber: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSCOUNTRY", nullable: true })
  isscountry: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSCOUNTRYCODE", nullable: true, length: 10 })
  isscountrycode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSBRANCH", nullable: true })
  issbranch: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSNAME", nullable: true, length: 128 })
  issname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSSTREET", nullable: true, length: 100 })
  issstreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSNUMBER", nullable: true, length: 5 })
  issnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSPOSTALCODE", nullable: true, length: 7 })
  isspostalcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSCITY", nullable: true, length: 30 })
  isscity: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COUDTYPE", nullable: true })
  coudtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COUID", nullable: true })
  couid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUVATNUMBER", nullable: true, length: 15 })
  couvatnumber: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COUCOUNTRY", nullable: true })
  coucountry: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUCOUNTRYCODE", nullable: true, length: 10 })
  coucountrycode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COUBRANCH", nullable: true })
  coubranch: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUNAME", nullable: true, length: 128 })
  couname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUSTREET", nullable: true, length: 100 })
  coustreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUNUMBER", nullable: true, length: 5 })
  counumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUPOSTALCODE", nullable: true, length: 7 })
  coupostalcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUCITY", nullable: true, length: 30 })
  coucity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SERIES", nullable: true, length: 30 })
  series: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AA", nullable: true, length: 50 })
  aa: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ISSUEDATE", nullable: true })
  issuedate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INVOICETYPE", nullable: true, length: 30 })
  invoicetype: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATPAYMENTSUSPENSION", nullable: true })
  vatpaymentsuspension: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURRENCY", nullable: true })
  currency: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CURRENCYCODE", nullable: true, length: 7 })
  currencycode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXCHANGERATE", nullable: true, precision: 53 })
  exchangerate: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CORRELATEDINVOICES",
    nullable: true,
    length: 128,
  })
  correlatedinvoices: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DISPATCHDATE", nullable: true })
  dispatchdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DISPATCHTIME", nullable: true })
  dispatchtime: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VEHICLENUMBER", nullable: true, length: 10 })
  vehiclenumber: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MOVEPURPOSE", nullable: true })
  movepurpose: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "NETVALUE", nullable: true, precision: 53 })
  netvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATVALUE", nullable: true, precision: 53 })
  vatvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WITHHELDVALUE", nullable: true, precision: 53 })
  withheldvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FEESVALUE", nullable: true, precision: 53 })
  feesvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "STAMPDUTYVALUE", nullable: true, precision: 53 })
  stampdutyvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OTHERTAXESVALUE", nullable: true, precision: 53 })
  othertaxesvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEDUCTIONSVALUE", nullable: true, precision: 53 })
  deductionsvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "GROSSVALUE", nullable: true, precision: 53 })
  grossvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCREDIT", nullable: true })
  iscredit: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "HUID", nullable: true, length: 64 })
  huid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ERRORTEXT", nullable: true, length: 255 })
  errortext: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CANCELLATIONFTRID", nullable: true })
  cancellationftrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CANCELLATIONMARK", nullable: true, length: 64 })
  cancellationmark: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PAYMENTTYPE", nullable: true })
  paymenttype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFROMEINVOICE", nullable: true })
  isfromeinvoice: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "FUELINVOICE",
    nullable: true,
    default: () => "(0)",
  })
  fuelinvoice: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ERRORSTATUS", nullable: true })
  errorstatus: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "REJECTIONTYPE", nullable: true })
  rejectiontype: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RELFTRIDS", nullable: true, length: 100 })
  relftrids: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUIDENTITYNUM", nullable: true, length: 100 })
  couidentitynum: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPPLYACCOUNTNO", nullable: true, length: 100 })
  supplyaccountno: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSMISSIONFAILURE", nullable: true })
  transmissionfailure: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOICEVARIATIONTYPE", nullable: true })
  invoicevariationtype: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEVIATIONVALUE", nullable: true, precision: 53 })
  deviationvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSUECNTID", nullable: true })
  issuecntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ISSUECNTIDCODE", nullable: true, length: 10 })
  issuecntidcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "QRURL", nullable: true, length: 255 })
  qrurl: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISDELIVERYNOTE", nullable: true })
  isdeliverynote: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "OTHERMOVEPURPOSETITLE",
    nullable: true,
    length: 120,
  })
  othermovepurposetitle: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOADINGADDRSTREET", nullable: true, length: 100 })
  loadingaddrstreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOADINGADDRNUMBER", nullable: true, length: 5 })
  loadingaddrnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "LOADINGADDRPOSTALCODE",
    nullable: true,
    length: 7,
  })
  loadingaddrpostalcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOADINGADDRCITY", nullable: true, length: 30 })
  loadingaddrcity: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DELIVERYADDRSTREET",
    nullable: true,
    length: 100,
  })
  deliveryaddrstreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DELIVERYADDRNUMBER", nullable: true, length: 5 })
  deliveryaddrnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DELIVERYADDRPOSTALCODE",
    nullable: true,
    length: 7,
  })
  deliveryaddrpostalcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DELIVERYADDRCITY", nullable: true, length: 30 })
  deliveryaddrcity: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "STARTSHIPPINGBRANCH", nullable: true })
  startshippingbranch: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMPLETESHIPPINGBRANCH", nullable: true })
  completeshippingbranch: number | null;


  @Field(() => [Mydataexplines], { nullable: true })
  @OneToMany(
    () => Mydataexplines,
    (mydataexplines) => mydataexplines.mydataheader
  )
  mydataexplines: Mydataexplines[];

  @Field(() => [Mydatalines], { nullable: true })
  @OneToMany(() => Mydatalines, (mydatalines) => mydatalines.mydataheader)
  mydatalines: Mydatalines[];


}
