import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5012", ["codeid"], { unique: true })
@ObjectType()
@Entity("OCCUPATION", { schema: "dbo" })
export class Occupation {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "KEPYOSTATUS",
    nullable: true,
    default: () => "0",
  })
  kepyostatus: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "INPRSCHOOL",
    nullable: true,
    default: () => "(0)",
  })
  inprschool: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.ocp)
  customers: Customer[];

  @Field(() => [Supplier], { nullable: true })
  @OneToMany(() => Supplier, (supplier) => supplier.ocp)
  suppliers: Supplier[];
}
