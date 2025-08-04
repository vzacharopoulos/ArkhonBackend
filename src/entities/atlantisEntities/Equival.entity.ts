import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Currency } from "./Currency.entity";

@Index("UNI_5002", ["curidref", "ratedate", "curid"], { unique: true })
@ObjectType()
@Entity("EQUIVAL", { schema: "dbo" })
export class Equival {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CURIDREF" })
  curidref: number;

  @Field({ nullable: true })
  @Column("datetime", { primary: true, name: "RATEDATE" })
  ratedate: Date;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CURID" })
  curid: number;

  @Field({ nullable: true })
  @Column("float", { name: "PURCHASERATE", nullable: true, precision: 53 })
  purchaserate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FIXINGRATE", nullable: true, precision: 53 })
  fixingrate: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "SALESRATE", nullable: true, precision: 53 })
  salesrate: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.equivals)
  @JoinColumn([{ name: "CURIDREF", referencedColumnName: "codeid" }])
  curidref2: Currency;

  @Field({ nullable: true })
  @ManyToOne(() => Currency, (currency) => currency.equivals2, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;
}
