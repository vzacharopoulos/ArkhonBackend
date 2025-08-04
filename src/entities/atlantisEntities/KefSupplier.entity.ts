import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SUPPLIER_PK", ["recId"], { unique: true })
@ObjectType()
@Entity("KEF_SUPPLIER", { schema: "dbo" })
export class KefSupplier {
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
  @Column("varchar", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GEOID", nullable: true })
  geoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OCPID", nullable: true })
  ocpid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET1", nullable: true, length: 50 })
  street1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT1", nullable: true, length: 30 })
  district1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE1", nullable: true, length: 10 })
  zipcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY1", nullable: true, length: 30 })
  city1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE11", nullable: true, length: 20 })
  phone11: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE12", nullable: true, length: 20 })
  phone12: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX1", nullable: true, length: 20 })
  fax1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET2", nullable: true, length: 50 })
  street2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT2", nullable: true, length: 30 })
  district2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE2", nullable: true, length: 10 })
  zipcode2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY2", nullable: true, length: 30 })
  city2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FPASTATUS", nullable: true })
  fpastatus: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "DEFAULTDISCOUNT", nullable: true, precision: 53 })
  defaultdiscount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SHVID", nullable: true })
  shvid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "OMODE", nullable: true })
  omode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMEDICODE", nullable: true, length: 10 })
  comedicode: string | null;

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
  @Column("varchar", { name: "SUBCODE1", nullable: true, length: 25 })
  subcode1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BNKID_1", nullable: true })
  bnkid_1: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTNUM_1", nullable: true, length: 30 })
  accountnum_1: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BNKID_2", nullable: true })
  bnkid_2: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTNUM_2", nullable: true, length: 30 })
  accountnum_2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RESP_NAME_1", nullable: true, length: 50 })
  respName_1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RESP_NAME_2", nullable: true, length: 50 })
  respName_2: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODDEBIT", nullable: true, precision: 53 })
  lperioddebit: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LPERIODCREDIT", nullable: true, precision: 53 })
  lperiodcredit: number | null;
}
