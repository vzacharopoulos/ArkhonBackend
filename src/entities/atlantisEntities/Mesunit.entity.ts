import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_5192", ["codeid"], { unique: true })
@ObjectType()
@Entity("MESUNIT", { schema: "dbo" })
export class Mesunit {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DECIMALS", nullable: true, default: () => "0" })
  decimals: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "UBLINVOICEDQTYUNITCODE",
    nullable: true,
    length: 5,
  })
  ublinvoicedqtyunitcode: string | null;

  @Field({ nullable: true })
  @Column("datetime", {
    name: "LASTMODIFIED",
    nullable: true,
    default: () => "getutcdate()",
  })
  lastmodified: Date | null;

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.mu)
  materials: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.mu2)
  materials2: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.mu3)
  materials3: Material[];

  @Field(() => [Material], { nullable: true })
  @OneToMany(() => Material, (material) => material.mu4)
  materials4: Material[];


}
