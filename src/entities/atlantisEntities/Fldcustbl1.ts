import { Column, Entity, Index } from "typeorm";

@Index("UNI_5976", ["comid", "codeid", "domaintype"], { unique: true })
@Entity("FLDCUSTBL1", { schema: "dbo" })
export class Fldcustbl1 {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;
}
