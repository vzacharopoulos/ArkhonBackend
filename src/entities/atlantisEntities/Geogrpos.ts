import { Column, Entity, Index, OneToMany } from "typeorm";
import { Custaddress } from "./Custaddress";
import { Customer } from "./Customer";
import { Salesman } from "./Salesman";
import { Storetrade } from "./Storetrade";
import { Suppaddress } from "./Suppaddress";
import { Supplier } from "./Supplier";

@Index("UNI_5006", ["codeid"], { unique: true })
@Entity("GEOGRPOS", { schema: "dbo" })
export class Geogrpos {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("varchar", { name: "STRORDER2", nullable: true, length: 25 })
  strorder2: string | null;

  @Column("nchar", { name: "COORDINATES", nullable: true, length: 50 })
  coordinates: string | null;

  @OneToMany(() => Custaddress, (custaddress) => custaddress.geo)
  custaddresses: Custaddress[];

  @OneToMany(() => Customer, (customer) => customer.geo)
  customers: Customer[];

  @OneToMany(() => Salesman, (salesman) => salesman.geo)
  salesmen: Salesman[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.geo)
  storetrades: Storetrade[];

  @OneToMany(() => Suppaddress, (suppaddress) => suppaddress.geo)
  suppaddresses: Suppaddress[];

  @OneToMany(() => Supplier, (supplier) => supplier.geo)
  suppliers: Supplier[];
}
