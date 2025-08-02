import { Column, Entity, Index, OneToMany } from "typeorm";
import { Bill } from "./Bill";

@Index("UNI_5808", ["comid", "codeid"], { unique: true })
@Entity("PORTFOLIO", { schema: "dbo" })
export class Portfolio {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @OneToMany(() => Bill, (bill) => bill.portfolio)
  bills: Bill[];
}
