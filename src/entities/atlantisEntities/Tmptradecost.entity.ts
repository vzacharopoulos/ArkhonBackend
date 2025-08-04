import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("TMPTRDCST_IDX_ACCID", ["accid"], {})
@Index("TMPTRDCST_IDX_FTR", ["ftrid"], {})
@Index("TMPTRDCST_IDX_ID", ["id"], {})
@Index("TMPTRDCST_IDX_ITE", ["iteid"], {})
@ObjectType()
@Entity("TMPTRADECOST", { schema: "dbo" })
export class Tmptradecost {
  @PrimaryColumn("int", { name: "FTRID" })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOURCEID", nullable: true })
  sourceid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "CSTVALUE", nullable: true, precision: 53 })
  cstvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ID", nullable: true })
  id: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INSMODE", nullable: true })
  insmode: number | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "CSTAMOUNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  cstamount: number | null;
}
