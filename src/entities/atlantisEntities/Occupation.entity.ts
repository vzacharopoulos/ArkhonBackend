import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5012", ["codeid"], { unique: true })
@ObjectType()
@Entity("OCCUPATION", { schema: "dbo" })
export class Occupation {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", {
    name: "KEPYOSTATUS",
    nullable: true,
    default: () => "0",
  })
  kepyostatus: number | null;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("smallint", {
    name: "INPRSCHOOL",
    nullable: true,
    default: () => "(0)",
  })
  inprschool: number | null;

  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @OneToMany(() => Customer, (customer) => customer.ocp)
  customers: Customer[];

  @OneToMany(() => Supplier, (supplier) => supplier.ocp)
  suppliers: Supplier[];
}
