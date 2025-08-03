import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer.entity";
import { Storetrade } from "./Storetrade.entity";
import { Supplier } from "./Supplier.entity";

@Index("UNI_5014", ["codeid"], { unique: true })
@ObjectType()
@Entity("SHIPVIA", { schema: "dbo" })
export class Shipvia {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Column("int", { name: "FUELVIA", nullable: true })
  fuelvia: number | null;

  @OneToMany(() => Customer, (customer) => customer.shv)
  customers: Customer[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.shv)
  storetrades: Storetrade[];

  @OneToMany(() => Supplier, (supplier) => supplier.shv)
  suppliers: Supplier[];
}
