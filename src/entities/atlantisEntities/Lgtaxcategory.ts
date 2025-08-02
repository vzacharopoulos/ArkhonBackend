import { Column, Entity, Index, OneToMany } from "typeorm";
import { Account } from "./Account";

@Index("UNI_6488", ["codeid"], { unique: true })
@Entity("LGTAXCATEGORY", { schema: "dbo" })
export class Lgtaxcategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 100 })
  descr: string;

  @Column("smallint", { name: "GRPLEVEL", default: () => "0" })
  grplevel: number;

  @OneToMany(() => Account, (account) => account.lgtaxcategory)
  accounts: Account[];
}
