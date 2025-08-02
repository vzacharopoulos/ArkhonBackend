import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset";
import { Depricedasset } from "./Depricedasset";
import { Assettrans } from "./Assettrans";

@Index("UNI_5614", ["id"], { unique: true })
@Index("UNIX_1073", ["astid", "trndate"], {})
@Entity("DEPRTRANS", { schema: "dbo" })
export class Deprtrans {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("datetime", { name: "TRNDATE" })
  trndate: Date;

  @Column("float", { name: "TRNVALUE1", nullable: true, precision: 53 })
  trnvalue1: number | null;

  @Column("float", { name: "TRNVALUE2", nullable: true, precision: 53 })
  trnvalue2: number | null;

  @Column("float", { name: "TRNVALUE3", nullable: true, precision: 53 })
  trnvalue3: number | null;

  @Column("float", { name: "TRNVALUE4", nullable: true, precision: 53 })
  trnvalue4: number | null;

  @Column("float", { name: "TRNVALUE5", nullable: true, precision: 53 })
  trnvalue5: number | null;

  @Column("datetime", { name: "DEPRDATEFROM", nullable: true })
  deprdatefrom: Date | null;

  @Column("datetime", { name: "DEPRDATETO", nullable: true })
  deprdateto: Date | null;

  @Column("int", { name: "DEPRDAYS", nullable: true })
  deprdays: number | null;

  @Column("int", { name: "ASTID" })
  astid: number;

  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("smallint", { name: "ISOPENING", nullable: true, default: () => "0" })
  isopening: number | null;

  @Column("smallint", { name: "KIND", nullable: true, default: () => "1" })
  kind: number | null;

  @Column("smallint", { name: "GLUPDATED", nullable: true, default: () => "0" })
  glupdated: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Column("float", {
    name: "IASTRNVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iastrnvalue1: number | null;

  @Column("float", {
    name: "IASTRNVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iastrnvalue2: number | null;

  @Column("float", {
    name: "IASDIFTRNVALUE1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iasdiftrnvalue1: number | null;

  @Column("float", {
    name: "IASDIFTRNVALUE2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  iasdiftrnvalue2: number | null;

  @Column("smallint", { name: "DTTYPE", default: () => "0" })
  dttype: number;

  @Column("datetime", { name: "IASTRNDATE", nullable: true })
  iastrndate: Date | null;

  @Column("smallint", { name: "DEPRTYPE", default: () => "0" })
  deprtype: number;

  @Column("smallint", { name: "CALCDEPR", default: () => "(0)" })
  calcdepr: number;

  @ManyToOne(() => Asset, (asset) => asset.deprtrans)
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @ManyToOne(() => Depricedasset, (depricedasset) => depricedasset.deprtrans)
  @JoinColumn([{ name: "DPAID", referencedColumnName: "id" }])
  dpa: Depricedasset;

  @ManyToOne(() => Assettrans, (assettrans) => assettrans.deprtrans)
  @JoinColumn([{ name: "ATNID", referencedColumnName: "id" }])
  atn: Assettrans;
}
