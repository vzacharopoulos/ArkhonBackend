import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ASSET_PK", ["recId", "comid"], { unique: true })
@ObjectType()
@Entity("KEF_ASSET", { schema: "dbo" })
export class KefAsset {
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Column("varchar", { name: "REGNUM", nullable: true, length: 25 })
  regnum: string | null;

  @Column("int", { name: "ASCID", nullable: true })
  ascid: number | null;

  @Column("int", { name: "DEPRMODE", nullable: true })
  deprmode: number | null;

  @Column("float", { name: "DEPRCOEF1", nullable: true, precision: 53 })
  deprcoef1: number | null;

  @Column("float", { name: "DEPRCOEF2", nullable: true, precision: 53 })
  deprcoef2: number | null;

  @Column("float", { name: "DEPRCOEF5", nullable: true, precision: 53 })
  deprcoef5: number | null;

  @Column("float", { name: "REMAINVALUE", nullable: true, precision: 53 })
  remainvalue: number | null;

  @Column("int", { name: "IMMEDDEPR", nullable: true })
  immeddepr: number | null;

  @Column("int", { name: "TFVID", nullable: true })
  tfvid: number | null;

  @Column("float", { name: "FNDPERC", nullable: true, precision: 53 })
  fndperc: number | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Column("int", { name: "INUSE", nullable: true })
  inuse: number | null;

  @Column("varchar", { name: "GLASSET", nullable: true, length: 25 })
  glasset: string | null;

  @Column("varchar", { name: "GLDEPRED1", nullable: true, length: 25 })
  gldepred1: string | null;

  @Column("varchar", { name: "GLDEPR1", nullable: true, length: 25 })
  gldepr1: string | null;

  @Column("varchar", { name: "GLDEPR2", nullable: true, length: 25 })
  gldepr2: string | null;

  @Column("varchar", { name: "GLDIFFRECALC", nullable: true, length: 25 })
  gldiffrecalc: string | null;

  @Column("varchar", { name: "GLDEPR4", nullable: true, length: 25 })
  gldepr4: string | null;

  @Column("varchar", { name: "GLFUND", nullable: true, length: 25 })
  glfund: string | null;

  @Column("varchar", { name: "GLEARNING", nullable: true, length: 25 })
  glearning: string | null;

  @Column("varchar", { name: "GLTAXFREEVALUE", nullable: true, length: 25 })
  gltaxfreevalue: string | null;

  @Column("varchar", { name: "GLPROFIT", nullable: true, length: 25 })
  glprofit: string | null;

  @Column("varchar", { name: "GLLOSS", nullable: true, length: 25 })
  glloss: string | null;

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

  @Column("text", { name: "COMMENTS", nullable: true })
  comments: string | null;
}
