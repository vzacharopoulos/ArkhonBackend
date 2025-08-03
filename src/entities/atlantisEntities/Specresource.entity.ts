import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Specification } from "./Specification.entity";

@Index("UNI_5562_1", ["spcid", "resid"], { unique: true })
@ObjectType()
@Entity("SPECRESOURCE", { schema: "dbo" })
export class Specresource {
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { primary: true, name: "RESID" })
  resid: number;

  @Column("smallint", { name: "CALCTYPE", default: () => "1" })
  calctype: number;

  @Column("float", { name: "RESVALUE", precision: 53 })
  resvalue: number;

  @Column("smallint", { name: "MODIFIABLE", default: () => "0" })
  modifiable: number;

  @Column("int", { name: "PHGID", nullable: true })
  phgid: number | null;

  @Column("int", { name: "PHSID", nullable: true })
  phsid: number | null;

  @Column("varchar", { name: "NOTES", nullable: true })
  notes: string | null;

  @Column("smallint", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Column("float", { name: "RESAMOUNT", nullable: true, precision: 53 })
  resamount: number | null;

  @ManyToOne(
    () => Specification,
    (specification) => specification.specresources,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;
}
