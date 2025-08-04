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
import { Branch } from "./Branch.entity";
import { Storagebin } from "./Storagebin.entity";
import { Country } from "./Country.entity";
import { Company } from "./Company.entity";
import { Storetrade } from "./Storetrade.entity";
import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_300", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("STORE", { schema: "dbo" })
export class Store {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 25 })
  city: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTCUT", length: 15 })
  shortcut: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 255 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 25 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 25 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 255 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 15 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACT", nullable: true, length: 255 })
  contact: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "SURFACE", nullable: true, precision: 53 })
  surface: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "VOLUME", nullable: true, precision: 53 })
  volume: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RAWMATERIALSTOID", nullable: true })
  rawmaterialstoid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISTHIRDSTORE", default: () => "0" })
  isthirdstore: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MYDATACLASSIFICATIONOTHER",
    default: () => "(0)",
  })
  mydataclassificationother: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRANSPORTERS", nullable: true, length: 150 })
  transporters: string | null;

  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.store)
  branches: Branch[];

  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.store2)
  branches2: Branch[];

  @Field(() => [Branch], { nullable: true })
  @OneToMany(() => Branch, (branch) => branch.store3)
  branches3: Branch[];

  @Field(() => [Storagebin], { nullable: true })
  @OneToMany(() => Storagebin, (storagebin) => storagebin.store)
  storagebins: Storagebin[];

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.stores)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.stores, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.store)
  storetrades: Storetrade[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.store2)
  storetrades2: Storetrade[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.store)
  storetradelines: Storetradelines[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.store2)
  storetradelines2: Storetradelines[];
}
