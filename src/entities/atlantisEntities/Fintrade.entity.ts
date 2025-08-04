import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Assettradelines } from "./Assettradelines.entity";
import { Assettrans } from "./Assettrans.entity";
import { Bankacctrans } from "./Bankacctrans.entity";
import { Banktradelines } from "./Banktradelines.entity";
import { Comtradelines } from "./Comtradelines.entity";
import { Customertrans } from "./Customertrans.entity";
import { Custtradelines } from "./Custtradelines.entity";
import { Expensesanalysis } from "./Expensesanalysis.entity";
import { Branch } from "./Branch.entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Supplier } from "./Supplier.entity";
import { Customer } from "./Customer.entity";
import { Paymentterms } from "./Paymentterms.entity";
import { Currency } from "./Currency.entity";
import { Salesman } from "./Salesman.entity";
import { Docseries } from "./Docseries.entity";
import { Fintransform } from "./Fintransform.entity";
import { Fundtradelines } from "./Fundtradelines.entity";
import { Itemtrans } from "./Itemtrans.entity";

import { Paymentagreement } from "./Paymentagreement.entity";

import { Storetrade } from "./Storetrade.entity";
import { Storetradelines } from "./Storetradelines.entity";
import { Suppliertrans } from "./Suppliertrans.entity";
import { Suptradelines } from "./Suptradelines.entity";
import { Vatanalysis } from "./Vatanalysis.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("KEPYOFINTRADE", ["comid", "fdtid", "source", "ftrdate"], {})
@Index("T", ["lastupddate"], {})
@Index("UNI_3400", ["id"], { unique: true })
@Index("UNI_3424", ["comid", "source", "fyeid", "dsrid", "dsrnumber"], {
  unique: true,
})
@Index("UNIX_1020", ["cfoid"], {})
@Index("UNIX_1021", ["cusid", "ftrdate"], {})
@Index("UNIX_1022", ["supid", "ftrdate"], {})
@Index("UNIX_1023", ["bnaid", "ftrdate"], {})
@Index("UNIX_1024", ["iteid", "ftrdate"], {})
@Index("UNIX_1025", ["comid", "source", "ftrdate"], {})
@Index("UNIX_1056", ["fldid", "fldtype"], {})
@Index("UNIX_1093", ["ftridpayment"], {})
@Index("UNIX_1112", ["ftridbankpayment"], {})
@Index("UNIX_1113", ["ftridcashpayment"], {})
@Index("UNIX_1119", ["lastmodified"], {})
@Entity("FINTRADE", { schema: "dbo" })
export class Fintrade {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("float", { name: "AMOUNT", nullable: true, precision: 53 })
  amount: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "APPROVALDATE", nullable: true })
  approvaldate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "APPROVALUSER", nullable: true })
  approvaluser: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", unique: true })
  source: number;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", unique: true })
  dsrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "DSRNUMBER", unique: true })
  dsrnumber: number;

  @Field({ nullable: true })
  @Column("float", { name: "EXPENSES", nullable: true, precision: 53 })
  expenses: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRDATE" })
  ftrdate: Date;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISCANCELLED",
    nullable: true,
    default: () => "0",
  })
  iscancelled: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPRINTED", nullable: true, default: () => "0" })
  isprinted: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDATED", nullable: true, default: () => "0" })
  glupdated: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true })
  justification: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LAMOUNT", nullable: true, precision: 53 })
  lamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LEXPENSES", nullable: true, precision: 53 })
  lexpenses: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TOTAMOUNT", nullable: true, precision: 53 })
  totamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TOTLAMOUNT", nullable: true, precision: 53 })
  totlamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TOTTAMOUNT", nullable: true, precision: 53 })
  tottamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TAMOUNT", nullable: true, precision: 53 })
  tamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TEXPENSES", nullable: true, precision: 53 })
  texpenses: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TVATAMOUNT", nullable: true, precision: 53 })
  tvatamount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", length: 30 })
  tradecode: string;

  @Field({ nullable: true })
  @Column("float", { name: "TRADERRATE", nullable: true, precision: 53 })
  traderrate: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "0" })
  updcount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRIDCANCELLING", nullable: true })
  ftridcancelling: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BANID", nullable: true })
  banid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BNAID", nullable: true })
  bnaid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BNKID", nullable: true })
  bnkid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LVATAMOUNT", nullable: true, precision: 53 })
  lvatamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TURNOVER", nullable: true, precision: 53 })
  turnover: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LTURNOVER", nullable: true, precision: 53 })
  lturnover: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LKEPYOAMOUNT", nullable: true, precision: 53 })
  lkepyoamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TTURNOVER", nullable: true, precision: 53 })
  tturnover: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "OPENAMOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  openamount: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOQTYUPD", nullable: true })
  kepyoqtyupd: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOVALUPD", nullable: true })
  kepyovalupd: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CFOID", nullable: true })
  cfoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CSTID", nullable: true })
  cstid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", nullable: true, default: () => "0" })
  status: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE1", nullable: true, precision: 53 })
  extravalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE2", nullable: true, precision: 53 })
  extravalue2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE3", nullable: true, precision: 53 })
  extravalue3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXTRAVALUE4", nullable: true, precision: 53 })
  extravalue4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COSTMODE", nullable: true })
  costmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLDID", nullable: true })
  fldid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLDTYPE", nullable: true })
  fldtype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Field({ nullable: true })
  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STAID", nullable: true })
  staid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CARID", nullable: true })
  carid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRIDPAYMENT", nullable: true })
  ftridpayment: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FTRPAYTYPE", nullable: true })
  ftrpaytype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CSHID", nullable: true })
  cshid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRTIME", nullable: true })
  ftrtime: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "CASHAMOUNT", nullable: true, precision: 53 })
  cashamount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "POSTSTATUS", nullable: true })
  poststatus: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CRMACTID", nullable: true })
  crmactid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FROMESHOP", nullable: true })
  fromeshop: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LONGLANG", nullable: true, length: 30 })
  longlang: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("int", { name: "FTRIDBANKPAYMENT", nullable: true })
  ftridbankpayment: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRIDCASHPAYMENT", nullable: true })
  ftridcashpayment: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "pan_tiresias", nullable: true, length: 50 })
  panTiresias: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ZCOID", nullable: true })
  zcoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZDlvTerms", nullable: true, length: 100 })
  zDlvTerms: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZDlvDTime", nullable: true, length: 100 })
  zDlvDTime: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZPayTerms", nullable: true, length: 255 })
  zPayTerms: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ZSPCID", nullable: true })
  zspcid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ZSOURCEFTRID", nullable: true })
  zsourceftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ZCFLINEID", nullable: true })
  zcflineid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZINTSHAPE", nullable: true, length: 50 })
  zintshape: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZEXTSHAPE", nullable: true, length: 50 })
  zextshape: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEID", nullable: true, length: 255 })
  einvoiceid: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "zunderproduction", nullable: true })
  zunderproduction: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "zincomplete", nullable: true })
  zincomplete: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "zfinished", nullable: true })
  zfinished: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VOIPCALLID", nullable: true })
  voipcallid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXSIGNATURE", nullable: true })
  taxsignature: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXQRCODE", nullable: true })
  taxqrcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSMISSIONFAILURE", nullable: true })
  transmissionfailure: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "STOENDDATE", nullable: true })
  stoenddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTSERIES", nullable: true, length: 30 })
  extseries: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "EXTSERIESNO", nullable: true })
  extseriesno: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VOUCHERNO", nullable: true, length: 50 })
  voucherno: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPMENTNO", nullable: true, length: 255 })
  shipmentno: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "UBLCONTRACTDOCREFID",
    nullable: true,
    length: 50,
  })
  ublcontractdocrefid: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "UBLPROJECTREFID", nullable: true, length: 50 })
  ublprojectrefid: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UBLPROJECTREFTYPE", nullable: true })
  ublprojectreftype: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEURL", nullable: true, length: 255 })
  einvoiceurl: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "UBLACCTRANSACTIONPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctransactionpartyid: string | null;

  @Field(() => [Assettradelines], { nullable: true })
  @OneToMany(() => Assettradelines, (assettradelines) => assettradelines.ftr)
  assettradelines: Assettradelines[];

  @Field(() => [Assettrans], { nullable: true })
  @OneToMany(() => Assettrans, (assettrans) => assettrans.ftr)
  assettrans: Assettrans[];

  @Field(() => [Bankacctrans], { nullable: true })
  @OneToMany(() => Bankacctrans, (bankacctrans) => bankacctrans.ftr)
  bankacctrans: Bankacctrans[];

  @Field(() => [Banktradelines], { nullable: true })
  @OneToMany(() => Banktradelines, (banktradelines) => banktradelines.ftr)
  banktradelines: Banktradelines[];

  @Field(() => [Comtradelines], { nullable: true })
  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.ftr)
  comtradelines: Comtradelines[];

  @Field(() => [Customertrans], { nullable: true })
  @OneToMany(() => Customertrans, (customertrans) => customertrans.ftr)
  customertrans: Customertrans[];

  @Field(() => [Custtradelines], { nullable: true })
  @OneToMany(() => Custtradelines, (custtradelines) => custtradelines.ftr)
  custtradelines: Custtradelines[];

  @Field(() => [Expensesanalysis], { nullable: true })
  @OneToMany(() => Expensesanalysis, (expensesanalysis) => expensesanalysis.ftr)
  expensesanalyses: Expensesanalysis[];

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @Field({ nullable: true })
  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.fintrades)
  @JoinColumn([{ name: "BNAID", referencedColumnName: "id" }])
  bna: Bankaccount;

  @Field({ nullable: true })
  @ManyToOne(() => Supplier, (supplier) => supplier.fintrades)
  @JoinColumn([{ name: "SUPID", referencedColumnName: "id" }])
  sup: Supplier;



  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.fintrades)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

  @Field({ nullable: true })
  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.fintrades)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Salesman, (salesman) => salesman.fintrades)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @Field({ nullable: true })
  @ManyToOne(() => Docseries, (docseries) => docseries.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DSRDOMAINTYPE", referencedColumnName: "domaintype" },
    { name: "DSRID", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;

  @Field(() => [Fintransform], { nullable: true })
  @OneToMany(() => Fintransform, (fintransform) => fintransform.dest)
  fintransforms: Fintransform[];



  @Field(() => [Fundtradelines], { nullable: true })
  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.ftr)
  fundtradelines: Fundtradelines[];

  @Field(() => [Itemtrans], { nullable: true })
  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.ftr)
  itemtrans: Itemtrans[];



  @Field(() => [Paymentagreement], { nullable: true })
  @OneToMany(() => Paymentagreement, (paymentagreement) => paymentagreement.ftr)
  paymentagreements: Paymentagreement[];

  


  @Field({ nullable: true })
  @OneToOne(() => Storetrade, (storetrade) => storetrade.ftr)
  storetrade: Storetrade;

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.ftr)
  storetradelines: Storetradelines[];

  @Field(() => [Suppliertrans], { nullable: true })
  @OneToMany(() => Suppliertrans, (suppliertrans) => suppliertrans.ftr)
  suppliertrans: Suppliertrans[];

  @Field(() => [Suptradelines], { nullable: true })
  @OneToMany(() => Suptradelines, (suptradelines) => suptradelines.ftr)
  suptradelines: Suptradelines[];

  @Field(() => [Vatanalysis], { nullable: true })
  @OneToMany(() => Vatanalysis, (vatanalysis) => vatanalysis.ftr)
  vatanalyses: Vatanalysis[];
}
