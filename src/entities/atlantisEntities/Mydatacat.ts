import { Column, Entity, Index } from "typeorm";

@Index("UNI_18288", ["codeid"], { unique: true })
@Entity("MYDATACAT", { schema: "dbo" })
export class Mydatacat {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;
}
