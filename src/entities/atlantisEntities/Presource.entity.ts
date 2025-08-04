import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Centercost } from "./Centercost.entity";
import { Groupresource } from "./Groupresource.entity";

@Index("UNI_5550", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("PRESOURCE", { schema: "dbo" })
export class Presource {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "MESUNIT", nullable: true, length: 25 })
  mesunit: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCTYPE", default: () => "1" })
  calctype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MODIFIABLE", default: () => "0" })
  modifiable: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "RESKIND", nullable: true, default: () => "0" })
  reskind: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FORMEXPVALUE", nullable: true, length: 255 })
  formexpvalue: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DISTRNO", nullable: true })
  distrno: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCID1", nullable: true })
  abcid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCID2", nullable: true })
  abcid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCID3", nullable: true })
  abcid3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCID4", nullable: true })
  abcid4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ABCID5", nullable: true })
  abcid5: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Centercost, (centercost) => centercost.presources)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CCOID", referencedColumnName: "codeid" },
  ])
  centercost: Centercost;

  @Field({ nullable: true })
  @ManyToOne(() => Groupresource, (groupresource) => groupresource.presources)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "GREID", referencedColumnName: "codeid" },
  ])
  groupresource: Groupresource;
}
