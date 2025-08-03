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
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @OneToMany(() => Customer, (customer) => customer.pricecategory)
  customers: Customer[];

  @ManyToOne(() => Company, (company) => company.pricecategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
