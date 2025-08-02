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

@Index("UNI_5206", ["comid", "codeid"], { unique: true })
@Entity("GLITEM", { schema: "dbo" })
export class Glitem {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "GLSALESCODE", nullable: true, length: 25 })
  glsalescode: string | null;

  @Column("varchar", { name: "GLPURCHASECODE", nullable: true, length: 25 })
  glpurchasecode: string | null;

  @Column("varchar", { name: "VATSALESCODE", nullable: true, length: 25 })
  vatsalescode: string | null;

  @Column("varchar", { name: "VATPURCHASECODE", nullable: true, length: 25 })
  vatpurchasecode: string | null;

  @Column("varchar", { name: "ANALPURCHASECODE", nullable: true, length: 25 })
  analpurchasecode: string | null;

  @Column("varchar", { name: "ANALSALESCODE", nullable: true, length: 25 })
  analsalescode: string | null;

  @Column("varchar", { name: "PRODCODE", nullable: true, length: 25 })
  prodcode: string | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("smallint", { name: "COSTINGMODE", nullable: true })
  costingmode: number | null;

  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @ManyToOne(() => Company, (company) => company.glitems)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Material, (material) => material.glitem)
  materials: Material[];

 
}
