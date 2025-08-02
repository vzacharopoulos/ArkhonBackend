import { Column, Entity, Index } from "typeorm";

@Index("KEF_SUBSTITUTE_PK", ["iteid", "substitutecode"], { unique: true })
@Entity("KEF_SUBSTITUTE", { schema: "dbo" })
export class KefSubstitute {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("varchar", { primary: true, name: "SUBSTITUTECODE", length: 25 })
  substitutecode: string;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("int", { name: "SUBSTITEID", nullable: true })
  substiteid: number | null;

  @Column("varchar", { name: "SUBSTITECODE", nullable: true, length: 25 })
  substitecode: string | null;

  @Column("float", { name: "MASTERQTY", nullable: true, precision: 53 })
  masterqty: number | null;

  @Column("float", { name: "SUBSTQTY", nullable: true, precision: 53 })
  substqty: number | null;

  @Column("varchar", { name: "COLORCODE", nullable: true, length: 15 })
  colorcode: string | null;

  @Column("int", { name: "SIZEPOS", nullable: true })
  sizepos: number | null;
}
