import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bill } from "./Bill";
import { Billtrntype } from "./Billtrntype";

@Index("UNI_6172", ["comid", "scodeid"], { unique: true })
@Entity("BILLSTATES", { schema: "dbo" })
export class Billstates {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "SCODEID" })
  scodeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "OPENBALANCEUPD", default: () => "0" })
  openbalanceupd: number;

  @OneToMany(() => Bill, (bill) => bill.billstates)
  bills: Bill[];

  @OneToMany(() => Bill, (bill) => bill.billstates2)
  bills2: Bill[];

  @OneToMany(() => Billtrntype, (billtrntype) => billtrntype.billstates)
  billtrntypes: Billtrntype[];
}
