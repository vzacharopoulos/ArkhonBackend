import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bank } from "./Bank";
import { Bankaccount } from "./Bankaccount";

@Index("UNI_1432", ["codeid"], { unique: true })
@Entity("TAXFREEJUSTIFICATION", { schema: "dbo" })
export class Taxfreejustification {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "ARTNUMBER", nullable: true, length: 10 })
  artnumber: string | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @OneToMany(() => Bank, (bank) => bank.taxfree)
  banks: Bank[];

  @OneToMany(() => Bankaccount, (bankaccount) => bankaccount.taxfree)
  bankaccounts: Bankaccount[];
}
