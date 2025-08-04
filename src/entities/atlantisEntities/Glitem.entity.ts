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
import { Company } from "./Company.entity";
import { Material } from "./Material.entity";

@Index("UNI_5206", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("GLITEM", { schema: "dbo" })
export class Glitem {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLSALESCODE", nullable: true, length: 25 })
  glsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLPURCHASECODE", nullable: true, length: 25 })
  glpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VATSALESCODE", nullable: true, length: 25 })
  vatsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VATPURCHASECODE", nullable: true, length: 25 })
  vatpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALPURCHASECODE", nullable: true, length: 25 })
  analpurchasecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ANALSALESCODE", nullable: true, length: 25 })
  analsalescode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRODCODE", nullable: true, length: 25 })
  prodcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "COSTINGMODE", nullable: true })
  costingmode: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.glitems)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.glitem)
  materials: Material[];

 
}
