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
import { Fiscyear } from "./Fiscyear.entity";

import { Viesperiod } from "./Viesperiod.entity";

@Index("UNI_500", ["comid", "fyeid", "perno"], { unique: true })
@ObjectType()
@Entity("FISCPERIOD", { schema: "dbo" })
export class Fiscperiod {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PERNO" })
  perno: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 25 })
  name: string;

  @Field({ nullable: true })
  @Column("datetime", { name: "BEGINDATE" })
  begindate: Date;

  @Field({ nullable: true })
  @Column("datetime", { name: "ENDDATE" })
  enddate: Date;

  @Field({ nullable: true })
  @ManyToOne(() => Fiscyear, (fiscyear) => fiscyear.fiscperiods, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FYEID", referencedColumnName: "codeid" },
  ])
  fiscyear: Fiscyear;



  @Field(() => [Viesperiod], { nullable: true })
  @OneToMany(() => Viesperiod, (viesperiod) => viesperiod.fiscperiod)
  viesperiods: Viesperiod[];

  @Field(() => [Viesperiod], { nullable: true })
  @OneToMany(() => Viesperiod, (viesperiod) => viesperiod.fiscperiod2)
  viesperiods2: Viesperiod[];
}
