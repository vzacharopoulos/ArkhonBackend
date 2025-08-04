import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mattrntype } from "./Mattrntype.entity";
import { Assettrntype } from "./Assettrntype.entity";
import { Company } from "./Company.entity";

@Index("UNI_5500", ["comid", "codeid"], { unique: true })
@Index("UNI_5506", ["id"], { unique: true })
@ObjectType()
@Entity("FINSTOREDOCTYPE", { schema: "dbo" })
export class Finstoredoctype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
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
  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYTOTALS", default: () => "0" })
  daytotals: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FULLREMAINMODE", nullable: true })
  fullremainmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDSTORE", nullable: true })
  gusidstore: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "STOCKCHECKACTION",
    nullable: true,
    default: () => "0",
  })
  stockcheckaction: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STOCKREMAINMODE", nullable: true })
  stockremainmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEPYOQTYUPD",
    nullable: true,
    default: () => "0",
  })
  kepyoqtyupd: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEPYOVALUPD",
    nullable: true,
    default: () => "0",
  })
  kepyovalupd: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAKELOT", nullable: true, default: () => "0" })
  makelot: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOREDLAID", nullable: true })
  storedlaid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRSTOID", nullable: true })
  prstoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COSTOID", nullable: true })
  costoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRICEMODE", nullable: true, default: () => "0" })
  pricemode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MAKELOTLINES", default: () => "0" })
  makelotlines: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PARSELLMODE", default: () => "0" })
  parsellmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PARSELLMODELINES", default: () => "0" })
  parsellmodelines: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PARTITIONMODE", default: () => "0" })
  partitionmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDCOMP", nullable: true })
  gusidcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SNQTYMODE", nullable: true })
  snqtymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COLORREMAINMODE", default: () => "0" })
  colorremainmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDASSET", nullable: true })
  gusidasset: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STOREPROCNAME", nullable: true, length: 255 })
  storeprocname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

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
  @Column("smallint", { name: "SNAPOG", nullable: true, default: () => "0" })
  snapog: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SERNUMMODE", default: () => "0" })
  sernummode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSTTID", nullable: true })
  busttid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSTTSECID", nullable: true })
  busttsecid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FBUSTTID", nullable: true })
  fbusttid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ASSETDLAID", nullable: true })
  assetdlaid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "TRANSCOMPONLYAFTERPOST",
    nullable: true,
    default: () => "(0)",
  })
  transcomponlyafterpost: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

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
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTSECID", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  mattrntype2: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID1", referencedColumnName: "codeid" },
  ])
  mattrntype3: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID2", referencedColumnName: "codeid" },
  ])
  mattrntype4: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID3", referencedColumnName: "codeid" },
  ])
  mattrntype5: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes6)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype6: Mattrntype;

  @Field({ nullable: true })
  @ManyToOne(
    () => Assettrntype,
    (assettrntype) => assettrntype.finstoredoctypes
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTSECID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @Field({ nullable: true })
  @ManyToOne(
    () => Assettrntype,
    (assettrntype) => assettrntype.finstoredoctypes2
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype2: Assettrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.finstoredoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
