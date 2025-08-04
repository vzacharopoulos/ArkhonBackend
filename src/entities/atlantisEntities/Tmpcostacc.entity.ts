import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("TMPCOSTACC_IDX", ["iteid"], {})
@ObjectType()
@Entity("TMPCOSTACC", { schema: "dbo" })
export class Tmpcostacc {
  @Field({ nullable: true })
  @Column("int", { name: "ITEID" })
  iteid: number;

  @PrimaryColumn("float", { name: "IMPORTVALUE", precision: 53 })
  importvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODUCTIONVALUE", nullable: true, precision: 53 })
  productionvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RESTQTY", nullable: true, precision: 53 })
  restqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPORTPRQTY", nullable: true, precision: 53 })
  exportprqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COSTVALUE", nullable: true, precision: 53 })
  costvalue: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "COSTACC", nullable: true, precision: 53 })
  costacc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODUCTIONQTY", nullable: true, precision: 53 })
  productionqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "STDCOST", nullable: true, precision: 53 })
  stdcost: number | null;
}
