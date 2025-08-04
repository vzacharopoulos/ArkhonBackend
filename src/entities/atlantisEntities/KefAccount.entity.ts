import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ACCOUNT_PK", ["recId"], { unique: true })
@ObjectType()
@Entity("KEF_ACCOUNT", { schema: "dbo" })
export class KefAccount {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BALANCETRANSFER", nullable: true })
  balancetransfer: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISMOVING", nullable: true })
  ismoving: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ALMODE", nullable: true })
  almode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BEHAVIOUR", nullable: true })
  behaviour: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FOREIGNDESCR", nullable: true, length: 255 })
  foreigndescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "IDPRIMARY", nullable: true })
  idprimary: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODEPRIMARY", nullable: true, length: 25 })
  codeprimary: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GRADE", nullable: true })
  grade: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "IDCOUPLE", nullable: true })
  idcouple: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODECOUPLE", nullable: true, length: 25 })
  codecouple: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ADSID", nullable: true })
  adsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

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
  @Column("float", { name: "LPERIODDEBIT", nullable: true, precision: 53 })
  lperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODCREDIT", nullable: true, precision: 53 })
  lperiodcredit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODDEBITUPD", nullable: true, precision: 53 })
  lperioddebitupd: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODCREDITUPD", nullable: true, precision: 53 })
  lperiodcreditupd: number | null;
}
