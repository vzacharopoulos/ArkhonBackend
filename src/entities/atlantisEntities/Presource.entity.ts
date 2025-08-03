import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Centercost } from "./Centercost.entity";
import { Groupresource } from "./Groupresource.entity";

@Index("UNI_5550", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("PRESOURCE", { schema: "dbo" })
export class Presource {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "MESUNIT", nullable: true, length: 25 })
  mesunit: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", { name: "CALCTYPE", default: () => "1" })
  calctype: number;

  @Column("smallint", { name: "MODIFIABLE", default: () => "0" })
  modifiable: number;

  @Column("smallint", { name: "RESKIND", nullable: true, default: () => "0" })
  reskind: number | null;

  @Column("varchar", { name: "FORMEXPVALUE", nullable: true, length: 255 })
  formexpvalue: string | null;

  @Column("int", { name: "DISTRNO", nullable: true })
  distrno: number | null;

  @Column("int", { name: "ABCID1", nullable: true })
  abcid1: number | null;

  @Column("int", { name: "ABCID2", nullable: true })
  abcid2: number | null;

  @Column("int", { name: "ABCID3", nullable: true })
  abcid3: number | null;

  @Column("int", { name: "ABCID4", nullable: true })
  abcid4: number | null;

  @Column("int", { name: "ABCID5", nullable: true })
  abcid5: number | null;

  @ManyToOne(() => Centercost, (centercost) => centercost.presources)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CCOID", referencedColumnName: "codeid" },
  ])
  centercost: Centercost;

  @ManyToOne(() => Groupresource, (groupresource) => groupresource.presources)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "GREID", referencedColumnName: "codeid" },
  ])
  groupresource: Groupresource;
}
