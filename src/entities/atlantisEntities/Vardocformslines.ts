import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms";
import { Vardocforms } from "./Vardocforms";

@Index("UNI_5740", ["linenum", "linkid"], { unique: true })
@Entity("VARDOCFORMSLINES", { schema: "dbo" })
export class Vardocformslines {
  @Column("varchar", { name: "ACCCODE", nullable: true, length: 25 })
  acccode: string | null;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Column("smallint", { name: "SIGNMODE", default: () => "1" })
  signmode: number;

  @Column("smallint", { name: "UPDMODE", default: () => "0" })
  updmode: number;

  @Column("float", {
    name: "COEF",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  coef: number | null;

  @Column("varchar", { name: "FROMACCCODE", nullable: true, length: 25 })
  fromacccode: string | null;

  @Column("varchar", { name: "TOACCCODE", nullable: true, length: 25 })
  toacccode: string | null;

  @Column("int", { name: "GRADE", nullable: true })
  grade: number | null;

  @Column("smallint", { name: "CALCDATASOURCE", default: () => "0" })
  calcdatasource: number;

  @Column("varchar", { name: "PERCENTAGE", nullable: true, length: 25 })
  percentage: string | null;

  @Column("smallint", { name: "NOLASTFIP", nullable: true, default: () => "0" })
  nolastfip: number | null;

  @Column("smallint", { name: "WITHOWNSIGN", default: () => "(0)" })
  withownsign: number;

  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;

  @Column("varchar", { name: "TAXCATEGORY", nullable: true })
  taxcategory: string | null;

  @Column("varchar", { name: "CONCATEGORY", nullable: true })
  concategory: string | null;

  @Column("varchar", { name: "VARCOMCATEGORY", nullable: true })
  varcomcategory: string | null;

  @ManyToOne(() => Docforms, (docforms) => docforms.vardocformslines)
  @JoinColumn([{ name: "DOCFORMID", referencedColumnName: "id" }])
  docform: Docforms;

  @ManyToOne(() => Vardocforms, (vardocforms) => vardocforms.vardocformslines)
  @JoinColumn([{ name: "VARDOCFORMIDTOTALS", referencedColumnName: "id" }])
  vardocformidtotals: Vardocforms;

  @ManyToOne(() => Vardocforms, (vardocforms) => vardocforms.vardocformslines2)
  @JoinColumn([{ name: "VARDOCFORMID", referencedColumnName: "id" }])
  vardocform: Vardocforms;

  @ManyToOne(
    () => Vardocforms,
    (vardocforms) => vardocforms.vardocformslines3,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Vardocforms;
}
