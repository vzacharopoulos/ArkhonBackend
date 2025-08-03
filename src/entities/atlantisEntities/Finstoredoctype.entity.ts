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
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TNACODE", length: 30 })
  tnacode: string;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Column("smallint", { name: "DAYTOTALS", default: () => "0" })
  daytotals: number;

  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Column("smallint", { name: "FULLREMAINMODE", nullable: true })
  fullremainmode: number | null;

  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Column("int", { name: "GUSIDSTORE", nullable: true })
  gusidstore: number | null;

  @Column("smallint", {
    name: "STOCKCHECKACTION",
    nullable: true,
    default: () => "0",
  })
  stockcheckaction: number | null;

  @Column("int", { name: "STOCKCHECKMODE", nullable: true })
  stockcheckmode: number | null;

  @Column("smallint", { name: "STOCKREMAINMODE", nullable: true })
  stockremainmode: number | null;

  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Column("smallint", {
    name: "KEPYOQTYUPD",
    nullable: true,
    default: () => "0",
  })
  kepyoqtyupd: number | null;

  @Column("smallint", {
    name: "KEPYOVALUPD",
    nullable: true,
    default: () => "0",
  })
  kepyovalupd: number | null;

  @Column("smallint", { name: "MAKELOT", nullable: true, default: () => "0" })
  makelot: number | null;

  @Column("int", { name: "STOREDLAID", nullable: true })
  storedlaid: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "PRSTOID", nullable: true })
  prstoid: number | null;

  @Column("int", { name: "COSTOID", nullable: true })
  costoid: number | null;

  @Column("smallint", { name: "PRICEMODE", nullable: true, default: () => "0" })
  pricemode: number | null;

  @Column("smallint", { name: "MAKELOTLINES", default: () => "0" })
  makelotlines: number;

  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Column("smallint", { name: "PARSELLMODE", default: () => "0" })
  parsellmode: number;

  @Column("smallint", { name: "PARSELLMODELINES", default: () => "0" })
  parsellmodelines: number;

  @Column("smallint", { name: "PARTITIONMODE", default: () => "0" })
  partitionmode: number;

  @Column("int", { name: "GUSIDCOMP", nullable: true })
  gusidcomp: number | null;

  @Column("smallint", { name: "TRANSCOMP", nullable: true, default: () => "0" })
  transcomp: number | null;

  @Column("smallint", { name: "SNQTYMODE", nullable: true })
  snqtymode: number | null;

  @Column("smallint", { name: "COLORREMAINMODE", default: () => "0" })
  colorremainmode: number;

  @Column("int", { name: "GUSIDASSET", nullable: true })
  gusidasset: number | null;

  @Column("varchar", { name: "STOREPROCNAME", nullable: true, length: 255 })
  storeprocname: string | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("smallint", {
    name: "TAXFREEMODE",
    nullable: true,
    default: () => "0",
  })
  taxfreemode: number | null;

  @Column("smallint", { name: "THIRDMODE", nullable: true, default: () => "0" })
  thirdmode: number | null;

  @Column("smallint", { name: "SNAPOG", nullable: true, default: () => "0" })
  snapog: number | null;

  @Column("smallint", { name: "SERNUMMODE", default: () => "0" })
  sernummode: number;

  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Column("int", { name: "BUSTTID", nullable: true })
  busttid: number | null;

  @Column("int", { name: "BUSTTSECID", nullable: true })
  busttsecid: number | null;

  @Column("int", { name: "FBUSTTID", nullable: true })
  fbusttid: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("int", { name: "ASSETDLAID", nullable: true })
  assetdlaid: number | null;

  @Column("smallint", {
    name: "TRANSCOMPONLYAFTERPOST",
    nullable: true,
    default: () => "(0)",
  })
  transcomponlyafterpost: number | null;

  @Column("varchar", { name: "EINVOICEKIND", nullable: true, length: 5 })
  einvoicekind: string | null;

  @Column("int", { name: "LOTTRANSCODE", nullable: true })
  lottranscode: number | null;

  @Column("smallint", {
    name: "PROOFOFMOVEMENTDOC",
    nullable: true,
    default: () => "(0)",
  })
  proofofmovementdoc: number | null;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTSECID", referencedColumnName: "codeid" },
  ])
  mattrntype: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  mattrntype2: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes3)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID1", referencedColumnName: "codeid" },
  ])
  mattrntype3: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes4)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID2", referencedColumnName: "codeid" },
  ])
  mattrntype4: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes5)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID3", referencedColumnName: "codeid" },
  ])
  mattrntype5: Mattrntype;

  @ManyToOne(() => Mattrntype, (mattrntype) => mattrntype.finstoredoctypes6)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ITTID", referencedColumnName: "codeid" },
  ])
  mattrntype6: Mattrntype;

  @ManyToOne(
    () => Assettrntype,
    (assettrntype) => assettrntype.finstoredoctypes
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTSECID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @ManyToOne(
    () => Assettrntype,
    (assettrntype) => assettrntype.finstoredoctypes2
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype2: Assettrntype;

  @ManyToOne(() => Company, (company) => company.finstoredoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
