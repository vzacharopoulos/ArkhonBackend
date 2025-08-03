import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mydataclass } from "./Mydataclass.entity";
import { Mydataheader } from "./Mydataheader.entity";

@Index("UNI_18208", ["id"], { unique: true })
@Index("UNIX_1140", ["mydataheaderid"], {})
@ObjectType()
@Entity("MYDATALINES", { schema: "dbo" })
export class Mydatalines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "MYDATAHEADERID" })
  mydataheaderid: number;

  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Column("float", { name: "QUANTITY", nullable: true, precision: 53 })
  quantity: number | null;

  @Column("smallint", { name: "MEASUREMENTUNIT", nullable: true })
  measurementunit: number | null;

  @Column("smallint", { name: "INVOICEDETAILTYPE", nullable: true })
  invoicedetailtype: number | null;

  @Column("int", { name: "VATCATEGORY", nullable: true })
  vatcategory: number | null;

  @Column("float", { name: "NETVALUE", nullable: true, precision: 53 })
  netvalue: number | null;

  @Column("int", { name: "VATEXEMPTION", nullable: true })
  vatexemption: number | null;

  @Column("varchar", { name: "APPLICATIONID", nullable: true, length: 64 })
  applicationid: string | null;

  @Column("datetime", { name: "APPLICATIONDATE", nullable: true })
  applicationdate: Date | null;

  @Column("varchar", { name: "DOY", nullable: true, length: 128 })
  doy: string | null;

  @Column("varchar", { name: "SHIPID", nullable: true, length: 128 })
  shipid: string | null;

  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @Column("varchar", { name: "LINECOMMENTS", nullable: true, length: 128 })
  linecomments: string | null;

  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Column("smallint", { name: "RECTYPE", nullable: true })
  rectype: number | null;

  @Column("smallint", { name: "EXPTYPE", nullable: true })
  exptype: number | null;

  @Column("smallint", { name: "MYDATAVPRC", nullable: true })
  mydatavprc: number | null;

  @Column("int", { name: "FUELCODE", nullable: true })
  fuelcode: number | null;

  @Column("varchar", { name: "ITEMDESCR", nullable: true, length: 255 })
  itemdescr: string | null;

  @Column("float", { name: "QUANTITY15", nullable: true, precision: 53 })
  quantity15: number | null;

  @Column("varchar", { name: "TARICNO", nullable: true, length: 25 })
  taricno: string | null;

  @Column("varchar", { name: "ITEMCODE", nullable: true, length: 25 })
  itemcode: string | null;

  @Column("int", { name: "OTHERMEASUREMENTUNITQUANTITY", nullable: true })
  othermeasurementunitquantity: number | null;

  @Column("varchar", {
    name: "OTHERMEASUREMENTUNITTITLE",
    nullable: true,
    length: 255,
  })
  othermeasurementunittitle: string | null;

  @Column("smallint", { name: "NOTVAT195", nullable: true })
  notvat195: number | null;

  @OneToMany(() => Mydataclass, (mydataclass) => mydataclass.mydatalines)
  mydataclasses: Mydataclass[];

  @ManyToOne(() => Mydataheader, (mydataheader) => mydataheader.mydatalines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MYDATAHEADERID", referencedColumnName: "id" }])
  mydataheader: Mydataheader;
}
