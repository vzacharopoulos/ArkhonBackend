import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SALESMAN_PK", ["recId"], { unique: true })
@ObjectType()
@Entity("KEF_SALESMAN", { schema: "dbo" })
export class KefSalesman {
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
  @Column("int", { name: "SMNIDSUP", nullable: true })
  smnidsup: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMNCODESUP", nullable: true, length: 25 })
  smncodesup: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GEOID", nullable: true })
  geoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX", nullable: true, length: 20 })
  fax: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "RATE02", nullable: true, precision: 53 })
  rate02: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISSALESMAN", nullable: true })
  issalesman: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISCOLLECTOR", nullable: true })
  iscollector: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISREPR", nullable: true })
  isrepr: number | null;
}
