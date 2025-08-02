import { Column, Entity, Index } from "typeorm";

@Index("UNI_5898", ["comid", "domaintype", "codeid"], { unique: true })
@Entity("NEWPRGROUP", { schema: "dbo" })
export class Newprgroup {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "PRRULES", length: 255 })
  prrules: string;

  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;
}
