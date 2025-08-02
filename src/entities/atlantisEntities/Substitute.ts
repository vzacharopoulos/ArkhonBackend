import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material";

@Index("UNI_2850", ["iteid", "substitutecode"], { unique: true })
@Index("UNIX_1103", ["substitutecode"], {})
@Entity("SUBSTITUTE", { schema: "dbo" })
export class Substitute {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("varchar", { primary: true, name: "SUBSTITUTECODE", length: 50 })
  substitutecode: string;

  @Column("varchar", { name: "SUBSTITUTEDESCR", nullable: true, length: 100 })
  substitutedescr: string | null;

  @Column("float", {
    name: "MASTERQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  masterqty: number | null;

  @Column("float", {
    name: "SUBSTQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  substqty: number | null;

  @Column("int", { name: "SUBSTITEID", nullable: true })
  substiteid: number | null;

  @Column("varchar", { name: "COLORCODE", nullable: true, length: 15 })
  colorcode: string | null;

  @Column("smallint", { name: "SIZEPOS", nullable: true })
  sizepos: number | null;

  @Column("smallint", { name: "ISEAN13", nullable: true, default: () => "0" })
  isean13: number | null;

  @ManyToOne(() => Material, (material) => material.substitutes, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
