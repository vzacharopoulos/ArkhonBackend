import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fiscperiod } from "./Fiscperiod";

@Index("UNI_15408", ["comid", "fyeid", "codeid"], { unique: true })
@Entity("VIESPERIOD", { schema: "dbo" })
export class Viesperiod {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 25 })
  descr: string;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;


  @ManyToOne(() => Fiscperiod, (fiscperiod) => fiscperiod.viesperiods)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "fyeid" },
    { name: "ENDPERIOD", referencedColumnName: "perno" },
  ])
  fiscperiod: Fiscperiod;

  @ManyToOne(() => Fiscperiod, (fiscperiod) => fiscperiod.viesperiods2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "fyeid" },
    { name: "STARTPERIOD", referencedColumnName: "perno" },
  ])
  fiscperiod2: Fiscperiod;
}
