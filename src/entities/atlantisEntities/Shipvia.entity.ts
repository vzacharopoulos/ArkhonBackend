import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer.entity";
import { Storetrade } from "./Storetrade.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5014", ["codeid"], { unique: true })
@ObjectType()
@Entity("SHIPVIA", { schema: "dbo" })
export class Shipvia {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FUELVIA", nullable: true })
  fuelvia: number | null;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.shv)
  customers: Customer[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.shv)
  storetrades: Storetrade[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.shv)
  suppliers: Supplier[];
}
