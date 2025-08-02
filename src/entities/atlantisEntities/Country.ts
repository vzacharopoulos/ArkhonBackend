import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bank } from "./Bank";
import { Bankaccount } from "./Bankaccount";
import { Branch } from "./Branch";
import { Carrier } from "./Carrier";
import { Company } from "./Company";
import { Custaddress } from "./Custaddress";
import { Customer } from "./Customer";

import { Pgroup } from "./Pgroup";
import { Salesman } from "./Salesman";
import { Store } from "./Store";
import { Storetrade } from "./Storetrade";
import { Suppaddress } from "./Suppaddress";
import { Supplier } from "./Supplier";


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
