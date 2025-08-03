import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Finbankdoctype } from "./Finbankdoctype.entity";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Billtrntype } from "./Billtrntype.entity";

@Index("UNI_5176", ["comid", "fdtid", "linenum"], { unique: true })
@ObjectType()
@Entity("VALFNDBNKTRN", { schema: "dbo" })
export class Valfndbnktrn {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "FDTID" })
  fdtid: number;

  @Column("smallint", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("smallint", { name: "LINEDOMAIN" })
  linedomain: number;

  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @ManyToOne(
    () => Finbankdoctype,
    (finbankdoctype) => finbankdoctype.valfndbnktrns,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Finbankdoctype;

  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.valfndbnktrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.valfndbnktrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
