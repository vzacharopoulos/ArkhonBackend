import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms.entity";
import { Vardocforms } from "./Vardocforms.entity";

@Index("UNI_5740", ["linenum", "linkid"], { unique: true })
@ObjectType()
@Entity("VARDOCFORMSLINES", { schema: "dbo" })
export class Vardocformslines {
  @Field({ nullable: true })
  @Column("varchar", { name: "ACCCODE", nullable: true, length: 25 })
  acccode: string | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SIGNMODE", default: () => "1" })
  signmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDMODE", default: () => "0" })
  updmode: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "COEF",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  coef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FROMACCCODE", nullable: true, length: 25 })
  fromacccode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TOACCCODE", nullable: true, length: 25 })
  toacccode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GRADE", nullable: true })
  grade: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALCDATASOURCE", default: () => "0" })
  calcdatasource: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PERCENTAGE", nullable: true, length: 25 })
  percentage: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOLASTFIP", nullable: true, default: () => "0" })
  nolastfip: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "WITHOWNSIGN", default: () => "(0)" })
  withownsign: number;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TAXCATEGORY", nullable: true })
  taxcategory: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONCATEGORY", nullable: true })
  concategory: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VARCOMCATEGORY", nullable: true })
  varcomcategory: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Docforms, (docforms) => docforms.vardocformslines)
  @JoinColumn([{ name: "DOCFORMID", referencedColumnName: "id" }])
  docform: Docforms;

  @Field({ nullable: true })
  @ManyToOne(() => Vardocforms, (vardocforms) => vardocforms.vardocformslines)
  @JoinColumn([{ name: "VARDOCFORMIDTOTALS", referencedColumnName: "id" }])
  vardocformidtotals: Vardocforms;

  @Field({ nullable: true })
  @ManyToOne(() => Vardocforms, (vardocforms) => vardocforms.vardocformslines2)
  @JoinColumn([{ name: "VARDOCFORMID", referencedColumnName: "id" }])
  vardocform: Vardocforms;

  @Field({ nullable: true })
  @ManyToOne(
    () => Vardocforms,
    (vardocforms) => vardocforms.vardocformslines3,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Vardocforms;
}
