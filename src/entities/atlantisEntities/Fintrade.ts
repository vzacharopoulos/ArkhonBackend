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
import { Assettradelines } from "./Assettradelines";
import { Assettrans } from "./Assettrans";
import { Bankacctrans } from "./Bankacctrans";
import { Banktradelines } from "./Banktradelines";
import { Comtradelines } from "./Comtradelines";
import { Customertrans } from "./Customertrans";
import { Custtradelines } from "./Custtradelines";
import { Expensesanalysis } from "./Expensesanalysis";
import { Branch } from "./Branch";
import { Bankaccount } from "./Bankaccount";
import { Supplier } from "./Supplier";
import { Customer } from "./Customer";
import { Paymentterms } from "./Paymentterms";
import { Currency } from "./Currency";
import { Salesman } from "./Salesman";
import { Docseries } from "./Docseries";
import { Fintransform } from "./Fintransform";
import { Fundtradelines } from "./Fundtradelines";
import { Itemtrans } from "./Itemtrans";

import { Paymentagreement } from "./Paymentagreement";

import { Storetrade } from "./Storetrade";
import { Storetradelines } from "./Storetradelines";
import { Suppliertrans } from "./Suppliertrans";
import { Suptradelines } from "./Suptradelines";
import { Vatanalysis } from "./Vatanalysis";

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

  @Column("float", { name: "AMOUNT", nullable: true, precision: 53 })
  amount: number | null;

  @Column("datetime", { name: "APPROVALDATE", nullable: true })
  approvaldate: Date | null;

  @Column("int", { name: "APPROVALUSER", nullable: true })
  approvaluser: number | null;

  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Column("smallint", { name: "SOURCE", unique: true })
  source: number;

  @Column("int", { name: "DSRID", unique: true })
  dsrid: number;

  @Column("int", { name: "DSRNUMBER", unique: true })
  dsrnumber: number;

  @Column("float", { name: "EXPENSES", nullable: true, precision: 53 })
  expenses: number | null;

  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Column("datetime", { name: "FTRDATE" })
  ftrdate: Date;

  @Column("smallint", {
    name: "ISCANCELLED",
    nullable: true,
    default: () => "0",
  })
  iscancelled: number | null;

  @Column("smallint", { name: "ISPRINTED", nullable: true, default: () => "0" })
  isprinted: number | null;

  @Column("smallint", { name: "GLUPDATED", nullable: true, default: () => "0" })
  glupdated: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true })
  justification: string | null;

  @Column("float", { name: "LAMOUNT", nullable: true, precision: 53 })
  lamount: number | null;

  @Column("float", { name: "LEXPENSES", nullable: true, precision: 53 })
  lexpenses: number | null;

  @Column("float", { name: "LOCALRATE", nullable: true, precision: 53 })
  localrate: number | null;

  @Column("float", { name: "TOTAMOUNT", nullable: true, precision: 53 })
  totamount: number | null;

  @Column("float", { name: "TOTLAMOUNT", nullable: true, precision: 53 })
  totlamount: number | null;

  @Column("float", { name: "TOTTAMOUNT", nullable: true, precision: 53 })
  tottamount: number | null;

  @Column("float", { name: "TAMOUNT", nullable: true, precision: 53 })
  tamount: number | null;

  @Column("float", { name: "TEXPENSES", nullable: true, precision: 53 })
  texpenses: number | null;

  @Column("float", { name: "TVATAMOUNT", nullable: true, precision: 53 })
  tvatamount: number | null;

  @Column("varchar", { name: "TRADECODE", length: 30 })
  tradecode: string;

  @Column("float", { name: "TRADERRATE", nullable: true, precision: 53 })
  traderrate: number | null;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("int", { name: "UPDCOUNT", nullable: true, default: () => "0" })
  updcount: number | null;

  @Column("int", { name: "FTRIDCANCELLING", nullable: true })
  ftridcancelling: number | null;

  @Column("int", { name: "ADDID", nullable: true })
  addid: number | null;

  @Column("int", { name: "BANID", nullable: true })
  banid: number | null;

  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;

  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Column("int", { name: "BNAID", nullable: true })
  bnaid: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "BNKID", nullable: true })
  bnkid: number | null;

  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Column("float", { name: "LVATAMOUNT", nullable: true, precision: 53 })
  lvatamount: number | null;

  @Column("float", { name: "TURNOVER", nullable: true, precision: 53 })
  turnover: number | null;

  @Column("float", { name: "LTURNOVER", nullable: true, precision: 53 })
  lturnover: number | null;

  @Column("float", { name: "LKEPYOAMOUNT", nullable: true, precision: 53 })
  lkepyoamount: number | null;

  @Column("float", { name: "TTURNOVER", nullable: true, precision: 53 })
  tturnover: number | null;

  @Column("float", {
    name: "OPENAMOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  openamount: number | null;

  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Column("smallint", { name: "KEPYOQTYUPD", nullable: true })
  kepyoqtyupd: number | null;

  @Column("smallint", { name: "KEPYOVALUPD", nullable: true })
  kepyovalupd: number | null;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Column("int", { name: "CFOID", nullable: true })
  cfoid: number | null;

  @Column("int", { name: "CSTID", nullable: true })
  cstid: number | null;

  @Column("smallint", { name: "STATUS", nullable: true, default: () => "0" })
  status: number | null;

  @Column("float", { name: "EXTRAVALUE1", nullable: true, precision: 53 })
  extravalue1: number | null;

  @Column("float", { name: "EXTRAVALUE2", nullable: true, precision: 53 })
  extravalue2: number | null;

  @Column("float", { name: "EXTRAVALUE3", nullable: true, precision: 53 })
  extravalue3: number | null;

  @Column("float", { name: "EXTRAVALUE4", nullable: true, precision: 53 })
  extravalue4: number | null;

  @Column("int", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("smallint", { name: "COSTMODE", nullable: true })
  costmode: number | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Column("int", { name: "FLDID", nullable: true })
  fldid: number | null;

  @Column("smallint", { name: "FLDTYPE", nullable: true })
  fldtype: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Column("int", { name: "PORID", nullable: true })
  porid: number | null;

  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Column("float", { name: "DIFFEXCHVAL", nullable: true, precision: 53 })
  diffexchval: number | null;

  @Column("int", { name: "STAID", nullable: true })
  staid: number | null;

  @Column("int", { name: "CARID", nullable: true })
  carid: number | null;

  @Column("datetime", { name: "LASTUPDDATE", nullable: true })
  lastupddate: Date | null;

  @Column("int", { name: "FTRIDPAYMENT", nullable: true })
  ftridpayment: number | null;

  @Column("smallint", { name: "FTRPAYTYPE", nullable: true })
  ftrpaytype: number | null;

  @Column("int", { name: "CSHID", nullable: true })
  cshid: number | null;

  @Column("datetime", { name: "FTRTIME", nullable: true })
  ftrtime: Date | null;

  @Column("float", { name: "CASHAMOUNT", nullable: true, precision: 53 })
  cashamount: number | null;

  @Column("smallint", { name: "POSTSTATUS", nullable: true })
  poststatus: number | null;

  @Column("int", { name: "CRMACTID", nullable: true })
  crmactid: number | null;

  @Column("smallint", { name: "FROMESHOP", nullable: true })
  fromeshop: number | null;

  @Column("varchar", { name: "LONGLANG", nullable: true, length: 30 })
  longlang: string | null;

  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Column("int", { name: "FTRIDBANKPAYMENT", nullable: true })
  ftridbankpayment: number | null;

  @Column("int", { name: "FTRIDCASHPAYMENT", nullable: true })
  ftridcashpayment: number | null;

  @Column("varchar", { name: "pan_tiresias", nullable: true, length: 50 })
  panTiresias: string | null;

  @Column("int", { name: "SVFTRID", nullable: true })
  svftrid: number | null;

  @Column("int", { name: "ZCOID", nullable: true })
  zcoid: number | null;

  @Column("varchar", { name: "ZDlvTerms", nullable: true, length: 100 })
  zDlvTerms: string | null;

  @Column("varchar", { name: "ZDlvDTime", nullable: true, length: 100 })
  zDlvDTime: string | null;

  @Column("varchar", { name: "ZPayTerms", nullable: true, length: 255 })
  zPayTerms: string | null;

  @Column("int", { name: "ZSPCID", nullable: true })
  zspcid: number | null;

  @Column("int", { name: "ZSOURCEFTRID", nullable: true })
  zsourceftrid: number | null;

  @Column("int", { name: "ZCFLINEID", nullable: true })
  zcflineid: number | null;

  @Column("varchar", { name: "ZINTSHAPE", nullable: true, length: 50 })
  zintshape: string | null;

  @Column("varchar", { name: "ZEXTSHAPE", nullable: true, length: 50 })
  zextshape: string | null;

  @Column("varchar", { name: "EINVOICEID", nullable: true, length: 255 })
  einvoiceid: string | null;

  @Column("smallint", { name: "zunderproduction", nullable: true })
  zunderproduction: number | null;

  @Column("smallint", { name: "zincomplete", nullable: true })
  zincomplete: number | null;

  @Column("smallint", { name: "zfinished", nullable: true })
  zfinished: number | null;

  @Column("int", { name: "VOIPCALLID", nullable: true })
  voipcallid: number | null;

  @Column("varchar", { name: "TAXSIGNATURE", nullable: true })
  taxsignature: string | null;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("varchar", { name: "TAXQRCODE", nullable: true })
  taxqrcode: string | null;

  @Column("smallint", { name: "TRANSMISSIONFAILURE", nullable: true })
  transmissionfailure: number | null;

  @Column("datetime", { name: "STOENDDATE", nullable: true })
  stoenddate: Date | null;

  @Column("varchar", { name: "EXTSERIES", nullable: true, length: 30 })
  extseries: string | null;

  @Column("int", { name: "EXTSERIESNO", nullable: true })
  extseriesno: number | null;

  @Column("smallint", { name: "SPECIALINVOICECATEGORY", nullable: true })
  specialinvoicecategory: number | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Column("varchar", { name: "VOUCHERNO", nullable: true, length: 50 })
  voucherno: string | null;

  @Column("varchar", { name: "SHIPMENTNO", nullable: true, length: 255 })
  shipmentno: string | null;

  @Column("varchar", {
    name: "UBLCONTRACTDOCREFID",
    nullable: true,
    length: 50,
  })
  ublcontractdocrefid: string | null;

  @Column("varchar", { name: "UBLPROJECTREFID", nullable: true, length: 50 })
  ublprojectrefid: string | null;

  @Column("smallint", { name: "UBLPROJECTREFTYPE", nullable: true })
  ublprojectreftype: number | null;

  @Column("varchar", { name: "EINVOICEURL", nullable: true, length: 255 })
  einvoiceurl: string | null;

  @Column("varchar", {
    name: "UBLACCTRANSACTIONPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctransactionpartyid: string | null;

  @OneToMany(() => Assettradelines, (assettradelines) => assettradelines.ftr)
  assettradelines: Assettradelines[];

  @OneToMany(() => Assettrans, (assettrans) => assettrans.ftr)
  assettrans: Assettrans[];

  @OneToMany(() => Bankacctrans, (bankacctrans) => bankacctrans.ftr)
  bankacctrans: Bankacctrans[];

  @OneToMany(() => Banktradelines, (banktradelines) => banktradelines.ftr)
  banktradelines: Banktradelines[];

  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.ftr)
  comtradelines: Comtradelines[];

  @OneToMany(() => Customertrans, (customertrans) => customertrans.ftr)
  customertrans: Customertrans[];

  @OneToMany(() => Custtradelines, (custtradelines) => custtradelines.ftr)
  custtradelines: Custtradelines[];

  @OneToMany(() => Expensesanalysis, (expensesanalysis) => expensesanalysis.ftr)
  expensesanalyses: Expensesanalysis[];

  @ManyToOne(() => Branch, (branch) => branch.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @ManyToOne(() => Bankaccount, (bankaccount) => bankaccount.fintrades)
  @JoinColumn([{ name: "BNAID", referencedColumnName: "id" }])
  bna: Bankaccount;

  @ManyToOne(() => Supplier, (supplier) => supplier.fintrades)
  @JoinColumn([{ name: "SUPID", referencedColumnName: "id" }])
  sup: Supplier;



  @ManyToOne(() => Customer, (customer) => customer.fintrades)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @ManyToOne(() => Currency, (currency) => currency.fintrades)
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;

  @ManyToOne(() => Salesman, (salesman) => salesman.fintrades)
  @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
  colidsalesman: Salesman;

  @ManyToOne(() => Docseries, (docseries) => docseries.fintrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DSRDOMAINTYPE", referencedColumnName: "domaintype" },
    { name: "DSRID", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;

  @OneToMany(() => Fintransform, (fintransform) => fintransform.dest)
  fintransforms: Fintransform[];



  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.ftr)
  fundtradelines: Fundtradelines[];

  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.ftr)
  itemtrans: Itemtrans[];



  @OneToMany(() => Paymentagreement, (paymentagreement) => paymentagreement.ftr)
  paymentagreements: Paymentagreement[];

  


  @OneToOne(() => Storetrade, (storetrade) => storetrade.ftr)
  storetrade: Storetrade;

  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.ftr)
  storetradelines: Storetradelines[];

  @OneToMany(() => Suppliertrans, (suppliertrans) => suppliertrans.ftr)
  suppliertrans: Suppliertrans[];

  @OneToMany(() => Suptradelines, (suptradelines) => suptradelines.ftr)
  suptradelines: Suptradelines[];

  @OneToMany(() => Vatanalysis, (vatanalysis) => vatanalysis.ftr)
  vatanalyses: Vatanalysis[];
}
