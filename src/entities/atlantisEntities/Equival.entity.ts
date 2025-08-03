import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Currency } from "./Currency.entity";

@Index("UNI_5002", ["curidref", "ratedate", "curid"], { unique: true })
@ObjectType()
@Entity("EQUIVAL", { schema: "dbo" })
export class Equival {
  @Column("int", { primary: true, name: "CURIDREF" })
  curidref: number;

  @Column("datetime", { primary: true, name: "RATEDATE" })
  ratedate: Date;

  @Column("int", { primary: true, name: "CURID" })
  curid: number;

  @Column("float", { name: "PURCHASERATE", nullable: true, precision: 53 })
  purchaserate: number | null;

  @Column("float", { name: "FIXINGRATE", nullable: true, precision: 53 })
  fixingrate: number | null;

  @Column("float", { name: "SALESRATE", nullable: true, precision: 53 })
  salesrate: number | null;

  @ManyToOne(() => Currency, (currency) => currency.equivals)
  @JoinColumn([{ name: "CURIDREF", referencedColumnName: "codeid" }])
  curidref2: Currency;

  @ManyToOne(() => Currency, (currency) => currency.equivals2, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CURID", referencedColumnName: "codeid" }])
  cur: Currency;
}
