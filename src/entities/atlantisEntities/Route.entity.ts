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
import { Customer } from "./Customer.entity";
import { Company } from "./Company.entity";
import { Storetrade } from "./Storetrade.entity";

@Index("UNI_5320", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ROUTE", { schema: "dbo" })
export class Route {
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
  @Column("varchar", { name: "DESCR2", nullable: true })
  descr2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PREFECTURE", nullable: true, length: 50 })
  prefecture: string | null;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.route)
  customers: Customer[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.routes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.route)
  storetrades: Storetrade[];
}
