import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bill } from "./Bill.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5808", ["comid", "codeid"], { unique: true })
@Entity("PORTFOLIO", { schema: "dbo" })
export class Portfolio {
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
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.portfolio)
  bills: Bill[];
}
