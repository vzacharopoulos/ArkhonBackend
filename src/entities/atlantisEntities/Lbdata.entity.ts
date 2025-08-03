import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Lbshapes } from "./Lbshapes.entity";

@Index("UNI_6270", ["comid", "lbtype", "codeid"], { unique: true })
@ObjectType()
@Entity("LBDATA", { schema: "dbo" })
export class Lbdata {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "LBTYPE" })
  lbtype: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "TYPE", nullable: true })
  type: number | null;

  @Column("varchar", { name: "COUNTF", nullable: true, length: 50 })
  countf: string | null;


  @Column("varchar", { name: "LBPRINTER", nullable: true, length: 255 })
  lbprinter: string | null;

  @Column("smallint", { name: "PRTCHARSET", nullable: true })
  prtcharset: number | null;

  @ManyToOne(() => Lbshapes, (lbshapes) => lbshapes.lbdata)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "LBSHPID", referencedColumnName: "codeid" },
  ])
  lbshapes: Lbshapes;
}
