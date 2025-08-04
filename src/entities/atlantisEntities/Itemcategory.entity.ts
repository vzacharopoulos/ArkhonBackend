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

@Index("UNI_5194", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ITEMCATEGORY", { schema: "dbo" })
export class Itemcategory {
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
  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "CONSPRC", nullable: true, precision: 53 })
  consprc: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RELID", nullable: true })
  relid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.itemcategories)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.itemcategory)
  materials: Material[];
}
