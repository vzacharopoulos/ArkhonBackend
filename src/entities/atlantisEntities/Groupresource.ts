import { Column, Entity, Index, OneToMany } from "typeorm";
import { Presource } from "./Presource";

@Index("UNI_5554", ["comid", "codeid"], { unique: true })
@Entity("GROUPRESOURCE", { schema: "dbo" })
export class Groupresource {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @OneToMany(() => Presource, (presource) => presource.groupresource)
  presources: Presource[];
}
