import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bill } from "./Bill.entity";
import { Billtrntype } from "./Billtrntype.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_6172", ["comid", "scodeid"], { unique: true })
@Entity("BILLSTATES", { schema: "dbo" })
export class Billstates {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "SCODEID" })
  scodeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENBALANCEUPD", default: () => "0" })
  openbalanceupd: number;

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.billstates)
  bills: Bill[];

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.billstates2)
  bills2: Bill[];

  @Field(() => [Billtrntype], { nullable: true })
  @OneToMany(() => Billtrntype, (billtrntype) => billtrntype.billstates)
  billtrntypes: Billtrntype[];
}
