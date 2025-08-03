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
  @Column("int", { primary: true, name: "VTNID" })
  vtnid: number;

  @Column("int", { name: "VTSSECID", nullable: true })
  vtssecid: number | null;

  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.vatstatuses)
  @JoinColumn([{ name: "VTSID", referencedColumnName: "codeid" }])
  vts: Vatcategory;

  @OneToOne(() => Vatcategory, (vatcategory) => vatcategory.vatstatus)
  @JoinColumn([{ name: "VTNID", referencedColumnName: "codeid" }])
  vtn: Vatcategory;
}
