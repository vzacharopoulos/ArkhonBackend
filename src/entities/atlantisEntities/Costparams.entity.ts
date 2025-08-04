import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6396", ["comid"], { unique: true })
@ObjectType()
@Entity("COSTPARAMS", { schema: "dbo" })
export class Costparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PCCOEF1CAPTION", nullable: true, length: 50 })
  pccoef1Caption: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PCCOEF2CAPTION", nullable: true, length: 50 })
  pccoef2Caption: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PCCOEF3CAPTION", nullable: true, length: 50 })
  pccoef3Caption: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PCCOEF4CAPTION", nullable: true, length: 50 })
  pccoef4Caption: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PCCOEF5CAPTION", nullable: true, length: 50 })
  pccoef5Caption: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDSRID", nullable: true })
  accdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCCONDSRID", nullable: true })
  acccondsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODTOMATDSRID", nullable: true })
  prodtomatdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONSDSRID", nullable: true })
  consdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODDSRID", nullable: true })
  proddsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SALESCOSTDSRID", nullable: true })
  salescostdsrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INCLUDECOSTTRANS", nullable: true })
  includecosttrans: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FIFOLIFO", nullable: true })
  fifolifo: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCKMT", nullable: true })
  calckmt: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOTRANSITEMS", nullable: true })
  notransitems: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MATERIALCODEFROM", nullable: true, length: 25 })
  materialcodefrom: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MATERIALCODETO", nullable: true, length: 25 })
  materialcodeto: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MATERIALCODEMASK", nullable: true, length: 25 })
  materialcodemask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CANCELALLOCATED", nullable: true })
  cancelallocated: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CLEARCOSTLEVELS", nullable: true })
  clearcostlevels: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PRECOSTCUSTTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostcusttrntypes: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "PRECOSTSUPTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostsuptrntypes: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "GROUPPRITEM",
    nullable: true,
    default: () => "0",
  })
  grouppritem: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "COSTACCMAKEANAL",
    nullable: true,
    default: () => "1",
  })
  costaccmakeanal: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SYNCSPECS", nullable: true, default: () => "0" })
  syncspecs: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ABCCOSTING",
    nullable: true,
    default: () => "(0)",
  })
  abccosting: number | null;
}
