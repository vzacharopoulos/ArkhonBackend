import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_SX15062", ["codeid"], { unique: true })
@Entity("SXTAXCATEGORY", { schema: "dbo" })
export class Sxtaxcategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;


}
