import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bank } from "./Bank.entity..entity";
import { Bankaccount } from "./Bankaccount.entity";
import { Branch } from "./Branch.entity";
import { Carrier } from "./Carrier.entity";
import { Company } from "./Company.entity";
import { Custaddress } from "./Custaddress.entity";
import { Customer } from "./Customer.entity";

import { Pgroup } from "./Pgroup.entity";
import { Salesman } from "./Salesman.entity";
import { Store } from "./Store.entity";
import { Storetrade } from "./Storetrade.entity";
import { Suppaddress } from "./Suppaddress.entity";
import { Supplier } from "./Supplier.entity";

import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5008", ["codeid"], { unique: true })
@Entity("COUNTRY", { schema: "dbo" })
export class Country {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODE", length: 10 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "ATYPE", nullable: true, default: () => "0" })
  atype: number | null;

  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Column("varchar", { name: "OPTCODEID", nullable: true, length: 25 })
  optcodeid: string | null;

  @Column("varchar", { name: "ACCMASKCUST", nullable: true, length: 25 })
  accmaskcust: string | null;

  @Column("varchar", { name: "ACCMASKSUP", nullable: true, length: 25 })
  accmasksup: string | null;

  @OneToMany(() => Bank, (bank) => bank.cnt)
  banks: Bank[];

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.cnt)
  bankaccounts: Bankaccount[];

  @OneToMany(() => Branch, (branch) => branch.cnt)
  branches: Branch[];

  @OneToMany(() => Carrier, (carrier) => carrier.cnt)
  carriers: Carrier[];

  @OneToMany(() => Company, (company) => company.cnt)
  companies: Company[];

  @OneToMany(() => Custaddress, (custaddress) => custaddress.cnt)
  custaddresses: Custaddress[];

  @OneToMany(() => Customer, (customer) => customer.cnt)
  customers: Customer[];



  @OneToMany(() => Pgroup, (pgroup) => pgroup.cnt)
  pgroups: Pgroup[];

  @OneToMany(() => Salesman, (salesman) => salesman.cnt)
  salesmen: Salesman[];

  @OneToMany(() => Store, (store) => store.cnt)
  stores: Store[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.cnt)
  storetrades: Storetrade[];

  @OneToMany(() => Suppaddress, (suppaddress) => suppaddress.cnt)
  suppaddresses: Suppaddress[];

  @OneToMany(() => Supplier, (supplier) => supplier.cnt)
  suppliers: Supplier[];


}
