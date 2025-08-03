import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Specificationlines } from "./Specificationlines.entity";
import { Material } from "./Material.entity";

@Index("UNI_3482", ["id"], { unique: true })
@ObjectType()
@Entity("SPECCOLORSIZE", { schema: "dbo" })
export class Speccolorsize {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("float", { name: "PQTY", precision: 53 })
  pqty: number;

  @Column("varchar", { name: "PCOLORCODE", nullable: true, length: 15 })
  pcolorcode: string | null;

  @Column("smallint", { name: "PSIZE", nullable: true })
  psize: number | null;

  @Column("varchar", { name: "CCOLORCODE", nullable: true, length: 15 })
  ccolorcode: string | null;

  @Column("smallint", { name: "CSIZE", nullable: true })
  csize: number | null;

  @Column("float", { name: "CQTY", nullable: true, precision: 53 })
  cqty: number | null;

  @ManyToOne(
    () => Specificationlines,
    (specificationlines) => specificationlines.speccolorsizes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    { name: "SPCID", referencedColumnName: "spcid" },
    { name: "SCLID", referencedColumnName: "linenum" },
  ])
  specificationlines: Specificationlines;

  @ManyToOne(() => Material, (material) => material.speccolorsizes)
  @JoinColumn([{ name: "ALTERITEID", referencedColumnName: "id" }])
  alterite: Material;

  @ManyToOne(() => Material, (material) => material.speccolorsizes2)
  @JoinColumn([{ name: "CITEID", referencedColumnName: "id" }])
  cite: Material;

  @ManyToOne(() => Material, (material) => material.speccolorsizes3)
  @JoinColumn([{ name: "PITEID", referencedColumnName: "id" }])
  pite: Material;
}
