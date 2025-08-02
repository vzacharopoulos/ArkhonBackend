import { Column, Entity, Index, OneToMany } from "typeorm";
import { Sxprofitcoef } from "./Sxprofitcoef";

@Index("UNI_15404", ["codeid"], { unique: true })
@Entity("SXPCOEFCATEGORY", { schema: "dbo" })
export class Sxpcoefcategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "ISOFFICIAL", default: () => "0" })
  isofficial: number;

  @OneToMany(() => Sxprofitcoef, (sxprofitcoef) => sxprofitcoef.sxpcoefcategory)
  sxprofitcoefs: Sxprofitcoef[];
}
