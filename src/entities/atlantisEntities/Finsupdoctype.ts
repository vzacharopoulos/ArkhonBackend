import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { Mattrntype } from "./Mattrntype";
import { Assettrntype } from "./Assettrntype";
import { Suptrntype } from "./Suptrntype";
import { Valfndsuptrn } from "./Valfndsuptrn";

@Index("UNI_5152", ["comid", "codeid"], { unique: true })
@Index("UNI_5236", ["id"], { unique: true })
@Entity("FINSUPDOCTYPE", { schema: "dbo" })
export class Finsupdoctype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TNACODE", length: 30 })
  tnacode: string;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "KEPYOQTYUPD" })
  kepyoqtyupd: number;

  @Column("smallint", { name: "KEPYOVALUPD" })
  kepyovalupd: number;

  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Column("smallint", { name: "PRICEMODE", nullable: true })
  pricemode: number | null;

  @Column("smallint", { name: "FULLREMAINMODE", nullable: true })
  fullremainmode: number | null;

  @Column("smallint", { name: "STOCKREMAINMODE", nullable: true })
  stockremainmode: number | null;

  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Column("smallint", {
    name: "STOCKCHECKACTION",
    nullable: true,
    default: () => "0",
  })
  stockcheckaction: number | null;

  @Column("smallint", { name: "SUPPLIERSMODE", nullable: true })
  suppliersmode: number | null;

  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Column("smallint", { name: "EXPENSESMODE", nullable: true })
  expensesmode: number | null;

  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Column("smallint", { name: "DAYTOTALS", nullable: true, default: () => "0" })
  daytotals: number | null;

  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Column("int", { name: "GUSIDSTORE", nullable: true })
  gusidstore: number | null;

  @Column("smallint", { name: "TODELETE", default: () => "0" })
  todelete: number;

  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Column("int", { name: "STOREDLAID", nullable: true })
  storedlaid: number | null;

  @Column("smallint", { name: "MAKELOT", nullable: true, default: () => "0" })
  makelot: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "GUSIDASSET", nullable: true })
  gusidasset: number | null;

  @Column("int", { name: "ATTSECID", nullable: true })
  attsecid: number | null;

  @Column("int", { name: "GUSIDSRC", nullable: true })
  gusidsrc: number | null;

  @Column("smallint", { name: "MAKELOTLINES", default: () => "0" })
  makelotlines: number;

  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Column("smallint", { name: "PARSELLMODELINES", default: () => "0" })
  parsellmodelines: number;

  @Column("smallint", { name: "PARTITIONMODE", default: () => "0" })
  partitionmode: number;

  @Column("int", { name: "SERVICEDLAID", nullable: true })
  servicedlaid: number | null;

  @Column("varchar", { name: "INTDEBITACCMASK", nullable: true, length: 25 })
  intdebitaccmask: string | null;

  @Column("varchar", { name: "INTCREDITACCMASK", nullable: true, length: 25 })
  intcreditaccmask: string | null;

  @Column("smallint", {
    name: "KEEPBACKORDER",
    nullable: true,
    default: () => "0",
  })
  keepbackorder: number | null;

  @Column("float", {
    name: "CALCDIFFEXCH",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  calcdiffexch: number | null;

  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Column("smallint", {
    name: "UPDATESTATUS",
    nullable: true,
    default: () => "0",
  })
  updatestatus: number | null;

  @Column("smallint", { name: "SNQTYMODE", nullable: true })
  snqtymode: number | null;

  @Column("smallint", {
    name: "SUBCONTRACT",
    nullable: true,
    default: () => "0",
  })
  subcontract: number | null;

  @Column("smallint", { name: "COLORREMAINMODE", default: () => "0" })
  colorremainmode: number;

  @Column("varchar", { name: "STOREPROCNAME", nullable: true, length: 255 })
  storeprocname: string | null;

  @Column("int", { name: "BACKORDERMODE", default: () => "1" })
  backordermode: number;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "GUSIDSUP", nullable: true })
  gusidsup: number | null;

  @Column("int", { name: "FSTID", nullable: true })
  fstid: number | null;

  @Column("int", { name: "BACKORDERPROSPTIED", nullable: true })
  backorderprosptied: number | null;

  @Column("varchar", { name: "BACKORDERFIELDS", nullable: true, length: 255 })
  backorderfields: string | null;

  @Column("smallint", {
    name: "TAXFREEMODE",
    nullable: true,
    default: () => "0",
  })
  taxfreemode: number | null;

  @Column("smallint", { name: "THIRDMODE", nullable: true, default: () => "0" })
  thirdmode: number | null;

  @Column("int", { name: "COMDLAID", nullable: true })
  comdlaid: number | null;

  @Column("smallint", { name: "SERNUMMODE", default: () => "0" })
  sernummode: number;

  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Column("smallint", { name: "BUSCHECKMODE", default: () => "0" })
  buscheckmode: number;

  @Column("int", { name: "BUSTTID", nullable: true })
  busttid: number | null;

  @Column("smallint", { name: "DISCOUNTMODE", nullable: true })
  discountmode: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("smallint", { name: "BILLPROSPMODE", nullable: true })
  billprospmode: number | null;

  @Column("smallint", { name: "BILLTIEDMODE", nullable: true })
  billtiedmode: number | null;

  @Column("int", { name: "TRANSBILLPROSPTIED", nullable: true })
  transbillprosptied: number | null;

  @Column("int", { name: "ASSETDLAID", nullable: true })
  assetdlaid: number | null;

  @Column("smallint", {
    name: "FORBIDNEGATIVEVATVALUE",
    nullable: true,
    default: () => "(0)",
  })
  forbidnegativevatvalue: number | null;

  @Column("smallint", {
    name: "TRANSCOMPONLYAFTERPOST",
    nullable: true,
    default: () => "(0)",
  })
  transcomponlyafterpost: number | null;

  @Column("smallint", {
    name: "CANCELEXOFLISI",
    nullable: true,
    default: () => "(0)",
  })
  cancelexoflisi: number | null;

  @Column("smallint", {
    name: "QTYINACTIVEMODE",
    nullable: true,
    default: () => "(0)",
  })
  qtyinactivemode: number | null;

  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

  @Column("smallint", { name: "MYFVALTYPE", nullable: true })
  myfvaltype: number | null;

  @Column("smallint", { name: "MYFQTYUPD", default: () => "(0)" })
  myfqtyupd: number;

  @Column("smallint", { name: "MYFVALUPD", default: () => "(0)" })
  myfvalupd: number;

  @Column("smallint", {
    name: "DISCCREDITLINEVALINITCHECK",
    default: () => "(0)",
  })
  disccreditlinevalinitcheck: number;

  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Column("smallint", { name: "HANDMODEDOCPACKING", default: () => "(0)" })
  handmodedocpacking: number;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("smallint", { name: "ISFORRETAILSTATISTICS", default: () => "(0)" })
  isforretailstatistics: number;

  @Column("smallint", { name: "ISMYDATAFROMACC", nullable: true })
  ismydatafromacc: number | null;

  @Column("smallint", { name: "ISFORABROADPURCHASE", default: () => "(0)" })
  isforabroadpurchase: number;

  @Column("int", { name: "LOTTRANSCODE", nullable: true })
  lottranscode: number | null;

  @Column("smallint", {
    name: "PROOFOFMOVEMENTDOC",
    nullable: true,
    default: () => "(0)",
  })
  proofofmovementdoc: number | null;

  @ManyToOne(() => Company, (company) => company.finsupdoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID3", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTSECID", referencedColumnName: "codeid" },
  ])
  mattrntype2: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID1", referencedColumnName: "codeid" },
  ])
  mattrntype3: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID2", referencedColumnName: "codeid" },
  ])
  mattrntype4: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype5: Mattrntype;

  @ManyToOne(() => Assettrntype, (assettrntype) => assettrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @ManyToOne(() => Suptrntype, (suptrntype) => suptrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  suptrntype: Suptrntype;

 

  @OneToMany(() => Valfndsuptrn, (valfndsuptrn) => valfndsuptrn.link)
  valfndsuptrns: Valfndsuptrn[];
}
