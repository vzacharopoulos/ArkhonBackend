import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company.entity";
import { Material } from "./Material.entity";

@Index("UNI_5196", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ITEMGROUP", { schema: "dbo" })
export class Itemgroup {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("int", { name: "RELID", nullable: true })
  relid: number | null;

  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;

  @ManyToOne(() => Company, (company) => company.itemgroups)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Material, (material) => material.itemgroup)
  materials: Material[];
}
