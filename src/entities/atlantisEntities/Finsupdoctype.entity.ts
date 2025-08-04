import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company.entity";
import { Mattrntype } from "./Mattrntype.entity";
import { Assettrntype } from "./Assettrntype.entity";
import { Suptrntype } from "./Suptrntype.entity";
import { Valfndsuptrn } from "./Valfndsuptrn.entity";

@Index("UNI_5152", ["comid", "codeid"], { unique: true })
@Index("UNI_5236", ["id"], { unique: true })
@ObjectType()
@Entity("FINSUPDOCTYPE", { schema: "dbo" })
export class Finsupdoctype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TNACODE", length: 30 })
  tnacode: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOQTYUPD" })
  kepyoqtyupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOVALUPD" })
  kepyovalupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRICEMODE", nullable: true })
  pricemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FULLREMAINMODE", nullable: true })
  fullremainmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STOCKREMAINMODE", nullable: true })
  stockremainmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "STOCKCHECKACTION",
    nullable: true,
    default: () => "0",
  })
  stockcheckaction: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUPPLIERSMODE", nullable: true })
  suppliersmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXPENSESMODE", nullable: true })
  expensesmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYTOTALS", nullable: true, default: () => "0" })
  daytotals: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDSTORE", nullable: true })
  gusidstore: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TODELETE", default: () => "0" })
  todelete: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOREDLAID", nullable: true })
  storedlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAKELOT", nullable: true, default: () => "0" })
  makelot: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDASSET", nullable: true })
  gusidasset: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ATTSECID", nullable: true })
  attsecid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDSRC", nullable: true })
  gusidsrc: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAKELOTLINES", default: () => "0" })
  makelotlines: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PARSELLMODELINES", default: () => "0" })
  parsellmodelines: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PARTITIONMODE", default: () => "0" })
  partitionmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "SERVICEDLAID", nullable: true })
  servicedlaid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTDEBITACCMASK", nullable: true, length: 25 })
  intdebitaccmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTCREDITACCMASK", nullable: true, length: 25 })
  intcreditaccmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEEPBACKORDER",
    nullable: true,
    default: () => "0",
  })
  keepbackorder: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "CALCDIFFEXCH",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  calcdiffexch: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "UPDATESTATUS",
    nullable: true,
    default: () => "0",
  })
  updatestatus: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SNQTYMODE", nullable: true })
  snqtymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SUBCONTRACT",
    nullable: true,
    default: () => "0",
  })
  subcontract: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COLORREMAINMODE", default: () => "0" })
  colorremainmode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "STOREPROCNAME", nullable: true, length: 255 })
  storeprocname: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BACKORDERMODE", default: () => "1" })
  backordermode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDSUP", nullable: true })
  gusidsup: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FSTID", nullable: true })
  fstid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BACKORDERPROSPTIED", nullable: true })
  backorderprosptied: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BACKORDERFIELDS", nullable: true, length: 255 })
  backorderfields: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TAXFREEMODE",
    nullable: true,
    default: () => "0",
  })
  taxfreemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "THIRDMODE", nullable: true, default: () => "0" })
  thirdmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMDLAID", nullable: true })
  comdlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SERNUMMODE", default: () => "0" })
  sernummode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUSCHECKMODE", default: () => "0" })
  buscheckmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "BUSTTID", nullable: true })
  busttid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DISCOUNTMODE", nullable: true })
  discountmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLPROSPMODE", nullable: true })
  billprospmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLTIEDMODE", nullable: true })
  billtiedmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TRANSBILLPROSPTIED", nullable: true })
  transbillprosptied: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ASSETDLAID", nullable: true })
  assetdlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "FORBIDNEGATIVEVATVALUE",
    nullable: true,
    default: () => "(0)",
  })
  forbidnegativevatvalue: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TRANSCOMPONLYAFTERPOST",
    nullable: true,
    default: () => "(0)",
  })
  transcomponlyafterpost: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CANCELEXOFLISI",
    nullable: true,
    default: () => "(0)",
  })
  cancelexoflisi: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "QTYINACTIVEMODE",
    nullable: true,
    default: () => "(0)",
  })
  qtyinactivemode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFVALTYPE", nullable: true })
  myfvaltype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFQTYUPD", default: () => "(0)" })
  myfqtyupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFVALUPD", default: () => "(0)" })
  myfvalupd: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DISCCREDITLINEVALINITCHECK",
    default: () => "(0)",
  })
  disccreditlinevalinitcheck: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "HANDMODEDOCPACKING", default: () => "(0)" })
  handmodedocpacking: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFORRETAILSTATISTICS", default: () => "(0)" })
  isforretailstatistics: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISMYDATAFROMACC", nullable: true })
  ismydatafromacc: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFORABROADPURCHASE", default: () => "(0)" })
  isforabroadpurchase: number;

  @Field({ nullable: true })
  @Column("int", { name: "LOTTRANSCODE", nullable: true })
  lottranscode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PROOFOFMOVEMENTDOC",
    nullable: true,
    default: () => "(0)",
  })
  proofofmovementdoc: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.finsupdoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID3", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTSECID", referencedColumnName: "codeid" },
  ])
  mattrntype2: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID1", referencedColumnName: "codeid" },
  ])
  mattrntype3: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID2", referencedColumnName: "codeid" },
  ])
  mattrntype4: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finsupdoctypes5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype5: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Assettrntype, (assettrntype) => assettrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Suptrntype, (suptrntype) => suptrntype.finsupdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  suptrntype: Suptrntype;

 

  @Field(() => [Valfndsuptrn], { nullable: true })
  @OneToMany(() => Valfndsuptrn, (valfndsuptrn) => valfndsuptrn.link)
  valfndsuptrns: Valfndsuptrn[];
}
