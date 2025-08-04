import { Field } from "@nestjs/graphql";
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
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ORDBYPERID", nullable: true })
  ordbyperid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDBYADDID", nullable: true })
  ordbyaddid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SHPTOPERID", nullable: true })
  shptoperid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SHPTOADDID", nullable: true })
  shptoaddid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BILLTOPERID", nullable: true })
  billtoperid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BILLTOADDID", nullable: true })
  billtoaddid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATSTATUS", nullable: true })
  vatstatus: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "INTRASTATDATE", nullable: true })
  intrastatdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DELIVERYDATE", nullable: true })
  deliverydate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "LEDIFACTRATE", nullable: true, precision: 53 })
  ledifactrate: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FDTINTCODE", nullable: true, length: 25 })
  fdtintcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHVINTCODE", nullable: true, length: 25 })
  shvintcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SECJUSTIFICATION", nullable: true, length: 255 })
  secjustification: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PREVTRADES", nullable: true })
  prevtrades: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MODVAT", nullable: true, default: () => "0" })
  modvat: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPADDRESS", nullable: true, length: 255 })
  shipaddress: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRCDISC1", nullable: true, precision: 53 })
  prcdisc1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRCDISC2", nullable: true, precision: 53 })
  prcdisc2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALDISC1", nullable: true, precision: 53 })
  valdisc1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALDISC2", nullable: true, precision: 53 })
  valdisc2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", nullable: true, default: () => "0" })
  status: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRCDISC", nullable: true, precision: 53 })
  prcdisc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VALDISC", nullable: true, precision: 53 })
  valdisc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LVALDISC", nullable: true, precision: 53 })
  lvaldisc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TVALDISC", nullable: true, precision: 53 })
  tvaldisc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTEXPENSES", nullable: true, precision: 53 })
  intexpenses: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTLEXPENSES", nullable: true, precision: 53 })
  intlexpenses: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "NETAMOUNT", nullable: true, precision: 53 })
  netamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LNETAMOUNT", nullable: true, precision: 53 })
  lnetamount: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "TNETAMOUNT", nullable: true, precision: 53 })
  tnetamount: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "UPDATEDEST",
    nullable: true,
    default: () => "0",
  })
  updatedest: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SALESCOST", nullable: true, precision: 53 })
  salescost: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY2", nullable: true, precision: 53 })
  qty2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BINSECCODE", nullable: true, length: 25 })
  binseccode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRASECID", nullable: true })
  brasecid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOTCODE", nullable: true, length: 25 })
  lotcode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DELIVERYTIME", nullable: true })
  deliverytime: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTTID", nullable: true })
  fttid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "INTTRIANGLE",
    nullable: true,
    default: () => "0",
  })
  inttriangle: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CPRID", nullable: true })
  cprid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ARJID", nullable: true })
  arjid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ASBID", nullable: true })
  asbid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRPOLICYSTR", nullable: true, length: 120 })
  prpolicystr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRDFTRID", nullable: true })
  prdftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MPSID", nullable: true })
  mpsid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSTOMCODE", nullable: true, length: 25 })
  customcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF1", nullable: true, precision: 53 })
  pccoef1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF2", nullable: true, precision: 53 })
  pccoef2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF3", nullable: true, precision: 53 })
  pccoef3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF4", nullable: true, precision: 53 })
  pccoef4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF5", nullable: true, precision: 53 })
  pccoef5: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DLVTYPEID", nullable: true })
  dlvtypeid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INTRASTATID", nullable: true })
  intrastatid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEPOSITVALUE", nullable: true, precision: 53 })
  depositvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SCNID", nullable: true })
  scnid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTFTRID", nullable: true })
  custftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DCZID", nullable: true })
  dczid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DKID", nullable: true })
  dkid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "GROSSDISCOUNT", nullable: true, precision: 53 })
  grossdiscount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LOTEXPIREDATE", nullable: true })
  lotexpiredate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "RETQTY_PRPOLICYSTR",
    nullable: true,
    length: 120,
  })
  retqtyPrpolicystr: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "RETPAY_PRPOLICYSTR",
    nullable: true,
    length: 120,
  })
  retpayPrpolicystr: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "PESTUPLOADSTATUS",
    nullable: true,
    default: () => "(0)",
  })
  pestuploadstatus: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INTRASTATMODE", default: () => "(0)" })
  intrastatmode: number;

  @Field({ nullable: true })
  @Column("int", { name: "REPRPERID", nullable: true })
  reprperid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTOUTEXPENSES", nullable: true, precision: 53 })
  intoutexpenses: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INTOUTLEXPENSES", nullable: true, precision: 53 })
  intoutlexpenses: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "YAATID", nullable: true })
  yaatid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VIESMODE", default: () => "(0)" })
  viesmode: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ISREPLACEMENT",
    nullable: true,
    default: () => "(0)",
  })
  isreplacement: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INFO_39A", nullable: true, length: 50 })
  info_39A: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LCUSTOMVATVALUE", nullable: true, precision: 53 })
  lcustomvatvalue: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACTPHONE", nullable: true, length: 20 })
  contactphone: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOUSERID", nullable: true })
  stouserid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "DISPATCHDATE", nullable: true })
  dispatchdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPCITY", nullable: true, length: 50 })
  shipcity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPZIPCODE", nullable: true, length: 10 })
  shipzipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPAREA", nullable: true, length: 50 })
  shiparea: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXAGENTPERID", nullable: true })
  taxagentperid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSFULLNAME", nullable: true, length: 50 })
  cusfullname: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSHOMESTREET", nullable: true, length: 50 })
  cushomestreet: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSHOMEZIPCODE", nullable: true, length: 10 })
  cushomezipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSHOMECITY", nullable: true, length: 30 })
  cushomecity: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CUSIDENTITYNUM", nullable: true, length: 20 })
  cusidentitynum: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSISSUECNTID", nullable: true })
  cusissuecntid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Shipcause, (shipcause) => shipcause.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SHCID", referencedColumnName: "codeid" },
  ])
  shipcause: Shipcause;

  @Field({ nullable: true })
  @ManyToOne(() => Shipvia, (shipvia) => shipvia.storetrades)
  @JoinColumn([{ name: "SHVID", referencedColumnName: "codeid" }])
  shv: Shipvia;

  @Field({ nullable: true })
  @ManyToOne(() => Specification, (specification) => specification.storetrades)
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.storetrades)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.storetrades2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "SECSTOID", referencedColumnName: "codeid" },
  ])
  store2: Store;

  @Field({ nullable: true })
  @ManyToOne(() => Partition, (partition) => partition.storetrades)
  @JoinColumn([{ name: "PARID", referencedColumnName: "id" }])
  par: Partition;

  @Field({ nullable: true })
  @OneToOne(() => Fintrade, (fintrade) => fintrade.storetrade, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @Field({ nullable: true })
  @ManyToOne(() => Route, (route) => route.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ROTID", referencedColumnName: "codeid" },
  ])
  route: Route;

  @Field({ nullable: true })
  @ManyToOne(() => Phasegroup, (phasegroup) => phasegroup.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PHGID", referencedColumnName: "codeid" },
  ])
  phasegroup: Phasegroup;

  @Field({ nullable: true })
  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.storetrades)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @Field({ nullable: true })
  @ManyToOne(
    () => Transportation,
    (transportation) => transportation.storetrades
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRSID", referencedColumnName: "codeid" },
  ])
  transportation: Transportation;

  @Field({ nullable: true })
  @ManyToOne(() => Carrier, (carrier) => carrier.storetrades)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CARID", referencedColumnName: "codeid" },
  ])
  carrier: Carrier;


}
