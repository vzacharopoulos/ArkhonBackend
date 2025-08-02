import { Column, Entity, Index, OneToMany } from "typeorm";
import { Storetradelines } from "./Storetradelines";

@Index("UNI_6368", ["comid", "codeid"], { unique: true })
@Entity("PROCESSGROUP", { schema: "dbo" })
export class Processgroup {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.processgroup
  )
  storetradelines: Storetradelines[];

}
