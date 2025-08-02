import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Customer } from "./Customer";
import { Company } from "./Company";
import { Storetrade } from "./Storetrade";

@Index("UNI_5320", ["comid", "codeid"], { unique: true })
@Entity("ROUTE", { schema: "dbo" })
export class Route {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "DESCR2", nullable: true })
  descr2: string | null;

  @Column("varchar", { name: "PREFECTURE", nullable: true, length: 50 })
  prefecture: string | null;

  @OneToMany(() => Customer, (customer) => customer.route)
  customers: Customer[];

  @ManyToOne(() => Company, (company) => company.routes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Storetrade, (storetrade) => storetrade.route)
  storetrades: Storetrade[];
}
