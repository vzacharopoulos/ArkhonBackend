import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Sxprofitcoef } from "./Sxprofitcoef";

@Index("UNI_15400", ["sxprofitcoefsalcode", "fyeid"], { unique: true })
@Entity("SXPCOEFHIST", { schema: "dbo" })
export class Sxpcoefhist {
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("varchar", { primary: true, name: "SXPROFITCOEFSALCODE", length: 10 })
  sxprofitcoefsalcode: string;

  @Column("float", { name: "SALCOEF", nullable: true, precision: 53 })
  salcoef: number | null;

  @Column("float", { name: "PURCOEF", nullable: true, precision: 53 })
  purcoef: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @ManyToOne(() => Sxprofitcoef, (sxprofitcoef) => sxprofitcoef.sxpcoefhists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "SXPROFITCOEFSALCODE", referencedColumnName: "salcode" },
  ])
  sxprofitcoefsalcode2: Sxprofitcoef;
}
