import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Taxfee } from "./Taxfee";

@Index("UNI_15478", ["code", "domaintype", "fyeid"], { unique: true })
@Entity("TAXFEEHIST", { schema: "dbo" })
export class Taxfeehist {
  @Column("int", { primary: true, name: "CODE" })
  code: number;

  @Column("int", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @ManyToOne(() => Taxfee, (taxfee) => taxfee.taxfeehists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "CODE", referencedColumnName: "code" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
  ])
  taxfee: Taxfee;
}
