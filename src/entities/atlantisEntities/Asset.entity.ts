import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vatcategory } from "./Vatcategory.entity";
import { Assetcategory } from "./Assetcategory.entity";
import { Assetorginfo } from "./Assetorginfo.entity";
import { Assettradelines } from "./Assettradelines.entity";
import { Depricedasset } from "./Depricedasset.entity";
import { Deprtrans } from "./Deprtrans.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5600", ["id"], { unique: true })
@Index("UNI_5602", ["comid", "code"], { unique: true })
@Entity("ASSET", { schema: "dbo" })
export class Asset {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 100 })
  descr: string | null;

  @Column("smallint", { name: "DEPRMODE" })
  deprmode: number;

  @Column("varchar", { name: "REGNUM", nullable: true, length: 25 })
  regnum: string | null;

  @Column("float", { name: "DEPRCOEF1", nullable: true, precision: 53 })
  deprcoef1: number | null;

  @Column("float", { name: "DEPRCOEF2", nullable: true, precision: 53 })
  deprcoef2: number | null;

  @Column("float", { name: "DEPRCOEF3", nullable: true, precision: 53 })
  deprcoef3: number | null;

  @Column("float", { name: "DEPRCOEF4", nullable: true, precision: 53 })
  deprcoef4: number | null;

  @Column("float", { name: "DEPRCOEF5", nullable: true, precision: 53 })
  deprcoef5: number | null;

  @Column("varchar", { name: "GLASSET", nullable: true, length: 25 })
  glasset: string | null;

  @Column("varchar", { name: "GLFUND", nullable: true, length: 25 })
  glfund: string | null;

  @Column("varchar", { name: "GLPROFIT", nullable: true, length: 25 })
  glprofit: string | null;

  @Column("varchar", { name: "GLLOSS", nullable: true, length: 25 })
  glloss: string | null;

  @Column("varchar", { name: "GLEARNING", nullable: true, length: 25 })
  glearning: string | null;

  @Column("varchar", { name: "GLDIFFRECALC", nullable: true, length: 25 })
  gldiffrecalc: string | null;

  @Column("varchar", { name: "GLTAXFREEVALUE", nullable: true, length: 25 })
  gltaxfreevalue: string | null;

  @Column("varchar", { name: "GLDEPR1", nullable: true, length: 25 })
  gldepr1: string | null;

  @Column("varchar", { name: "GLDEPR2", nullable: true, length: 25 })
  gldepr2: string | null;

  @Column("varchar", { name: "GLDEPR3", nullable: true, length: 25 })
  gldepr3: string | null;

  @Column("varchar", { name: "GLDEPR4", nullable: true, length: 25 })
  gldepr4: string | null;

  @Column("varchar", { name: "GLDEPR5", nullable: true, length: 25 })
  gldepr5: string | null;

  @Column("varchar", { name: "GLDEPRED1", nullable: true, length: 25 })
  gldepred1: string | null;

  @Column("varchar", { name: "GLDEPRED2", nullable: true, length: 25 })
  gldepred2: string | null;

  @Column("varchar", { name: "GLDEPRED3", nullable: true, length: 25 })
  gldepred3: string | null;

  @Column("varchar", { name: "GLDEPRED4", nullable: true, length: 25 })
  gldepred4: string | null;

  @Column("varchar", { name: "GLDEPRED5", nullable: true, length: 25 })
  gldepred5: string | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("int", { name: "TFVID", nullable: true })
  tfvid: number | null;

  @Column("int", { name: "TFDID", nullable: true })
  tfdid: number | null;

  @Column("float", { name: "TFDPERC", nullable: true, precision: 53 })
  tfdperc: number | null;

  @Column("int", { name: "FNDID", nullable: true })
  fndid: number | null;

  @Column("float", { name: "FNDPERC", nullable: true, precision: 53 })
  fndperc: number | null;

  @Column("smallint", { name: "INUSE", nullable: true, default: () => "0" })
  inuse: number | null;

  @Column("smallint", { name: "OVERDEPR", nullable: true, default: () => "0" })
  overdepr: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true })
  comments: string | null;

  @Column("smallint", { name: "IMMEDDEPR", nullable: true, default: () => "0" })
  immeddepr: number | null;

  @Column("float", { name: "REMAINVALUE", nullable: true, precision: 53 })
  remainvalue: number | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("varchar", { name: "FLDSTRING1", nullable: true, length: 50 })
  fldstring1: string | null;

  @Column("varchar", { name: "FLDSTRING2", nullable: true, length: 50 })
  fldstring2: string | null;

  @Column("varchar", { name: "FLDSTRING3", nullable: true, length: 50 })
  fldstring3: string | null;

  @Column("varchar", { name: "FLDSTRING4", nullable: true, length: 50 })
  fldstring4: string | null;

  @Column("varchar", { name: "FLDSTRING5", nullable: true, length: 50 })
  fldstring5: string | null;

  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Column("varchar", { name: "GLPRODUCTION", nullable: true, length: 25 })
  glproduction: string | null;

  @Column("smallint", {
    name: "MOVINGOUTSIDE",
    nullable: true,
    default: () => "(0)",
  })
  movingoutside: number | null;

  @Column("int", { name: "RELITEID", nullable: true })
  reliteid: number | null;

  @Column("varchar", { name: "ELPNETPOSITION", nullable: true, length: 25 })
  elpnetposition: string | null;

  @Column("varchar", { name: "ELPFAIRVALUELOSS", nullable: true, length: 25 })
  elpfairvalueloss: string | null;

  @Column("varchar", { name: "ELPIMPAIRMENT", nullable: true, length: 25 })
  elpimpairment: string | null;

  @Column("varchar", { name: "ELPUNIMPAIRED", nullable: true, length: 25 })
  elpunimpaired: string | null;

  @Column("varchar", {
    name: "ELPIMPAIRMENTINVERSION",
    nullable: true,
    length: 25,
  })
  elpimpairmentinversion: string | null;

  @Column("smallint", { name: "VATADDED", default: () => "(0)" })
  vatadded: number;

  @Column("smallint", { name: "SPECIALVATSTATUS", default: () => "(0)" })
  specialvatstatus: number;

  @Column("int", { name: "INTID", nullable: true })
  intid: number | null;

  @Column("varchar", { name: "BASEDEPRDESCR", nullable: true, length: 25 })
  basedeprdescr: string | null;

  @Column("int", { name: "TOTALUNITS", nullable: true })
  totalunits: number | null;

  @Column("smallint", {
    name: "NOTINCLUDEDINCOST",
    nullable: true,
    default: () => "(0)",
  })
  notincludedincost: number | null;

  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.assets)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @ManyToOne(() => Assetcategory, (assetcategory) => assetcategory.assets)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ASCID", referencedColumnName: "codeid" },
  ])
  assetcategory: Assetcategory;

  @ManyToOne(() => Assetcategory, (assetcategory) => assetcategory.assets2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ASCDTID", referencedColumnName: "codeid" },
  ])
  assetcategory2: Assetcategory;


  @OneToMany(() => Assetorginfo, (assetorginfo) => assetorginfo.ast)
  assetorginfos: Assetorginfo[];

  @OneToMany(() => Assettradelines, (assettradelines) => assettradelines.ast)
  assettradelines: Assettradelines[];

  @OneToMany(() => Depricedasset, (depricedasset) => depricedasset.ast)
  depricedassets: Depricedasset[];

  @OneToMany(() => Deprtrans, (deprtrans) => deprtrans.ast)
  deprtrans: Deprtrans[];
}
