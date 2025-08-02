import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECIFICATIONLINES_PK", ["spcid", "linenum"], { unique: true })
@Entity("KEF_SPECIFICATIONLINES", { schema: "dbo" })
export class KefSpecificationlines {
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "SPCCODE", nullable: true, length: 25 })
  spccode: string | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("int", { name: "LINETYPE", nullable: true })
  linetype: number | null;
}
