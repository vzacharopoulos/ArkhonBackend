import { Column, Entity, Index } from "typeorm";

@Index("UNI_10001", ["tname"], { unique: true })
@Entity("TBLAUTO", { schema: "dbo" })
export class Tblauto {
  @Column("varchar", { primary: true, name: "TNAME", length: 50 })
  tname: string;

  @Column("int", { name: "TCOUNT", default: () => "0" })
  tcount: number;
}
