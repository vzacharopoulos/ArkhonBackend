import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Shipcause } from "./Shipcause.entity";
import { Shipvia } from "./Shipvia.entity";
import { Specification } from "./Specification.entity";
import { Country } from "./Country.entity";
import { Store } from "./Store.entity";
import { Partition } from "./Partition.entity";
import { Fintrade } from "./Fintrade.entity";
import { Route } from "./Route.entity";
import { Phasegroup } from "./Phasegroup.entity";
import { Geogrpos } from "./Geogrpos.entity";
import { Transportation } from "./Transportation.entity";
import { Carrier } from "./Carrier.entity";

@Index("UNI_3000", ["ftrid"], { unique: true })
@ObjectType()
@Entity("STORETRADE", { schema: "dbo" })
export class Storetrade {
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Column("int", { name: "ORDBYPERID", nullable: true })
  ordbyperid: number | null;

  @Column("int", { name: "ORDBYADDID", nullable: true })
  ordbyaddid: number | null;

  @Column("int", { name: "SHPTOPERID", nullable: true })
  shptoperid: number | null;

  @Column("int", { name: "SHPTOADDID", nullable: true })
  shptoaddid: number | null;

  @Column("int", { name: "BILLTOPERID", nullable: true })
  billtoperid: number | null;

  @Column("int", { name: "BILLTOADDID", nullable: true })
  billtoaddid: number | null;

  @Column("smallint", { name: "VATSTATUS", nullable: true })
  vatstatus: number | null;

  @Column("datetime", { name: "INTRASTATDATE", nullable: true })
  intrastatdate: Date | null;

  @Column("datetime", { name: "DELIVERYDATE", nullable: true })
  deliverydate: Date | null;

  @Column("float", { name: "LEDIFACTRATE", nullable: true, precision: 53 })
  ledifactrate: number | null;

  @Column("varchar", { name: "FDTINTCODE", nullable: true, length: 25 })
  fdtintcode: string | null;

  @Column("varchar", { name: "SHVINTCODE", nullable: true, length: 25 })
  shvintcode: string | null;

  @Column("varchar", { name: "SECJUSTIFICATION", nullable: true, length: 255 })
  secjustification: string | null;

  @Column("varchar", { name: "PREVTRADES", nullable: true })
  prevtrades: string | null;

  @Column("smallint", { name: "MODVAT", nullable: true, default: () => "0" })
  modvat: number | null;

  @Column("varchar", { name: "SHIPADDRESS", nullable: true, length: 255 })
  shipaddress: string | null;

  @Column("float", { name: "PRCDISC1", nullable: true, precision: 53 })
  prcdisc1: number | null;

  @Column("float", { name: "PRCDISC2", nullable: true, precision: 53 })
  prcdisc2: number | null;

  @Column("float", { name: "VALDISC1", nullable: true, precision: 53 })
  valdisc1: number | null;

  @Column("float", { name: "VALDISC2", nullable: true, precision: 53 })
  valdisc2: number | null;

  @Column("smallint", { name: "STATUS", nullable: true, default: () => "0" })
  status: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "PRCDISC", nullable: true, precision: 53 })
  prcdisc: number | null;

  @Column("float", { name: "VALDISC", nullable: true, precision: 53 })
  valdisc: number | null;

  @Column("float", { name: "LVALDISC", nullable: true, precision: 53 })
  lvaldisc: number | null;

  @Column("float", { name: "TVALDISC", nullable: true, precision: 53 })
  tvaldisc: number | null;

  @Column("float", { name: "INTEXPENSES", nullable: true, precision: 53 })
  intexpenses: number | null;

  @Column("float", { name: "INTLEXPENSES", nullable: true, precision: 53 })
  intlexpenses: number | null;

  @Column("float", { name: "NETAMOUNT", nullable: true, precision: 53 })
  netamount: number | null;

  @Column("float", { name: "LNETAMOUNT", nullable: true, precision: 53 })
  lnetamount: number | null;

  @Column("float", { name: "TNETAMOUNT", nullable: true, precision: 53 })
  tnetamount: number | null;

  @Column("smallint", {
    name: "UPDATEDEST",
    nullable: true,
    default: () => "0",
  })
  updatedest: number | null;

  @Column("float", { name: "SALESCOST", nullable: true, precision: 53 })
  salescost: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("float", { name: "QTY2", nullable: true, precision: 53 })
  qty2: number | null;

  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Column("varchar", { name: "BINSECCODE", nullable: true, length: 25 })
  binseccode: string | null;

  @Column("int", { name: "BRASECID", nullable: true })
  brasecid: number | null;

  @Column("varchar", { name: "LOTCODE", nullable: true, length: 25 })
  lotcode: string | null;

  @Column("datetime", { name: "DELIVERYTIME", nullable: true })
  deliverytime: Date | null;

  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Column("smallint", {
    name: "INTTRIANGLE",
    nullable: true,
    default: () => "0",
  })
  inttriangle: number | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Column("int", { name: "CPRID", nullable: true })
  cprid: number | null;

  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Column("int", { name: "ARJID", nullable: true })
  arjid: number | null;

  @Column("int", { name: "ASBID", nullable: true })
  asbid: number | null;

  @Column("varchar", { name: "PRPOLICYSTR", nullable: true, length: 120 })
  prpolicystr: string | null;

  @Column("int", { name: "PRDFTRID", nullable: true })
  prdftrid: number | null;

  @Column("int", { name: "MPSID", nullable: true })
  mpsid: number | null;

  @Column("varchar", { name: "CUSTOMCODE", nullable: true, length: 25 })
  customcode: string | null;

  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;

  @Column("float", { name: "PCCOEF1", nullable: true, precision: 53 })
  pccoef1: number | null;

  @Column("float", { name: "PCCOEF2", nullable: true, precision: 53 })
  pccoef2: number | null;

  @Column("float", { name: "PCCOEF3", nullable: true, precision: 53 })
  pccoef3: number | null;

  @Column("float", { name: "PCCOEF4", nullable: true, precision: 53 })
  pccoef4: number | null;

  @Column("float", { name: "PCCOEF5", nullable: true, precision: 53 })
  pccoef5: number | null;

  @Column("int", { name: "DLVTYPEID", nullable: true })
  dlvtypeid: number | null;

  @Column("int", { name: "INTRASTATID", nullable: true })
  intrastatid: number | null;

  @Column("float", { name: "DEPOSITVALUE", nullable: true, precision: 53 })
  depositvalue: number | null;

  @Column("int", { name: "SCNID", nullable: true })
  scnid: number | null;

  @Column("int", { name: "CUSTFTRID", nullable: true })
  custftrid: number | null;

  @Column("int", { name: "DCZID", nullable: true })
  dczid: number | null;

  @Column("int", { name: "DKID", nullable: true })
  dkid: number | null;

  @Column("float", { name: "GROSSDISCOUNT", nullable: true, precision: 53 })
  grossdiscount: number | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("datetime", { name: "LOTEXPIREDATE", nullable: true })
  lotexpiredate: Date | null;

  @Column("varchar", {
    name: "RETQTY_PRPOLICYSTR",
    nullable: true,
    length: 120,
  })
  retqtyPrpolicystr: string | null;

  @Column("varchar", {
    name: "RETPAY_PRPOLICYSTR",
    nullable: true,
    length: 120,
  })
  retpayPrpolicystr: string | null;

  @Column("smallint", {
    name: "PESTUPLOADSTATUS",
    nullable: true,
    default: () => "(0)",
  })
  pestuploadstatus: number | null;

  @Column("smallint", { name: "INTRASTATMODE", default: () => "(0)" })
  intrastatmode: number;

  @Column("int", { name: "REPRPERID", nullable: true })
  reprperid: number | null;

  @Column("float", { name: "INTOUTEXPENSES", nullable: true, precision: 53 })
  intoutexpenses: number | null;

  @Column("float", { name: "INTOUTLEXPENSES", nullable: true, precision: 53 })
  intoutlexpenses: number | null;

  @Column("int", { name: "YAATID", nullable: true })
  yaatid: number | null;

  @Column("smallint", { name: "VIESMODE", default: () => "(0)" })
  viesmode: number;

  @Column("smallint", {
    name: "ISREPLACEMENT",
    nullable: true,
    default: () => "(0)",
  })
  isreplacement: number | null;

  @Column("varchar", { name: "INFO_39A", nullable: true, length: 50 })
  info_39A: string | null;

  @Column("float", { name: "LCUSTOMVATVALUE", nullable: true, precision: 53 })
  lcustomvatvalue: number | null;

  @Column("varchar", { name: "CONTACTPHONE", nullable: true, length: 20 })
  contactphone: string | null;

  @Column("int", { name: "STOUSERID", nullable: true })
  stouserid: number | null;

  @Column("datetime", { name: "DISPATCHDATE", nullable: true })
  dispatchdate: Date | null;

  @Column("varchar", { name: "SHIPCITY", nullable: true, length: 50 })
  shipcity: string | null;

  @Column("varchar", { name: "SHIPZIPCODE", nullable: true, length: 10 })
  shipzipcode: string | null;

  @Column("varchar", { name: "SHIPAREA", nullable: true, length: 50 })
  shiparea: string | null;

  @Column("int", { name: "TAXAGENTPERID", nullable: true })
  taxagentperid: number | null;

  @Column("varchar", { name: "CUSFULLNAME", nullable: true, length: 50 })
  cusfullname: string | null;

  @Column("varchar", { name: "CUSHOMESTREET", nullable: true, length: 50 })
  cushomestreet: string | null;

  @Column("varchar", { name: "CUSHOMEZIPCODE", nullable: true, length: 10 })
  cushomezipcode: string | null;

  @Column("varchar", { name: "CUSHOMECITY", nullable: true, length: 30 })
  cushomecity: string | null;

  @Column("varchar", { name: "CUSIDENTITYNUM", nullable: true, length: 20 })
  cusidentitynum: string | null;

  @Column("int", { name: "CUSISSUECNTID", nullable: true })
  cusissuecntid: number | null;

  @ManyToOne(() => Shipcause, (shipcause) => shipcause.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SHCID", referencedColumnName: "codeid" },
  ])
  shipcause: Shipcause;

  @ManyToOne(() => Shipvia, (shipvia) => shipvia.storetrades)
  @JoinColumn([{ name: "SHVID", referencedColumnName: "codeid" }])
  shv: Shipvia;

  @ManyToOne(() => Specification, (specification) => specification.storetrades)
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;

  @ManyToOne(() => Country, (country) => country.storetrades)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @ManyToOne(() => Store, (store) => store.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @ManyToOne(() => Store, (store) => store.storetrades2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SECSTOID", referencedColumnName: "codeid" },
  ])
  store2: Store;

  @ManyToOne(() => Partition, (partition) => partition.storetrades)
  @JoinColumn([{ name: "PARID", referencedColumnName: "id" }])
  par: Partition;

  @OneToOne(() => Fintrade, (fintrade) => fintrade.storetrade, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Route, (route) => route.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ROTID", referencedColumnName: "codeid" },
  ])
  route: Route;

  @ManyToOne(() => Phasegroup, (phasegroup) => phasegroup.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PHGID", referencedColumnName: "codeid" },
  ])
  phasegroup: Phasegroup;

  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.storetrades)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @ManyToOne(
    () => Transportation,
    (transportation) => transportation.storetrades
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRSID", referencedColumnName: "codeid" },
  ])
  transportation: Transportation;

  @ManyToOne(() => Carrier, (carrier) => carrier.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CARID", referencedColumnName: "codeid" },
  ])
  carrier: Carrier;


}
