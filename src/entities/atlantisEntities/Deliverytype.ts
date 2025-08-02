import { Column, Entity, Index, OneToMany } from "typeorm";
import { Customer } from "./Customer";
import { Supplier } from "./Supplier";

@Index("UNI_6416", ["codeid"], { unique: true })
@Entity("DELIVERYTYPE", { schema: "dbo" })
export class Deliverytype {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODE", length: 10 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @OneToMany(() => Customer, (customer) => customer.dlvtype)
  customers: Customer[];

  @OneToMany(() => Supplier, (supplier) => supplier.dlvtype)
  suppliers: Supplier[];
}
