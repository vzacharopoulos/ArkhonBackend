import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fundstrntype } from "./Fundstrntype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { Billtrntype } from "./Billtrntype.entity";

@Index("UNI_5174", ["comid", "fdtid", "linenum"], { unique: true })
@ObjectType()
@Entity("VALFNDSUPTRN", { schema: "dbo" })
export class Valfndsuptrn {
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

  @ManyToOne(() => Fundstrntype, (fundstrntype) => fundstrntype.valfndsuptrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TRNID", referencedColumnName: "codeid" },
  ])
  fundstrntype: Fundstrntype;

  @ManyToOne(
    () => Finsupdoctype,
    (finsupdoctype) => finsupdoctype.valfndsuptrns,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Finsupdoctype;

  @ManyToOne(() => Billtrntype, (billtrntype) => billtrntype.valfndsuptrns)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BTTID", referencedColumnName: "codeid" },
  ])
  billtrntype: Billtrntype;
}
