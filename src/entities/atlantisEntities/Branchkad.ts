import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Branch } from "./Branch";

@Index("UNI_6552", ["comid", "branchcodeid", "sxkadid"], { unique: true })
@Entity("BRANCHKAD", { schema: "dbo" })
export class Branchkad {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "BRANCHCODEID" })
  branchcodeid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { primary: true, name: "SXKADID" })
  sxkadid: number;

  @Column("smallint", { name: "KADKIND" })
  kadkind: number;

  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Column("datetime", { name: "STOPDATE", nullable: true })
  stopdate: Date | null;

  @ManyToOne(() => Branch, (branch) => branch.branchkads, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRANCHCODEID", referencedColumnName: "codeid" },
  ])
  branch: Branch;
}
