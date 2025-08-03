import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Material } from "./Material.entity";
import { Company } from "./Company.entity";

@Index("UNI_5218", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("MATPRICECATEGORY", { schema: "dbo" })
export class Matpricecategory {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @OneToMany(() => Material, (material) => material.matpricecategory)
  materials: Material[];

  @ManyToOne(() => Company, (company) => company.matpricecategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
