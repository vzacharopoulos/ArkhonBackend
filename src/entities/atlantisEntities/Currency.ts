import { Column, Entity, Index, OneToMany } from "typeorm";
import { Accountevent } from "./Accountevent";
import { Bankaccount } from "./Bankaccount";
import { Bill } from "./Bill";
import { Customer } from "./Customer";
import { Equival } from "./Equival";
import { Fintrade } from "./Fintrade";
import { Fundtradelines } from "./Fundtradelines";
import { Material } from "./Material";
import { Salesman } from "./Salesman";
import { Supplier } from "./Supplier";

@Index("UNI_5000", ["codeid"], { unique: true })
@Entity("CURRENCY", { schema: "dbo" })
export class Currency {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODE", length: 10 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", {
    name: "VALUESDECIMALS",
    nullable: true,
    default: () => "0",
  })
  valuesdecimals: number | null;

  @Column("smallint", {
    name: "PRICESDECIMALS",
    nullable: true,
    default: () => "0",
  })
  pricesdecimals: number | null;

  @Column("int", { name: "LOCKCURID", nullable: true })
  lockcurid: number | null;

  @Column("float", { name: "LOCKRATE", nullable: true, precision: 53 })
  lockrate: number | null;

  @Column("varchar", { name: "SYMBOL", nullable: true, length: 3 })
  symbol: string | null;

  @OneToMany(() => Accountevent, (accountevent) => accountevent.cur)
  accountevents: Accountevent[];

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.cur)
  bankaccounts: Bankaccount[];

  @OneToMany(() => Bill, (bill) => bill.cur)
  bills: Bill[];

  @OneToMany(() => Customer, (customer) => customer.cur)
  customers: Customer[];

  @OneToMany(() => Equival, (equival) => equival.curidref2)
  equivals: Equival[];

  @OneToMany(() => Equival, (equival) => equival.cur)
  equivals2: Equival[];

  @OneToMany(() => Fintrade, (fintrade) => fintrade.cur)
  fintrades: Fintrade[];

  @OneToMany(() => Fundtradelines, (fundtradelines) => fundtradelines.cur)
  fundtradelines: Fundtradelines[];

  @OneToMany(() => Material, (material) => material.cur)
  materials: Material[];

  @OneToMany(() => Salesman, (salesman) => salesman.cur)
  salesmen: Salesman[];

  @OneToMany(() => Supplier, (supplier) => supplier.cur)
  suppliers: Supplier[];
}
