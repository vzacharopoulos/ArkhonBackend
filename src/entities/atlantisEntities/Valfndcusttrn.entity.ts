import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Billtrntype } from "./Billtrntype.entity";

@Index("UNI_5170", ["comid", "fdtid", "linenum"], { unique: true })
@ObjectType()
@Entity("VALFNDCUSTTRN", { schema: "dbo" })
export class Valfndcusttrn {
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

  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.valfndcusttrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @ManyToOne(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.valfndcusttrns,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Fincustdoctype;

  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.valfndcusttrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
