import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_SX15046", ["codeid"], { unique: true })
@Entity("SXCONCATEGORY", { schema: "dbo" })
export class Sxconcategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;


}
