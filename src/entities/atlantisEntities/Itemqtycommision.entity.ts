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

@Index("UNI_5214", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ITEMQTYCOMMISION", { schema: "dbo" })
export class Itemqtycommision {
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
  @ManyToOne(() => Company, (company) => company.itemqtycommisions)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.itemqtycommision)
  materials: Material[];
}
