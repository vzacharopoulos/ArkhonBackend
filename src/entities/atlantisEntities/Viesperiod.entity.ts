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
import { Fiscperiod } from "./Fiscperiod.entity";

@Index("UNI_15408", ["comid", "fyeid", "codeid"], { unique: true })
@ObjectType()
@Entity("VIESPERIOD", { schema: "dbo" })
export class Viesperiod {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 25 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;


  @Field({ nullable: true })
  @ManyToOne(() => Fiscperiod, (fiscperiod) => fiscperiod.viesperiods)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "fyeid" },
    { name: "ENDPERIOD", referencedColumnName: "perno" },
  ])
  fiscperiod: Fiscperiod;

  @Field({ nullable: true })
  @ManyToOne(() => Fiscperiod, (fiscperiod) => fiscperiod.viesperiods2)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "fyeid" },
    { name: "STARTPERIOD", referencedColumnName: "perno" },
  ])
  fiscperiod2: Fiscperiod;
}
