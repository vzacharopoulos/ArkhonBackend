import { Column, Entity, Index } from "typeorm";

@Index("UNI_18308", ["codeid"], { unique: true })
@Entity("MYDATAEXPENSES", { schema: "dbo" })
export class Mydataexpenses {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("float", { name: "PERCENTAGE", nullable: true, precision: 53 })
  percentage: number | null;

  @Column("int", { name: "CATEGORYID", nullable: true })
  categoryid: number | null;

  @Column("varchar", { name: "CATEGORYDESCR", nullable: true, length: 255 })
  categorydescr: string | null;

  @Column("smallint", { name: "ISMYDATARECTYPE", nullable: true })
  ismydatarectype: number | null;

  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;
}
