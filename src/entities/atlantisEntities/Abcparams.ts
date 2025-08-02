import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_5880", ["comid"], { unique: true })
@Entity("ABCPARAMS", { schema: "dbo" })
export class Abcparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "DIMSTR1", nullable: true, length: 25 })
  dimstr1: string | null;

  @Column("varchar", { name: "DIMSTR2", nullable: true, length: 25 })
  dimstr2: string | null;

  @Column("varchar", { name: "DIMSTR3", nullable: true, length: 25 })
  dimstr3: string | null;

  @Column("varchar", { name: "DIMSTR4", nullable: true, length: 25 })
  dimstr4: string | null;

  @Column("varchar", { name: "DIMSTR5", nullable: true, length: 25 })
  dimstr5: string | null;

  @Column("varchar", { name: "DISTRSTR1", nullable: true, length: 25 })
  distrstr1: string | null;

  @Column("varchar", { name: "DISTRSTR2", nullable: true, length: 25 })
  distrstr2: string | null;

  @Column("varchar", { name: "DISTRSTR3", nullable: true, length: 25 })
  distrstr3: string | null;

  @Column("int", { name: "DISTRDIMS1", nullable: true })
  distrdims1: number | null;

  @Column("int", { name: "DISTRDIMS2", nullable: true })
  distrdims2: number | null;

  @Column("int", { name: "DISTRDIMS3", nullable: true })
  distrdims3: number | null;

  @OneToOne(() => Company, (company) => company.abcparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
