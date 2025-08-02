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

@Index("UNI_5214", ["comid", "codeid"], { unique: true })
@Entity("ITEMQTYCOMMISION", { schema: "dbo" })
export class Itemqtycommision {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @ManyToOne(() => Company, (company) => company.itemqtycommisions)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Material, (material) => material.itemqtycommision)
  materials: Material[];
}
