import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Reliability } from "./Reliability";
import { Pgroup } from "./Pgroup";

@Index("UNI_6326", ["comid", "grpid"], { unique: true })
@Entity("PGROUPLINES", { schema: "dbo" })
export class Pgrouplines {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "GRPID" })
  grpid: number;

  @ManyToOne(() => Reliability, (reliability) => reliability.pgrouplines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RLBID", referencedColumnName: "codeid" },
  ])
  reliability: Reliability;

  @ManyToOne(() => Pgroup, (pgroup) => pgroup.pgrouplines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "GRPID", referencedColumnName: "id" }])
  grp: Pgroup;
}
