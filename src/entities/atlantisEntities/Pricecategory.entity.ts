import { Field } from "@nestjs/graphql";
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
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5032", ["comid", "codeid"], { unique: true })
@Entity("PRICECATEGORY", { schema: "dbo" })
export class Pricecategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Customer], { nullable: true })
  @OneToMany(() => Customer, (customer) => customer.pricecategory)
  customers: Customer[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.pricecategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
