import { Column, Entity, Index } from "typeorm";

@Index("UNI_5870", ["comid", "codeid"], { unique: true })
@Entity("CUSTPRIORITY", { schema: "dbo" })
export class Custpriority {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;
}
