import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company";
import { Material } from "./Material";

@Index("UNI_5194", ["comid", "codeid"], { unique: true })
@Entity("ITEMCATEGORY", { schema: "dbo" })
export class Itemcategory {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("float", { name: "CONSPRC", nullable: true, precision: 53 })
  consprc: number | null;

  @Column("int", { name: "RELID", nullable: true })
  relid: number | null;

  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;

  @ManyToOne(() => Company, (company) => company.itemcategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Material, (material) => material.itemcategory)
  materials: Material[];
}
