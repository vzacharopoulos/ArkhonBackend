import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Paymentterms } from "./Paymentterms.entity";

@Index("UNI_5026_1", ["comid", "ptrid", "payedwithindays", "fundtype"], {
  unique: true,
})
@ObjectType()
@Entity("PAYMENTTERMLINES", { schema: "dbo" })
export class Paymenttermlines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PTRID" })
  ptrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PAYEDWITHINDAYS" })
  payedwithindays: number;

  @Field({ nullable: true })
  @Column("float", { name: "PAYPCNT", precision: 53 })
  paypcnt: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "FUNDTYPE", default: () => "0" })
  fundtype: number;

  @Field({ nullable: true })
  @ManyToOne(
    () => Paymentterms,
    (paymentterms) => paymentterms.paymenttermlines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Paymentterms;
}
