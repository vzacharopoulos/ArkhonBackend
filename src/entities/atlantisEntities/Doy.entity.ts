import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Branch } from "./Branch.entity";
import { Company } from "./Company.entity";
import { Customer } from "./Customer.entity";
import { Supplier } from "./Supplier.entity";
import { Sxaccountant } from "./Sxaccountant.entity";

@Index("UNI_5010", ["codeid"], { unique: true })
@ObjectType()
@Entity("DOY", { schema: "dbo" })
export class Doy {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 10 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 100 })
  descr: string;

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
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACT", nullable: true, length: 30 })
  contact: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "NEWDOYID", nullable: true })
  newdoyid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.doy)
  branches: Branch[];

  @Field(() => [Company], { nullable: true })
  @OneToMany(() => Company, (company) => company.doy)
  companies: Company[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.doy)
  customers: Customer[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.doy)
  suppliers: Supplier[];

  @Field(() => [Sxaccountant], { nullable: true })
  @OneToMany(() => Sxaccountant, (sxaccountant) => sxaccountant.doy)
  sxaccountants: Sxaccountant[];

  @Field(() => [Sxaccountant], { nullable: true })
  @OneToMany(() => Sxaccountant, (sxaccountant) => sxaccountant.startdoy)
  sxaccountants2: Sxaccountant[];

}
