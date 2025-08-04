import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Doy } from "./Doy.entity";
import { Sxcontractor } from "./Sxcontractor.entity";


@Index("UNI_15322", ["codeid"], { unique: true })
@ObjectType()
@Entity("SXACCOUNTANT", { schema: "dbo" })
export class Sxaccountant {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "SURNAME", length: 50 })
  surname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADT", nullable: true, length: 25 })
  adt: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADDRESS", nullable: true, length: 50 })
  address: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TK", nullable: true, length: 25 })
  tk: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LICENSENUM", nullable: true, length: 25 })
  licensenum: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LICENSECATEGORY", nullable: true })
  licensecategory: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXISUSERNAME", nullable: true, length: 50 })
  taxisusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXISPWD", nullable: true, length: 50 })
  taxispwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATUSERNAME", nullable: true, length: 50 })
  intrastatusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATPWD", nullable: true, length: 50 })
  intrastatpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOFFICENAME", nullable: true, length: 50 })
  accofficename: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOFFICEAFM", nullable: true, length: 50 })
  accofficeafm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AADESUSERNAME", nullable: true, length: 50 })
  aadesusername: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AADEPWD", nullable: true, length: 50 })
  aadepwd: string | null;


  @Field({ nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.sxaccountants)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @Field({ nullable: true })
  @ManyToOne(() => Doy, (doy) => doy.sxaccountants2)
  @JoinColumn([{ name: "STARTDOYID", referencedColumnName: "codeid" }])
  startdoy: Doy;

  @Field(() => [Sxcontractor], { nullable: true })
  @OneToMany(
    () => Sxcontractor,
    (sxcontractor) => sxcontractor.sxaccountantcode
  )
  sxcontractors: Sxcontractor[];

}
