import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Speccolorsize } from "./Speccolorsize.entity";
import { Material } from "./Material.entity";
import { Specification } from "./Specification.entity";

@Index("UNI_5542", ["spcid", "linenum"], { unique: true })
@ObjectType()
@Entity("SPECIFICATIONLINES", { schema: "dbo" })
export class Specificationlines {
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("int", { name: "QTYTYPE", nullable: true })
  qtytype: number | null;

  @Column("smallint", { name: "WASTETYPE", nullable: true })
  wastetype: number | null;

  @Column("smallint", { name: "LINETYPE", default: () => "0" })
  linetype: number;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Column("float", { name: "WASTESETUP", nullable: true, precision: 53 })
  wastesetup: number | null;

  @Column("varchar", { name: "COLORTMP", nullable: true, length: 15 })
  colortmp: string | null;

  @Column("int", { name: "SIZETMP", nullable: true })
  sizetmp: number | null;

  @Column("float", { name: "QTYTMP", nullable: true, precision: 53 })
  qtytmp: number | null;

  @OneToMany(
    () => Speccolorsize,
    (speccolorsize) => speccolorsize.specificationlines
  )
  speccolorsizes: Speccolorsize[];

  
  @ManyToOne(() => Material, (material) => material.specificationlines)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @ManyToOne(
    () => Specification,
    (specification) => specification.specificationlines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "SPCID", referencedColumnName: "id" }])
  spc: Specification;

  @ManyToOne(
    () => Specification,
    (specification) => specification.specificationlines2
  )
  @JoinColumn([{ name: "RELSPCID", referencedColumnName: "id" }])
  relspc: Specification;
}
