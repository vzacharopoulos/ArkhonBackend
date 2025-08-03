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

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("int", { name: "FINITEID", nullable: true })
  finiteid: number | null;

  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "COSTACC", nullable: true, precision: 53 })
  costacc: number | null;
}
