import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fiscyear } from "./Fiscyear";

import { Viesperiod } from "./Viesperiod";

@Index("UNI_500", ["comid", "fyeid", "perno"], { unique: true })
@Entity("FISCPERIOD", { schema: "dbo" })
export class Fiscperiod {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "PERNO" })
  perno: number;

  @Column("varchar", { name: "NAME", length: 25 })
  name: string;

  @Column("datetime", { name: "BEGINDATE" })
  begindate: Date;

  @Column("datetime", { name: "ENDDATE" })
  enddate: Date;

  @ManyToOne(() => Fiscyear, (fiscyear) => fiscyear.fiscperiods, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "codeid" },
  ])
  fiscyear: Fiscyear;



  @OneToMany(() => Viesperiod, (viesperiod) => viesperiod.fiscperiod)
  viesperiods: Viesperiod[];

  @OneToMany(() => Viesperiod, (viesperiod) => viesperiod.fiscperiod2)
  viesperiods2: Viesperiod[];
}
