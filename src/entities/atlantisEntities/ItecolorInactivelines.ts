import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material";

@Index("UNI_1700", ["iteid", "colorcode", "sizenum"], { unique: true })
@Entity("ITECOLOR_INACTIVELINES", { schema: "dbo" })
export class ItecolorInactivelines {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("int", { primary: true, name: "SIZENUM" })
  sizenum: number;

  @ManyToOne(() => Material, (material) => material.itecolorInactivelines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
