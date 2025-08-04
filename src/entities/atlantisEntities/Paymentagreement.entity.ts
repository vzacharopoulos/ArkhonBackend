import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade.entity";

@Index("UNI_3434_1", ["ftrid", "duedate", "fundtype"], { unique: true })
@ObjectType()
@Entity("PAYMENTAGREEMENT", { schema: "dbo" })
export class Paymentagreement {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("datetime", { primary: true, name: "DUEDATE" })
  duedate: Date;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("float", { name: "AMOUNTTOBEPAYED", precision: 53 })
  amounttobepayed: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "FUNDTYPE", default: () => "0" })
  fundtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.paymentagreements, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
