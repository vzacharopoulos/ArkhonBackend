import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Finbankdoctype } from "./Finbankdoctype.entity";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Billtrntype } from "./Billtrntype.entity";

@Index("UNI_5176", ["comid", "fdtid", "linenum"], { unique: true })
@ObjectType()
@Entity("VALFNDBNKTRN", { schema: "dbo" })
export class Valfndbnktrn {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FDTID" })
  fdtid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "LINEDOMAIN" })
  linedomain: number;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Finbankdoctype,
    (finbankdoctype) => finbankdoctype.valfndbnktrns,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Finbankdoctype;

  @Field({ nullable: true })
  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.valfndbnktrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.valfndbnktrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
