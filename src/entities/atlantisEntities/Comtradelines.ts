import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vatcategory } from "./Vatcategory";
import { Fintrade } from "./Fintrade";
import { Analdist } from "./Analdist";
import { Varcomtrades } from "./Varcomtrades";

@Index("UNI_3414", ["id"], { unique: true })
@Index("UNIX_1016", ["accid"], {})
@Index("UNIX_1083", ["ftrid", "linenum"], {})
@Entity("COMTRADELINES", { schema: "dbo" })
export class Comtradelines {
  @Column("int", { name: "FTRID" })
  ftrid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Column("smallint", { name: "GROUPVALUE" })
  groupvalue: number;

  @Column("smallint", { name: "SUBJECTTOVAT" })
  subjecttovat: number;

  @Column("smallint", { name: "TURNOVERUPD" })
  turnoverupd: number;

  @Column("smallint", { name: "KEPYOUPD" })
  kepyoupd: number;

  @Column("smallint", { name: "SOURCE" })
  source: number;

  @Column("float", { name: "LINEVALUE", precision: 53 })
  linevalue: number;

  @Column("float", { name: "LLINEVALUE", precision: 53 })
  llinevalue: number;

  @Column("float", { name: "TLINEVALUE", precision: 53 })
  tlinevalue: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "CCOID", nullable: true })
  ccoid: number | null;

  @Column("int", { name: "ABMID", nullable: true })
  abmid: number | null;

  @Column("int", { name: "ACCDIFMODELID", nullable: true })
  accdifmodelid: number | null;

  @Column("float", { name: "EXPENSEPERCENTAGE", nullable: true, precision: 53 })
  expensepercentage: number | null;

  @Column("varchar", { name: "BNTRNID", nullable: true, length: 50 })
  bntrnid: string | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "REFCODE", nullable: true, length: 64 })
  refcode: string | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("smallint", { name: "SOREFSTATUS", nullable: true })
  sorefstatus: number | null;

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.comtradelines)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.comtradelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;

  @ManyToOne(() => Analdist, (analdist) => analdist.comtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "ADSID", referencedColumnName: "code" },
  ])
  analdist: Analdist;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.comtradelines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "VCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades: Varcomtrades;
}
