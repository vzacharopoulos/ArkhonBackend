import { Field } from "@nestjs/graphql";
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
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.matpricecategory)
  materials: Material[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.matpricecategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
