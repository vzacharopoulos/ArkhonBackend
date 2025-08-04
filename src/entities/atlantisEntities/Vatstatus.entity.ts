import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Vatcategory } from "./Vatcategory.entity";

@Index("UNI_5342", ["vtnid"], { unique: true })
@ObjectType()
@Entity("VATSTATUS", { schema: "dbo" })
export class Vatstatus {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "VTNID" })
  vtnid: number;

  @Field({ nullable: true })
  @Column("int", { name: "VTSSECID", nullable: true })
  vtssecid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.vatstatuses)
  @JoinColumn([{ name: "VTSID", referencedColumnName: "codeid" }])
  vts: Vatcategory;

  @Field({ nullable: true })
  @OneToOne(() => Vatcategory, (vatcategory) => vatcategory.vatstatus)
  @JoinColumn([{ name: "VTNID", referencedColumnName: "codeid" }])
  vtn: Vatcategory;
}
