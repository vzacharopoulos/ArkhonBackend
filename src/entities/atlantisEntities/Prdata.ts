import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Prdef } from "./Prdef";

@Index(
  "UNI_5876",
  ["comid", "domaintype", "prpid", "domainid1", "domainid2", "linenum"],
  { unique: true }
)
@Entity("PRDATA", { schema: "dbo" })
export class Prdata {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "PRPID" })
  prpid: number;

  @Column("int", { primary: true, name: "DOMAINID1", default: () => "0" })
  domainid1: number;

  @Column("int", { primary: true, name: "DOMAINID2", default: () => "0" })
  domainid2: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "FLD1", nullable: true, precision: 53 })
  fld1: number | null;

  @Column("float", { name: "FLD2", nullable: true, precision: 53 })
  fld2: number | null;

  @Column("float", { name: "FLD3", nullable: true, precision: 53 })
  fld3: number | null;

  @Column("float", { name: "FLD4", nullable: true, precision: 53 })
  fld4: number | null;

  @Column("float", { name: "FLD5", nullable: true, precision: 53 })
  fld5: number | null;

  @Column("float", { name: "FLD6", nullable: true, precision: 53 })
  fld6: number | null;

  @Column("datetime", { name: "FDATE", nullable: true })
  fdate: Date | null;

  @Column("datetime", { name: "LDATE", nullable: true })
  ldate: Date | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("float", { name: "GIFTQTY", nullable: true, precision: 53 })
  giftqty: number | null;

  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Column("datetime", { name: "LASTMODIFIEDDATE", nullable: true })
  lastmodifieddate: Date | null;

  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Column("varchar", { name: "FROMTIME", nullable: true, length: 5 })
  fromtime: string | null;

  @Column("varchar", { name: "TOTIME", nullable: true, length: 5 })
  totime: string | null;

  @ManyToOne(() => Prdef, (prdef) => prdef.prdata, { onDelete: "CASCADE" })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
    { name: "PRPID", referencedColumnName: "codeid" },
  ])
  prdef: Prdef;

}
