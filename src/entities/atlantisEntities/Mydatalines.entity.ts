import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATAHEADERID" })
  mydataheaderid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "QUANTITY", nullable: true, precision: 53 })
  quantity: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MEASUREMENTUNIT", nullable: true })
  measurementunit: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOICEDETAILTYPE", nullable: true })
  invoicedetailtype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATCATEGORY", nullable: true })
  vatcategory: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "NETVALUE", nullable: true, precision: 53 })
  netvalue: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATEXEMPTION", nullable: true })
  vatexemption: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "APPLICATIONID", nullable: true, length: 64 })
  applicationid: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "APPLICATIONDATE", nullable: true })
  applicationdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOY", nullable: true, length: 128 })
  doy: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHIPID", nullable: true, length: 128 })
  shipid: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DISCOUNTOPTION", nullable: true })
  discountoption: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LINECOMMENTS", nullable: true, length: 128 })
  linecomments: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "RECTYPE", nullable: true })
  rectype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXPTYPE", nullable: true })
  exptype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATAVPRC", nullable: true })
  mydatavprc: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FUELCODE", nullable: true })
  fuelcode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITEMDESCR", nullable: true, length: 255 })
  itemdescr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "QUANTITY15", nullable: true, precision: 53 })
  quantity15: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TARICNO", nullable: true, length: 25 })
  taricno: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITEMCODE", nullable: true, length: 25 })
  itemcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "OTHERMEASUREMENTUNITQUANTITY", nullable: true })
  othermeasurementunitquantity: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "OTHERMEASUREMENTUNITTITLE",
    nullable: true,
    length: 255,
  })
  othermeasurementunittitle: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "NOTVAT195", nullable: true })
  notvat195: number | null;

  @Field(() => [Mydataclass], { nullable: true })
  @OneToMany(() => Mydataclass, (mydataclass) => mydataclass.mydatalines)
  mydataclasses: Mydataclass[];

  @Field({ nullable: true })
  @ManyToOne(() => Mydataheader, (mydataheader) => mydataheader.mydatalines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MYDATAHEADERID", referencedColumnName: "id" }])
  mydataheader: Mydataheader;
}
