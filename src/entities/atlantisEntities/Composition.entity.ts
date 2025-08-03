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
  @Column("float", {
    name: "COMPONENTQTY",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  componentqty: number | null;

  @Column("smallint", { name: "LINETYPE", nullable: true })
  linetype: number | null;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Column("smallint", { name: "PRLINETYPE", default: () => "0" })
  prlinetype: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @ManyToOne(() => Material, (material) => material.compositions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @ManyToOne(() => Material, (material) => material.compositions2)
  @JoinColumn([{ name: "ITEIDCOMPONENT", referencedColumnName: "id" }])
  iteidcomponent: Material;


}
