import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";
import { Specification } from "./Specification.entity";
import { Store } from "./Store.entity";
import { Storagebin } from "./Storagebin.entity";
import { Fintrade } from "./Fintrade.entity";
import { Partition } from "./Partition.entity";
import { Bunits } from "./Bunits.entity";
import { Processgroup } from "./Processgroup.entity";

@Index("UNI_3450", ["id"], { unique: true })
@Index("UNIX_1062", ["ftrid", "linenum"], {})
@Index("UNIX_1065", ["iteid", "linetype"], {})
@Index("UNIX_1092", ["mlsid"], {})
@ObjectType()
@Entity("STORETRADELINES", { schema: "dbo" })
export class Storetradelines {
  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("datetime", { name: "DELIVERYDATE", nullable: true })
  deliverydate: Date | null;

  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("int", { name: "VTCID" })
  vtcid: number;

  @Column("int", { name: "IQCID", nullable: true })
  iqcid: number | null;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("float", { name: "DIM1", nullable: true, precision: 53 })
  dim1: number | null;

  @Column("float", { name: "DIM2", nullable: true, precision: 53 })
  dim2: number | null;

  @Column("float", { name: "DIM3", nullable: true, precision: 53 })
  dim3: number | null;

  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Column("float", { name: "VOLUME", nullable: true, precision: 53 })
  volume: number | null;

  @Column("float", { name: "DELIVEREDQTY", nullable: true, precision: 53 })
  deliveredqty: number | null;

  @Column("float", {
    name: "DELIVEREDPRIMARYQTY",
    nullable: true,
    precision: 53,
  })
  deliveredprimaryqty: number | null;

  @Column("float", {
    name: "DELIVEREDSECONDARYQTY",
    nullable: true,
    precision: 53,
  })
  deliveredsecondaryqty: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("int", { name: "MUID", nullable: true })
  muid: number | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Column("smallint", { name: "MUMODE", nullable: true })
  mumode: number | null;

  @Column("float", { name: "PRICE", nullable: true, precision: 53 })
  price: number | null;

  @Column("float", { name: "PRCDISC1", nullable: true, precision: 53 })
  prcdisc1: number | null;

  @Column("float", { name: "PRCDISC2", nullable: true, precision: 53 })
  prcdisc2: number | null;

  @Column("float", { name: "VALDISC1", nullable: true, precision: 53 })
  valdisc1: number | null;

  @Column("float", { name: "VALDISC2", nullable: true, precision: 53 })
  valdisc2: number | null;

  @Column("float", { name: "LVALDISC1", nullable: true, precision: 53 })
  lvaldisc1: number | null;

  @Column("float", { name: "LVALDISC2", nullable: true, precision: 53 })
  lvaldisc2: number | null;

  @Column("float", { name: "LINEVALUE", nullable: true, precision: 53 })
  linevalue: number | null;

  @Column("float", { name: "LLINEVALUE", nullable: true, precision: 53 })
  llinevalue: number | null;

  @Column("float", { name: "NETLINEVALUE", nullable: true, precision: 53 })
  netlinevalue: number | null;

  @Column("float", { name: "LNETLINEVALUE", nullable: true, precision: 53 })
  lnetlinevalue: number | null;

  @Column("float", { name: "ITEMLINEVALUE", nullable: true, precision: 53 })
  itemlinevalue: number | null;

  @Column("float", { name: "LITEMLINEVALUE", nullable: true, precision: 53 })
  litemlinevalue: number | null;

  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Column("float", { name: "LVATAMOUNT", nullable: true, precision: 53 })
  lvatamount: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("varchar", { name: "EXTSTR1", nullable: true, length: 255 })
  extstr1: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("float", { name: "NUMUSR1", nullable: true, precision: 53 })
  numusr1: number | null;

  @Column("float", { name: "NUMUSR2", nullable: true, precision: 53 })
  numusr2: number | null;

  @Column("float", { name: "NUMUSR3", nullable: true, precision: 53 })
  numusr3: number | null;

  @Column("float", { name: "SALESCOST", nullable: true, precision: 53 })
  salescost: number | null;

  @Column("smallint", { name: "COMPMODE", nullable: true })
  compmode: number | null;

  @Column("smallint", {
    name: "LINETYPE",
    nullable: true,
    default: () => "(0)",
  })
  linetype: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("varchar", { name: "BINSECCODE", nullable: true, length: 25 })
  binseccode: string | null;

  @Column("float", { name: "EXTQTY", nullable: true, precision: 53 })
  extqty: number | null;

  @Column("float", { name: "EFKVALUE", nullable: true, precision: 53 })
  efkvalue: number | null;

  @Column("varchar", { name: "LOTCODE", nullable: true, length: 25 })
  lotcode: string | null;

  @Column("float", { name: "CUSTOMEFKVALUE", nullable: true, precision: 53 })
  customefkvalue: number | null;

  @Column("datetime", { name: "DELIVERYTIME", nullable: true })
  deliverytime: Date | null;

  @Column("float", { name: "INTVATAMOUNT", nullable: true, precision: 53 })
  intvatamount: number | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Column("varchar", { name: "PRPOLICYSTR", nullable: true, length: 120 })
  prpolicystr: string | null;

  @Column("float", { name: "GIFTQTY", nullable: true, precision: 53 })
  giftqty: number | null;

  @Column("int", { name: "SMNID", nullable: true })
  smnid: number | null;

  @Column("float", { name: "WASTESETUP", nullable: true, precision: 53 })
  wastesetup: number | null;

  @Column("int", { name: "RELSTLID", nullable: true })
  relstlid: number | null;

  @Column("int", { name: "MLSID", nullable: true })
  mlsid: number | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("int", { name: "ORIGINCNTID", nullable: true })
  origincntid: number | null;

  @Column("float", { name: "RECYCLEPRICE", nullable: true, precision: 53 })
  recycleprice: number | null;

  @Column("float", { name: "RECYCLEVALUE", nullable: true, precision: 53 })
  recyclevalue: number | null;

  @Column("float", { name: "RECYCLEVAT", nullable: true, precision: 53 })
  recyclevat: number | null;

  @Column("int", { name: "CMPID", nullable: true })
  cmpid: number | null;

  @Column("varchar", { name: "SUPPLIERITECODE", nullable: true, length: 25 })
  supplieritecode: string | null;

  @Column("varchar", { name: "SELECTBARCODE", nullable: true, length: 50 })
  selectbarcode: string | null;

  @Column("float", {
    name: "HELPITEMLINK",
    nullable: true,
    precision: 53,
    default: () => "(99999)",
  })
  helpitemlink: number | null;

  @Column("varchar", { name: "SECJUSTIFICATION", nullable: true, length: 255 })
  secjustification: string | null;

  @Column("int", { name: "PESTPERID", nullable: true })
  pestperid: number | null;

  @Column("int", { name: "PESTDIMOSID", nullable: true })
  pestdimosid: number | null;

  @Column("int", { name: "PESTCROPID", nullable: true })
  pestcropid: number | null;

  @Column("int", { name: "PESTCAUSEID", nullable: true })
  pestcauseid: number | null;

  @Column("int", { name: "PESTUNITID", nullable: true })
  pestunitid: number | null;

  @Column("int", { name: "PESTDRUGID", nullable: true })
  pestdrugid: number | null;

  @Column("float", { name: "PESTCONTAINERQTY", nullable: true, precision: 53 })
  pestcontainerqty: number | null;

  @Column("varchar", { name: "ZEXTSHAPE", nullable: true, length: 50 })
  zextshape: string | null;

  @Column("int", { name: "ZCITEID1", nullable: true })
  zciteid1: number | null;

  @Column("varchar", { name: "ZCCOLORCODE1", nullable: true, length: 15 })
  zccolorcode1: string | null;

  @Column("int", { name: "ZCITEID2", nullable: true })
  zciteid2: number | null;

  @Column("varchar", { name: "ZCCOLORCODE2", nullable: true, length: 15 })
  zccolorcode2: string | null;

  @Column("int", { name: "ZPFTRID", nullable: true })
  zpftrid: number | null;

  @Column("int", { name: "ZCFLINEID", nullable: true })
  zcflineid: number | null;

  @Column("varchar", { name: "ZINTSHAPE", nullable: true, length: 50 })
  zintshape: string | null;

  @Column("smallint", { name: "zstatus", nullable: true })
  zstatus: number | null;

  @Column("int", { name: "ar_iscanceled", nullable: true })
  arIscanceled: number | null;

  @Column("float", { name: "ITEMLINEVALUEFULL", nullable: true, precision: 53 })
  itemlinevaluefull: number | null;

  @Column("float", { name: "VATAMOUNTFULL", nullable: true, precision: 53 })
  vatamountfull: number | null;

  @Column("float", { name: "STORENEWPRIQTY", nullable: true, precision: 53 })
  storenewpriqty: number | null;

  @Column("float", { name: "STORENEWSECQTY", nullable: true, precision: 53 })
  storenewsecqty: number | null;

  @Column("datetime", { name: "STODATE", nullable: true })
  stodate: Date | null;

  @Column("smallint", { name: "OTHERFISCALYEAR", nullable: true })
  otherfiscalyear: number | null;

  @Column("varchar", { name: "CPVCATEGORY", nullable: true, length: 15 })
  cpvcategory: string | null;

  @ManyToOne(() => Material, (material) => material.storetradelines)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @ManyToOne(
    () => Specification,
    (specification) => specification.storetradelines
  )
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;

  @ManyToOne(() => Store, (store) => store.storetradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @ManyToOne(() => Store, (store) => store.storetradelines2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SECSTOID", referencedColumnName: "codeid" },
  ])
  store2: Store;

  @ManyToOne(() => Storagebin, (storagebin) => storagebin.storetradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "stoid" },
    { name: "BINCODE", referencedColumnName: "code" },
  ])
  storagebin: Storagebin;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.storetradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;


  @ManyToOne(() => Partition, (partition) => partition.storetradelines)
  @JoinColumn([{ name: "PARID", referencedColumnName: "id" }])
  par: Partition;

  @ManyToOne(() => Bunits, (bunits) => bunits.storetradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BUSID", referencedColumnName: "codeid" },
  ])
  bunits: Bunits;

  @ManyToOne(() => Bunits, (bunits) => bunits.storetradelines2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SECBUSID", referencedColumnName: "codeid" },
  ])
  bunits2: Bunits;


  @ManyToOne(() => Processgroup, (processgroup) => processgroup.storetradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PHSGROUPID", referencedColumnName: "codeid" },
  ])
  processgroup: Processgroup;
}
