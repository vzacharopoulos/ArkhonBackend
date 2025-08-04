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
import { Country } from "./Country.entity";
import { Company } from "./Company.entity";
import { Customer } from "./Customer.entity";
import { Storetrade } from "./Storetrade.entity";

@Index("UNI_5322", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CARRIER", { schema: "dbo" })
export class Carrier {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE", nullable: true, length: 20 })
  phone: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ADDRESS", nullable: true, length: 30 })
  address: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS2", nullable: true, length: 255 })
  comments2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS3", nullable: true, length: 255 })
  comments3: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCOURIER", default: () => "(1)" })
  iscourier: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFTERSALESAPIKEY", nullable: true, length: 100 })
  aftersalesapikey: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AREA", nullable: true, length: 50 })
  area: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 50 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 255 })
  email: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AFMSTATE",
    nullable: true,
    default: () => "(0)",
  })
  afmstate: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "AFMSTATECHECKDATE", nullable: true })
  afmstatecheckdate: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.carriers)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

 
  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.carrier2)
  customers: Customer[];


  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.carrier)
  storetrades: Storetrade[];

}
