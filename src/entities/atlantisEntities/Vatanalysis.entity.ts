import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade.entity";

@Index("UNI_3440", ["ftrid", "vtcid"], { unique: true })
@ObjectType()
@Entity("VATANALYSIS", { schema: "dbo" })
export class Vatanalysis {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "VTCID" })
  vtcid: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("float", { name: "SUBJECTTOVALUE", precision: 53 })
  subjecttovalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "LSUBJECTTOVALUE", precision: 53 })
  lsubjecttovalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "VTCVALUE", precision: 53 })
  vtcvalue: number;

  @Field({ nullable: true })
  @Column("float", { name: "LVTCVALUE", precision: 53 })
  lvtcvalue: number;

  @Field({ nullable: true })
  @ManyToOne(() => Fintrade, (fintrade) => fintrade.vatanalyses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
