import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Custaddress } from "./Custaddress.entity";
import { Customer } from "./Customer.entity";
import { Salesman } from "./Salesman.entity";
import { Storetrade } from "./Storetrade.entity";
import { Suppaddress } from "./Suppaddress.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5006", ["codeid"], { unique: true })
@ObjectType()
@Entity("GEOGRPOS", { schema: "dbo" })
export class Geogrpos {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRORDER2", nullable: true, length: 25 })
  strorder2: string | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "COORDINATES", nullable: true, length: 50 })
  coordinates: string | null;

  @Field(() => [Custaddress], { nullable: true })
  @OneToMany(() => Custaddress, (custaddress) => custaddress.geo)
  custaddresses: Custaddress[];

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.geo)
  customers: Customer[];

  @Field(() => [Salesman], { nullable: true })
  @OneToMany(() => Salesman, (salesman) => salesman.geo)
  salesmen: Salesman[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.geo)
  storetrades: Storetrade[];

  @Field(() => [Suppaddress], { nullable: true })
  @OneToMany(() => Suppaddress, (suppaddress) => suppaddress.geo)
  suppaddresses: Suppaddress[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.geo)
  suppliers: Supplier[];
}
