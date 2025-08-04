import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("TMPMTRLS_IDX_FTR", ["ftrid"], {})
@Index("TMPMTRLS_IDX_IID", ["iteid"], {})
@Index("TMPMTRLS_IDX_ITE", ["finiteid"], {})
@ObjectType()
@Entity("TMPMATERIALS", { schema: "dbo" })
export class Tmpmaterials {
  @PrimaryColumn("int", { name: "FTRID" })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FINITEID", nullable: true })
  finiteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COSTACC", nullable: true, precision: 53 })
  costacc: number | null;
}
