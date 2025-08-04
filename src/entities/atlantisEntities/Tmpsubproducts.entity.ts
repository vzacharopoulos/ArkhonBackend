import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("TMPSBPRDCTS_IDX_FTR", ["ftrid"], {})
@Index("TMPSBPRDCTS_IDX_ITE", ["finiteid"], {})
@ObjectType()
@Entity("TMPSUBPRODUCTS", { schema: "dbo" })
export class Tmpsubproducts {
  @PrimaryColumn("int", { name: "FTRID"})
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
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ANALACCID", nullable: true })
  analaccid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODVALUE", nullable: true, precision: 53 })
  prodvalue: number | null;
}
