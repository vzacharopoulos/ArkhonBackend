import { Column, Entity, Index } from "typeorm";

@Index("UNI_6258", ["comid", "codeid"], { unique: true })
@Entity("CUSTOMERJOBSTATUS", { schema: "dbo" })
export class Customerjobstatus {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;
}
