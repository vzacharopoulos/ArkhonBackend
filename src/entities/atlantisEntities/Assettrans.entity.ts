import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Depricedasset } from "./Depricedasset.entity";
import { Branch } from "./Branch.entity";
import { Fintrade } from "./Fintrade.entity";
import { Assettrntype } from "./Assettrntype.entity";
import { Assetreadjust } from "./Assetreadjust.entity";
import { Deprtrans } from "./Deprtrans.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5630", ["id"], { unique: true })
@Index("UNIX_1007", ["ftrid"], {})
@Index("UNIX_1008", ["dpaid", "trndate", "id"], {})
@Index("UNIX_1009", ["comid", "trndate", "id"], {})
@Index("UNIX_1108", ["astid", "ftrid", "assetnature"], {})
@Entity("ASSETTRANS", { schema: "dbo" })
export class Assettrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("smallint", { name: "ASSETNATURE" })
  assetnature: number;

  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "ASTID" })
  astid: number;

  @Column("int", { name: "DPAID" })
  dpaid: number;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("varchar", { name: "DOCCODE", nullable: true, length: 30 })
  doccode: string | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", {
    name: "LTRNVALUE",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  ltrnvalue: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("varchar", { name: "INFO1", nullable: true, length: 255 })
  info1: string | null;

  @Column("float", { name: "ASSETVALUE", nullable: true, precision: 53 })
  assetvalue: number | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("smallint", { name: "TRANSFACTOR", default: () => "1" })
  transfactor: number;

  @Column("int", { name: "ASLID", nullable: true })
  aslid: number | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Column("float", { name: "LTRNVALUE2", nullable: true, precision: 53 })
  ltrnvalue2: number | null;

  @Column("float", { name: "LTRNVALUE3", nullable: true, precision: 53 })
  ltrnvalue3: number | null;

  @Column("float", { name: "LTRNVALUE4", nullable: true, precision: 53 })
  ltrnvalue4: number | null;

  @Column("float", { name: "LTRNVALUE5", nullable: true, precision: 53 })
  ltrnvalue5: number | null;

  @Column("float", { name: "IASASSETVALUE", nullable: true, precision: 53 })
  iasassetvalue: number | null;

  @ManyToOne(() => Depricedasset, (depricedasset) => depricedasset.assettrans)
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;

  @ManyToOne(() => Branch, (branch) => branch.assettrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.assettrans)
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Assettrntype, (assettrntype) => assettrntype.assettrans)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ATTID", referencedColumnName: "codeid" },
  ])
  assettrntype: Assettrntype;

  @ManyToOne(() => Assetreadjust, (assetreadjust) => assetreadjust.assettrans)
  @JoinColumn([{ name: "ARJID", referencedColumnName: "codeid" }])
  arj: Assetreadjust;



  @OneToMany(() => Deprtrans, (deprtrans) => deprtrans.atn)
  deprtrans: Deprtrans[];
}
