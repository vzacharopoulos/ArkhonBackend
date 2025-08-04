import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";


import { Customer } from "./Customer.entity";

import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_5810", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("BUNITS", { schema: "dbo" })
export class Bunits {
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
  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTCUT", nullable: true, length: 15 })
  shortcut: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PURCHASEWARNING", nullable: true, length: 255 })
  purchasewarning: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SALESWARNING", nullable: true, length: 255 })
  saleswarning: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  
  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.bunits)
  customers: Customer[];


  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.bunits)
  storetradelines: Storetradelines[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.bunits2
  )
  storetradelines2: Storetradelines[];
}
