import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Lbshapes } from "./Lbshapes.entity";

@Index("UNI_6270", ["comid", "lbtype", "codeid"], { unique: true })
@ObjectType()
@Entity("LBDATA", { schema: "dbo" })
export class Lbdata {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "LBTYPE" })
  lbtype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "TYPE", nullable: true })
  type: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COUNTF", nullable: true, length: 50 })
  countf: string | null;


  @Field({ nullable: true })
  @Column("varchar", { name: "LBPRINTER", nullable: true, length: 255 })
  lbprinter: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRTCHARSET", nullable: true })
  prtcharset: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Lbshapes, (lbshapes) => lbshapes.lbdata)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "LBSHPID", referencedColumnName: "codeid" },
  ])
  lbshapes: Lbshapes;
}
