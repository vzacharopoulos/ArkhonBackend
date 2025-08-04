import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNIX_1066", ["ftrid"], {})
@Index("UNIX_1067", ["iteid"], {})
@Index("UNIX_1102", ["ftrid", "iteid"], {})
@ObjectType()
@Entity("PRODCOST", { schema: "dbo" })
export class Prodcost {
  @PrimaryColumn("int", { name: "FTRID", nullable: false })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SUMPCCOEF", nullable: true, precision: 53 })
  sumpccoef: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRODTYPE", nullable: true })
  prodtype: number | null;
}
