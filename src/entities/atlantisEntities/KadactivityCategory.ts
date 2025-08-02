import { Column, Entity, Index, OneToMany } from "typeorm";
import { Account } from "./Account";

@Index("UNI_15498", ["codeid"], { unique: true })
@Entity("KADACTIVITY_CATEGORY", { schema: "dbo" })
export class KadactivityCategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @OneToMany(() => Account, (account) => account.kadactCategory)
  accounts: Account[];

}
