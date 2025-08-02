import { Column, Entity, Index, OneToMany } from "typeorm";
import { Webaccountlns } from "./Webaccountlns";

@Index("UNI_18256", ["codeid"], { unique: true })
@Entity("WEBSERVICE", { schema: "dbo" })
export class Webservice {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @OneToMany(() => Webaccountlns, (webaccountlns) => webaccountlns.websrv)
  webaccountlns: Webaccountlns[];

 
}
