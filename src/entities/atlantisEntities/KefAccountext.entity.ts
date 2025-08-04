import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ACCOUNTEXT_PK", ["accid"], { unique: true })
@ObjectType()
@Entity("KEF_ACCOUNTEXT", { schema: "dbo" })
export class KefAccountext {
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
  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MANAGER", nullable: true, length: 80 })
  manager: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "SUMKEPYO", nullable: true })
  sumkepyo: number | null;
}
