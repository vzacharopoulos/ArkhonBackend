import { Column, Entity, Index } from "typeorm";

@Index("UNI_18310", ["codeid"], { unique: true })
@Index("UNI_18312", ["descr"], { unique: true })
@Entity("MYDATAMEASUREMENTUNIT", { schema: "dbo" })
export class Mydatameasurementunit {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", unique: true, length: 60 })
  descr: string;
}
