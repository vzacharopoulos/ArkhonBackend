import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_6416", ["codeid"], { unique: true })
@ObjectType()
@Entity("DELIVERYTYPE", { schema: "dbo" })
export class Deliverytype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 10 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.dlvtype)
  customers: Customer[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.dlvtype)
  suppliers: Supplier[];
}
