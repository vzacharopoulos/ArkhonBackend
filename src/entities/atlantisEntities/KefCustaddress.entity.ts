import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_CUSTADDRESS_PK", ["recId"], { unique: true })
@ObjectType()
@Entity("KEF_CUSTADDRESS", { schema: "dbo" })
export class KefCustaddress {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 15 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 30 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PERCODE", nullable: true, length: 25 })
  percode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACTPERSON", nullable: true, length: 25 })
  contactperson: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMNCODE", nullable: true, length: 25 })
  smncode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FPASTATUS", nullable: true })
  fpastatus: number | null;
}
