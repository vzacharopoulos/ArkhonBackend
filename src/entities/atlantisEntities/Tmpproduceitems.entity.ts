import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("TMPPRDCTMS_IDX", ["ftrid", "clevel"], {})
@ObjectType()
@Entity("TMPPRODUCEITEMS", { schema: "dbo" })
export class Tmpproduceitems {
  @PrimaryColumn("int", { name: "FTRID" })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ANALACCID", nullable: true })
  analaccid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "OVERHEADVALUE", nullable: true, precision: 53 })
  overheadvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "LABORVALUE", nullable: true, precision: 53 })
  laborvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MATVALUE", nullable: true, precision: 53 })
  matvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;
}
