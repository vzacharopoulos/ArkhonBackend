import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_MATERIAL_PK", ["recId", "comid"], { unique: true })
@ObjectType()
@Entity("KEF_MATERIAL", { schema: "dbo" })
export class KefMaterial {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 50 })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBCODE1", nullable: true, length: 25 })
  subcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUBCODE2", nullable: true, length: 25 })
  subcode2: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELITEID", nullable: true })
  reliteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RELITECODE", nullable: true, length: 25 })
  relitecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEMTYPE", nullable: true })
  itemtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ICTID", nullable: true })
  ictid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IGPID", nullable: true })
  igpid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IGSID", nullable: true })
  igsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IGTID", nullable: true })
  igtid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MNFID", nullable: true })
  mnfid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERDAYS", nullable: true })
  orderdays: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SECLIMITMIN", nullable: true, precision: 53 })
  seclimitmin: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "REORDERLIMIT", nullable: true, precision: 53 })
  reorderlimit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MU1", nullable: true })
  mu1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MU2", nullable: true })
  mu2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MU2_1", nullable: true, precision: 53 })
  mu2_1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MUMODE", nullable: true })
  mumode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FACTORYCODE", nullable: true, length: 50 })
  factorycode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "WHSPRICE", nullable: true, precision: 53 })
  whsprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RTLPRICE", nullable: true, precision: 53 })
  rtlprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WHSMARKUP", nullable: true, precision: 53 })
  whsmarkup: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RTLMARKUP", nullable: true, precision: 53 })
  rtlmarkup: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MCPID", nullable: true })
  mcpid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IQCID", nullable: true })
  iqcid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLPURCHASECODE", nullable: true, length: 25 })
  glpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLSALESCODE", nullable: true, length: 25 })
  glsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALPURCHASECODE", nullable: true, length: 25 })
  analpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALSALESCODE", nullable: true, length: 25 })
  analsalescode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PURCURID", nullable: true })
  purcurid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FRTLPRICE", nullable: true, precision: 53 })
  frtlprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FWHSPRICE", nullable: true, precision: 53 })
  fwhsprice: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "ADDONPRC", nullable: true, precision: 53 })
  addonprc: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR2", nullable: true, length: 50 })
  descr2: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SURID1", nullable: true })
  surid1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INTID", nullable: true })
  intid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IDMID", nullable: true })
  idmid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VOLUME", nullable: true, precision: 53 })
  volume: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "STDCOST", nullable: true, precision: 53 })
  stdcost: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MAXDISCOUNT", nullable: true, precision: 53 })
  maxdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRODCODE", nullable: true, length: 25 })
  prodcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GLMID", nullable: true })
  glmid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CMPQTY", nullable: true, precision: 53 })
  cmpqty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MTRMODE", nullable: true })
  mtrmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING1", nullable: true, length: 50 })
  fldstring1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING2", nullable: true, length: 50 })
  fldstring2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING3", nullable: true, length: 50 })
  fldstring3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING4", nullable: true, length: 50 })
  fldstring4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING5", nullable: true, length: 50 })
  fldstring5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Field({ nullable: true })
  @Column("text", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SETSSELLMODE", nullable: true })
  setssellmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SETSBUYMODE", nullable: true })
  setsbuymode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SETSPRSELLMODE", nullable: true })
  setsprsellmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MU1_2MODE", nullable: true })
  mu1_2Mode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EXCLUSIV", nullable: true })
  exclusiv: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IMPORTPRQTY", nullable: true, precision: 53 })
  importprqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "IMPORTVALUE", nullable: true, precision: 53 })
  importvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPORTPRQTY", nullable: true, precision: 53 })
  exportprqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPORTVALUE", nullable: true, precision: 53 })
  exportvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MAINSZLID", nullable: true })
  mainszlid: number | null;
}
