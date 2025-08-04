import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_2834_2", ["id"], { unique: true })
@ObjectType()
@Entity("COMPOSITION", { schema: "dbo" })
export class Composition {
  @Field({ nullable: true })
  @Column("float", {
    name: "COMPONENTQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  componentqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "LINETYPE", nullable: true })
  linetype: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRLINETYPE", default: () => "0" })
  prlinetype: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.compositions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.compositions2)
  @JoinColumn([{ name: "ITEIDCOMPONENT", referencedColumnName: "id" }])
  iteidcomponent: Material;


}
