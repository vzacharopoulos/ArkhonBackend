import { Column, Entity, Index } from "typeorm";

@Index("UNI_18314", ["codeid"], { unique: true })
@Index("UNI_18316", ["descr"], { unique: true })
@Entity("MYDATAPAYMENTTYPE", { schema: "dbo" })
export class Mydatapaymenttype {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", unique: true, length: 120 })
  descr: string;
}
