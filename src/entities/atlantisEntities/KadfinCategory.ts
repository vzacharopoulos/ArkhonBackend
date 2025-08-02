import { Column, Entity, Index, OneToMany } from "typeorm";
import { Account } from "./Account";

@Index("UNI_15496", ["codeid"], { unique: true })
@Index("UNI_15506", ["code"], { unique: true })
@Entity("KADFIN_CATEGORY", { schema: "dbo" })
export class KadfinCategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 80 })
  descr: string;

  @Column("varchar", {
    name: "KADACTIVITY_CATEGORIES",
    nullable: true,
    length: 20,
  })
  kadactivityCategories: string | null;

  @Column("smallint", { name: "BALUPDMODE", default: () => "(1)" })
  balupdmode: number;

  @OneToMany(() => Account, (account) => account.kadfinCategory)
  accounts: Account[];

 
}
