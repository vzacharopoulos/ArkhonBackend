import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Account } from "./Account.entity";

@Index("UNI_6492", ["accid"], { unique: true })
@Index("UNIX_1144", ["afm"], {})
@ObjectType()
@Entity("ACCOUNTEXT", { schema: "dbo" })
export class Accountext {
  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ACCID" })
  accid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 80 })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JOBDESCR", nullable: true, length: 80 })
  jobdescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GEOID", nullable: true })
  geoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MANAGER", nullable: true, length: 80 })
  manager: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUMKEPYO", nullable: true })
  sumkepyo: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REFACCCODE", nullable: true, length: 25 })
  refacccode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REFACCDESCR", nullable: true, length: 80 })
  refaccdescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDKEPYO", nullable: true, default: () => "0" })
  updkepyo: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFACCTYPE", nullable: true })
  myfacctype: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CLOSINGDATE", nullable: true })
  closingdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FATHERNAME", nullable: true, length: 50 })
  fathername: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISGDPR", default: () => "(0)" })
  isgdpr: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @OneToOne(() => Account, (account) => account.accountext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ACCID", referencedColumnName: "id" }])
  acc: Account;
}
