import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_1710", ["comid"], { unique: true })
@Entity("FINPARAMS", { schema: "dbo" })
export class Finparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { name: "BILLEXPIREINCLUDE", default: () => "(0)" })
  billexpireinclude: number;

  @Column("smallint", { name: "EXCLUDECANCDOCS", default: () => "(0)" })
  excludecancdocs: number;

  @Column("smallint", { name: "USEAGES", default: () => "(0)" })
  useages: number;

  @Column("datetime", { name: "MPTSTARTDATE", nullable: true })
  mptstartdate: Date | null;

  @Column("smallint", { name: "MPTAUTOCALCBALANCE", default: () => "(0)" })
  mptautocalcbalance: number;

  @Column("smallint", { name: "MPTAUTOEXCLUDEBALANCE", default: () => "(0)" })
  mptautoexcludebalance: number;

  @Column("smallint", {
    name: "MPTAUTOEXCLUDECRDBALANCE",
    default: () => "(0)",
  })
  mptautoexcludecrdbalance: number;

  @Column("smallint", {
    name: "IDXCALCBALANCETRNDATE",
    nullable: true,
    default: () => "(1)",
  })
  idxcalcbalancetrndate: number | null;

  @Column("smallint", {
    name: "CHECKDUBLICATEBILL",
    nullable: true,
    default: () => "(2)",
  })
  checkdublicatebill: number | null;

  @Column("varbinary", { name: "CASFBANKACCOUNT", nullable: true })
  casfbankaccount: Buffer | null;

  @Column("varbinary", { name: "CASFGENACCOUNT", nullable: true })
  casfgenaccount: Buffer | null;

  @Column("varbinary", { name: "CASFBILLSTATES", nullable: true })
  casfbillstates: Buffer | null;

  @OneToOne(() => Company, (company) => company.finparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
